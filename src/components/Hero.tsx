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
    <div className="hero relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-steel-900/20 to-steel-900/60 z-10" />
      
      {/* Floating geometric elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-1/3 right-1/6 w-48 h-48 bg-steel-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary-600/15 rounded-full blur-xl animate-float transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-20 px-6">
        {/* Main heading with modern typography */}
        <div className="mb-12 animate-fadeInScale">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-steel-100 via-primary-200 to-steel-200 bg-clip-text text-transparent drop-shadow-2xl">
              {t('hero.slogan')}
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-steel-200/90 font-light max-w-4xl mx-auto leading-relaxed">
            {t('hero.subSlogan')}
          </p>
        </div>

        {/* Modern button group */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
          <Link 
            href="#get-started" 
            className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 rounded-2xl font-semibold text-white shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">{t('hero.startButton')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </Link>
          
          <Link 
            href="https://github.com/AstrBotDevs/AstrBot" 
            className="group relative px-8 py-4 bg-steel-800/50 backdrop-blur-sm border border-steel-600/50 hover:border-primary-500/50 rounded-2xl font-semibold text-steel-100 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
            target="_blank"
          >
            <i className="fab fa-github text-xl"></i> 
            <span>{t('hero.githubButton')}</span>
            <span className="ml-2 px-2 py-1 bg-primary-500/20 rounded-lg text-sm">
              {githubStars}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-steel-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        {/* Badge with modern styling */}
        <div className="mb-16 animate-fadeInScale" style={{ animationDelay: '0.4s' }}>
          <Link href="https://trendshift.io/api/badge/repositories/12875" className="inline-block hover:scale-105 transition-transform duration-300">
            <Image 
              src="https://trendshift.io/api/badge/repositories/12875" 
              alt="Soulter%2FAstrBot | Trendshift" 
              width={250} 
              height={55}
              className="rounded-lg shadow-steel"
            />
          </Link>
        </div>

        {/* Hero image with enhanced 3D effect */}
        <div className="relative max-w-5xl mx-auto animate-slideInUp" style={{ animationDelay: '0.6s' }}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-steel-700/30 [perspective:1200px]">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-steel-400/20 blur-xl scale-110" />
            
            <Image 
              src={getAssetPath("/assets/webui-1.png")}
              alt="AstrBot WebUI界面" 
              className="relative z-10 w-full rounded-3xl transition-transform duration-1000 ease-out hover:scale-[1.02]"
              style={{ 
                transform: heroImageTransform,
                maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
              }}
              width={1000}
              height={600}
              priority
            />
            
            {/* Reflection effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-steel-900/80 to-transparent rounded-b-3xl" />
          </div>
          
          {/* Floating UI elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500/30 rounded-full blur-sm animate-float" />
          <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-steel-400/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>
    </div>
  )
}