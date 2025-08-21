// Configuration for different deployment environments
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const config = {
  basePath,
  assetPrefix: basePath,
}

export function getAssetPath(path: string): string {
  if (!path.startsWith('/')) return `${config.basePath}/${path}`
  return `${config.basePath}${path}`
}