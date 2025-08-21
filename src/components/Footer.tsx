import { useI18n } from '../lib/i18n'
import Link from 'next/link'

export default function Footer() {
  const { t } = useI18n()

  interface FooterLink {
    name: string
    href: string
    icon?: string
  }

  const footerLinks = [
    {
      title: t('footer.resources.title'),
      links: [
        { name: t('footer.resources.docs'), href: 'https://docs.astrbot.app' }
      ] as FooterLink[]
    },
    {
      title: t('footer.community.title'),
      links: [
        { name: t('footer.community.github'), href: 'https://github.com/AstrBotDevs/AstrBot', icon: 'fab fa-github' },
        { name: t('footer.community.qq'), href: 'https://qm.qq.com/cgi-bin/qm/qr?k=wtbaNx7EioxeaqS9z7RQWVXPIxg2zYr7&jump_from=webapi&authKey=vlqnv/AV2DbJEvGIcxdlNSpfxVy+8vVqijgreRdnVKOaydpc+YSw4MctmEbr0k5', icon: 'fab fa-qq' },
        { name: t('footer.community.telegram'), href: 'https://t.me/+hAsD2Ebl5as3NmY1', icon: 'fab fa-telegram' }
      ] as FooterLink[]
    },
    {
      title: t('footer.support.title'),
      links: [
        { name: t('footer.support.contact'), href: 'mailto:soulter@qq.com', icon: 'fas fa-envelope' },
        { name: t('footer.support.issues'), href: 'https://github.com/AstrBotDevs/AstrBot/issues', icon: 'fas fa-bug' }
      ] as FooterLink[]
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-steel-900 via-steel-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-steel-400 to-steel-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-steel-500 to-steel-700 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-steel-200 bg-clip-text text-transparent mb-4">
              AstrBot
            </h2>
            <p className="text-steel-300 text-lg leading-relaxed mb-6">
              {t('footer.slogan')}
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              <a href="https://github.com/AstrBotDevs/AstrBot" target="_blank" className="w-12 h-12 bg-steel-700/50 hover:bg-steel-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <i className="fab fa-github text-xl group-hover:text-white" />
              </a>
              <a href="https://qm.qq.com/cgi-bin/qm/qr?k=wtbaNx7EioxeaqS9z7RQWVXPIxg2zYr7&jump_from=webapi&authKey=vlqnv/AV2DbJEvGIcxdlNSpfxVy+8vVqijgreRdnVKOaydpc+YSw4MctmEbr0k5" target="_blank" className="w-12 h-12 bg-steel-700/50 hover:bg-steel-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <i className="fab fa-qq text-xl group-hover:text-white" />
              </a>
              <a href="https://t.me/+hAsD2Ebl5as3NmY1" target="_blank" className="w-12 h-12 bg-steel-700/50 hover:bg-steel-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                <i className="fab fa-telegram text-xl group-hover:text-white" />
              </a>
            </div>
          </div>
          
          {/* Links sections */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-semibold text-white">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="flex items-center gap-3 text-steel-300 hover:text-white transition-colors duration-300 group"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                    >
                      {link.icon && (
                        <i className={`${link.icon} text-sm group-hover:scale-110 transition-transform duration-300`} />
                      )}
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-steel-700/50 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-steel-400">
            {/* Copyright */}
            <div>
              <p dangerouslySetInnerHTML={{ __html: t('footer.copyright') }} />
            </div>
            
            {/* Partners */}
            <div>
              <p>
                合作伙伴: <Link 
                  href="https://www.rainyun.com/NjY3OTQ1_" 
                  target="_blank"
                  className="text-steel-300 hover:text-white transition-colors duration-300 underline decoration-steel-500 hover:decoration-white"
                >
                  雨云-新一代云服务商
                </Link>
              </p>
            </div>
            
            {/* Friends */}
            <div>
              <p>
                友情链接: <Link 
                  href="https://ustb-806.github.io/" 
                  target="_blank"
                  className="text-steel-300 hover:text-white transition-colors duration-300 underline decoration-steel-500 hover:decoration-white"
                >
                  北京科技大学 806 学生创新实验室
                </Link>
              </p>
            </div>
          </div>
          
          {/* Love message */}
          <div className="text-center mt-6 pt-6 border-t border-steel-700/30">
            <p className="text-steel-400 flex items-center justify-center gap-2">
              {t('footer.love')}
              <i className="fas fa-heart text-red-500 animate-pulse" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}