import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useI18n } from '../src/lib/i18n'
import Layout from '../src/components/Layout'
import Hero from '../src/components/Hero'
import PlatformTabs from '../src/components/PlatformTabs'
import ModelProviders from '../src/components/ModelProviders'
import PluginsSection from '../src/components/PluginsSection'
import CommunityStats from '../src/components/CommunityStats'
import FeaturesSection from '../src/components/FeaturesSection'
import GetStartedSection from '../src/components/GetStartedSection'

interface HomeProps {
  githubData: {
    stars: number
    forks: number
    contributors: number
  }
  pluginsData: Record<string, any>
}

export default function Home({ githubData, pluginsData }: HomeProps) {
  const { t, isLoaded } = useI18n()

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <Head>
        <title>{`AstrBot - ${t('hero.slogan')}`}</title>
        <meta name="description" content={t('hero.subSlogan')} />
        <meta property="og:title" content={`AstrBot - ${t('hero.slogan')}`} />
        <meta property="og:description" content={t('hero.subSlogan')} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Hero />
      <PlatformTabs />
      <ModelProviders />
      <PluginsSection pluginsData={pluginsData} />
      <CommunityStats githubData={githubData} />
      <GetStartedSection />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Load data from checkpoint.json
  const fs = require('fs')
  const path = require('path')
  
  let githubData = { stars: 0, forks: 0, contributors: 0 }
  let pluginsData = {}
  
  try {
    const dataPath = path.join(process.cwd(), 'public', 'data', 'checkpoint.json')
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
    
    githubData = {
      stars: data.github.stars,
      forks: data.github.forks,
      contributors: data.github.contributors
    }
    pluginsData = data.plugins
  } catch (error) {
    console.error('Failed to load data:', error)
  }

  return {
    props: {
      githubData,
      pluginsData,
    },
  }
}