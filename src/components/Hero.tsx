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
    <section className="hero relative overflow-visible text-center pt-[180px] pb-[120px] mb-[50px]">
      <div className="hero-bg-circle absolute rounded-full z-0 opacity-60 left-[-60px] bottom-[350px] w-[350px] h-[350px] filter blur-[123.134px]" />
      <div className="container relative z-[1]">
        <h1 className="slogan text-[48px] font-bold mb-5 text-text">{t('hero.slogan')}</h1>
        <p className="sub-slogan text-[22px] text-lightText mb-10 max-w-[700px] mx-auto">{t('hero.subSlogan')}</p>
        
        <div className="hero-buttons flex gap-5 justify-center mb-[50px]">
          <Link href="#get-started" className="btn btn-primary inline-block px-[30px] py-3 rounded-[30px] font-medium text-[16px] transition-all cursor-pointer bg-primary text-white hover:bg-secondary hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
            {t('hero.startButton')}
          </Link>
          <Link 
            href="https://github.com/AstrBotDevs/AstrBot" 
            className="btn btn-secondary github-btn inline-flex items-center gap-2 px-[30px] py-3 rounded-[30px] font-medium text-[16px] transition-all cursor-pointer border-2 border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
            target="_blank"
          >
            <i className="fab fa-github"></i> 
            <span>{t('hero.githubButton')}</span>
            <span className="github-stars bg-white/20 rounded-[20px] px-2 py-[2px] text-[14px]"><span className="stars-count">{githubStars}</span></span>
          </Link>
        </div>

        <div className="trendshift-badge mb-8">
          <Link href="https://trendshift.io/api/badge/repositories/12875">
            <Image 
              src="https://trendshift.io/api/badge/repositories/12875" 
              alt="Soulter%2FAstrBot | Trendshift" 
              width={250} 
              height={55}
            />
          </Link>
        </div>

        <div className="hero-image-container mt-6 [perspective:1000px]">
          <Image 
            src={getAssetPath("/assets/webui-1.png")}
            alt="AstrBot WebUI界面" 
            className="hero-image mx-auto rounded-xl shadow-soft"
            style={{ transform: heroImageTransform }}
            width={800}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  )
}