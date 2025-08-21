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
    <div className="hero relative pt-[180px] pb-[120px] text-center overflow-visible mb-[50px]">
      <div className="hero-bg-circle"></div>
      <div className="container relative z-[1]">
        <h1 className="slogan text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-[#f4f8ff] drop-shadow-lg">{t('hero.slogan')}</h1>
        <p className="sub-slogan text-lg md:text-2xl mb-6 text-[#d8e7ff]">{t('hero.subSlogan')}</p>

        <div className="hero-buttons flex gap-4 justify-center mb-[50px]">
          <Link href="#get-started" className="btn btn-primary px-6 py-3 rounded-md bg-sky-600 hover:bg-sky-500 shadow inline-block">
            {t('hero.startButton')}
          </Link>
          <Link 
            href="https://github.com/AstrBotDevs/AstrBot" 
            className="btn btn-secondary github-btn px-4 py-3 rounded-md bg-transparent border border-sky-400 hover:bg-sky-800/40 inline-flex items-center gap-2"
            target="_blank"
          >
            <i className="fab fa-github"></i> 
            <span>{t('hero.githubButton')}</span>
            <span className="github-stars ml-2 text-sm opacity-70">
              <span className="stars-count">{githubStars}</span>
            </span>
          </Link>
        </div>

        <div className="trendshift-badge my-5 text-center">
          <Link href="https://trendshift.io/api/badge/repositories/12875">
            <Image 
              src="https://trendshift.io/api/badge/repositories/12875" 
              alt="Soulter%2FAstrBot | Trendshift" 
              width={250} 
              height={55}
            />
          </Link>
        </div>

        <div className="hero-image-container pt-8 relative max-w-[900px] mx-auto overflow-hidden rounded-xl [perspective:1000px]">
          <Image 
            src={getAssetPath("/assets/webui-1.png")}
            alt="AstrBot WebUI界面" 
            className="hero-image w-full rounded-xl shadow-xl [mask-image:linear-gradient(to_bottom,_black_65%,_transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,_black_65%,_transparent_100%)] will-change-transform"
            style={{ transform: heroImageTransform }}
            width={800}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  )
}