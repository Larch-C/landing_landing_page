import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useI18n } from '../lib/i18n'
import { getAssetPath } from '../lib/config'
import { useScrollReveal } from '../lib/useScrollReveal'

export default function ScrollShowcase() {
  const { t } = useI18n()
  const { elementRef, isVisible } = useScrollReveal()
  const [activeIndex, setActiveIndex] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  const steps = [
    { name: t('platforms.qq'), image: getAssetPath('/assets/qq_demo_1.png') },
    { name: t('platforms.wecom'), image: getAssetPath('/assets/wecom_demo_1.png') },
    { name: t('platforms.telegram'), image: getAssetPath('/assets/telegram_demo_1.png') },
    { name: t('platforms.discord'), image: getAssetPath('/assets/discord_demo_1.png') },
    { name: t('platforms.slack'), image: getAssetPath('/assets/slack_demo_1.png') }
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return
    const elements = stepRefs.current.filter(Boolean) as HTMLDivElement[]
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indexAttr = (entry.target as HTMLElement).getAttribute('data-index')
            const idx = indexAttr ? parseInt(indexAttr, 10) : 0
            setActiveIndex(idx)
          }
        })
      },
      {
        root: null,
        threshold: 0.6,
        rootMargin: '-10% 0px -40% 0px'
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section scroll-showcase" ref={elementRef as any}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'reveal-in' : 'reveal'}`}>{t('platforms.title')}</h2>
        <div className="showcase-grid">
          <div className={`sticky-visual ${isVisible ? 'reveal-in' : 'reveal'}`}>
            <div className="visual-frame">
              <Image
                key={steps[activeIndex].image}
                src={steps[activeIndex].image}
                alt={steps[activeIndex].name}
                width={720}
                height={480}
              />
            </div>
            <div className="visual-caption">{steps[activeIndex].name}</div>
          </div>

          <div className="scroll-steps">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => { stepRefs.current[index] = el }}
                data-index={index}
                className={`scroll-step ${index === activeIndex ? 'active' : ''} ${isVisible ? 'reveal-in' : 'reveal'}`}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="step-index">{index + 1}</div>
                <div className="step-content">
                  <h3>{step.name}</h3>
                  <p>{t('models.subtitle')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

