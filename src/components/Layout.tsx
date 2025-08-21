import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen relative font-sans text-gray-100 bg-gradient-to-b from-sky-900 via-sky-800 to-sky-700">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}