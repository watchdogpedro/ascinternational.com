/**
 * Single source of truth for this site's public origin.
 *
 * Everything that emits an absolute URL — canonicals, OpenGraph tags,
 * JSON-LD schema, sitemaps, robots.txt — must read from here. Before this
 * existed the domain was hardcoded in 112 places across 52 files, which made
 * a domain change a 52-file edit.
 *
 * The domain is switched by ENVIRONMENT VARIABLE, not by editing code:
 *
 *   NEXT_PUBLIC_SITE_URL=https://ascinternational.com
 *
 * Set that in the Vercel project on cutover day and the whole site — every
 * canonical, every schema block, the sitemap — flips at once. Leave it unset
 * and the site continues to identify as solderpasteinspection.com, which is
 * why this file is safe to ship to production ahead of the cutover.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://solderpasteinspection.com'
).replace(/\/$/, '')

/** Bare hostname, for prose ("...visitors to ascinternational.com"). */
export const SITE_DOMAIN = SITE_URL.replace(/^https?:\/\//, '')
