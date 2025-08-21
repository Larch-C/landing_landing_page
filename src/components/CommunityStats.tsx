import { useI18n } from '../lib/i18n'
import Image from 'next/image'

interface CommunityStatsProps {
  githubData: {
    stars: number
    forks: number
    contributors: number
  }
}

export default function CommunityStats({ githubData }: CommunityStatsProps) {
  const { t } = useI18n()

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k+'
    }
    return num.toString()
  }

  return (
    <section className="section stats-section">
      <div className="container">
        <h2 className="section-title text-center text-3xl font-bold text-[#e6eefc]">{t('community.title')}</h2>
        <p className="text-center mb-10 text-[var(--light-text-color)]">
          {t('community.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
          <div className="bg-[var(--background-color)]/60 rounded-lg p-10 text-center transition hover:-translate-y-2 hover:shadow-xl">
            <div className="stats-icon text-3xl text-[#6f92cb] mb-5 h-[60px] flex items-center justify-center">
              <i className="fas fa-star"></i>
            </div>
            <div className="stats-number text-5xl font-bold text-[#b7c9e7] mb-2 leading-none">{formatNumber(githubData.stars)}</div>
            <h3 className="text-xl mb-2 text-[var(--text-color)]">{t('community.stats.stars')}</h3>
            <p className="text-[var(--light-text-color)]">{t('community.stats.starsDesc')}</p>
          </div>
          
          <div className="bg-[var(--background-color)]/60 rounded-lg p-10 text-center transition hover:-translate-y-2 hover:shadow-xl">
            <div className="stats-icon text-3xl text-[#6f92cb] mb-5 h-[60px] flex items-center justify-center">
              <i className="fas fa-code-branch"></i>
            </div>
            <div className="stats-number text-5xl font-bold text-[#b7c9e7] mb-2 leading-none">{formatNumber(githubData.forks)}</div>
            <h3 className="text-xl mb-2 text-[var(--text-color)]">{t('community.stats.forks')}</h3>
            <p className="text-[var(--light-text-color)]">{t('community.stats.forksDesc')}</p>
          </div>
          
          <div className="bg-[var(--background-color)]/60 rounded-lg p-10 text-center transition hover:-translate-y-2 hover:shadow-xl">
            <div className="stats-icon text-3xl text-[#6f92cb] mb-5 h-[60px] flex items-center justify-center">
              <i className="fas fa-users"></i>
            </div>
            <div className="stats-number text-5xl font-bold text-[#b7c9e7] mb-2 leading-none">{formatNumber(githubData.contributors)}</div>
            <h3 className="text-xl mb-2 text-[var(--text-color)]">{t('community.stats.contributors')}</h3>
            <p className="text-[var(--light-text-color)]">{t('community.stats.contributorsDesc')}</p>
          </div>
          
          <div className="bg-[var(--background-color)]/60 rounded-lg p-10 text-center transition hover:-translate-y-2 hover:shadow-xl">
            <div className="stats-icon text-3xl text-[#6f92cb] mb-5 h-[60px] flex items-center justify-center">
              <i className="fas fa-puzzle-piece"></i>
            </div>
            <div className="stats-number text-5xl font-bold text-[#b7c9e7] mb-2 leading-none">50+</div>
            <h3 className="text-xl mb-2 text-[var(--text-color)]">{t('community.stats.plugins')}</h3>
            <p className="text-[var(--light-text-color)]">{t('community.stats.pluginsDesc')}</p>
          </div>
        </div>
        
        <div className="contributors-showcase mt-16 text-center">
          <h3 className="text-2xl mb-6 text-[var(--text-color)]">{t('community.contributorsTitle')}</h3>
          <div className="contributors-image max-w-[600px] mx-auto rounded-xl overflow-hidden">
            <Image 
              src="https://contrib.rocks/image?repo=AstrBotDevs/AstrBot" 
              alt="AstrBot贡献者"
              width={600}
              height={200}
            />
          </div>
          <p className="contributors-note mt-6 text-[var(--light-text-color)]">{t('community.contributorsNote')}</p>
        </div>
      </div>
    </section>
  )
}