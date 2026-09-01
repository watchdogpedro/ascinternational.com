# Google Search Console Submission — ascinternational.com

**Last updated:** September 1, 2026
**Site:** https://ascinternational.com
**Maintained by:** Winfield Technologies Inc.

> Replaces the February 2025 version of this document, which was written for
> `solderpasteinspection.net` before the domain migration. That domain is now a
> redirect. Everything below is for the current site.

---

## Where the site stands

Verified against production on September 1, 2026:

| Check | Status |
|---|---|
| Site live at https://ascinternational.com | HTTP 200 |
| `sitemap.xml` | 200, 133 URLs, all on `ascinternational.com` |
| PDFs in sitemap | 35 |
| `robots.txt` | Allows crawling, references the sitemap |
| `noindex` tags | None |
| Legacy domains | All four 308 to `ascinternational.com` in one hop |

Nothing on the site side is blocking submission.

### Legacy domain redirects

All verified one-hop, no chains:

- `solderpasteinspection.com` → `ascinternational.com`
- `www.solderpasteinspection.com` → `ascinternational.com`
- `solderpasteinspection.net` → `ascinternational.com`
- `www.solderpasteinspection.net` → `ascinternational.com`

The `.net` redirect target is configured **in the Vercel dashboard**, not in
`next.config.ts`. The values still in `next.config.ts` point at
`solderpasteinspection.com` and are overridden at runtime. Don't "fix" that file
expecting it to change behavior.

---

## Before you start: which Google account

Whichever account verifies the property becomes its long-term owner, and moving
ownership later is awkward. Use the Winfield Workspace account
(`pdenman@winfieldtech.com`) rather than a personal Gmail. ASC's people can be
added as users afterward without giving up ownership.

---

## Step 1 — Add the property

Go to https://search.google.com/search-console and click **Add property**.

Choose **Domain**, not "URL prefix." Enter `ascinternational.com` with no
`https://` and no `www`.

Domain covers `www` and non-`www`, http and https, and any subdomain in a single
property. URL prefix would cover one exact variant, leaving you with several
properties each reporting a slice of the same site.

---

## Step 2 — Verify by DNS

Google shows a TXT record starting `google-site-verification=`. Copy it.

DNS for this domain is at **Cloudflare**. Log in, open `ascinternational.com`,
and go to **DNS → Records**.

### ⚠️ Protect the email records

ASC's email resolves through this same DNS zone. You are **adding** one record.
Do not edit or delete either of these:

| Type | Value | What it does |
|---|---|---|
| MX | `inbound.registeredsite.com` (priority 5) | ASC's inbound mail |
| TXT | `v=spf1 include:spf.registeredsite.com ~all` | Email authentication |

Deleting either one takes ASC's email down.

A related trap from the August 2026 migration: Cloudflare's DNS import turns the
orange proxy **on** by default, which breaks mail routing. Proxy status doesn't
apply to TXT records, so adding this one is safe, but don't let a bulk operation
flip the proxy on the mail records.

### Add the record

Click **Add record**:

- **Type:** TXT
- **Name:** `@`
- **Content:** the `google-site-verification=...` string
- **TTL:** Auto

Save, then click **Verify** in Search Console. Two TXT records on `@` is correct
and expected — the new one sits alongside SPF rather than replacing it.

If verification fails, wait five minutes and retry. Cloudflare usually
propagates in under a minute and failures at this step are almost always timing.

---

## Step 3 — Submit the sitemap

Left sidebar → **Sitemaps**. Enter `sitemap.xml` (the domain is prefilled) and
click **Submit**.

Status should read "Success." The discovered-URL count often shows 0 initially
and fills in within a day. It should reach **133**.

---

## Step 4 — Request indexing on priority pages

Use the **URL Inspection** bar at the top of Search Console. Paste a URL, let it
load, then click **Request Indexing**.

Start with these:

1. `https://ascinternational.com`
2. `https://ascinternational.com/products`
3. `https://ascinternational.com/3d-aoi`
4. `https://ascinternational.com/contact`
5. `https://ascinternational.com/about`

Google caps manual requests at roughly ten per day. The sitemap covers the
remaining 128 URLs, so there's no reason to work through them by hand.

---

## Step 5 — Change of address (the migration step)

**This is the step that carries the old domain's ranking history across, and the
one most likely to get skipped.**

The site moved from `solderpasteinspection.com` on August 19, 2026. The
redirects are correct, so Google will eventually work it out on its own. The
Change of Address tool tells it directly instead of waiting.

**If a Search Console property already exists for the old domain:**
open that property → **Settings** (gear) → **Change of address** → select
`ascinternational.com` as the destination. Google runs its own redirect check
before processing.

**If no property exists for the old domain:** add
`solderpasteinspection.com` as a property using the same Domain method in Step
1, purely so Change of Address becomes available. The redirects are already in
place, so it should verify and process without extra work.

---

## What to expect

The homepage typically indexes within a few days. The full 133 URLs work through
over several weeks.

Expect a large batch of pages sitting in **"Discovered – currently not indexed"**
in the Pages report early on. That's Google's crawl queue, not a rejection, and
it isn't something to act on during the first few weeks.

### The 35 PDFs

The PDF library was catalogued and surfaced in August 2026. Those 35 files are
in the sitemap but have no Search Console history yet.

**Check back around October 1, 2026.** By then there should be enough query and
impression data to see which PDFs earn traffic. That data is what should drive
any decision to prune the library — not guesswork before the numbers exist.

---

## Known issue to watch

`src/lib/site.ts` line 19 sets the site's base URL as:

```
process.env.NEXT_PUBLIC_SITE_URL || 'https://solderpasteinspection.com'
```

The environment variable is set correctly in Vercel today, and production output
confirms every canonical, sitemap entry, and schema URL uses
`ascinternational.com`.

The risk is the fallback. `NEXT_PUBLIC_SITE_URL` is read at **build time**. If it
were ever cleared, renamed, or missing from a new Vercel environment, the next
build would silently emit the old domain across every canonical tag and
structured-data URL on the site. That would be actively harmful right after
submitting to Google.

Changing the fallback to `https://ascinternational.com` removes the landmine
without altering current behavior.

---

## Verification tools

- Rich Results Test — https://search.google.com/test/rich-results
- PageSpeed Insights — https://pagespeed.web.dev/
- Schema validator — https://validator.schema.org/
- Search Console help — https://support.google.com/webmasters

To spot-check indexing progress, search Google for `site:ascinternational.com`.

---

## Ongoing

**Weeks 1–4:** watch the Pages report for coverage errors. Errors are worth
acting on; "Discovered – currently not indexed" is not.

**Month 2 onward:** work the Performance report. Queries ranking in positions
11–20 are the cheapest wins, and pages with high impressions but low clicks
usually need a better title or meta description rather than new content.
