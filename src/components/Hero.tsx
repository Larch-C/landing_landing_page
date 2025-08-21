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
        <h1 className="slogan text-[48px] font-bold mb-5 text-[#e6eefc]">{t('hero.slogan')}</h1>
        <p className="sub-slogan text-[22px] text-[var(--light-text-color)] mb-10 max-w-[700px] mx-auto">{t('hero.subSlogan')}</p>

        <div className="hero-buttons flex gap-5 justify-center mb-[50px]">
          <Link href="#get-started" className="btn btn-primary inline-block px-7 py-3 rounded-full font-medium text-white bg-[#314473] hover:bg-[#4f77bd] shadow-soft hover:-translate-y-[3px] transition">
            {t('hero.startButton')}
          </Link>
          <Link 
            href="https://github.com/AstrBotDevs/AstrBot" 
            className="btn btn-secondary github-btn inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-[#314473] text-[#b7c9e7] hover:text-white hover:bg-[#314473] transition shadow-soft hover:-translate-y-[3px]"
            target="_blank"
          >
            <i className="fab fa-github"></i> 
            <span>{t('hero.githubButton')}</span>
            <span className="github-stars bg-white/10 rounded-2xl px-2 text-sm ml-1 transition">
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