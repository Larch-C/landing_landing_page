import { ReactNode } from 'react'
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
  return (
    <section className="relative py-10">
      <div className="container space-y-16">
        {sections.map(s => (
          <SectionBlock key={s.id} title={s.title}>
            {s.content}
          </SectionBlock>
        ))}
      </div>
    </section>
  )
}

function SectionBlock({ title, children }: { title: string; children: ReactNode }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <h3 className="section-title mb-6 text-2xl font-bold text-[#e6eefc]">{title}</h3>
      {children}
    </div>
  )
}

