import { useEffect, useRef } from 'react'

export default function ParallaxBackground() {
  const starsRef = useRef<HTMLDivElement | null>(null)
  const stars2Ref = useRef<HTMLDivElement | null>(null)
  const stars3Ref = useRef<HTMLDivElement | null>(null)
  const gradientRef = useRef<HTMLDivElement | null>(null)
  const geometryRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (ticking) return
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY
        const windowHeight = window.innerHeight
        
        // Enhanced parallax factors with different speeds for depth
        const layer1Offset = scrollY * 0.05  // Slowest - far background
        const layer2Offset = scrollY * 0.15  // Medium - middle layer
        const layer3Offset = scrollY * 0.25  // Fast - near layer
        const gradientOffset = scrollY * 0.1  // Gradient movement
        const geometryOffset = scrollY * 0.3  // Geometric shapes

        // Apply transforms with rotation for more dynamic effect
        if (starsRef.current) {
          starsRef.current.style.transform = `translateY(${layer1Offset}px) rotate(${scrollY * 0.01}deg)`
        }
        if (stars2Ref.current) {
          stars2Ref.current.style.transform = `translateY(${layer2Offset}px) rotate(${-scrollY * 0.005}deg)`
        }
        if (stars3Ref.current) {
          stars3Ref.current.style.transform = `translateY(${layer3Offset}px)`
        }
        if (gradientRef.current) {
          gradientRef.current.style.transform = `translateY(${gradientOffset}px) scale(${1 + scrollY * 0.0001})`
        }
        if (geometryRef.current) {
          geometryRef.current.style.transform = `translateY(${geometryOffset}px) rotate(${scrollY * 0.02}deg)`
        }
        
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
      {/* Dynamic gradient background */}
      <div 
        ref={gradientRef}
        className="absolute inset-0 bg-gradient-to-br from-steel-900 via-primary-900 to-steel-950 opacity-90"
      />
      
      {/* Geometric shapes for modern feel */}
      <div 
        ref={geometryRef}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-steel-400/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary-600/30 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Star layers with enhanced effects */}
      <div ref={starsRef} className="stars" />
      <div ref={stars2Ref} className="stars2" />
      <div ref={stars3Ref} className="stars3" />
    </div>
  )
}

