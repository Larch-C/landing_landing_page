import { useI18n } from '../lib/i18n'
import Link from 'next/link'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-neutral-900/80 backdrop-blur-sm border-t border-neutral-800 py-20 pb-8 text-neutral-200">
      <div className="container max-w-6xl">
        <div className="footer-content flex justify-between mb-12 flex-col lg:flex-row gap-12">
          <div className="footer-logo max-w-md">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent mb-4">
              AstrBot
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg">{t('footer.slogan')}</p>
          </div>
          
          <div className="footer-links flex gap-16 flex-col md:flex-row">
            <div className="footer-links-column">
              <h3 className="text-xl font-semibold mb-6 text-white">{t('footer.resources.title')}</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 inline-flex items-center gap-2 group" 
                    href="https://docs.astrbot.app"
                  >
                    <span>{t('footer.resources.docs')}</span>
                    <i className="fas fa-external-link-alt text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3 className="text-xl font-semibold mb-6 text-white">{t('footer.community.title')}</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 inline-flex items-center gap-2 group" 
                    href="https://github.com/AstrBotDevs/AstrBot"
                  >
                    <i className="fab fa-github"></i>
                    <span>{t('footer.community.github')}</span>
                    <i className="fas fa-external-link-alt text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </Link>
                </li>
                <li>
                  <Link 
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 inline-flex items-center gap-2 group" 
                    href="https://qm.qq.com/cgi-bin/qm/qr?k=wtbaNx7EioxeaqS9z7RQWVXPIxg2zYr7&jump_from=webapi&authKey=vlqnv/AV2DbJEvGIcxdlNSpfxVy+8vVqijgreRdnVKOaydpc+YSw4MctmEbr0k5"
                  >
                    <i className="fab fa-qq"></i>
                    <span>{t('footer.community.qq')}</span>
                    <i className="fas fa-external-link-alt text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </Link>
                </li>
                <li>
                  <Link 
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 inline-flex items-center gap-2 group" 
                    href="https://t.me/+hAsD2Ebl5as3NmY1"
                  >
                    <i className="fab fa-telegram"></i>
                    <span>{t('footer.community.telegram')}</span>
                    <i className="fas fa-external-link-alt text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3 className="text-xl font-semibold mb-6 text-white">{t('footer.support.title')}</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 inline-flex items-center gap-2 group" 
                    href="mailto:soulter@qq.com"
                  >
                    <i className="fas fa-envelope"></i>
                    <span>{t('footer.support.contact')}</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-300 inline-flex items-center gap-2 group" 
                    href="https://github.com/AstrBotDevs/AstrBot/issues"
                  >
                    <i className="fas fa-bug"></i>
                    <span>{t('footer.support.issues')}</span>
                    <i className="fas fa-external-link-alt text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="copyright text-center pt-8 border-t border-neutral-800">
          <div className="space-y-3 text-neutral-400">
            <p dangerouslySetInnerHTML={{ __html: t('footer.copyright') }} />
            <p>
              {t('footer.partnersLabel')}: <Link 
                href="https://www.rainyun.com/NjY3OTQ1_" 
                target="_blank"
                className="text-primary-400 hover:text-primary-300 transition-colors duration-300 underline decoration-primary-400/50 hover:decoration-primary-300"
              >
                雨云-新一代云服务商
              </Link>
            </p>
            <p>
              {t('footer.friendLinksLabel')}: <Link 
                href="https://ustb-806.github.io/" 
                target="_blank"
                className="text-primary-400 hover:text-primary-300 transition-colors duration-300 underline decoration-primary-400/50 hover:decoration-primary-300"
              >
                北京科技大学 806 学生创新实验室
              </Link>
            </p>
            <p className="text-neutral-500 text-sm flex items-center justify-center gap-2">
              <span>{t('footer.love')}</span>
              <i className="fas fa-heart text-red-400 animate-pulse"></i>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}