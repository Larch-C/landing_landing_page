import { useI18n } from '../lib/i18n'
import { useScrollReveal } from '../lib/useScrollReveal'

export default function FeaturesSection() {
  const { t } = useI18n()
  const { elementRef, isVisible } = useScrollReveal()

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
    <section id="use-cases" className="section" ref={elementRef as any}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'reveal-in' : 'reveal'}`}>{t('features.title')}</h2>
        <div className="use-cases-grid">
          {features.map((feature, index) => (
            <div key={index} className={`use-case-card ${isVisible ? 'reveal-in' : 'reveal'}`} style={{ transitionDelay: `${index * 80}ms` }}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}