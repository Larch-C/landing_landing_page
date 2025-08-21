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
    <section id="features" className="section">
      <div className="container">
        <h2 className="section-title text-center text-3xl font-bold text-[#e6eefc]">{t('platforms.title')}</h2>
        <div className="platform-tabs mx-auto">
          <div className="tabs-nav flex flex-wrap justify-center relative rounded-lg mb-8 bg-black/5 p-1.5">
            {platforms.map(platform => (
              <button
                key={platform.id}
                className={`tab-button ${activeTab === platform.id ? 'active' : ''} px-5 py-3 rounded-md font-medium text-[15px] text-[var(--light-text-color)] hover:text-[#6f92cb]`}
                data-platform={platform.id}
                onClick={() => setActiveTab(platform.id)}
              >
                {platform.name}
              </button>
            ))}
            <div className="tab-indicator absolute h-[calc(100%-10px)] bg-white rounded-md shadow transition-all" style={indicatorStyle}></div>
          </div>
          
          <div className="tabs-content relative overflow-hidden min-h-[400px]">
            {platforms.map(platform => (
              <div
                key={platform.id}
                className={`tab-pane ${activeTab === platform.id ? 'active' : ''} absolute w-full opacity-0 translate-x-5 transition-all pointer-events-none flex justify-center ${activeTab === platform.id ? 'relative opacity-100 translate-x-0 pointer-events-auto' : ''}`}
                id={`tab-${platform.id}`}
              >
                <div className="platform-image overflow-hidden transition max-w-full flex justify-center">
                  {platform.image ? (
                    <Image 
                      src={platform.image} 
                      alt={`${platform.name}平台演示`}
                      width={600}
                      height={400}
                    />
                  ) : (
                    <span>{platform.content}</span>
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