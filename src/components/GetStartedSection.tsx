import { useI18n } from '../lib/i18n'
import { useScrollTrigger, useParallax } from '../lib/useScrollEffects'
import Link from 'next/link'

export default function GetStartedSection() {
  const { t } = useI18n()
  const [sectionRef, sectionInView] = useScrollTrigger({ threshold: 0.3 })
  const [parallaxRef, parallaxOffset] = useParallax(0.2)

  return (
    <section 
      ref={parallaxRef as any}
      id="get-started" 
      className="section-padding relative overflow-hidden bg-gradient-to-br from-steel-600 via-steel-700 to-steel-800"
    >
      {/* Parallax background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-steel-400/20 to-steel-300/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            transform: `translateY(${parallaxOffset * 0.1}px)`,
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div 
          ref={sectionRef as any}
          className={`text-center transition-all duration-1000 ${
            sectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Main title */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 text-shadow-lg">
            {t('getStarted.title')}
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-steel-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('getStarted.subtitle')}
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="https://docs.astrbot.app" 
              className="group relative inline-flex items-center gap-3 bg-white text-steel-700 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              target="_blank"
            >
              <span className="relative z-10">{t('getStarted.docsButton')}</span>
              <i className="fas fa-rocket relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-steel-100 to-steel-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
            
            <Link 
              href="https://github.com/AstrBotDevs/AstrBot" 
              className="group flex items-center gap-3 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              target="_blank"
            >
              <i className="fab fa-github text-xl group-hover:rotate-12 transition-transform duration-300" />
              <span>查看源码</span>
            </Link>
          </div>

          {/* Features highlight */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-bolt text-2xl text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">快速部署</h3>
              <p className="text-steel-200 text-sm">一键安装，快速上手</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-puzzle-piece text-2xl text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">丰富插件</h3>
              <p className="text-steel-200 text-sm">50+ 插件生态</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-users text-2xl text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">活跃社区</h3>
              <p className="text-steel-200 text-sm">开发者友好支持</p>
            </div>
          </div>

          {/* Scroll indicator for next section */}
          <div className="mt-20">
            <div className="inline-flex items-center gap-2 text-steel-200 text-sm animate-pulse">
              <span>继续了解更多</span>
              <i className="fas fa-chevron-down animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}