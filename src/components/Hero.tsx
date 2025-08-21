import { useEffect, useState } from 'react'
import { useI18n } from '../lib/i18n'
import { getAssetPath } from '../lib/config'
import { useParallax, useMouseParallax, useScrollTrigger } from '../lib/useScrollEffects'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const { t } = useI18n()
  const [githubStars, setGithubStars] = useState<string>('...')
  
  // Parallax effects
  const [parallaxRef, parallaxOffset] = useParallax(0.5)
  const [mouseParallaxRef, mousePosition] = useMouseParallax(0.02)
  const [triggerRef, isInView] = useScrollTrigger({ threshold: 0.1 })

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

    fetchGithubStars()
  }, [])

  return (
    <section 
      ref={parallaxRef as any}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-steel-50 via-white to-slate-100"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-steel-400/20 to-steel-600/10 rounded-full blur-3xl floating"
          style={{ 
            transform: `translate(${mousePosition.x}px, ${mousePosition.y + parallaxOffset * 0.3}px)`,
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-br from-steel-300/20 to-steel-500/10 rounded-full blur-3xl floating"
          style={{ 
            transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5 + parallaxOffset * 0.2}px)`,
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute top-1/2 left-3/4 w-64 h-64 bg-gradient-to-br from-steel-500/15 to-steel-700/5 rounded-full blur-3xl floating"
          style={{ 
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3 + parallaxOffset * 0.4}px)`,
            animationDelay: '4s'
          }}
        />
      </div>

      {/* Parallax grid background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ 
          transform: `translateY(${parallaxOffset * 0.2}px)`,
          backgroundImage: `
            linear-gradient(rgba(72, 101, 129, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(72, 101, 129, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div 
        ref={mouseParallaxRef as any}
        className="container-custom relative z-10"
      >
        <div 
          ref={triggerRef as any}
          className={`text-center transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Main heading with gradient text */}
          <h1 className="hero-title font-bold mb-6 gradient-text text-shadow-lg leading-tight">
            {t('hero.slogan')}
          </h1>
          
          <p className="text-xl md:text-2xl text-steel-600 mb-12 max-w-3xl mx-auto leading-relaxed text-shadow">
            {t('hero.subSlogan')}
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link 
              href="#get-started" 
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10">{t('hero.startButton')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-steel-700 to-steel-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
            
            <Link 
              href="https://github.com/AstrBotDevs/AstrBot" 
              className="btn-secondary group flex items-center gap-3"
              target="_blank"
            >
              <i className="fab fa-github text-xl group-hover:rotate-12 transition-transform duration-300" />
              <span>{t('hero.githubButton')}</span>
              <span className="bg-steel-100 text-steel-700 px-2 py-1 rounded-full text-sm font-semibold group-hover:bg-steel-200 transition-colors duration-300">
                {githubStars}
              </span>
            </Link>
          </div>

          {/* Trendshift badge */}
          <div className="mb-16 opacity-80 hover:opacity-100 transition-opacity duration-300">
            <Link href="https://trendshift.io/api/badge/repositories/12875">
              <Image 
                src="https://trendshift.io/api/badge/repositories/12875" 
                alt="Soulter%2FAstrBot | Trendshift" 
                width={250} 
                height={55}
                className="mx-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Hero image with advanced parallax */}
          <div className="relative perspective-1000">
            <div 
              className="relative transform-gpu transition-all duration-700 hover:scale-105"
              style={{ 
                transform: `
                  translateY(${parallaxOffset * 0.1}px) 
                  translateX(${mousePosition.x * 0.5}px)
                  rotateX(${5 + mousePosition.y * 0.01}deg)
                  rotateY(${mousePosition.x * 0.01}deg)
                `
              }}
            >
              {/* Image glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-steel-400/20 to-steel-600/20 rounded-2xl blur-2xl transform scale-110" />
              
              {/* Main hero image */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20 shadow-2xl">
                <Image 
                  src={getAssetPath("/assets/webui-1.png")}
                  alt="AstrBot WebUI界面" 
                  className="rounded-xl shadow-lg w-full h-auto"
                  width={800}
                  height={500}
                  priority
                />
              </div>
              
              {/* Floating UI elements */}
              <div 
                className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-steel-500 to-steel-600 rounded-full shadow-lg flex items-center justify-center text-white font-bold text-lg floating"
                style={{ animationDelay: '1s' }}
              >
                AI
              </div>
              
              <div 
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-steel-400 to-steel-500 rounded-lg shadow-lg flex items-center justify-center text-white floating"
                style={{ animationDelay: '3s' }}
              >
                <i className="fas fa-robot text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-steel-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-steel-400 rounded-full mt-2 animate-pulse" />
        </div>
        <p className="text-steel-500 text-sm mt-2 text-center">Scroll</p>
      </div>
    </section>
  )
}