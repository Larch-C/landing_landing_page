import { useI18n } from '../lib/i18n'
import Link from 'next/link'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-lightBackground mt-12">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-text">AstrBot</h2>
            <p className="text-lightText mt-2">{t('footer.slogan')}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-text mb-2">{t('footer.resources.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-primary" href="https://docs.astrbot.app">
                  {t('footer.resources.docs')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-text mb-2">{t('footer.community.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-primary" href="https://github.com/AstrBotDevs/AstrBot">
                  {t('footer.community.github')}
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="https://qm.qq.com/cgi-bin/qm/qr?k=wtbaNx7EioxeaqS9z7RQWVXPIxg2zYr7&jump_from=webapi&authKey=vlqnv/AV2DbJEvGIcxdlNSpfxVy+8vVqijgreRdnVKOaydpc+YSw4MctmEbr0k5">
                  {t('footer.community.qq')}
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="https://t.me/+hAsD2Ebl5as3NmY1">
                  {t('footer.community.telegram')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-text mb-2">{t('footer.support.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-primary" href="mailto:soulter@qq.com">
                  {t('footer.support.contact')}
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="https://github.com/AstrBotDevs/AstrBot/issues">
                  {t('footer.support.issues')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-6 text-sm text-lightText">
          <p dangerouslySetInnerHTML={{ __html: t('footer.copyright') }} />
          <p className="mt-2">
            合作伙伴: <Link 
              href="https://www.rainyun.com/NjY3OTQ1_" 
              target="_blank"
              style={{ textDecoration: 'underline' }}
            >
              雨云-新一代云服务商
            </Link>
          </p>
          <p className="mt-2">
            友情链接: <Link 
              href="https://ustb-806.github.io/" 
              target="_blank"
              style={{ textDecoration: 'underline' }}
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