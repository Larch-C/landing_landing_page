import { useEffect, useRef, useState } from 'react'

/**
 * Hook to reveal an element when it intersects the viewport.
 * Returns a ref to attach and a boolean indicating visibility.
 */
export function useScrollReveal(options?: IntersectionObserverInit) {
  const elementRef = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const target = elementRef.current
    if (!target) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      })
    }, { root: null, threshold: 0.15, ...options })

    observer.observe(target)
    return () => observer.disconnect()
  }, [options])

  return { elementRef, isVisible }
}

