import { useEffect, useState } from 'react'
import { useI18n } from '../lib/i18n'
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
        const response = await fetch('/data/checkpoint.json')
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
    <div className="hero">
      <div className="hero-bg-circle"></div>
      <div className="container">
        <h1 className="slogan">{t('hero.slogan')}</h1>
        <p className="sub-slogan">{t('hero.subSlogan')}</p>
        
        <div className="hero-buttons">
          <Link href="#get-started" className="btn btn-primary">
            {t('hero.startButton')}
          </Link>
          <Link 
            href="https://github.com/AstrBotDevs/AstrBot" 
            className="btn btn-secondary github-btn"
            target="_blank"
          >
            <i className="fab fa-github"></i> 
            <span>{t('hero.githubButton')}</span>
            <span className="github-stars">
              <span className="stars-count">{githubStars}</span>
            </span>
          </Link>
        </div>

        <div className="trendshift-badge">
          <Link href="https://trendshift.io/api/badge/repositories/12875">
            <Image 
              src="https://trendshift.io/api/badge/repositories/12875" 
              alt="Soulter%2FAstrBot | Trendshift" 
              width={250} 
              height={55}
            />
          </Link>
        </div>

        <div className="hero-image-container">
          <Image 
            src="/assets/webui-1.png" 
            alt="AstrBot WebUI界面" 
            className="hero-image"
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