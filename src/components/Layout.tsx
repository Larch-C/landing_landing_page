import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-steel-50 relative overflow-x-hidden">
      {/* Background pattern */}
      <div className="fixed inset-0 bg-pattern pointer-events-none" />
      
      {/* Floating background elements */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-gradient-to-br from-steel-200/30 to-steel-300/20 rounded-full blur-3xl floating pointer-events-none" />
      <div className="fixed top-96 right-20 w-96 h-96 bg-gradient-to-br from-steel-300/20 to-steel-400/10 rounded-full blur-3xl floating pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="fixed bottom-20 left-1/3 w-64 h-64 bg-gradient-to-br from-steel-400/20 to-steel-500/10 rounded-full blur-3xl floating pointer-events-none" style={{ animationDelay: '4s' }} />
      
      <Header />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  )
}