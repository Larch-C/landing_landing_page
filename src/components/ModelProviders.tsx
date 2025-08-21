import { useI18n } from '../lib/i18n'
import { getAssetPath } from '../lib/config'
import Image from 'next/image'
import Link from 'next/link'

export default function ModelProviders() {
  const { t } = useI18n()

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
    <section className="py-20 pt-0">
      <div className="container">
        <h2 className="text-3xl font-bold text-text text-center mb-4">
          {t('models.title')}
        </h2>
        <p className="text-center mb-4 text-lightText">
          {t('models.subtitle')}
        </p>
        
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {providers.map((provider, index) => {
              const ProviderItem = (
                <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-white hover:shadow-soft transition">
                  <Image 
                    src={provider.icon} 
                    alt={provider.name}
                    width={32}
                    height={32}
                  />
                  <span className="text-sm text-text">{provider.name}</span>
                </div>
              )

              return provider.link ? (
                <Link key={index} href={provider.link} target="_blank" rel="noopener noreferrer">
                  {ProviderItem}
                </Link>
              ) : (
                ProviderItem
              )
            })}
            <div className="flex items-center justify-center px-3 py-2 rounded-lg border border-dashed border-border text-lightText">
              <span>...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}