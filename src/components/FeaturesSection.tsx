import { useI18n } from '../lib/i18n'
import { useStaggeredAnimation, useScrollTrigger } from '../lib/useScrollEffects'

export default function FeaturesSection() {
  const { t } = useI18n()
  const [titleRef, titleInView] = useScrollTrigger({ threshold: 0.3 })
  const [gridRef, visibleItems] = useStaggeredAnimation(150)

  const features = [
    {
      title: t('features.knowledge.title'),
      description: t('features.knowledge.desc'),
      icon: 'fas fa-brain',
      gradient: 'from-steel-500 to-steel-600'
    },
    {
      title: t('features.codeExecutor.title'),
      description: t('features.codeExecutor.desc'),
      icon: 'fas fa-code',
      gradient: 'from-steel-600 to-steel-700'
    },
    {
      title: t('features.webSearch.title'),
      description: t('features.webSearch.desc'),
      icon: 'fas fa-search',
      gradient: 'from-steel-400 to-steel-500'
    },
    {
      title: t('features.memory.title'),
      description: t('features.memory.desc'),
      icon: 'fas fa-memory',
      gradient: 'from-steel-700 to-steel-800'
    }
  ]

  return (
    <section id="use-cases" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-steel-200/20 to-steel-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-br from-steel-300/20 to-steel-400/10 rounded-full blur-3xl" />
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
            {t('features.title')}
          </h2>
          <p className="text-xl text-steel-600 max-w-3xl mx-auto">
            {t('features.subtitle') || '强大的功能，让您的机器人更加智能'}
          </p>
        </div>

        {/* Features Grid */}
        <div 
          ref={gridRef as any}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`card group cursor-pointer transition-all duration-700 ${
                visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Feature Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <i className={`${feature.icon} text-2xl text-white`} />
              </div>

              {/* Feature Content */}
              <h3 className="text-xl font-bold text-steel-800 mb-4 group-hover:text-steel-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-steel-600 leading-relaxed group-hover:text-steel-700 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-steel-50/50 to-steel-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-700 delay-1000 ${
          visibleItems.size > 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 text-steel-600 font-medium">
            <span>探索更多功能</span>
            <i className="fas fa-arrow-right animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}