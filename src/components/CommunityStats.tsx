import { useI18n } from '../lib/i18n'
import Image from 'next/image'
import { useScrollReveal } from '../lib/useScrollReveal'

interface CommunityStatsProps {
  githubData: {
    stars: number
    forks: number
    contributors: number
  }
}

export default function CommunityStats({ githubData }: CommunityStatsProps) {
  const { t } = useI18n()
  const { elementRef, isVisible } = useScrollReveal()

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k+'
    }
    return num.toString()
  }

  return (
    <section className="section stats-section" ref={elementRef as any}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'reveal-in' : 'reveal'}`}>{t('community.title')}</h2>
        <p style={{ 
          textAlign: 'center', 
          marginBottom: '40px', 
          color: 'var(--light-text-color)' 
        }}>
          {t('community.subtitle')}
        </p>
        
        <div className="features-grid stats-grid">
          <div className={`feature-card stats-card ${isVisible ? 'reveal-in' : 'reveal'}`} style={{ transitionDelay: '0ms' }}>
            <div className="stats-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="stats-number">{formatNumber(githubData.stars)}</div>
            <h3>{t('community.stats.stars')}</h3>
            <p>{t('community.stats.starsDesc')}</p>
          </div>
          
          <div className={`feature-card stats-card ${isVisible ? 'reveal-in' : 'reveal'}`} style={{ transitionDelay: '80ms' }}>
            <div className="stats-icon">
              <i className="fas fa-code-branch"></i>
            </div>
            <div className="stats-number">{formatNumber(githubData.forks)}</div>
            <h3>{t('community.stats.forks')}</h3>
            <p>{t('community.stats.forksDesc')}</p>
          </div>
          
          <div className={`feature-card stats-card ${isVisible ? 'reveal-in' : 'reveal'}`} style={{ transitionDelay: '160ms' }}>
            <div className="stats-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="stats-number">{formatNumber(githubData.contributors)}</div>
            <h3>{t('community.stats.contributors')}</h3>
            <p>{t('community.stats.contributorsDesc')}</p>
          </div>
          
          <div className={`feature-card stats-card ${isVisible ? 'reveal-in' : 'reveal'}`} style={{ transitionDelay: '240ms' }}>
            <div className="stats-icon">
              <i className="fas fa-puzzle-piece"></i>
            </div>
            <div className="stats-number">50+</div>
            <h3>{t('community.stats.plugins')}</h3>
            <p>{t('community.stats.pluginsDesc')}</p>
          </div>
        </div>
        
        <div className="contributors-showcase">
          <h3 className={`${isVisible ? 'reveal-in' : 'reveal'}`}>{t('community.contributorsTitle')}</h3>
          <div className={`contributors-image ${isVisible ? 'reveal-in' : 'reveal'}`} style={{ transitionDelay: '320ms' }}>
            <Image 
              src="https://contrib.rocks/image?repo=AstrBotDevs/AstrBot" 
              alt="AstrBot贡献者"
              width={600}
              height={200}
            />
          </div>
          <p className={`contributors-note ${isVisible ? 'reveal-in' : 'reveal'}`} style={{ transitionDelay: '400ms' }}>{t('community.contributorsNote')}</p>
        </div>
      </div>
    </section>
  )
}