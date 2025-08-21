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
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-shadow bg-background ${scrolled ? 'shadow-soft' : ''}`}>
      <div className="container flex items-center justify-between h-[70px]">
        <div className="text-primary flex items-center">
          <Image src={getAssetPath("/assets/logo.svg")} alt="AstrBot" width={150} height={40} />
        </div>
        
        <ul className={`hidden md:flex gap-[30px] items-center ${isMenuOpen ? 'md:flex' : ''}`}>
          <li>
            <Link className="text-text font-medium hover:text-primary" href="https://docs.astrbot.app" onClick={closeMenu}>
              {t('nav.quickStart')}
            </Link>
          </li>
          <li>
            <Link className="text-text font-medium hover:text-primary" href="https://plugins.astrbot.app/" onClick={closeMenu}>
              {t('nav.plugin')}
            </Link>
          </li>
          <li>
            <Link className="text-text font-medium hover:text-primary" href="https://github.com/AstrBotDevs/AstrBot" onClick={closeMenu}>
              {t('nav.github')}
            </Link>
          </li>
          <li className="relative">
            <div 
              className="flex items-center gap-2 cursor-pointer select-none text-text hover:text-primary"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <i className="fas fa-globe"></i>
              <span>{currentLanguage.name}</span>
              <i className="fas fa-chevron-down"></i>
            </div>
            {isLanguageOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white border border-border rounded-lg shadow-soft overflow-hidden">
                {languages.map(lang => (
                  <li 
                    key={lang.code}
                    className={`px-3 py-2 hover:bg-lightBackground cursor-pointer ${lang.code === locale ? 'bg-lightBackground font-semibold' : ''}`}
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
          className={`md:hidden flex flex-col gap-[6px] cursor-pointer ${isMenuOpen ? '' : ''}`}
          onClick={toggleMenu}
        >
          <span className="block w-[30px] h-[3px] bg-text transition-all"></span>
          <span className="block w-[30px] h-[3px] bg-text transition-all"></span>
          <span className="block w-[30px] h-[3px] bg-text transition-all"></span>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white">
          <div className="container py-6">
            <ul className="flex flex-col gap-4">
              <li>
                <Link className="text-text font-medium" href="https://docs.astrbot.app" onClick={closeMenu}>
                  {t('nav.quickStart')}
                </Link>
              </li>
              <li>
                <Link className="text-text font-medium" href="https://plugins.astrbot.app/" onClick={closeMenu}>
                  {t('nav.plugin')}
                </Link>
              </li>
              <li>
                <Link className="text-text font-medium" href="https://github.com/AstrBotDevs/AstrBot" onClick={closeMenu}>
                  {t('nav.github')}
                </Link>
              </li>
              <li>
                <button
                  className="text-text font-medium text-left"
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                >
                  {currentLanguage.name}
                </button>
                {isLanguageOpen && (
                  <ul className="mt-2 border border-border rounded-lg overflow-hidden">
                    {languages.map(lang => (
                      <li 
                        key={lang.code}
                        className={`px-3 py-2 hover:bg-lightBackground cursor-pointer ${lang.code === locale ? 'bg-lightBackground font-semibold' : ''}`}
                        onClick={() => handleLanguageChange(lang.code)}
                      >
                        {lang.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}