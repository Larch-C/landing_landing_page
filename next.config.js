/** @type {import('next').NextConfig} */
// const { i18n } = require('./next-i18next.config')

const isProd = process.env.NODE_ENV === 'production'
const isVercel = Boolean(process.env.VERCEL)
const repoName = 'landing_landing_page'

const nextConfig = {
  reactStrictMode: true,
  // i18n, // Disabled for static export
  output: 'export',
  trailingSlash: true,
  // On Vercel, serve from root. For non-Vercel production (e.g. GitHub Pages), serve from repo subpath.
  basePath: isProd && !isVercel ? `/${repoName}` : '',
  assetPrefix: isProd && !isVercel ? `/${repoName}/` : undefined,
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