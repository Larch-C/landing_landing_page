import { ReactNode } from 'react'
import Header from './Header'
import ParallaxBackground from './ParallaxBackground'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen relative font-sans text-gray-100 bg-gradient-to-b from-sky-800 via-sky-700 to-sky-600">
      <ParallaxBackground />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}