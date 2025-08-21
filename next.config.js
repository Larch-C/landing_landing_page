/** @type {import('next').NextConfig} */
// const { i18n } = require('./next-i18next.config')

const isProd = process.env.NODE_ENV === 'production'
const repoName = 'landing_landing_page'
// Prefer explicit env; if not provided, default to empty (Vercel root)
const explicitBase = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  reactStrictMode: true,
  // i18n, // Disabled for static export
  output: 'export',
  trailingSlash: true,
  // Use explicit base path when provided (e.g., GH Pages). Vercel should leave this empty.
  basePath: explicitBase,
  assetPrefix: explicitBase ? (explicitBase.endsWith('/') ? explicitBase : `${explicitBase}/`) : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: explicitBase,
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