/** @type {import('next').NextConfig} */
// const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  // i18n, // Disabled for static export
  output: 'export',
  trailingSlash: true,
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
  async rewrites() {
    return [
      {
        source: '/data/:path*',
        destination: '/api/data/:path*',
      },
    ]
  },
}

module.exports = nextConfig