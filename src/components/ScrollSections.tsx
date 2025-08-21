import { ReactNode, useEffect, useMemo, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface ScrollSectionItem {
  id: string
  title: string
  content: ReactNode
}

interface ScrollSectionsProps {
  sections: ScrollSectionItem[]
}

export default function ScrollSections({ sections }: ScrollSectionsProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const sentinels = useMemo(() => {
    return sections.map((section, index) => ({
      section,
      index,
    }))
  }, [sections])

  return (
    <section className="relative py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 hidden lg:flex flex-col gap-3 pt-4">
            {sections.map((s, index) => (
              <button
                key={s.id}
                onClick={() => {
                  const sentinel = document.getElementById(`sentinel-${s.id}`)
                  if (sentinel) {
                    window.scrollTo({ top: sentinel.offsetTop + 1, behavior: 'smooth' })
                  }
                }}
                className={`text-left px-3 py-2 rounded-md transition-colors ${index === activeIndex ? 'bg-white/10 text-[var(--text-color)]' : 'text-[var(--light-text-color)] hover:text-[var(--text-color)] hover:bg-white/5'}`}
              >
                {s.title}
              </button>
            ))}
          </div>

          <div className="lg:col-span-9 relative">
            <div className="sticky top-20 lg:top-24">
              {sections.map((s, index) => (
                <div
                  key={s.id}
                  className={`transition-opacity duration-700 ${index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'}`}
                >
                  {s.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        {sentinels.map(({ section, index }) => (
          <Sentinel
            id={`sentinel-${section.id}`}
            key={section.id}
            onEnter={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}

function Sentinel({ id, onEnter }: { id: string; onEnter: () => void }) {
  const { ref, inView, entry } = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (inView) onEnter()
  }, [inView, onEnter])

  return (
    <div id={id} ref={ref} className="h-[120vh]" />
  )
}

