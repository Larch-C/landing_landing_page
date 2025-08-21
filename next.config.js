/** @type {import('next').NextConfig} */
// const { i18n } = require('./next-i18next.config')

const isGithubActions = process.env.GITHUB_ACTIONS === 'true'
const repoName = (process.env.GITHUB_REPOSITORY && process.env.GITHUB_REPOSITORY.split('/')[1]) || 'landing_landing_page'
const computedBasePath = isGithubActions ? `/${repoName}` : ''

const nextConfig = {
  reactStrictMode: true,
  // i18n, // Disabled for static export
  output: 'export',
  trailingSlash: true,
  basePath: computedBasePath,
  assetPrefix: computedBasePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: computedBasePath,
    NEXT_PUBLIC_ENABLE_SPEED_INSIGHTS: process.env.NEXT_PUBLIC_ENABLE_SPEED_INSIGHTS || '0',
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'registry.npmmirror.com',
      },
      {
        protocol: 'https',
        hostname: 'trendshift.io',
      },
      {
        protocol: 'https',
        hostname: 'contrib.rocks',
      },
    ],
  },
}

module.exports = nextConfig