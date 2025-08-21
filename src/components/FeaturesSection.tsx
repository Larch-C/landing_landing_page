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
    <section id="use-cases" className="section">
      <div className="container">
        <h2 className="section-title text-center mb-10 text-3xl font-bold text-[#e6eefc]">{t('features.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-[var(--light-background)]/70 rounded-lg p-6 shadow-soft hover:-translate-y-1 transition">
              <h3 className="mb-3 text-[#b7c9e7] font-semibold">{feature.title}</h3>
              <p className="text-[var(--light-text-color)]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}