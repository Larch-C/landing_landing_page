import { useI18n } from '../lib/i18n'
import Link from 'next/link'

export default function GetStartedSection() {
  const { t } = useI18n()

  return (
    <section id="get-started" className="section">
      <div className="container">
        <h2 className="section-title">{t('getStarted.title')}</h2>
        <p style={{ 
          textAlign: 'center', 
          marginBottom: '40px', 
          color: 'var(--light-text-color)' 
        }}>
          {t('getStarted.subtitle')}
        </p>
        <div className="installation-guide">
          <Link 
            href="https://docs.astrbot.app" 
            className="btn btn-primary" 
            target="_blank"
          >
            {t('getStarted.docsButton')}
          </Link>
        </div>
      </div>
    </section>
  )
}