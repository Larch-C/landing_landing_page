import { useState, useEffect } from 'react'
import { useI18n, supportedLocales } from '../lib/i18n'
import { getAssetPath } from '../lib/config'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const { t, locale, changeLocale } = useI18n()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const languages = [
    { code: 'zh-CN', name: '简体中文' },
    { code: 'en-US', name: 'English' },
    { code: 'ja-JP', name: '日本語' }
  ]

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleLanguageChange = (langCode: string) => {
    changeLocale(langCode)
    setIsLanguageOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container flex items-center justify-between h-16">
        <div className="logo flex items-center">
          <Image
            className="relative z-10 brightness-110 hover:scale-105 transition-transform duration-300"
            src={getAssetPath("/assets/logo.svg")}
            alt="AstrBot"
            width={150}
            height={40}
            style={{
              filter:
                'drop-shadow(0 0 8px rgba(14, 165, 233, 0.4)) drop-shadow(0 0 16px rgba(56, 189, 248, 0.2))'
            }}
          />
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''} hidden md:flex gap-8 items-center`}>
          <li>
            <Link 
              className="text-neutral-300 hover:text-primary-400 transition-colors duration-300 font-medium relative group" 
              href="https://docs.astrbot.app" 
              onClick={closeMenu}
            >
              {t('nav.quickStart')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link 
              className="text-neutral-300 hover:text-primary-400 transition-colors duration-300 font-medium relative group" 
              href="https://plugins.astrbot.app/" 
              onClick={closeMenu}
            >
              {t('nav.plugin')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link 
              className="text-neutral-300 hover:text-primary-400 transition-colors duration-300 font-medium relative group" 
              href="https://github.com/AstrBotDevs/AstrBot" 
              onClick={closeMenu}
            >
              {t('nav.github')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className={`language-selector relative ${isLanguageOpen ? 'active' : ''}`}>
            <div 
              className="selected-language flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-neutral-800/50 text-neutral-300 hover:text-white cursor-pointer transition-all duration-300"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <i className="fas fa-globe text-sm"></i>
              <span className="current-language font-medium">{currentLanguage.name}</span>
              <i className={`fas fa-chevron-down text-xs transition-transform duration-300 ${isLanguageOpen ? 'rotate-180' : ''}`}></i>
            </div>
            {isLanguageOpen && (
              <ul className="language-dropdown absolute top-full right-0 bg-neutral-800/95 backdrop-blur-lg rounded-xl shadow-2xl py-2 min-w-[140px] z-[1000] border border-neutral-700/50">
                {languages.map(lang => (
                  <li 
                    key={lang.code}
                    className={`${lang.code === locale ? 'bg-primary-500/20 text-primary-300' : 'text-neutral-300 hover:text-white hover:bg-neutral-700/50'} px-4 py-2 cursor-pointer transition-all duration-200 font-medium`}
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    {lang.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''} md:hidden flex flex-col gap-1.5 cursor-pointer p-2 rounded-lg hover:bg-neutral-800/50 transition-all duration-300`}
          onClick={toggleMenu}
        >
          <span className={`block w-6 h-0.5 bg-neutral-300 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-neutral-300 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-neutral-300 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </div>
    </nav>
  )
}