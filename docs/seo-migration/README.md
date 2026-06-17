# ASC International — SEO / AI-Search Migration Strategy

**Context:** Replatforming **ascinternational.com** from its long-established WordPress site (Rank Math SEO) to a new Next.js build (this repo, currently live at solderpasteinspection.com), deployed on the **same `ascinternational.com` domain**. Goal: preserve years of Google rankings + grow AI-answer (AEO/GEO) visibility and schema value.

> Researched across 20 sources and adversarially fact-checked (22 claims confirmed, 3 weak claims discarded). Core conclusions rest on primary Google Search Central and Next.js documentation. Prepared June 2026.

---

## ⭐ The core question: do the page names matter?

**No — identical page names/URL slugs are NOT a Google ranking factor.** What carries rankings from an old page to a new one is a **301 redirect**. Google's own migration docs state it verbatim: *"301 and other permanent redirects don't cause a loss in PageRank."*

- The menu wording ("Solutions" vs "Products") is a **branding choice only** — Google ranks **URLs**, not menu labels.
- You can adopt cleaner new URLs **without losing rankings**, as long as every old URL 301-redirects to its closest new equivalent.
- **The one catastrophic mistake:** wiping the WordPress site with **no redirects**. Old URLs 404, get de-indexed, and the documented result is a **20–60% traffic loss within ~2 weeks.** Entirely preventable.

```
[ OLD indexed URL ]  --301 redirect-->  [ NEW URL (any name) ]
/smt-inspection/solder-paste-inspection/   →   your new cleaner URL
   the redirect — not a matching name — moves the rankings
```

---

## Recommendations (priority order)

1. **Build the redirect map BEFORE launch.** The single most important deliverable. Pair every old indexed URL with its closest new page. Source URLs from the old sitemaps + Google Search Console + backlink data so nothing high-value is missed.
2. **Reuse good old URLs where easy.** Paths like `/smt-inspection/solder-paste-inspection/` are already keyword-rich and proven. A kept URL needs **no redirect = zero risk**. Only change a URL where there's a real reason, and 301 those.
3. **Never funnel everything to the homepage.** Each old page → its real match (product→product, guide→guide). Homepage-dumping is treated as a soft 404 and drains ranking power.
4. **For AI search, skip the gimmicks.** Google's official May 2026 stance: *"optimizing for generative AI search is still SEO."* No `llms.txt`, no special markup. To get cited: front-load a plain-English answer in the first ~150 words, then clear headings, FAQ Q&A, spec tables.
5. **Lean into the single-topic focus.** A site only about SPI/AOI builds the "topical authority" Google rewards and gives AI engines clean expert passages to quote. Redirect old off-topic articles into relevant SPI/AOI content instead of carrying them over.
6. **Keep schema, right-sized.** Organization, Product, FAQPage, BreadcrumbList earn classic rich results. *Helpful but not required* for AI citation — content quality is the real lever there.

---

## Do / Don't cheat sheet

| ✅ DO | ✕ DON'T |
|------|---------|
| Build the complete redirect map **first** | Wipe the old site with no redirects in place |
| Reuse proven, keyword-rich old URLs | Redirect everything to the homepage |
| Server-side render so Google sees content w/o JS | Change URLs with no real reason |
| Unique title + meta description per page | Rely on `llms.txt` / AI gimmicks |
| Submit the new sitemap in Search Console | Let pages load only via client-side JS |
| Keep the old site reachable so redirects fire | Strip out the titles/descriptions Rank Math set |
| Watch 404s for ~30 days after launch | Take the old domain offline too early |

---

## Migration checklist (canonical, Google-aligned)

1. Audit + **map every old URL** to its new equivalent.
2. Implement **server-side 301 redirects**, collapsed to a single hop (no chains).
3. Update **internal links** to the new URLs.
4. Set **canonical tags** to the new URLs.
5. Submit a **new sitemap.xml**; keep the old one reachable temporarily, then drop it.
6. Verify in **Search Console**; use URL Inspection to request indexing.
7. **Monitor** Coverage / 404s for ~30 days.

