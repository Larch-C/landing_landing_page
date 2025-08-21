import { useState, useEffect } from 'react'
import { useI18n } from '../lib/i18n'
import { getAssetPath } from '../lib/config'
import { useScrollTrigger, useParallax } from '../lib/useScrollEffects'
import Image from 'next/image'

export default function PlatformTabs() {
  const { t } = useI18n()
  const [activeTab, setActiveTab] = useState('qq')
  const [indicatorStyle, setIndicatorStyle] = useState({})
  
  const [titleRef, titleInView] = useScrollTrigger({ threshold: 0.3 })
  const [tabsRef, tabsInView] = useScrollTrigger({ threshold: 0.2 })
  const [parallaxRef, parallaxOffset] = useParallax(0.3)

  const platforms = [
    { id: 'qq', name: t('platforms.qq'), image: getAssetPath('/assets/qq_demo_1.png'), color: 'from-blue-500 to-blue-600' },
    { id: 'wxkefu', name: t('platforms.wxkefu'), image: getAssetPath('/assets/wxkefu_demo_1.png'), color: 'from-green-500 to-green-600' },
    { id: 'wecom', name: t('platforms.wecom'), image: getAssetPath('/assets/wecom_demo_1.png'), color: 'from-emerald-500 to-emerald-600' },
    { id: 'wxoa', name: t('platforms.wxoa'), image: getAssetPath('/assets/wxoa_demo_1.png'), color: 'from-teal-500 to-teal-600' },
    { id: 'lark', name: t('platforms.lark'), image: getAssetPath('/assets/lark_demo_1.png'), color: 'from-cyan-500 to-cyan-600' },
    { id: 'dingtalk', name: t('platforms.dingtalk'), image: getAssetPath('/assets/dingtalk_demo_1.png'), color: 'from-sky-500 to-sky-600' },
    { id: 'telegram', name: t('platforms.telegram'), image: getAssetPath('/assets/telegram_demo_1.png'), color: 'from-indigo-500 to-indigo-600' },
    { id: 'slack', name: t('platforms.slack'), image: getAssetPath('/assets/slack_demo_1.png'), color: 'from-purple-500 to-purple-600' },
    { id: 'discord', name: t('platforms.discord'), image: getAssetPath('/assets/discord_demo_1.png'), color: 'from-violet-500 to-violet-600' },
    { id: 'kook', name: t('platforms.kook'), image: getAssetPath('/assets/kook_demo_1.png'), color: 'from-steel-500 to-steel-600' },
    { id: 'vocechat', name: t('platforms.vocechat'), content: 'AstrBot 支持接入 VoceChat。', color: 'from-slate-500 to-slate-600' }
  ]

  useEffect(() => {
    const updateIndicator = () => {
      const activeButton = document.querySelector(`[data-platform="${activeTab}"]`) as HTMLElement
      if (activeButton) {
        setIndicatorStyle({
          left: `${activeButton.offsetLeft}px`,
          width: `${activeButton.offsetWidth}px`
        })
      }
    }

    setTimeout(updateIndicator, 100) // Delay to ensure DOM is ready
    window.addEventListener('resize', updateIndicator)
    
    return () => window.removeEventListener('resize', updateIndicator)
  }, [activeTab, tabsInView])

  return (
    <section 
      ref={parallaxRef as any}
      id="features" 
      className="section-padding relative overflow-hidden bg-gradient-to-br from-white via-steel-50/30 to-slate-100/50"
    >
      {/* Parallax background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 right-1/4 w-80 h-80 bg-gradient-to-br from-steel-300/20 to-steel-400/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
        />
        <div 
          className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-br from-steel-400/15 to-steel-500/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset * 0.4}px)` }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Title */}
        <div 
          ref={titleRef as any}
          className={`text-center mb-16 transition-all duration-700 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6 text-shadow">
            {t('platforms.title')}
          </h2>
          <p className="text-xl text-steel-600 max-w-3xl mx-auto">
            {t('platforms.subtitle') || '支持多个平台，让您的机器人无处不在'}
          </p>
        </div>

        {/* Platform Tabs */}
        <div 
          ref={tabsRef as any}
          className={`transition-all duration-700 delay-300 ${
            tabsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Tabs Navigation */}
          <div className="relative mb-12">
            <div className="flex flex-wrap justify-center gap-2 lg:gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-steel-200/50 shadow-lg">
              {platforms.map((platform, index) => (
                <button
                  key={platform.id}
                  className={`relative px-4 lg:px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === platform.id
                      ? 'text-white shadow-lg transform scale-105'
                      : 'text-steel-600 hover:text-steel-800 hover:bg-steel-50'
                  }`}
                  data-platform={platform.id}
                  onClick={() => setActiveTab(platform.id)}
                  style={{
                    background: activeTab === platform.id 
                      ? `linear-gradient(135deg, ${platform.color.split(' ')[1]}, ${platform.color.split(' ')[3]})`
                      : 'transparent'
                  }}
                >
                  {platform.name}
                  {activeTab === platform.id && (
                    <div className="absolute inset-0 bg-white/20 rounded-xl pointer-events-none" />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tabs Content */}
          <div className="relative">
            {platforms.map((platform, index) => (
              <div
                key={platform.id}
                className={`transition-all duration-500 ${
                  activeTab === platform.id 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-4 scale-95 absolute inset-0 pointer-events-none'
                }`}
              >
                <div className="flex justify-center">
                  {platform.image ? (
                    <div className="relative group">
                      {/* Image glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-steel-400/20 to-steel-600/20 rounded-2xl blur-2xl transform scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Main image container */}
                      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-steel-200/50 shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-2">
                        <Image 
                          src={platform.image} 
                          alt={`${platform.name}平台演示`}
                          width={700}
                          height={450}
                          className="rounded-xl shadow-lg w-full h-auto"
                        />
                        
                        {/* Platform badge */}
                        <div className="absolute -top-2 -left-2 px-4 py-2 bg-gradient-to-r from-steel-600 to-steel-700 text-white rounded-xl shadow-lg font-medium">
                          {platform.name}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="card max-w-md mx-auto text-center p-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-steel-500 to-steel-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-comments text-3xl text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-steel-800 mb-4">{platform.name}</h3>
                      <p className="text-steel-600 text-lg">{platform.content}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform count indicator */}
        <div className={`text-center mt-16 transition-all duration-700 delay-700 ${
          tabsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 border border-steel-200/50 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-steel-500 to-steel-600 rounded-full animate-pulse" />
              <span className="text-steel-600 font-medium">支持平台</span>
            </div>
            <div className="text-3xl font-bold gradient-text">{platforms.length}</div>
            <span className="text-steel-500">个</span>
          </div>
        </div>
      </div>
    </section>
  )
}