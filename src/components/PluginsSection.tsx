import { useI18n } from '../lib/i18n'

interface Plugin {
  desc: string
  author: string
  tags?: string[]
  stars: number
}

interface PluginsSectionProps {
  pluginsData: Record<string, Plugin>
}

export default function PluginsSection({ pluginsData }: PluginsSectionProps) {
  const { t } = useI18n()

  const pluginsList = Object.entries(pluginsData).slice(0, 50)

  return (
    <section className="section plugins-section">
      <div className="container">
        <h2 className="section-title text-center text-3xl font-bold text-[#e6eefc]">{t('plugins.title')}</h2>
        <p className="text-center mb-12 text-[var(--light-text-color)]">{t('plugins.subtitle')}</p>
      </div>
      
      <div className="plugins-container relative overflow-hidden h-[500px] w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] [mask-image:linear-gradient(to_bottom,_transparent_0%,_black_10%,_black_90%,_transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,_transparent_0%,_black_10%,_black_90%,_transparent_100%)]">
        <div className="plugins-grid grid [grid-template-columns:repeat(auto-fill,minmax(200px,200px))] absolute w-[150%] h-[200%] animate-movePluginsGrid will-change-transform justify-center">
          {pluginsList.map(([name, data]) => {
            const displayName = name.replace('astrbot_plugin_', '')
            const tags = data.tags || []
            
            return (
              <div key={name} className="plugin-item bg-white border border-[#f0f0f0] p-4 transition flex flex-col justify-between w-[200px] h-[180px] overflow-hidden hover:bg-[#f9f9f9] hover:z-10 hover:scale-[1.05] hover:shadow-md">
                <div>
                  <div className="plugin-header">
                    <div className="plugin-name font-semibold text-sm text-[var(--text-color)] truncate">{displayName}</div>
                  </div>
                  <div className="plugin-author text-xs text-[var(--light-text-color)] mb-2">{t('plugins.authorLabel')}: {data.author}</div>
                  <div className="plugin-desc text-[13px] leading-tight text-[var(--light-text-color)] overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] mb-3">{data.desc}</div>
                </div>
                <div>
                  <div className="plugin-tags flex flex-wrap gap-1 mt-auto">
                    {tags.map(tag => (
                      <span key={tag} className="plugin-tag text-[10px] bg-[rgba(49,68,115,0.1)] text-[#314473] px-1.5 py-[2px] rounded-[10px] whitespace-nowrap">{tag}</span>
                    ))}
                  </div>
                  <div className="plugin-stars flex items-center text-xs text-[#F9A825] mt-2">
                    <i className="fas fa-star mr-1"></i> {data.stars}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}