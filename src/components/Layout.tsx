import { ReactNode } from 'react'
import Header from './Header'
import ParallaxBackground from './ParallaxBackground'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen relative">
      <ParallaxBackground />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}