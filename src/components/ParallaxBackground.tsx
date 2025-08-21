import { useParallaxStyle } from '../lib/useParallax'
import { ReactNode } from 'react'

interface ParallaxBackgroundProps {
  speed?: number
  className?: string
  children?: ReactNode
}

export default function ParallaxBackground({ speed = 0.3, className = '', children }: ParallaxBackgroundProps) {
  const style = useParallaxStyle(speed)
  return (
    <div className={`parallax-layer ${className}`} style={style}>
      {children}
    </div>
  )
}

