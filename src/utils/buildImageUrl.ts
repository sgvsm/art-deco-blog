// TODO [STRAPI]: Update base URL when connecting to real Strapi
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';

/**
 * Build full URL for Strapi media
 * In demo mode, returns the URL as-is (external URLs)
 * In production, prepends Strapi base URL
 */
export function buildImageUrl(url: string | undefined): string {
  if (!url) return '/placeholder.jpg';

  // If it's already an absolute URL (demo mode), return as-is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  // For Strapi uploads, prepend base URL
  return `${STRAPI_URL}${url}`;
}
