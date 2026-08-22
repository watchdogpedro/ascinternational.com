# Site Visitors — Company Identification (Design / Plan)

**Status:** Planned — not built yet. Saved for a later work session.
**Date:** 2026-08-21
**Goal:** Add "who is looking at your website" functionality (à la Visual Visitor / Leadfeeder)
to this site (which serves both solderpasteinspection.com and ascinternational.com from the
same Vercel deployment).

---

## Decisions made during brainstorming

| Decision | Choice |
|---|---|
| **Depth** | **Company-level** (identify the *company/organization*, not named individuals). Build it ourselves. |
| **Why not person-level** | Named-person + email de-anonymization (what Visual Visitor advertises) requires paying a 3rd-party data broker + their pixel + heavier GDPR/CCPA exposure. Deferred. |
| **Output** | **Dashboard + email alerts** — a private dashboard page AND an email when a new company appears. |
| **Budget** | **Free tier to start** — IPinfo free token + Supabase free tier. Upgradeable later. |
| **Email** | Reuse existing **nodemailer** setup (already used by the contact form). No new email service. |

---

## Architecture (4 pieces)

1. **Tracker snippet** — a lightweight client-side beacon loaded site-wide (via the root
   layout) that pings `/api/track` on each page view. Requiring a real browser naturally
   filters out most bots.

2. **Lookup endpoint — `/api/track` (Node serverless)** — reads the visitor's IP from request
   headers (`x-forwarded-for`), calls **IPinfo** to resolve the owning organization/ASN, and
   keeps only hits that resolve to a real business. Consumer ISPs (Comcast, Verizon, mobile,
   hosting/cloud ASNs) are filtered out and discarded.
   - Isolate the provider call behind one function (e.g. `lib/ip-to-company.ts`) so the free
     IPinfo lookup can be swapped for a paid "IP to Company" API later with a one-line change.

3. **Storage — Supabase** — a `visits` table.
   - Suggested columns: `id`, `created_at`, `company_org` (ASN/org name), `company_domain`
     (null on free tier), `city`, `region`, `country`, `page_path`, `referrer`, `user_agent`,
     and optionally a hashed/truncated IP (see Privacy).
   - Dashboard aggregates by company at query time (no separate rollup table needed for v1).

4. **Consumption**
   - **Dashboard** at `/admin/visitors`, password-protected (simple gate: a shared password in
     an env var → sets a cookie → middleware protects the route). Lists companies, visit counts,
     pages viewed, last-seen.
   - **Email alert** via nodemailer the first time each *new* company is seen. Throttle to one
     alert per company per day so it doesn't spam the inbox.

---

## Honest expectations / limitations

- **Match rate is modest — ~5–15% of traffic.** Only visitors on real corporate networks get
  identified; everyone on home/mobile internet is invisible. This is true of Visual Visitor and
  every competitor — it's inherent to IP-based identification.
- **Free tier skews to bigger companies.** IPinfo's free `org`/ASN data identifies orgs that run
  their own registered network — mostly larger firms. Smaller companies behind a generic business
  ISP won't resolve to a name until the paid API is enabled.

---

## Privacy / compliance

- IP addresses are personal data under GDPR. Company-level B2B identification is generally
  defensible, but we should:
  - Add a short line to the existing **`/privacy-policy`** page about logging visitor
    network/company data for business analytics.
  - Store minimal PII — prefer hashing or truncating the raw IP after the company lookup.
  - Be cautious with EU visitors.

---

## Setup required before building (accounts + keys)

1. **IPinfo** — free account → one API token.
2. **Supabase** — free project → project URL + anon/service key, and create the `visits` table.
3. Put all keys in **`.env.local`** (never in code; `.env*` already gitignored). Add the same
   keys to Vercel project env vars for production.
4. Choose a dashboard password → store as env var (e.g. `VISITORS_DASHBOARD_PASSWORD`).

---

## Build order (for the later session)

1. Create Supabase project + `visits` table; add keys to `.env.local` + Vercel.
2. `lib/ip-to-company.ts` — IPinfo lookup + business-vs-consumer filter (unit-testable).
3. `/api/track` route — capture, look up, filter, write to Supabase, trigger throttled alert.
4. Tracker beacon in the root layout.
5. `/admin/visitors` dashboard + password gate (middleware).
6. Email alert (nodemailer) for new companies, with per-company/day throttle.
7. Privacy policy line.
8. Test locally, then deploy.

---

## Notes / context

- Repo: `watchdogpedro/solderpasteinspection.com` (SSH pushes only).
- This deployment already serves **ascinternational.com** (see redirects in `next.config.ts`),
  so the feature covers that domain automatically.
- No database exists in the repo today — Supabase would be the first one added.
