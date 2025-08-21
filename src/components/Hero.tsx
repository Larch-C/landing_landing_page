import { useEffect, useState } from 'react'
import { useI18n } from '../lib/i18n'
import { getAssetPath } from '../lib/config'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const { t } = useI18n()
  const [githubStars, setGithubStars] = useState<string>('...')
  const [heroImageTransform, setHeroImageTransform] = useState('rotateX(10deg)')

  useEffect(() => {
    // Fetch GitHub stars for the button
    const fetchGithubStars = async () => {
      try {
        const response = await fetch(getAssetPath('/data/checkpoint.json'))
        const data = await response.json()
        const stars = data.github.stars
        setGithubStars(stars >= 1000 ? (stars / 1000).toFixed(1) + 'k' : stars.toString())
      } catch (error) {
        setGithubStars('⭐')
      }
    }

    // Handle hero image 3D animation
    const updateHeroImageTransform = () => {
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight
      const scrollPercentage = Math.min(scrollPosition / (heroHeight * 0.1), 1)
      const rotateX = 10 * (1 - scrollPercentage)
      setHeroImageTransform(`rotateX(${rotateX}deg)`)
    }

    fetchGithubStars()
    updateHeroImageTransform()
    window.addEventListener('scroll', updateHeroImageTransform)

    return () => {
      window.removeEventListener('scroll', updateHeroImageTransform)
    }
  }, [])

  return (
    <div className="hero relative pt-32 pb-20 text-center overflow-visible mb-16">
      <div className="hero-bg-circle"></div>
      
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-primary-400/5"></div>
      
      <div className="container relative z-[1] max-w-4xl">
        <div className="space-y-8">
          <h1 className="slogan text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-primary-100 to-primary-200 bg-clip-text text-transparent leading-tight">
            {t('hero.slogan')}
          </h1>
          <p className="sub-slogan text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            {t('hero.subSlogan')}
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link 
              href="#get-started" 
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-medium shadow-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">{t('hero.startButton')}</span>
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link 
              href="https://github.com/AstrBotDevs/AstrBot" 
              className="group relative px-8 py-4 rounded-xl bg-neutral-800/50 hover:bg-neutral-700/50 border border-neutral-600 hover:border-primary-400 text-neutral-200 hover:text-white font-medium backdrop-blur-sm transition-all duration-300 inline-flex items-center gap-3"
              target="_blank"
            >
              <i className="fab fa-github text-lg"></i> 
              <span>{t('hero.githubButton')}</span>
              <span className="github-stars px-2 py-1 text-sm bg-neutral-700/50 rounded-full">
                <span className="stars-count">{githubStars}</span>
              </span>
            </Link>
          </div>
        </div>

        <div className="trendshift-badge my-8 text-center flex items-center justify-center">
          <Link href="https://trendshift.io/api/badge/repositories/12875" className="hover:scale-105 transition-transform duration-300">
            <Image 
              src="https://trendshift.io/api/badge/repositories/12875" 
              alt="Soulter%2FAstrBot | Trendshift" 
              width={250} 
              height={55}
              className="rounded-lg"
            />
          </Link>
        </div>

        <div className="hero-image-container pt-12 relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl [perspective:1000px] bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent pointer-events-none z-10"></div>
            <Image 
              src={getAssetPath("/assets/webui-1.png")}
              alt="AstrBot WebUI界面" 
              className="hero-image w-full rounded-2xl shadow-2xl will-change-transform transition-transform duration-500 hover:scale-[1.02]"
              style={{ transform: heroImageTransform }}
              width={800}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}