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
      <div className="container">
        <div className="logo">
          <Image src={getAssetPath("/assets/logo.svg")} alt="AstrBot" width={150} height={40} />
        </div>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link href="https://docs.astrbot.app" onClick={closeMenu}>
              {t('nav.quickStart')}
            </Link>
          </li>
          <li>
            <Link href="https://plugins.astrbot.app/" onClick={closeMenu}>
              {t('nav.plugin')}
            </Link>
          </li>
          <li>
            <Link href="https://github.com/AstrBotDevs/AstrBot" onClick={closeMenu}>
              {t('nav.github')}
            </Link>
          </li>
          <li className="language-selector">
            <div 
              className="selected-language"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <i className="fas fa-globe"></i>
              <span className="current-language">{currentLanguage.name}</span>
              <i className="fas fa-chevron-down"></i>
            </div>
            {isLanguageOpen && (
              <ul className="language-dropdown">
                {languages.map(lang => (
                  <li 
                    key={lang.code}
                    className={lang.code === locale ? 'active' : ''}
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
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}