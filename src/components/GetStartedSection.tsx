import { useI18n } from '../lib/i18n'
import Link from 'next/link'

export default function GetStartedSection() {
  const { t } = useI18n()

  return (
    <section id="get-started" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-text text-center mb-4">{t('getStarted.title')}</h2>
        <p className="text-center mb-10 text-lightText">
          {t('getStarted.subtitle')}
        </p>
        <div className="flex justify-center">
          <Link 
            href="https://docs.astrbot.app" 
            className="inline-block px-[30px] py-3 rounded-[30px] font-medium text-[16px] transition-all cursor-pointer bg-primary text-white hover:bg-secondary hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]" 
            target="_blank"
          >
            {t('getStarted.docsButton')}
          </Link>
        </div>
      </div>
    </section>
  )
}