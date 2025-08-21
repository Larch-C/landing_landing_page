import { useState, useEffect } from 'react'
import { useI18n } from '../lib/i18n'
import Image from 'next/image'

export default function PlatformTabs() {
  const { t } = useI18n()
  const [activeTab, setActiveTab] = useState('qq')
  const [indicatorStyle, setIndicatorStyle] = useState({})

  const platforms = [
    { id: 'qq', name: t('platforms.qq'), image: '/assets/qq_demo_1.png' },
    { id: 'wxkefu', name: t('platforms.wxkefu'), image: '/assets/wxkefu_demo_1.png' },
    { id: 'wecom', name: t('platforms.wecom'), image: '/assets/wecom_demo_1.png' },
    { id: 'wxoa', name: t('platforms.wxoa'), image: '/assets/wxoa_demo_1.png' },
    { id: 'lark', name: t('platforms.lark'), image: '/assets/lark_demo_1.png' },
    { id: 'dingtalk', name: t('platforms.dingtalk'), image: '/assets/dingtalk_demo_1.png' },
    { id: 'telegram', name: t('platforms.telegram'), image: '/assets/telegram_demo_1.png' },
    { id: 'slack', name: t('platforms.slack'), image: '/assets/slack_demo_1.png' },
    { id: 'discord', name: t('platforms.discord'), image: '/assets/discord_demo_1.png' },
    { id: 'kook', name: t('platforms.kook'), image: '/assets/kook_demo_1.png' },
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
        <h2 className="section-title">{t('platforms.title')}</h2>
        <div className="platform-tabs">
          <div className="tabs-nav">
            {platforms.map(platform => (
              <button
                key={platform.id}
                className={`tab-button ${activeTab === platform.id ? 'active' : ''}`}
                data-platform={platform.id}
                onClick={() => setActiveTab(platform.id)}
              >
                {platform.name}
              </button>
            ))}
            <div className="tab-indicator" style={indicatorStyle}></div>
          </div>
          
          <div className="tabs-content">
            {platforms.map(platform => (
              <div
                key={platform.id}
                className={`tab-pane ${activeTab === platform.id ? 'active' : ''}`}
                id={`tab-${platform.id}`}
              >
                <div className="platform-image">
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