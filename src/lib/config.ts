// Configuration for different deployment environments
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'landing_landing_page'
const explicitBase = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const config = {
  // Use explicit base for non-root deployments; default empty for Vercel root
  basePath: explicitBase,
  assetPrefix: explicitBase ? (explicitBase.endsWith('/') ? explicitBase : `${explicitBase}/`) : '',
}

export function getAssetPath(path: string): string {
  return `${config.basePath}${path}`
}