> Note: because the domain stays `ascinternational.com`, the Search Console **Change of Address tool does NOT apply** (it's only for domain-level moves).

---

## AEO / GEO notes (getting cited by AI)

- AI engines retrieve and quote self-contained **passages**, not whole pages (RAG: chunk → embed → retrieve). The unit of optimization shifts from page → passage.
- Front-load the direct answer (~first 150–200 words get cited most), use Q&A formatting, tables for specs, and demonstrate E-E-A-T with citations.
- Precise industry terms ("SPI", "AOI", "solder paste inspection") **help** — hybrid retrieval still rewards exact technical vocabulary. Jargon is an asset in this niche.

## Next.js technical guardrails

- **Server-render** content (SSR/SSG) so crawlers see it without running JS — the classic replatform failure is JS-only content.
- Use the **App Router Metadata API** (`export const metadata` / `generateMetadata`) for per-page titles + descriptions (not legacy `next/head`).
- Generate a real `app/sitemap.ts` (sitemap.xml) + `robots.txt`.
- Inject JSON-LD via `<script type="application/ld+json">`.

---

## Old site URL inventory (ascinternational.com — for the redirect map)

Pulled from the live WordPress site (Rank Math sitemap index has 5 sitemaps: post, page, product, wpsl_stores, local). **Partial list — the 3 unopened sitemaps (blog posts, all products, store locator) still need pulling for a complete map.**

**Core technology / solutions**
- `/smt-inspection/`
- `/smt-inspection/solder-paste-inspection/`
- `/smt-inspection/automated-optical-inspection/`
- `/smt-inspection/universal-product-inspection/`
- `/smt-inspection/digital-video-inspection/`
- `/smt-inspection/pre-owned-refurbished/`
- `/industrial-metrology/`
- `/industrial-metrology/3d-laser-scanning-systems/`
- `/industrial-metrology/3d-laser-scanners/`
- `/industrial-metrology/contract-inspection-services/`

**Products**
- `/product/visionpro-m500/`
- `/product/linemaster-dmi/`
- `/product/linemaster-fusion-3d/`
- `/product/linemaster-fusion-dmi/`
- `/product/linemaster-falcon/`
- `/product/av-880-series/`
- `/product/visionpro-merlin/`
- `/product/visionpro-merlin-xl/`
- `/product/cyberoptics-se-series/`
- `/product-category/automated-optical-inspection/`
- `/product-category/solder-paste-inspection/`
- `/product-category/refurbished-aoi-spi/`

**Resources / process control**
- `/process-control/`
- `/process-control/solder-paste-measurement-justification/` (SPI ROI calculator)
- `/process-control/yield-improvement-strategies/`
- `/process-control/stamp-out-rework/`
- `/process-control/billions-of-solder-joints/`
- `/resources/`
- `/resources/user-manuals-guides/`
- `/resources/software-downloads/`
- `/resources/troubleshooting-guides/`
- `/support/`
- `/shop/`

**Company / misc**
- `/` `/about-us/` `/careers/` `/contact-us/` `/sitemap/` `/privacy-policy/` `/products-services-quicklist/` `/blog/` `/news/`
- Article/history pages under `/history/`, `/3d-aoi/`, `/3d-spi/` (long-tail, many)
- `/category/resources/` `/category/history/` `/category/3d-aoi/`
- Legacy archive: `w2.ascinternational.com`

---

## Open questions / next steps

- Pull the **3 remaining sitemaps** (post/product/store) for a complete URL list.
- Export **Search Console Pages report + backlinks** to rank which legacy URLs carry the most equity (preserve/redirect those first).
- Decide disposition of off-topic legacy blog/history articles: redirect to relevant content vs consolidate vs 410.
- Baseline AI-citation audit (AI Overviews / Perplexity / ChatGPT) for queries like "best solder paste inspection system" — to measure GEO gains post-migration.

---

## Sources

- Google Search Central — *Site moves with URL changes* (primary; the 301/PageRank guidance)
- Google Search Central — *AI features & your website / AI-optimization guide* (May 2026)
- Search Engine Journal — *Website Migration Guide*
- Next.js Official Docs — *SEO & Metadata*
- Practitioner case studies — americaneagle, flyn.to, circlesstudio, refact, paralleldevs
- GEO research — *"Generative Engine Optimization"* peer-reviewed study + 2026 AI-citation analyses

*Caveat: exact percentages (e.g. "20–60% drop") are directional. AI-search guidance reflects Google's May 2026 documentation and should be re-checked periodically.*
