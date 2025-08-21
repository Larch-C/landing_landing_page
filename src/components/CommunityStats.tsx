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
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-text text-center mb-4">{t('community.title')}</h2>
        <p className="text-center mb-10 text-lightText">
          {t('community.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-xl border border-border bg-white text-center shadow-soft">
            <div className="text-primary text-2xl mb-2">
              <i className="fas fa-star"></i>
            </div>
            <div className="text-3xl font-bold text-text">{formatNumber(githubData.stars)}</div>
            <h3 className="font-semibold mt-1">{t('community.stats.stars')}</h3>
            <p className="text-sm text-lightText">{t('community.stats.starsDesc')}</p>
          </div>
          
          <div className="p-6 rounded-xl border border-border bg-white text-center shadow-soft">
            <div className="text-primary text-2xl mb-2">
              <i className="fas fa-code-branch"></i>
            </div>
            <div className="text-3xl font-bold text-text">{formatNumber(githubData.forks)}</div>
            <h3 className="font-semibold mt-1">{t('community.stats.forks')}</h3>
            <p className="text-sm text-lightText">{t('community.stats.forksDesc')}</p>
          </div>
          
          <div className="p-6 rounded-xl border border-border bg-white text-center shadow-soft">
            <div className="text-primary text-2xl mb-2">
              <i className="fas fa-users"></i>
            </div>
            <div className="text-3xl font-bold text-text">{formatNumber(githubData.contributors)}</div>
            <h3 className="font-semibold mt-1">{t('community.stats.contributors')}</h3>
            <p className="text-sm text-lightText">{t('community.stats.contributorsDesc')}</p>
          </div>
          
          <div className="p-6 rounded-xl border border-border bg-white text-center shadow-soft">
            <div className="text-primary text-2xl mb-2">
              <i className="fas fa-puzzle-piece"></i>
            </div>
            <div className="text-3xl font-bold text-text">50+</div>
            <h3 className="font-semibold mt-1">{t('community.stats.plugins')}</h3>
            <p className="text-sm text-lightText">{t('community.stats.pluginsDesc')}</p>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-center mb-4">{t('community.contributorsTitle')}</h3>
          <div className="flex justify-center">
            <Image 
              src="https://contrib.rocks/image?repo=AstrBotDevs/AstrBot" 
              alt="AstrBot贡献者"
              width={600}
              height={200}
            />
          </div>
          <p className="text-sm text-lightText text-center mt-2">{t('community.contributorsNote')}</p>
        </div>
      </div>
    </section>
  )
}