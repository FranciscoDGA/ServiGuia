export const DEFAULT_VERCEL_URL = 'https://servi-guia.vercel.app';

export function getSiteUrl() {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || '').trim().replace(/\/$/, '');
  if (!raw) return DEFAULT_VERCEL_URL;
  try {
    return new URL(raw).origin;
  } catch {
    return DEFAULT_VERCEL_URL;
  }
}

export const SITE_URL = getSiteUrl();

export function toAbsoluteUrl(pathOrUrl = '/') {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const cleanPath = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${cleanPath}`;
}
