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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} backdrop-blur-md border-b border-white/10`}>
      <div className="container flex items-center justify-between h-[70px]">
        <div className="logo flex items-center">
          <Image
            className="relative z-10 brightness-110"
            src={getAssetPath("/assets/logo.svg")}
            alt="AstrBot"
            width={150}
            height={40}
            style={{
              filter:
                'drop-shadow(0 0 6px rgba(255,255,255,0.35)) drop-shadow(0 0 14px rgba(170,210,255,0.18))'
            }}
          />
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''} hidden md:flex gap-8 items-center`}>
          <li>
            <Link className="text-[var(--light-text-color)] hover:text-[var(--secondary-color)]" href="https://docs.astrbot.app" onClick={closeMenu}>
              {t('nav.quickStart')}
            </Link>
          </li>
          <li>
            <Link className="text-[var(--light-text-color)] hover:text-[var(--secondary-color)]" href="https://plugins.astrbot.app/" onClick={closeMenu}>
              {t('nav.plugin')}
            </Link>
          </li>
          <li>
            <Link className="text-[var(--light-text-color)] hover:text-[var(--secondary-color)]" href="https://github.com/AstrBotDevs/AstrBot" onClick={closeMenu}>
              {t('nav.github')}
            </Link>
          </li>
          <li className={`language-selector relative ${isLanguageOpen ? 'active' : ''}`}>
            <div 
              className="selected-language flex items-center gap-2 px-2 py-1 rounded hover:bg-white/5 text-[var(--light-text-color)]"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <i className="fas fa-globe"></i>
              <span className="current-language font-medium">{currentLanguage.name}</span>
              <i className="fas fa-chevron-down"></i>
            </div>
            {isLanguageOpen && (
              <ul className="language-dropdown absolute top-full right-0 bg-white/90 backdrop-blur rounded-lg shadow-lg py-2 min-w-[120px] z-[1000]">
                {languages.map(lang => (
                  <li 
                    key={lang.code}
                    className={`${lang.code === locale ? 'active' : ''} px-4 py-2 hover:bg-black/5 cursor-pointer`}
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
          className={`hamburger ${isMenuOpen ? 'active' : ''} md:hidden flex flex-col gap-1.5 cursor-pointer`}
          onClick={toggleMenu}
        >
          <span className="block w-[30px] h-[3px] bg-[var(--text-color)] transition-all"></span>
          <span className="block w-[30px] h-[3px] bg-[var(--text-color)] transition-all"></span>
          <span className="block w-[30px] h-[3px] bg-[var(--text-color)] transition-all"></span>
        </div>
      </div>
    </nav>
  )
}