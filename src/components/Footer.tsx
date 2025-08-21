import { useI18n } from '../lib/i18n'
import Link from 'next/link'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>AstrBot</h2>
            <p>{t('footer.slogan')}</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>{t('footer.resources.title')}</h3>
              <ul>
                <li>
                  <Link href="https://docs.astrbot.app">
                    {t('footer.resources.docs')}
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>{t('footer.community.title')}</h3>
              <ul>
                <li>
                  <Link href="https://github.com/AstrBotDevs/AstrBot">
                    {t('footer.community.github')}
                  </Link>
                </li>
                <li>
                  <Link href="https://qm.qq.com/cgi-bin/qm/qr?k=wtbaNx7EioxeaqS9z7RQWVXPIxg2zYr7&jump_from=webapi&authKey=vlqnv/AV2DbJEvGIcxdlNSpfxVy+8vVqijgreRdnVKOaydpc+YSw4MctmEbr0k5">
                    {t('footer.community.qq')}
                  </Link>
                </li>
                <li>
                  <Link href="https://t.me/+hAsD2Ebl5as3NmY1">
                    {t('footer.community.telegram')}
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>{t('footer.support.title')}</h3>
              <ul>
                <li>
                  <Link href="mailto:soulter@qq.com">
                    {t('footer.support.contact')}
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/AstrBotDevs/AstrBot/issues">
                    {t('footer.support.issues')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="copyright">
          <p dangerouslySetInnerHTML={{ __html: t('footer.copyright') }} />
          <p style={{ marginTop: '8px' }}>
            合作伙伴: <Link 
              href="https://www.rainyun.com/NjY3OTQ1_" 
              target="_blank"
              style={{ textDecoration: 'underline' }}
            >
              雨云-新一代云服务商
            </Link>
          </p>
          <p style={{ marginTop: '8px' }}>
            友情链接: <Link 
              href="https://ustb-806.github.io/" 
              target="_blank"
              style={{ textDecoration: 'underline' }}
            >
              北京科技大学 806 学生创新实验室
            </Link>
          </p>
          <p style={{ marginTop: '8px' }}>{t('footer.love')}</p>
        </div>
      </div>
    </footer>
  )
}