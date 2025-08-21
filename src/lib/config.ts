// Configuration for different deployment environments
const isProd = process.env.NODE_ENV === 'production'
const isVercel = Boolean(process.env.VERCEL)
const repoName = 'landing_landing_page'

export const config = {
  // Match next.config.js: only add subpath in non-Vercel production (e.g., GitHub Pages)
  basePath: isProd && !isVercel ? `/${repoName}` : '',
  assetPrefix: isProd && !isVercel ? `/${repoName}/` : '',
}

export function getAssetPath(path: string): string {
  return `${config.basePath}${path}`
}