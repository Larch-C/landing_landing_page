import { useState, useEffect } from 'react'

export interface Translations {
  [key: string]: any
}

const translations: Record<string, Translations> = {
  'zh-CN': {
    language: '简体中文',
    nav: {
      quickStart: '快速上手',
      plugin: '插件',
      github: 'GitHub'
    },
    hero: {
      slogan: '多平台大模型机器人基础设施',
      subSlogan: '✨ 快速构建、部署和管理跨平台的智能聊天机器人 ✨',
      startButton: '开始使用',
      githubButton: 'GitHub'
    },
    platforms: {
      title: '多消息平台接入',
      qq: 'QQ',
      wechat: '微信',
      wxkefu: '微信客服',
      wecom: '企业微信应用',
      wxoa: '微信公众号',
      lark: '飞书',
      dingtalk: '钉钉',
      telegram: 'Telegram',
      slack: 'Slack',
      discord: 'Discord',
      kook: 'KOOK',
      vocechat: 'VoceChat'
    },
    models: {
      title: '支持主流模型提供商',
      subtitle: '支持文本生成、图像理解、语音转文本（STT）、文本转语音（TTS）、Embedding 等多种能力'
    },
    plugins: {
      title: '丰富的插件生态',
      subtitle: '众多插件满足各种场景需求，轻松扩展机器人功能'
    },
    community: {
      title: '高度活跃的社区',
      subtitle: '亦有星星火，燎原势竟成。',
      stats: {
        stars: 'GitHub Stars',
        starsDesc: '来自全球社区的认可',
        forks: 'GitHub Forks',
        forksDesc: '活跃的开发者贡献',
        contributors: '贡献者',
        contributorsDesc: '共同建设生态系统',
        plugins: '插件',
        pluginsDesc: '丰富的功能扩展'
      },
      contributorsTitle: '项目贡献者',
      contributorsNote: '感谢每一位开源贡献者。'
    },
    features: {
      title: 'More things...',
      knowledge: {
        title: '📖 知识库',
        desc: 'AstrBot 内置 AI 知识库能力，免除繁杂部署'
      },
      codeExecutor: {
        title: '💻 代码执行器',
        desc: 'AstrBot 支持基于 Docker 的沙箱化代码执行器'
      },
      webSearch: {
        title: '🔍 网页搜索',
        desc: '让大模型接入互联网'
      },
      memory: {
        title: '🌌 长期记忆',
        desc: '基于图和记忆衰退机制的的试验型长期记忆层（即将上线）'
      }
    },
    getStarted: {
      title: '开始使用 🥳',
      subtitle: '支持 Docker、pip、Windows 一键安装器等方式快速部署。',
      docsButton: '查看文档'
    },
    footer: {
      slogan: '大模型多平台机器人基础设施',
      resources: {
        title: '资源',
        docs: '文档'
      },
      community: {
        title: '社区',
        github: 'GitHub',
        qq: 'QQ',
        telegram: 'Telegram'
      },
      support: {
        title: '支持',
        contact: '联系我们',
        issues: '反馈问题'
      },
      copyright: '&copy; 2025 AstrBot. 保留所有权利。本项目受 AGPL-v3 开源许可协议保护。',
      love: 'Made with ❤️ forever.'
    }
  },
  'en-US': {
    language: 'English',
    nav: {
      quickStart: 'Quick Start',
      plugin: 'Plugins',
      github: 'GitHub'
    },
    hero: {
      slogan: 'Multi-platform LLM Bot Infrastructure',
      subSlogan: '✨ Quickly build, deploy and manage cross-platform intelligent chatbots ✨',
      startButton: 'Get Started',
      githubButton: 'GitHub'
    },
    platforms: {
      title: 'Multi-Platform Integration',
      qq: 'QQ',
      wechat: 'WeChat',
      wxkefu: 'WeChat Customer Service',
      wecom: 'WeChat Work',
      wxoa: 'WeChat Official Account',
      lark: 'Lark',
      dingtalk: 'DingTalk',
      telegram: 'Telegram',
      slack: 'Slack',
      discord: 'Discord',
      kook: 'KOOK',
      vocechat: 'VoceChat'
    },
    models: {
      title: 'Support for Mainstream Model Providers',
      subtitle: 'Support for text generation, image understanding, speech-to-text (STT), text-to-speech (TTS), Embedding and other capabilities'
    },
    plugins: {
      title: 'Rich Plugin Ecosystem',
      subtitle: 'Numerous plugins meet various scenario needs and easily extend robot functions'
    },
    community: {
      title: 'Highly Active Community',
      subtitle: 'A single spark can start a prairie fire.',
      stats: {
        stars: 'GitHub Stars',
        starsDesc: 'Recognition from global community',
        forks: 'GitHub Forks',
        forksDesc: 'Active developer contributions',
        contributors: 'Contributors',
        contributorsDesc: 'Building ecosystem together',
        plugins: 'Plugins',
        pluginsDesc: 'Rich functional extensions'
      },
      contributorsTitle: 'Project Contributors',
      contributorsNote: 'Thanks to every open source contributor.'
    },
    features: {
      title: 'More things...',
      knowledge: {
        title: '📖 Knowledge Base',
        desc: 'AstrBot has built-in AI knowledge base capabilities, eliminating complex deployment'
      },
      codeExecutor: {
        title: '💻 Code Executor',
        desc: 'AstrBot supports Docker-based sandboxed code executor'
      },
      webSearch: {
        title: '🔍 Web Search',
        desc: 'Connect large models to the Internet'
      },
      memory: {
        title: '🌌 Long-term Memory',
        desc: 'Experimental long-term memory layer based on graph and memory decay mechanism (coming soon)'
      }
    },
    getStarted: {
      title: 'Get Started 🥳',
      subtitle: 'Support Docker, pip, Windows one-click installer and other ways to quickly deploy.',
      docsButton: 'View Documentation'
    },
    footer: {
      slogan: 'Multi-platform LLM Bot Infrastructure',
      resources: {
        title: 'Resources',
        docs: 'Documentation'
      },
      community: {
        title: 'Community',
        github: 'GitHub',
        qq: 'QQ',
        telegram: 'Telegram'
      },
      support: {
        title: 'Support',
        contact: 'Contact Us',
        issues: 'Report Issues'
      },
      copyright: '&copy; 2025 AstrBot. All rights reserved. This project is protected by AGPL-v3 open source license.',
      love: 'Made with ❤️ forever.'
    }
  },
  'ja-JP': {
    language: '日本語',
    nav: {
      quickStart: 'クイックスタート',
      plugin: 'プラグイン',
      github: 'GitHub'
    },
    hero: {
      slogan: 'マルチプラットフォーム大規模言語モデルボットインフラ',
      subSlogan: '✨ クロスプラットフォームのインテリジェントチャットボットを素早く構築、デプロイ、管理 ✨',
      startButton: '始める',
      githubButton: 'GitHub'
    },
    platforms: {
      title: 'マルチメッセージプラットフォーム統合',
      qq: 'QQ',
      wechat: 'WeChat',
      wxkefu: 'WeChat カスタマーサービス',
      wecom: 'WeChat Work',
      wxoa: 'WeChat 公式アカウント',
      lark: 'Lark',
      dingtalk: 'DingTalk',
      telegram: 'Telegram',
      slack: 'Slack',
      discord: 'Discord',
      kook: 'KOOK',
      vocechat: 'VoceChat'
    },
    models: {
      title: '主流モデルプロバイダーをサポート',
      subtitle: 'テキスト生成、画像理解、音声認識（STT）、音声合成（TTS）、Embedding などの多様な機能をサポート'
    },
    plugins: {
      title: '豊富なプラグインエコシステム',
      subtitle: '多数のプラグインがさまざまなシナリオのニーズを満たし、ロボット機能を簡単に拡張'
    },
    community: {
      title: '非常に活発なコミュニティ',
      subtitle: '星の火も、ついには原野を燃やす。',
      stats: {
        stars: 'GitHub Stars',
        starsDesc: 'グローバルコミュニティからの認知',
        forks: 'GitHub Forks',
        forksDesc: '活発な開発者の貢献',
        contributors: '貢献者',
        contributorsDesc: '共にエコシステムを構築',
        plugins: 'プラグイン',
        pluginsDesc: '豊富な機能拡張'
      },
      contributorsTitle: 'プロジェクト貢献者',
      contributorsNote: 'すべてのオープンソース貢献者に感謝します。'
    },
    features: {
      title: 'その他の機能...',
      knowledge: {
        title: '📖 ナレッジベース',
        desc: 'AstrBot は AI ナレッジベース機能を内蔵し、複雑なデプロイを不要に'
      },
      codeExecutor: {
        title: '💻 コード実行器',
        desc: 'AstrBot は Docker ベースのサンドボックス化されたコード実行器をサポート'
      },
      webSearch: {
        title: '🔍 ウェブ検索',
        desc: '大規模モデルをインターネットに接続'
      },
      memory: {
        title: '🌌 長期記憶',
        desc: 'グラフと記憶減衰メカニズムに基づく実験的な長期記憶層（近日公開予定）'
      }
    },
    getStarted: {
      title: '始める 🥳',
      subtitle: 'Docker、pip、Windows ワンクリックインストーラーなどの方法で迅速にデプロイをサポート。',
      docsButton: 'ドキュメントを見る'
    },
    footer: {
      slogan: 'マルチプラットフォーム大規模言語モデルボットインフラ',
      resources: {
        title: 'リソース',
        docs: 'ドキュメント'
      },
      community: {
        title: 'コミュニティ',
        github: 'GitHub',
        qq: 'QQ',
        telegram: 'Telegram'
      },
      support: {
        title: 'サポート',
        contact: 'お問い合わせ',
        issues: '問題を報告'
      },
      copyright: '&copy; 2025 AstrBot. 全著作権所有。このプロジェクトは AGPL-v3 オープンソースライセンスで保護されています。',
      love: '❤️ で永遠に作られました。'
    }
  }
}

