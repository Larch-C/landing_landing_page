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
        <h2 className="section-title">{t('plugins.title')}</h2>
        <p style={{ 
          textAlign: 'center', 
          marginBottom: '48px', 
          color: 'var(--light-text-color)' 
        }}>
          {t('plugins.subtitle')}
        </p>
      </div>
      
      <div className="plugins-container">
        <div className="plugins-grid">
          {pluginsList.map(([name, data]) => {
            const displayName = name.replace('astrbot_plugin_', '')
            const tags = data.tags || []
            
            return (
              <div key={name} className="plugin-item">
                <div>
                  <div className="plugin-header">
                    <div className="plugin-name">{displayName}</div>
                  </div>
                  <div className="plugin-author">作者: {data.author}</div>
                  <div className="plugin-desc">{data.desc}</div>
                </div>
                <div>
                  <div className="plugin-tags">
                    {tags.map(tag => (
                      <span key={tag} className="plugin-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="plugin-stars">
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