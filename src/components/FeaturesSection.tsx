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
    <section id="use-cases" className="py-24 relative">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-primary-100 to-primary-200 bg-clip-text text-transparent mb-4">
            {t('features.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 rounded-2xl p-8 hover:border-primary-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}