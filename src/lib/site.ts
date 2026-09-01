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
 * Set that in the Vercel project and the whole site — every canonical, every
 * schema block, the sitemap — reads from it at once.
 *
 * The cutover to ascinternational.com happened on 2026-08-19. Until then the
 * fallback below was deliberately solderpasteinspection.com, so this file
 * could ship ahead of the switch without changing the live domain. That is no
 * longer the right default.
 *
 * NEXT_PUBLIC_SITE_URL is read at BUILD time. If it is ever cleared, renamed,
 * or missing from a new Vercel environment, every absolute URL on the site
 * falls back to whatever is below. It must name the live domain.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://ascinternational.com'
).replace(/\/$/, '')

/** Bare hostname, for prose ("...visitors to ascinternational.com"). */
export const SITE_DOMAIN = SITE_URL.replace(/^https?:\/\//, '')
