import { useI18n } from '../lib/i18n'
import Link from 'next/link'

export default function GetStartedSection() {
  const { t } = useI18n()

  return (
    <section id="get-started" className="section">
      <div className="container">
        <h2 className="section-title text-center text-3xl font-bold text-[#e6eefc]">{t('getStarted.title')}</h2>
        <p className="text-center mb-10 text-[var(--light-text-color)]">{t('getStarted.subtitle')}</p>
        <div className="installation-guide max-w-[600px] mx-auto text-center">
          <Link 
            href="https://docs.astrbot.app" 
            className="btn btn-primary inline-block px-7 py-3 rounded-full font-medium text-white bg-[#314473] hover:bg-[#4f77bd] shadow-soft hover:-translate-y-[3px] transition" 
            target="_blank"
          >
            {t('getStarted.docsButton')}
          </Link>
        </div>
      </div>
    </section>
  )
}