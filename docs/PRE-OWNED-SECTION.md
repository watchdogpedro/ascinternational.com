# The Pre-Owned section

**Built:** September 2, 2026
**Maintained by:** Winfield Technologies Inc.

Pre-owned equipment used to be a single page under Services. It is now its own
top-level section, because reselling refurbished CyberOptics systems is a
revenue line rather than a service ASC performs.

---

## Structure

| URL | What it covers |
|---|---|
| `/pre-owned` | Hub. Why buy pre-owned, the full inventory, other brands stocked, the six-step refurbishment process |
| `/pre-owned/cyberoptics-se-series` | Inline SPI — SE600, SE500, SE 300 Ultra, SE200 |
| `/pre-owned/cyberoptics-lsm-series` | Offline SPI — LSM 300, LSM 2, LSM |
| `/pre-owned/cyberoptics-qx-series` | 2D AOI — QX600, QX500, QX150i |

"Pre-Owned" sits between Products and Services in the header, with the same
four links in its dropdown. It is also in the footer.

## Model cards link to the spec sheet

Every model block on every page is a link to that model's own brochure PDF, with
the file size shown on the card. Not a contact form, not a generic
product-level datasheet — one click from the model name to the spec.

Implementation is `src/components/PreOwnedSystemCard.tsx`. It takes a `doc`
slug that resolves against `src/lib/documents.ts`. Cards with no brochure of
their own fall back to the contact form, or to an internal page when `href` is
set.

The three family pages share `src/components/PreOwnedFamilyPage.tsx` so their
layout cannot drift apart. Only the content differs.

### The LSM literature is labelled on purpose

The LSM and LSM 300 brochures are linked, but marked **"Legacy brochure"** with
a note that they are archive material. This is deliberate:

- The LSM literature shows a CRT monitor, a 9-inch display and RS-232 output.
- The LSM 300 documentation describes a machine running Windows 98.

`src/lib/documents.ts` carries a `review` note on both saying archive only.
ASC still refurbishes, sells and supports these systems, and for the right shop
they are good value — but the literature must not be presented as a current
spec. **Do not relabel these as ordinary spec sheets.**

The LSM 2 brochure is clean and is labelled normally.

## Redirects

Both moved URLs 301 to their new homes:

- `/services/pre-owned-systems` → `/pre-owned`
- `/products/cyberoptics-se-series` → `/pre-owned/cyberoptics-se-series`

The 15 legacy WordPress redirects that used to land on the old services page now
go to the **right family page** instead of a generic hub — `/product/cyberoptics-qx600`
lands on the QX page. No redirect chains anywhere. `docs/redirect-map.csv` and
`SITE-STRUCTURE.md` are in step with `next.config.ts`.

The timing was chosen: Google Search Console is not yet set up for this domain,
so moving these URLs cost nothing in accumulated ranking. URL changes belong
*before* the GSC submission, not after.

## Each family page routes to new equipment

Someone searching a CyberOptics model number is a qualified inspection buyer
already on the site — and CyberOptics competes with ASC's own VisionPro and
LineMaster lines. These pages are a lead magnet, not just a catalogue.

Each family page carries a "Buying New Instead" section naming the two ASC
systems that replace it:

| Family | New alternatives |
|---|---|
| SE Series | LineMaster Fusion 3D, LineMaster DMI |
| LSM Series | VisionPro AP500, LaserVision SP3D Mini |
| QX Series | LineMaster Falcon, VisionPro Merlin |

The QX rationale is the strongest and is technically sound: the QX line is 2D,
so it cannot measure height, and lifted leads and insufficient solder are
exactly the defects that need a 3D platform.

---

## Open items

**Photos.** There are no product images for the LSM or QX families —
`public/images/products/` has the SE Series only. Those two heroes are
text-only. Any photo drops straight into the `image` prop.

**Copy review.** The "Worth a look if" bullets and the three new-equipment
rationales are sales positioning, written from existing site content and the
datasheets. Nothing was invented. The support-lifespan claims in the SE and LSM
rationales are the ones worth a second opinion from ASC.

**Per-model pages — agreed in principle, not started.** The reasoning:

- Crawling is not the constraint. Model names are already in the raw HTML and
  robots.txt blocks nothing. That question is settled.
- Google ranks pages, not words. A page that mentions ten models is about none
  of them. That is why the family pages exist and why each runs to roughly
  2,000 words about a single family.
- Build per-model pages for about five models, not all ten. Ten thin pages
  describing stock that turns over is the doorway-page pattern, and stale
  "Available" badges make it worse.
- Which five is an open question. It needs real search volume, or ASC naming
  their top sellers. Do not guess at it.
- The content that would actually win is failure knowledge. Any broker can
  republish CyberOptics' spec PDF, and those PDFs are duplicate content across
  many sites — they will never rank. What only ASC can write is what fails on a
  QX600 at eight years, what to check before buying a used LSM 2, and when an
  SE500 is the wrong call against an SE600.
