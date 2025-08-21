import { useI18n } from '../lib/i18n'
import { useStaggeredAnimation, useScrollTrigger } from '../lib/useScrollEffects'
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
  const [titleRef, titleInView] = useScrollTrigger({ threshold: 0.3 })
  const [statsRef, visibleStats] = useStaggeredAnimation(200)
  const [contributorsRef, contributorsInView] = useScrollTrigger({ threshold: 0.2 })

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k+'
    }
    return num.toString()
  }

  const stats = [
    {
      icon: 'fas fa-star',
      number: formatNumber(githubData.stars),
      title: t('community.stats.stars'),
      description: t('community.stats.starsDesc'),
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-100 to-orange-100'
    },
    {
      icon: 'fas fa-code-branch',
      number: formatNumber(githubData.forks),
      title: t('community.stats.forks'),
      description: t('community.stats.forksDesc'),
      gradient: 'from-blue-500 to-purple-500',
      bgGradient: 'from-blue-100 to-purple-100'
    },
    {
      icon: 'fas fa-users',
      number: formatNumber(githubData.contributors),
      title: t('community.stats.contributors'),
      description: t('community.stats.contributorsDesc'),
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-100 to-emerald-100'
    },
    {
      icon: 'fas fa-puzzle-piece',
      number: '50+',
      title: t('community.stats.plugins'),
      description: t('community.stats.pluginsDesc'),
      gradient: 'from-steel-500 to-steel-600',
      bgGradient: 'from-steel-100 to-steel-200'
    }
  ]

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-steel-50">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-steel-200/20 to-steel-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-steel-300/20 to-steel-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Title */}
        <div 
          ref={titleRef as any}
          className={`text-center mb-20 transition-all duration-700 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6 text-shadow">
            {t('community.title')}
          </h2>
          <p className="text-xl text-steel-600 max-w-3xl mx-auto">
            {t('community.subtitle')}
          </p>
        </div>
        
        {/* Stats Grid */}
        <div 
          ref={statsRef as any}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`card group text-center relative overflow-hidden transition-all duration-700 ${
                visibleStats.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${stat.icon} text-3xl text-white`} />
              </div>

              {/* Number */}
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-4 group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-steel-800 mb-3 group-hover:text-steel-600 transition-colors duration-300">
                {stat.title}
              </h3>

              {/* Description */}
              <p className="text-steel-600 leading-relaxed group-hover:text-steel-700 transition-colors duration-300">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Contributors Showcase */}
        <div 
          ref={contributorsRef as any}
          className={`text-center transition-all duration-700 ${
            contributorsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-3xl font-bold gradient-text mb-8">
            {t('community.contributorsTitle')}
          </h3>
          
          <div className="relative inline-block group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-steel-400/20 to-steel-600/20 rounded-2xl blur-2xl transform scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Image container */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-steel-200/50 shadow-xl group-hover:shadow-2xl transition-all duration-500">
              <Image 
                src="https://contrib.rocks/image?repo=AstrBotDevs/AstrBot" 
                alt="AstrBot贡献者"
                width={600}
                height={200}
                className="rounded-xl mx-auto"
              />
            </div>
          </div>
          
          <p className="text-steel-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            {t('community.contributorsNote')}
          </p>

          {/* Call to action */}
          <div className="mt-8">
            <div className="inline-flex items-center gap-2 text-steel-600 font-medium">
              <span>加入我们的社区</span>
              <i className="fas fa-heart text-red-500 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}