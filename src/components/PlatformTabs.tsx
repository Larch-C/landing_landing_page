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
    <section id="features" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-text text-center mb-12">{t('platforms.title')}</h2>
        <div>
          <div className="relative flex flex-wrap gap-2 justify-center border-b border-border mb-8">
            {platforms.map(platform => (
              <button
                key={platform.id}
                className={`px-4 py-2 text-sm md:text-base font-medium relative ${activeTab === platform.id ? 'text-primary' : 'text-text hover:text-primary'}`}
                data-platform={platform.id}
                onClick={() => setActiveTab(platform.id)}
              >
                {platform.name}
              </button>
            ))}
            <div className="absolute bottom-0 h-0.5 bg-primary transition-all duration-300" style={indicatorStyle as any}></div>
          </div>
          
          <div className="mt-6">
            {platforms.map(platform => (
              <div
                key={platform.id}
                className={`${activeTab === platform.id ? 'block' : 'hidden'}`}
                id={`tab-${platform.id}`}
              >
                <div className="flex justify-center">
                  {platform.image ? (
                    <Image 
                      src={platform.image} 
                      alt={`${platform.name}平台演示`}
                      width={600}
                      height={400}
                    />
                  ) : (
                    <span className="text-lightText">{platform.content}</span>
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