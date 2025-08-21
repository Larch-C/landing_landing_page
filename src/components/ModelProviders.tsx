import { useI18n } from '../lib/i18n'
import { getAssetPath } from '../lib/config'
import { useScrollTrigger, useStaggeredAnimation } from '../lib/useScrollEffects'
import Image from 'next/image'
import Link from 'next/link'

export default function ModelProviders() {
  const { t } = useI18n()
  const [titleRef, titleInView] = useScrollTrigger({ threshold: 0.3 })
  const [gridRef, visibleItems] = useStaggeredAnimation(50)

  const providers = [
    { name: 'OpenAI', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/openai.svg' },
    { name: 'xAI', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/xai.svg' },
    { name: 'Anthropic', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/anthropic.svg' },
    { name: 'Ollama', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/ollama.svg' },
    { name: 'LM Studio', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/lmstudio.svg' },
    { name: 'Gemini', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/gemini-color.svg' },
    { name: 'DeepSeek', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/deepseek.svg' },
    { name: '智谱 AI', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/zhipu.svg' },
    { name: 'Kimi', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/kimi.svg' },
    { name: 'MiniMax', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/minimax.svg' },
    { name: 'FishAudio', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/fishaudio.svg' },
    { name: 'Azure', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/azure.svg' },
    { 
      name: '优云智算', 
      icon: getAssetPath('/assets/ucloud_compshare.png'),
      link: 'https://www.compshare.cn/?ytag=GPU_YY-gh_astrbot&referral_code=FV7DcGowN4hB5UuXKgpE74'
    },
    { 
      name: '302.AI', 
      icon: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/ai302-color.svg',
      link: 'https://share.302.ai/rr1M3l'
    },
    { name: 'PPIO派欧云', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/ppio.svg' },
    { name: '硅基流动', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/siliconcloud.svg' },
    { name: 'Dify', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/dify-color.svg' },
    { name: '阿里云百炼', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/alibabacloud-color.svg' },
    { name: 'FastGPT', icon: 'https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/fastgpt-color.svg' },
  ]

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-steel-200/20 to-steel-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-steel-300/15 to-steel-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Title */}
        <div 
          ref={titleRef as any}
          className={`text-center mb-12 transition-all duration-700 ${
            titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-4">
            {t('models.title')}
          </h2>
          <p className="text-lg text-steel-600 max-w-2xl mx-auto">
            {t('models.subtitle')}
          </p>
        </div>
        
        {/* Providers Grid */}
        <div 
          ref={gridRef as any}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
        >
          {providers.map((provider, index) => {
            const ProviderItem = (
              <div 
                className={`flex flex-col items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-steel-200/50 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group ${
                  visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image 
                    src={provider.icon} 
                    alt={provider.name}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-steel-700 text-center group-hover:text-steel-600 transition-colors duration-300">
                  {provider.name}
                </span>
              </div>
            )

            return provider.link ? (
              <Link key={index} href={provider.link} target="_blank" rel="noopener noreferrer">
                {ProviderItem}
              </Link>
            ) : (
              <div key={index}>
                {ProviderItem}
              </div>
            )
          })}
          
          {/* More indicator */}
          <div className={`flex flex-col items-center gap-3 p-4 bg-gradient-to-br from-steel-100 to-steel-200 rounded-xl border border-steel-300/50 shadow-sm transition-all duration-700 ${
            visibleItems.size > 15 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="w-10 h-10 flex items-center justify-center">
              <i className="fas fa-plus text-steel-500 text-xl" />
            </div>
            <span className="text-sm font-medium text-steel-600 text-center">更多...</span>
          </div>
        </div>

        {/* Provider count */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${
          titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 border border-steel-200/50 shadow-lg">
            <i className="fas fa-robot text-steel-500" />
            <span className="text-steel-600 font-medium">支持</span>
            <span className="text-2xl font-bold gradient-text">{providers.length}+</span>
            <span className="text-steel-600">个模型提供商</span>
          </div>
        </div>
      </div>
    </section>
  )
}