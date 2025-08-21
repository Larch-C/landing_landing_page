import { useEffect, useRef } from 'react'

export default function ParallaxBackground() {
  const starsRef = useRef<HTMLDivElement | null>(null)
  const stars2Ref = useRef<HTMLDivElement | null>(null)
  const stars3Ref = useRef<HTMLDivElement | null>(null)
  const flakesRef = useRef<HTMLDivElement | null>(null)
  const orbsRef = useRef<HTMLDivElement | null>(null)

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
        const flakesOffset = scrollY * 0.25
        const orbsOffset = scrollY * 0.08

        if (starsRef.current) starsRef.current.style.transform = `translateY(${layer1Offset}px)`
        if (stars2Ref.current) stars2Ref.current.style.transform = `translateY(${layer2Offset}px)`
        if (stars3Ref.current) stars3Ref.current.style.transform = `translateY(${layer3Offset}px)`
        if (flakesRef.current) flakesRef.current.style.transform = `translateY(${flakesOffset}px)`
        if (orbsRef.current) orbsRef.current.style.transform = `translateY(${orbsOffset}px)`
        ticking = false
      })
      ticking = true
    }

    // Kick initial transforms after mount and when resizing (ensures visibility)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div className="starfield">
      <div ref={orbsRef} className="parallax-orbs" />
      <div ref={starsRef} className="stars" />
      <div ref={stars2Ref} className="stars2" />
      <div ref={stars3Ref} className="stars3" />
      <div ref={flakesRef} className="snowflakes" />
    </div>
  )
}

