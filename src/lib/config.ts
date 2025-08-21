// Configuration for different deployment environments
const isProd = process.env.NODE_ENV === 'production'
const isVercel = Boolean(process.env.VERCEL)
const repoName = 'landing_landing_page'

export const config = {
  // Prefer runtime env injected from next.config.js so client and server match
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || (isProd && !isVercel ? `/${repoName}` : ''),
  assetPrefix: (process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/` : undefined) || (isProd && !isVercel ? `/${repoName}/` : ''),
}

export function getAssetPath(path: string): string {
  return `${config.basePath}${path}`
}