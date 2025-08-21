import { useEffect, useRef } from 'react'

export default function ParallaxBackground() {
  const starsRef = useRef<HTMLDivElement | null>(null)
  const stars2Ref = useRef<HTMLDivElement | null>(null)
  const stars3Ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (ticking) return
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY
        // Parallax factors: farther layers move slower
        const layer1Offset = scrollY * 0.1
        const layer2Offset = scrollY * 0.2
        const layer3Offset = scrollY * 0.35

        if (starsRef.current) starsRef.current.style.transform = `translateY(${layer1Offset}px)`
        if (stars2Ref.current) stars2Ref.current.style.transform = `translateY(${layer2Offset}px)`
        if (stars3Ref.current) stars3Ref.current.style.transform = `translateY(${layer3Offset}px)`
        ticking = false
      })
      ticking = true
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="starfield">
      <div ref={starsRef} className="stars" />
      <div ref={stars2Ref} className="stars2" />
      <div ref={stars3Ref} className="stars3" />
    </div>
  )
}

