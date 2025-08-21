import { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { useI18n } from '../lib/i18n'

interface ScrollSection {
  id: string
  title: string
  content: string
  icon: string
  gradient: string
}

export default function ScrollTriggeredSections() {
  const { t } = useI18n()
  const [activeSection, setActiveSection] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  const sections: ScrollSection[] = [
    {
      id: 'intelligent',
      title: t('scrollSections.intelligent.title') || '智能对话',
      content: t('scrollSections.intelligent.content') || '基于先进的AI模型，提供自然流畅的对话体验，支持多轮对话和上下文理解。',
      icon: '🤖',
      gradient: 'from-primary-600 to-steel-600'
    },
    {
      id: 'multiplatform',
      title: t('scrollSections.multiplatform.title') || '多平台支持',
      content: t('scrollSections.multiplatform.content') || '支持QQ、微信、Telegram、Discord等多个平台，一次部署，多平台使用。',
      icon: '🌐',
      gradient: 'from-steel-500 to-primary-700'
    },
    {
      id: 'plugins',
      title: t('scrollSections.plugins.title') || '丰富插件',
      content: t('scrollSections.plugins.content') || '拥有丰富的插件生态系统，支持自定义功能扩展，满足不同场景需求。',
      icon: '🔌',
      gradient: 'from-primary-700 to-steel-700'
    },
    {
      id: 'opensource',
      title: t('scrollSections.opensource.title') || '开源免费',
      content: t('scrollSections.opensource.content') || '完全开源，社区驱动，持续更新，让每个人都能拥有自己的AI助手。',
      icon: '💎',
      gradient: 'from-steel-600 to-primary-800'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollTop / docHeight
      setScrollProgress(progress)
      
      // Calculate which section should be active based on scroll position
      const sectionIndex = Math.floor(progress * sections.length)
      setActiveSection(Math.min(sectionIndex, sections.length - 1))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections.length])

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Progress indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-steel-800/50 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary-500 to-steel-400 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-steel-200 to-primary-300 bg-clip-text text-transparent mb-6">
            {t('scrollSections.title') || '核心特性'}
          </h2>
          <p className="text-xl text-steel-300 max-w-2xl mx-auto">
            {t('scrollSections.subtitle') || '探索AstrBot的强大功能，感受现代化AI助手的魅力'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content side */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <ScrollSection
                key={section.id}
                section={section}
                isActive={activeSection === index}
                index={index}
              />
            ))}
          </div>

          {/* Visual side */}
          <div className="relative">
            <div className="sticky top-32">
              <div className={`relative w-full h-96 rounded-3xl bg-gradient-to-br ${sections[activeSection]?.gradient} p-1 shadow-2xl transition-all duration-700 ease-out`}>
                <div className="w-full h-full bg-steel-900/90 rounded-3xl backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="text-8xl animate-float">
                      {sections[activeSection]?.icon}
                    </div>
                    <div className="text-2xl font-bold text-steel-100">
                      {sections[activeSection]?.title}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-steel-400/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ScrollSectionProps {
  section: ScrollSection
  isActive: boolean
  index: number
}

function ScrollSection({ section, isActive, index }: ScrollSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  })

  return (
    <div 
      ref={ref}
      className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 ${
        isActive 
          ? 'bg-steel-800/40 border-primary-500/50 shadow-glow scale-105' 
          : 'bg-steel-900/20 border-steel-700/30 hover:bg-steel-800/30'
      } ${inView ? 'animate-slideInUp' : 'opacity-50'}`}
    >
      <div className="flex items-start space-x-4">
        <div className={`text-4xl transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>
          {section.icon}
        </div>
        <div className="flex-1">
          <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
            isActive ? 'text-primary-300' : 'text-steel-200'
          }`}>
            {section.title}
          </h3>
          <p className="text-steel-300 leading-relaxed">
            {section.content}
          </p>
        </div>
      </div>
      
      {/* Active indicator */}
      {isActive && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 to-steel-400 rounded-r" />
      )}
    </div>
  )
}