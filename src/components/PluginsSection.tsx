import { useI18n } from '../lib/i18n'
import { useScrollTrigger, useStaggeredAnimation } from '../lib/useScrollEffects'

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
  const [titleRef, titleInView] = useScrollTrigger({ threshold: 0.3 })
  const [gridRef, visibleItems] = useStaggeredAnimation(100)

  const pluginsList = Object.entries(pluginsData).slice(0, 12) // Show fewer for better performance

  const getTagColor = (tag: string) => {
    const colors = [
      'from-blue-500 to-blue-600',
      'from-green-500 to-green-600',
      'from-purple-500 to-purple-600',
      'from-red-500 to-red-600',
      'from-yellow-500 to-yellow-600',
      'from-indigo-500 to-indigo-600',
      'from-pink-500 to-pink-600',
      'from-teal-500 to-teal-600',
    ]
    return colors[tag.length % colors.length]
  }

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-white via-steel-50/30 to-slate-100/50">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-steel-200/20 to-steel-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-steel-300/15 to-steel-400/5 rounded-full blur-3xl" />
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
            {t('plugins.title')}
          </h2>
          <p className="text-xl text-steel-600 max-w-3xl mx-auto">
            {t('plugins.subtitle')}
          </p>
        </div>
        
        {/* Plugins Grid */}
        <div 
          ref={gridRef as any}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {pluginsList.map(([name, data], index) => {
            const displayName = name.replace('astrbot_plugin_', '')
            const tags = data.tags || []
            
            return (
              <div
                key={name}
                className={`card group h-full flex flex-col transition-all duration-700 ${
                  visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Plugin Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-steel-500 to-steel-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-puzzle-piece text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-steel-800 group-hover:text-steel-600 transition-colors duration-300">
                        {displayName}
                      </h3>
                      <p className="text-sm text-steel-500">
                        作者: {data.author}
                      </p>
                    </div>
                  </div>
                  
                  {/* Stars */}
                  <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-100 to-orange-100 px-3 py-1 rounded-full">
                    <i className="fas fa-star text-yellow-500 text-sm" />
                    <span className="text-sm font-medium text-yellow-700">{data.stars}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-steel-600 leading-relaxed mb-6 flex-grow group-hover:text-steel-700 transition-colors duration-300">
                  {data.desc}
                </p>

                {/* Tags */}
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 3).map(tag => (
                      <span 
                        key={tag} 
                        className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTagColor(tag)} shadow-sm`}
                      >
                        {tag}
                      </span>
                    ))}
                    {tags.length > 3 && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium text-steel-600 bg-steel-100">
                        +{tags.length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-steel-50/50 to-steel-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            )
          })}
        </div>

        {/* View More Section */}
        <div className={`text-center transition-all duration-700 delay-500 ${
          visibleItems.size > 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex flex-col items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-steel-200/50 shadow-lg">
            <div className="flex items-center gap-3">
              <i className="fas fa-puzzle-piece text-steel-500 text-2xl" />
              <span className="text-steel-600 font-medium">插件生态</span>
            </div>
            <div className="text-4xl font-bold gradient-text">{Object.keys(pluginsData).length}+</div>
            <p className="text-steel-600">个插件等你探索</p>
            
            <a
              href="https://plugins.astrbot.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group mt-4"
            >
              <span>浏览所有插件</span>
              <i className="fas fa-external-link-alt ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}