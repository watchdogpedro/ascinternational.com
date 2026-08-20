# Phase 2 — moving this site onto ascinternational.com

**Status:** code complete, not yet switched on.
**Everything on this branch is inert until two environment variables are set.**

This is the plain-English version. The confidential half of the story —
account IDs, DNS records, who controls what — lives in
`watchdogpedro/asc-old-site-archive` → `docs/DOMAIN-HANDOVER-RUNBOOK.md`,
which is private. This repo is public, so nothing sensitive goes here.

---

## Why this was a job at all

ASC has two web addresses:

| Domain | What it is |
|---|---|
| `ascinternational.com` | Registered 1999. 27 years of Google trust. The valuable one. |
| `solderpasteinspection.com` | Where this new site currently lives. |

The plan is to make **ascinternational.com** the real address for this site,
and have solderpasteinspection.com forward to it.

Two things had to be built first.

---

## 1. The domain was hardcoded in 112 places

Canonical tags, OpenGraph tags and JSON-LD schema all embed the site's full
address. `https://solderpasteinspection.com` was typed out literally in **112
places across 52 files**. Changing domains meant editing 52 files and hoping
none were missed.

That is now **one file**: `src/lib/site.ts`.

```
NEXT_PUBLIC_SITE_URL=https://ascinternational.com
```

Set that one variable and every canonical, every schema block, the sitemap and
robots.txt all flip together. Leave it unset and the site keeps calling itself
solderpasteinspection.com — **which is why this branch is safe to merge before
cutover day.**

## 2. The old WordPress site had 215 live URLs

The old ascinternational.com had 215 indexed pages. When the domain starts
pointing here, every one of those must land somewhere sensible — otherwise
27 years of Google authority drains into 404s.

`next.config.ts` previously covered about 30 of them. It now covers **all 215**:

- **7** already exist here at the identical path (`/blog`, `/careers`,
  `/privacy-policy`, `/resources`, and the three `/resources/*` pages) and need
  no rule.
- **208** have an explicit redirect to the closest matching page.
- **11** wildcard catch-alls sit underneath, so a URL nobody knew about still
  lands on the right section instead of a 404.

**Not one redirect points at the homepage.** Google reads a mass redirect-to-
homepage as a soft 404 and discards the link value, which would waste the whole
exercise. The one exception is the old `/index` page, which *is* the homepage.

The full old-URL → new-URL table is in **`docs/redirect-map.csv`**. That file
is the source of truth; `next.config.ts` is generated from it.

### How the 208 were matched

The old site was mostly AI-generated location spam ("CyberOptics LSM in North
Dakota", "3D SPI in Hawaii" — 110-odd of them). Those were matched on the
product name in the URL first, then on topic:

| Old page is about | Goes to |
|---|---|
| A product still sold | That product's page |
| A discontinued CyberOptics model (LSM, QX, SE 200/300) | `/services/pre-owned-systems` — which lists those exact models |
| The legacy VisionMaster line | The VisionPro model that replaced it |
| AOI generally | `/products/automated-optical-inspection` |
| SPI / solder paste generally | `/products/3d-solder-paste-inspection` |
| A dealer or distributor | `/about/global-support` |
| The company itself | `/about/company` |

### Verified, not assumed

Against a production build of this site:

- **208 / 208** redirects return a permanent redirect to the exact intended URL.
- **41 / 41** distinct destination pages return HTTP 200. No redirect lands on
  a dead page.
- **0** redirect rules shadow a real page on this site.

> Next.js emits **308** rather than 301. Both are permanent redirects and
> Google treats them identically for passing link authority.

## 3. The old site's 46 PDFs

Not in any sitemap, so easy to miss — the old site serves **46 product PDFs**
(brochures, datasheets, training manuals) under `/wp-content/uploads/...` and
`/userfiles/file/...`. All 46 are live and returning 200 today.

Google indexes PDFs directly, distributors link to datasheets, and ASC's sales
people email these links. Pointing the domain at a site that doesn't have them
would 404 every one.

All 46 are now committed to `public/` **at their exact original paths**, so the
existing URLs keep working unchanged after cutover. No redirects needed and
nothing to maintain — they are static files.

Verified: all 46 reconstructed URLs return 200 on the live old site, and all 46
serve correctly from this site with `content-type: application/pdf`.

> These are not yet linked from anywhere in the new site's navigation — they
> exist so old links don't break. Surfacing them on the product and Resources
> pages is worth doing separately.

---

## Cutover day — the actual steps

Do these in order. Steps 1–2 are the only ones that change anything visible.

1. **Add the domain in Vercel.** Project → Settings → Domains → add
   `ascinternational.com` and `www.ascinternational.com`. Vercel will show the
   DNS records it wants.

2. **Point the DNS at Vercel** in ASC's own Cloudflare account.
   > ⚠️ **Touch only the A and CNAME records for the website.** Do not touch
   > MX, SPF, DMARC or the `mail`/`smtp`/`imap`/`pop` records — those are ASC's
   > company email and deleting one kills their mail instantly.
   > ⚠️ Every record stays **DNS only** (grey cloud). Cloudflare's proxy in
   > front of Vercel stacks two CDNs and causes caching problems.

3. **Set the two environment variables** in Vercel → Settings → Environment
   Variables (Production):

   ```
   NEXT_PUBLIC_SITE_URL=https://ascinternational.com
   NEXT_PUBLIC_CANONICAL_HOST=ascinternational.com
   ```

4. **Redeploy.** These are build-time variables — they do nothing until a fresh
   deploy runs.

5. **Check it.** `ascinternational.com` serves this site; a handful of old URLs
   from `docs/redirect-map.csv` land on the right pages;
   `solderpasteinspection.com/anything` forwards to
   `ascinternational.com/anything`.

6. **Submit the new sitemap** in Google Search Console and watch the 404 report
   for about 30 days.

### Two things that will cost real traffic if ignored

> **Leave the old WordPress site up for ~30 days after cutover.** Google needs
> to actually crawl the 301s. Taking it down early is the documented way to
> lose 20–60% of traffic inside two weeks.

> **Do not cancel the Network Solutions hosting plan.** ASC's mailboxes are
> almost certainly bundled with it. Cancelling the hosting kills the email.

---

## Rolling it back

Delete the two environment variables and redeploy. The site reverts to
identifying as solderpasteinspection.com and the host redirect disappears.
The 208 legacy redirects stay — they are harmless, because those URLs never
existed on this domain.
