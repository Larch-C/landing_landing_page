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
    <section id="use-cases" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-text text-center mb-12">{t('features.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="rounded-xl border border-border p-6 shadow-soft hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2 text-text">{feature.title}</h3>
              <p className="text-lightText text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}