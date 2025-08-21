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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'nav-glass shadow-lg backdrop-blur-xl bg-white/90' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src={getAssetPath("/assets/logo.svg")} 
              alt="AstrBot" 
              width={150} 
              height={40}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link 
                href="https://docs.astrbot.app" 
                className="btn-ghost hover:text-steel-600 transition-colors duration-200"
              >
                {t('nav.quickStart')}
              </Link>
            </li>
            <li>
              <Link 
                href="https://plugins.astrbot.app/" 
                className="btn-ghost hover:text-steel-600 transition-colors duration-200"
              >
                {t('nav.plugin')}
              </Link>
            </li>
            <li>
              <Link 
                href="https://github.com/AstrBotDevs/AstrBot" 
                className="btn-ghost hover:text-steel-600 transition-colors duration-200 flex items-center gap-2"
              >
                <i className="fab fa-github" />
                {t('nav.github')}
              </Link>
            </li>
            
            {/* Language Selector */}
            <li className="relative">
              <button 
                className="btn-ghost flex items-center gap-2"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <i className="fas fa-globe text-steel-500" />
                <span>{currentLanguage.name}</span>
                <i className={`fas fa-chevron-down text-xs transition-transform duration-200 ${
                  isLanguageOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {isLanguageOpen && (
                <ul className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-md border border-steel-200/50 rounded-xl shadow-lg min-w-[160px] overflow-hidden">
                  {languages.map(lang => (
                    <li key={lang.code}>
                      <button
                        className={`w-full text-left px-4 py-3 hover:bg-steel-50 transition-colors duration-200 ${
                          lang.code === locale ? 'bg-steel-100 text-steel-700 font-medium' : 'text-steel-600'
                        }`}
                        onClick={() => handleLanguageChange(lang.code)}
                      >
                        {lang.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 group"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-steel-600 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`} />
            <span className={`w-6 h-0.5 bg-steel-600 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`} />
            <span className={`w-6 h-0.5 bg-steel-600 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-b-2xl border-t border-steel-200/50">
            <Link 
              href="https://docs.astrbot.app" 
              className="block px-4 py-3 text-steel-700 hover:bg-steel-50 transition-colors duration-200"
              onClick={closeMenu}
            >
              {t('nav.quickStart')}
            </Link>
            <Link 
              href="https://plugins.astrbot.app/" 
              className="block px-4 py-3 text-steel-700 hover:bg-steel-50 transition-colors duration-200"
              onClick={closeMenu}
            >
              {t('nav.plugin')}
            </Link>
            <Link 
              href="https://github.com/AstrBotDevs/AstrBot" 
              className="block px-4 py-3 text-steel-700 hover:bg-steel-50 transition-colors duration-200"
              onClick={closeMenu}
            >
              <i className="fab fa-github mr-2" />
              {t('nav.github')}
            </Link>
            
            {/* Mobile Language Selector */}
            <div className="border-t border-steel-200/50 pt-2">
              <div className="px-4 py-2 text-sm text-steel-500 font-medium">
                {t('nav.language') || 'Language'}
              </div>
              {languages.map(lang => (
                <button
                  key={lang.code}
                  className={`block w-full text-left px-6 py-2 transition-colors duration-200 ${
                    lang.code === locale 
                      ? 'bg-steel-100 text-steel-700 font-medium' 
                      : 'text-steel-600 hover:bg-steel-50'
                  }`}
                  onClick={() => {
                    handleLanguageChange(lang.code)
                    closeMenu()
                  }}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}