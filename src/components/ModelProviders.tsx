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
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <h2 className="section-title mb-3 text-center text-3xl font-bold text-[#f4f8ff]">
          {t('models.title')}
        </h2>
        <p className="text-center mb-8 text-[#dbe9ff]">
          {t('models.subtitle')}
        </p>
        
        <div className="model-providers-container max-w-[1000px] mx-auto py-6">
          <div className="rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-4 sm:p-6">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
              {providers.map((provider, index) => {
                const ProviderItem = (
                  <div key={index} className="provider-item">
                    <div className="relative p-[1px] rounded-xl bg-gradient-to-b from-sky-400/40 via-cyan-300/20 to-transparent">
                      <div className="rounded-[11px] bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center py-4 px-2 transition will-change-transform hover:-translate-y-[2px] hover:bg-white/10">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <Image 
                            src={provider.icon} 
                            alt={provider.name}
                            width={28}
                            height={28}
                          />
                        </div>
                        <span className="text-center text-[11px] text-[#dbe9ff] font-medium mt-2">{provider.name}</span>
                      </div>
                    </div>
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
              <div className="provider-item">
                <div className="rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center py-4 px-2">
                  <span className="text-[#cfe0ff]">...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}