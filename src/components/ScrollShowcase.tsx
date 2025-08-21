import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { getAssetPath } from '../lib/config'
import { useI18n } from '../lib/i18n'

export default function ScrollShowcase() {
  const { t } = useI18n()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const sections = [
    {
      title: t('platforms.title'),
      desc: t('platforms.qq'),
      image: getAssetPath('/assets/qq_demo_1.png'),
    },
    {
      title: t('plugins.title'),
      desc: t('plugins.subtitle'),
      image: getAssetPath('/assets/wxkefu_demo_1.png'),
    },
    {
      title: t('community.title'),
      desc: t('community.subtitle'),
      image: getAssetPath('/assets/wecom_demo_1.png'),
    },
    {
      title: t('getStarted.title'),
      desc: t('getStarted.subtitle'),
      image: getAssetPath('/assets/webui-1.png'),
    },
  ]

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return
      const containerTop = containerRef.current.offsetTop
      const scrollInside = window.scrollY - containerTop
      const sectionHeight = Math.max(1, window.innerHeight * 0.9)
      const rawIndex = Math.floor(scrollInside / sectionHeight)
      const clamped = Math.min(sections.length - 1, Math.max(0, rawIndex))
      setActiveIndex(clamped)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section className="section">
      <div className="container">
        <div ref={containerRef} className="relative" style={{ height: `${sections.length * 100}vh` }}>
          <div className="sticky top-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[380px] sm:h-[440px] lg:h-[520px]">
                {sections.map((s, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 transition-all duration-500 ${i === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Image
                        src={s.image}
                        alt={s.title}
                        width={700}
                        height={460}
                        className="rounded-xl shadow-xl"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-2">
                {sections.map((s, i) => (
                  <div
                    key={i}
                    className={`transition-all duration-500 ${i === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 h-0 overflow-hidden absolute'}`}
                  >
                    <h3 className="text-3xl font-bold text-[#e6eefc] mb-4">{s.title}</h3>
                    <p className="text-[var(--light-text-color)] mb-6">{s.desc}</p>
                    <div className="flex gap-2 mt-4">
                      {sections.map((_, dot) => (
                        <span
                          key={dot}
                          className={`w-2.5 h-2.5 rounded-full ${dot === activeIndex ? 'bg-[#6f92cb]' : 'bg-white/20'}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

