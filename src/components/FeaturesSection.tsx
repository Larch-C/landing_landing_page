import { useI18n } from '../lib/i18n'

export default function FeaturesSection() {
  const { t } = useI18n()

  const features = [
    {
      title: t('features.knowledge.title'),
      description: t('features.knowledge.desc')
    },
    {
      title: t('features.codeExecutor.title'),
      description: t('features.codeExecutor.desc')
    },
    {
      title: t('features.webSearch.title'),
      description: t('features.webSearch.desc')
    },
    {
      title: t('features.memory.title'),
      description: t('features.memory.desc')
    }
  ]

  return (
    <section id="use-cases" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-steel-100 to-primary-200 bg-clip-text text-transparent mb-6">
            {t('features.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-steel-400 mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-steel-800/40 to-steel-900/60 backdrop-blur-sm border border-steel-600/30 hover:border-primary-500/50 shadow-steel hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <h3 className="mb-4 text-xl font-bold text-steel-100 group-hover:text-primary-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-steel-300 leading-relaxed group-hover:text-steel-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-steel-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}