import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

/**
 * Returns a style object that applies a vertical parallax transform based on window scroll.
 * Positive speed moves with the scroll (slower if < 1), negative speed moves opposite.
 */
export function useParallaxStyle(speed: number): CSSProperties {
  const [offsetY, setOffsetY] = useState<number>(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    let ticking = false

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      rafRef.current = window.requestAnimationFrame(() => {
        setOffsetY(window.scrollY * speed)
        ticking = false
      })
    }

    // Initialize on mount
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [speed])

  return {
    transform: `translate3d(0, ${offsetY}px, 0)`
  }
}

