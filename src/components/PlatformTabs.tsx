import { useState, useEffect } from 'react'
import { useI18n } from '../lib/i18n'
import { getAssetPath } from '../lib/config'
import Image from 'next/image'

export default function PlatformTabs() {
  const { t } = useI18n()
  const [activeTab, setActiveTab] = useState('qq')
  const [indicatorStyle, setIndicatorStyle] = useState({})

  const platforms = [
    { id: 'qq', name: t('platforms.qq'), image: getAssetPath('/assets/qq_demo_1.png') },
    { id: 'wxkefu', name: t('platforms.wxkefu'), image: getAssetPath('/assets/wxkefu_demo_1.png') },
    { id: 'wecom', name: t('platforms.wecom'), image: getAssetPath('/assets/wecom_demo_1.png') },
    { id: 'wxoa', name: t('platforms.wxoa'), image: getAssetPath('/assets/wxoa_demo_1.png') },
    { id: 'lark', name: t('platforms.lark'), image: getAssetPath('/assets/lark_demo_1.png') },
    { id: 'dingtalk', name: t('platforms.dingtalk'), image: getAssetPath('/assets/dingtalk_demo_1.png') },
    { id: 'telegram', name: t('platforms.telegram'), image: getAssetPath('/assets/telegram_demo_1.png') },
    { id: 'slack', name: t('platforms.slack'), image: getAssetPath('/assets/slack_demo_1.png') },
    { id: 'discord', name: t('platforms.discord'), image: getAssetPath('/assets/discord_demo_1.png') },
    { id: 'kook', name: t('platforms.kook'), image: getAssetPath('/assets/kook_demo_1.png') },
    { id: 'vocechat', name: t('platforms.vocechat'), content: 'AstrBot 支持接入 VoceChat。' }
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

    updateIndicator()
    window.addEventListener('resize', updateIndicator)
    
    return () => window.removeEventListener('resize', updateIndicator)
  }, [activeTab])

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-steel-100 to-primary-200 bg-clip-text text-transparent mb-6">
            {t('platforms.title')}
          </h2>
          <p className="text-xl text-steel-300 max-w-3xl mx-auto mb-8">
            {t('platforms.subtitle') || '支持多个主流平台，一次部署，多平台使用'}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-steel-400 mx-auto rounded-full" />
        </div>
        
        <div className="platform-tabs max-w-7xl mx-auto">
          <div className="tabs-nav flex flex-wrap justify-center relative rounded-2xl mb-12 bg-steel-900/60 backdrop-blur-sm border border-steel-700/50 p-2">
            <div 
              className="absolute bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl transition-all duration-300 ease-out shadow-glow"
              style={indicatorStyle}
            />
            {platforms.map(platform => (
              <button
                key={platform.id}
                className={`relative z-10 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === platform.id 
                    ? 'text-white' 
                    : 'text-steel-300 hover:text-steel-100'
                }`}
                data-platform={platform.id}
                onClick={() => setActiveTab(platform.id)}
              >
                {platform.name}
              </button>
            ))}
          </div>
          
          <div className="tabs-content relative overflow-hidden min-h-[500px] bg-steel-900/20 backdrop-blur-sm rounded-2xl border border-steel-700/30 p-8">
            {platforms.map(platform => (
              <div
                key={platform.id}
                className={`tab-pane absolute inset-8 transition-all duration-500 ${
                  activeTab === platform.id 
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
                id={`tab-${platform.id}`}
              >
                <div className="platform-image overflow-hidden rounded-xl shadow-steel flex justify-center">
                  {platform.image ? (
                    <Image 
                      src={platform.image} 
                      alt={`${platform.name}${' '}${t('platforms.demoAlt')}`}
                      width={700}
                      height={450}
                      className="rounded-xl shadow-2xl border border-steel-600/30 hover:scale-[1.02] transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-64 text-steel-300 text-lg">
                      {platform.content}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}