export const supportedLocales = ['zh-CN', 'en-US', 'ja-JP']
export const defaultLocale = 'zh-CN'

export function useI18n() {
  const [locale, setLocale] = useState(defaultLocale)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Get saved locale from localStorage or detect browser language
    const savedLocale = localStorage.getItem('locale')
    const browserLang = navigator.language || navigator.languages?.[0]
    
    let initialLocale = savedLocale || browserLang || defaultLocale
    
    // Check if the locale is supported
    if (!supportedLocales.includes(initialLocale)) {
      // Try to match with the main language part
      const mainLang = initialLocale.split('-')[0]
      const matchedLocale = supportedLocales.find(lang => lang.startsWith(mainLang))
      initialLocale = matchedLocale || defaultLocale
    }
    
    setLocale(initialLocale)
    setIsLoaded(true)
    
    // Update document language and font
    document.documentElement.lang = initialLocale
    document.documentElement.classList.remove('lang-zh-CN', 'lang-en-US', 'lang-ja-JP')
    document.documentElement.classList.add(`lang-${initialLocale}`)
  }, [])

  const changeLocale = (newLocale: string) => {
    if (supportedLocales.includes(newLocale)) {
      setLocale(newLocale)
      localStorage.setItem('locale', newLocale)
      
      // Update document language and font
      document.documentElement.lang = newLocale
      document.documentElement.classList.remove('lang-zh-CN', 'lang-en-US', 'lang-ja-JP')
      document.documentElement.classList.add(`lang-${newLocale}`)
    }
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let result: any = translations[locale]
    
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k]
      } else {
        console.warn(`Translation key "${key}" not found for locale "${locale}"`)
        return key
      }
    }
    
    return typeof result === 'string' ? result : key
  }

  return {
    locale,
    changeLocale,
    t,
    isLoaded
  }
}