// Configuration for different deployment environments
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'landing_landing_page'

export const config = {
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}` : '',
}

export function getAssetPath(path: string): string {
  return `${config.basePath}${path}`
}