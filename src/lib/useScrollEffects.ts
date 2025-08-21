import { useEffect, useRef, useState, useCallback } from 'react'

interface ScrollTriggerOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollTrigger(options: ScrollTriggerOptions = {}) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLElement>(null)

  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce])

  return [ref, isInView] as const
}

export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0)
  const ref = useRef<HTMLElement>(null)
  const rafId = useRef<number>()

  useEffect(() => {
    const handleScroll = () => {
      // Cancel previous animation frame
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }

      rafId.current = requestAnimationFrame(() => {
        const element = ref.current
        if (!element) return

        const rect = element.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const rate = scrolled * -speed

        // Only update if element is visible
        if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
          setOffset(rate)
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [speed])

  return [ref, offset] as const
}

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollPosition
}

export function useMouseParallax(strength: number = 0.05) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const element = ref.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength

      setPosition({ x: deltaX, y: deltaY })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [strength])

  return [ref, position] as const
}

export function useSmoothScroll() {
  const scrollTo = useCallback((elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [])

  return scrollTo
}

// Custom hook for staggered animations
export function useStaggeredAnimation(delay: number = 100) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const [ref, isInView] = useScrollTrigger({ threshold: 0.2 })

  useEffect(() => {
    if (isInView) {
      const items = ref.current?.children
      if (items) {
        Array.from(items).forEach((_, index) => {
          setTimeout(() => {
            setVisibleItems(prev => {
              const newSet = new Set(prev)
              newSet.add(index)
              return newSet
            })
          }, index * delay)
        })
      }
    }
  }, [isInView, delay])

  return [ref, visibleItems] as const
}