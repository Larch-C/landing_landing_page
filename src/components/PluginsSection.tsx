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
    <section className="py-20 bg-lightBackground/40">
      <div className="container">
        <h2 className="text-3xl font-bold text-text text-center mb-4">{t('plugins.title')}</h2>
        <p className="text-center mb-12 text-lightText">
          {t('plugins.subtitle')}
        </p>
      </div>
      
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {pluginsList.map(([name, data]) => {
            const displayName = name.replace('astrbot_plugin_', '')
            const tags = data.tags || []
            
            return (
              <div key={name} className="flex justify-between items-start p-4 rounded-xl border border-border bg-white hover:shadow-soft transition">
                <div>
                  <div className="text-base font-semibold text-text">{displayName}</div>
                  <div className="text-sm text-lightText">作者: {data.author}</div>
                  <div className="text-sm text-lightText mt-1">{data.desc}</div>
                </div>
                <div className="text-right min-w-[96px]">
                  <div className="flex flex-wrap gap-2 justify-end mb-2">
                    {tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-lightBackground text-text">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-lightText flex items-center gap-1 justify-end">
                    <i className="fas fa-star"></i> {data.stars}
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