import { useI18n } from '../lib/i18n'
import Link from 'next/link'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-[var(--light-background)] py-16 pb-8 text-[#e9eef9]">
      <div className="container">
        <div className="footer-content flex justify-between mb-10 flex-col md:flex-row gap-8">
          <div className="footer-logo">
            <h2 className="text-2xl mb-2 text-[#6f92cb]">AstrBot</h2>
            <p className="text-[var(--light-text-color)]">{t('footer.slogan')}</p>
          </div>
          
          <div className="footer-links flex gap-14 flex-col md:flex-row">
            <div className="footer-links-column">
              <h3 className="text-lg mb-5 text-[#f4f8ff]">{t('footer.resources.title')}</h3>
              <ul>
                <li className="mb-2">
                  <Link className="text-[var(--light-text-color)] hover:text-[#cfe0ff]" href="https://docs.astrbot.app">
                    {t('footer.resources.docs')}
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3 className="text-lg mb-5 text-[#f4f8ff]">{t('footer.community.title')}</h3>
              <ul>
                <li className="mb-2">
                  <Link className="text-[var(--light-text-color)] hover:text-[#cfe0ff]" href="https://github.com/AstrBotDevs/AstrBot">
                    {t('footer.community.github')}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-[var(--light-text-color)] hover:text-[#cfe0ff]" href="https://qm.qq.com/cgi-bin/qm/qr?k=wtbaNx7EioxeaqS9z7RQWVXPIxg2zYr7&jump_from=webapi&authKey=vlqnv/AV2DbJEvGIcxdlNSpfxVy+8vVqijgreRdnVKOaydpc+YSw4MctmEbr0k5">
                    {t('footer.community.qq')}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-[var(--light-text-color)] hover:text-[#cfe0ff]" href="https://t.me/+hAsD2Ebl5as3NmY1">
                    {t('footer.community.telegram')}
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3 className="text-lg mb-5 text-[#f4f8ff]">{t('footer.support.title')}</h3>
              <ul>
                <li className="mb-2">
                  <Link className="text-[var(--light-text-color)] hover:text-[#cfe0ff]" href="mailto:soulter@qq.com">
                    {t('footer.support.contact')}
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="text-[var(--light-text-color)] hover:text-[#cfe0ff]" href="https://github.com/AstrBotDevs/AstrBot/issues">
                    {t('footer.support.issues')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="copyright text-center pt-8 border-t border-[var(--border-color)] text-[var(--light-text-color)]">
          <p dangerouslySetInnerHTML={{ __html: t('footer.copyright') }} />
          <p className="mt-2">
            合作伙伴: <Link 
              href="https://www.rainyun.com/NjY3OTQ1_" 
              target="_blank"
              className="underline"
            >
              雨云-新一代云服务商
            </Link>
          </p>
          <p className="mt-2">
            友情链接: <Link 
              href="https://ustb-806.github.io/" 
              target="_blank"
              className="underline"
            >
              北京科技大学 806 学生创新实验室
            </Link>
          </p>
          <p className="mt-2">{t('footer.love')}</p>
        </div>
      </div>
    </footer>
  )
}