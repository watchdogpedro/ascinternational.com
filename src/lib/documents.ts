/**
 * Catalogue of the legacy PDF library carried over from the old WordPress site.
 *
 * These PDFs serve at their original `/wp-content/uploads/...` and
 * `/userfiles/file/...` paths. Google indexed them directly on the old site,
 * so the paths must not change — but until now nothing on the Next.js site
 * linked to them and they appeared in no sitemap, leaving them orphaned.
 *
 * The library arrived holding 46 files but only 39 distinct documents. Seven
 * were redundant re-uploads: WordPress kept the same PDF under `-1` / `-2`
 * suffixes, and one brochure was uploaded three times under three different
 * product names. Serving one document at three indexed URLs splits its ranking
 * signals between them, so the redundant copies have been deleted and their
 * URLs now 301 to the surviving file (see the redirect block in
 * `next.config.ts`). Each retired URL is recorded in `redirectsFrom` below so
 * the mapping stays visible from the catalogue rather than only from routing
 * config. Nothing that already links to an old URL breaks.
 *
 * Identification did not come from filenames, which are wrong often enough to
 * matter — `av860.pdf` is the AV 862 brochure, `LSM-Lit.pdf` is a CyberOptics
 * Laser Section Microscope sheet, `LineMaster-Falcon-Plus-AOI.pdf` is titled
 * "Prey - Falcon AOI 2021". Each entry below was matched by the PDF's own
 * embedded document ID and Title metadata, and duplicates were confirmed by
 * comparing the permanent ID in each file's `/ID` array.
 */

export type DocumentKind =
  /** Product datasheet or sales brochure. */
  | 'brochure'
  /** Service and capability literature. */
  | 'service'
  /** Operator or training manual. */
  | 'manual'

export type DocumentStatus =
  /** Describes equipment ASC currently sells. */
  | 'current'
  /**
   * Kept for owners of discontinued equipment. Several of these advertise
   * Windows XP or Windows 98 interfaces, so they must never be presented as
   * though they describe a current product.
   */
  | 'legacy'

export interface LegacyDocument {
  /** Stable identifier. Safe to use as a React key or URL fragment. */
  slug: string
  /** Human-readable title, taken from the document itself. */
  title: string
  /** Canonical path. This is the URL to link and to list in the sitemap. */
  path: string
  /**
   * Retired URLs that used to serve a redundant copy of this same document.
   * The files are gone; these paths 301 to `path`. Kept here so the history of
   * each merge is visible, and so nothing re-adds a duplicate by accident.
   * Never list these in the sitemap — they are redirects, not destinations.
   */
  redirectsFrom?: string[]
  kind: DocumentKind
  status: DocumentStatus
  /** Manufacturer, where the system is not ASC's own. */
  vendor?: string
  /**
   * Route of the product page this document belongs to, without a leading
   * slash — e.g. `visionpro-hsi` for `/products/visionpro-hsi`. Omitted when
   * ASC has no current page for the system.
   */
  product?: string
  /** File size in bytes, for a "PDF, 1.2 MB" hint next to a download link. */
  bytes: number
  /**
   * Set when the mapping needs a human decision before this document is
   * surfaced anywhere. Anything carrying a `review` note should stay out of
   * product pages until the question in it is answered.
   */
  review?: string
  /**
   * True when the document is deliberately held behind the contact form on
   * /resources/user-manuals-guides rather than offered as a direct download.
   */
  gated?: boolean
}

const UPLOADS = '/wp-content/uploads'
const USERFILES = '/userfiles/file'

export const DOCUMENTS: LegacyDocument[] = [
  // ---------------------------------------------------------------------
  // Current product literature
  // ---------------------------------------------------------------------
  {
    slug: 'visionpro-series',
    title: 'VisionPro Series — SP3D, M300 and M500',
    path: `${UPLOADS}/2025/05/visionpro_sp3d_compressed.pdf`,
    // One brochure covering all three models, uploaded once per model name.
    redirectsFrom: [
      `${UPLOADS}/2025/05/visionpro_500_compressed.pdf`,
      `${UPLOADS}/2025/05/visionpro_M300_compressed.pdf`,
    ],
    kind: 'brochure',
    status: 'current',
    product: 'visionpro-sp3d',
    bytes: 406978,
  },
  {
    slug: 'visionpro-hsi',
    title: 'VisionPro HSi',
    path: `${UPLOADS}/2025/05/ASCI_VisionPro_HSi_compressed.pdf`,
    redirectsFrom: [`${UPLOADS}/2025/05/ASCI_VisionPro_HSi_compressed-1.pdf`],
    kind: 'brochure',
    status: 'current',
    product: 'visionpro-hsi',
    bytes: 334194,
  },
  {
    slug: 'visionpro-ap500',
    title: 'VisionPro AP500',
    path: `${UPLOADS}/2025/05/VisionPro-AP500_compressed.pdf`,
    kind: 'brochure',
    status: 'current',
    product: 'visionpro-ap500',
    bytes: 375944,
  },
  {
    slug: 'visionpro-m500',
    title: 'VisionPro M500',
    path: `${UPLOADS}/2025/05/VisionPro-M500-FINAL_compressed.pdf`,
    kind: 'brochure',
    status: 'current',
    product: 'visionpro-m500',
    bytes: 386005,
  },
  {
    slug: 'visionpro-merlin',
    title: 'VisionPro Merlin',
    path: `${UPLOADS}/2026/05/VisionPro-Merlin.pdf`,
    kind: 'brochure',
    status: 'current',
    product: 'visionpro-merlin',
    bytes: 3866624,
    review:
      'Largest file in the library at 3.8 MB — roughly ten times the other brochures. ' +
      'Worth re-exporting at a smaller size before it is offered as a download.',
  },
  {
    slug: 'prey-merlin-aoi',
    title: 'Merlin AOI',
    path: `${UPLOADS}/2025/05/Prey-Merlin-AOI-2021-1-003_compressed.pdf`,
    kind: 'brochure',
    status: 'current',
    vendor: 'Prey',
    product: 'visionpro-merlin',
    bytes: 130421,
    review:
      'Filename says 2021, the document titles itself "Prey - Merlin AOI 2020". ' +
      'Confirm which edition this is, and whether it belongs on visionpro-merlin ' +
      'or visionpro-merlin-xl.',
  },
  {
    slug: 'linemaster-fusion-3d',
    title: 'LineMaster Fusion 3D',
    path: `${UPLOADS}/2025/05/LineMaster-Fusion-3D-Final_compressed.pdf`,
    kind: 'brochure',
    status: 'current',
    product: 'linemaster-fusion-3d',
    bytes: 375105,
  },
  {
    slug: 'linemaster-fusion-dual-mode',
    title: 'LineMaster Fusion — Dual-Mode 3D SPI/AOI',
    path: `${UPLOADS}/2025/05/ASCI-LINEMASTERFUSION_compressed.pdf`,
    redirectsFrom: [`${UPLOADS}/2025/05/ASCI-LINEMASTERFUSION_compressed-1.pdf`],
    kind: 'brochure',
    status: 'current',
    product: 'linemaster-fusion-dmi',
    bytes: 329153,
  },
  {
    slug: 'prey-falcon-aoi',
    title: 'Falcon AOI',
    path: `${UPLOADS}/2025/09/LineMaster-Falcon-AOI_Updated.pdf`,
    // Same document: identical permanent ID, re-exported at a different size.
    redirectsFrom: [`${UPLOADS}/2025/05/LineMaster-Falcon-Plus-AOI_compressed.pdf`],
    kind: 'brochure',
    status: 'current',
    vendor: 'Prey',
    product: 'linemaster-falcon',
    bytes: 293967,
    review:
      'The site has two product pages — linemaster-falcon and linemaster-falcon-plus — ' +
      'but only this one brochure, titled "Prey - Falcon AOI 2021". The file named ' +
      '"Falcon-Plus" is the identical document. Decide whether the Plus is a separate ' +
      'system needing its own datasheet, or whether the two pages should be merged.',
  },
  {
    slug: 'laservision-sp3d-mini',
    title: 'LaserVision SP3D Mini',
    path: `${UPLOADS}/2025/05/laservision_mini_sp3d_compressed.pdf`,
    kind: 'brochure',
    status: 'current',
    product: 'laservision-sp3d-mini',
    bytes: 317659,
  },
  {
    slug: 'mss-130',
    title: 'MSS 130',
    path: `${UPLOADS}/2025/05/mss_130_compressed.pdf`,
    kind: 'brochure',
    status: 'current',
    product: 'mss-130-dvi',
    bytes: 109621,
  },
  {
    slug: 'av-862',
    title: 'AV 862 Series Off-Line AOI',
    path: `${USERFILES}/av860/av860.pdf`,
    kind: 'brochure',
    status: 'current',
    bytes: 950677,
    review:
      'Filed as av860.pdf but the document is the AV 862 Series. The only nearby ' +
      'product page is /products/av-880-series, which is a different model number. ' +
      'Do not link this to the AV-880 page until someone confirms the relationship.',
  },

  // CyberOptics SPI
  {
    slug: 'cyberoptics-se500',
    title: 'CyberOptics SE500 3D SPI',
    path: `${UPLOADS}/2025/05/CyberOptics-SE500-3D-SPI-Brosur_compressed.pdf`,
    kind: 'brochure',
    status: 'current',
    vendor: 'CyberOptics',
    product: 'cyberoptics-se-series',
    bytes: 682631,
  },
  {
    slug: 'cyberoptics-se600',
    title: 'CyberOptics SE600',
    path: `${UPLOADS}/2025/05/SE600-Brochure-EN_REV-B_compressed.pdf`,
    kind: 'brochure',
    status: 'current',
    vendor: 'CyberOptics',
    product: 'cyberoptics-se-series',
    bytes: 1041977,
  },
  {
    slug: 'cyberoptics-se200',
    title: 'CyberOptics SE200',
    path: `${UPLOADS}/2025/05/SE200_compressed.pdf`,
    kind: 'brochure',
    status: 'current',
    vendor: 'CyberOptics',
    product: 'cyberoptics-se-series',
    bytes: 456226,
  },

  // CyberOptics AOI
  {
    slug: 'cyberoptics-qx150i',
    title: 'CyberOptics QX150i 2D AOI',
    path: `${UPLOADS}/2025/02/QX150i-8021706-REV_E_compressed-1.pdf`,
    kind: 'brochure',
    status: 'current',
    vendor: 'CyberOptics',
    product: 'automated-optical-inspection',
    bytes: 807404,
  },
  {
    slug: 'cyberoptics-qx500',
    title: 'CyberOptics QX500',
    path: `${UPLOADS}/2025/05/QX500_compressed.pdf`,
    kind: 'brochure',
    status: 'current',
    vendor: 'CyberOptics',
    product: 'automated-optical-inspection',
    bytes: 773110,
  },
  {
    slug: 'cyberoptics-qx600',
    title: 'CyberOptics QX600 2D AOI',
    path: `${UPLOADS}/2025/05/QX600-8020146-REV_H-1_compressed.pdf`,
    kind: 'brochure',
    status: 'current',
    vendor: 'CyberOptics',
    product: 'automated-optical-inspection',
    bytes: 797716,
  },

  // ---------------------------------------------------------------------
  // Legacy literature — discontinued systems
  // ---------------------------------------------------------------------
  {
    slug: 'visionpro-ap212',
    title: 'VisionPro AP212',
    path: `${UPLOADS}/2025/05/AP212_compressed.pdf`,
    redirectsFrom: [
      `${UPLOADS}/2025/05/AP212_compressed-1.pdf`,
      `${UPLOADS}/2025/05/AP212_compressed-2.pdf`,
    ],
    kind: 'brochure',
    status: 'legacy',
    bytes: 362825,
  },
  {
    slug: 'visionpro-ap212-earlier',
    title: 'VisionPro AP212 (earlier edition)',
    path: `${USERFILES}/visionpro_ap212/AP212.pdf`,
    kind: 'brochure',
    status: 'legacy',
    bytes: 511187,
  },
  {
    slug: 'visionpro-ap-xt',
    title: 'VisionPro AP-XT',
    path: `${UPLOADS}/2025/05/AP212-XT_compressed.pdf`,
    kind: 'brochure',
    status: 'legacy',
    bytes: 360016,
  },
  {
    slug: 'visionpro-hsi-earlier',
    title: 'VisionPro HSi (earlier edition)',
    path: `${USERFILES}/visionpro_hsi/HSi.pdf`,
    kind: 'brochure',
    status: 'legacy',
    bytes: 293583,
    review:
      'Advertises a Windows XP/7 interface and an SVGA monitor, while the live ' +
      'VisionPro HSi product page describes Windows 10/11. Superseded by the ' +
      'visionpro-hsi entry above.',
  },
  {
    slug: 'visionpro-series-earlier',
    title: 'VisionPro Series (earlier edition)',
    path: `${USERFILES}/visionpro_series/visionpro_series.pdf`,
    kind: 'brochure',
    status: 'legacy',
    bytes: 553026,
  },
  {
    slug: 'laservision-sp3d',
    title: 'LaserVision SP3D',
    path: `${UPLOADS}/2025/05/LaserVision-SP3D-2_compressed.pdf`,
    kind: 'brochure',
    status: 'legacy',
    bytes: 187544,
    review: 'Describes a Windows XP interface.',
  },
  {
    slug: 'laservision-sp3d-mini-earlier',
    title: 'LaserVision SP3D Mini (earlier edition)',
    path: `${USERFILES}/laservision_sp3d_mini/laservision_mini_sp3d.pdf`,
    kind: 'brochure',
    status: 'legacy',
    bytes: 534565,
  },
  {
    slug: 'mss-130-earlier',
    title: 'MSS 130 (earlier edition)',
    path: `${USERFILES}/mss_130.pdf`,
    kind: 'brochure',
    status: 'legacy',
    bytes: 256591,
  },
  {
    slug: 'visionmaster-150',
    title: 'VisionMaster 150',
    path: `${UPLOADS}/2025/05/vm150_compressed.pdf`,
    kind: 'brochure',
    status: 'legacy',
    bytes: 112767,
    review: 'Describes a Windows XP interface.',
  },
  {
    slug: 'visionmaster-450',
    title: 'VM450',
    path: `${UPLOADS}/2025/05/vm450_compressed.pdf`,
    kind: 'brochure',
    status: 'legacy',
    bytes: 152113,
    review:
      'Title metadata reads "LaserVision SP3D", left over from the template it was ' +
      'built from. The page content is the VM450.',
  },
  {
    slug: 'cyberoptics-se300-ultra',
    title: 'CyberOptics SE 300 Ultra',
    path: `${UPLOADS}/2025/05/Cyberoptic-SE-300-Ultra_compressed.pdf`,
    kind: 'brochure',
    status: 'legacy',
    vendor: 'CyberOptics',
    bytes: 170429,
  },
  {
    slug: 'cyberoptics-lsm',
    title: 'CyberOptics LSM — Laser Section Microscope',
    path: `${UPLOADS}/2025/05/LSM-Lit_compressed.pdf`,
    kind: 'brochure',
    status: 'legacy',
    vendor: 'CyberOptics',
    bytes: 309776,
    review:
      'Vintage literature — a CRT monitor, a 9-inch display and RS-232 output. ' +
      'Archive only.',
  },
  {
    slug: 'cyberoptics-lsm2',
    title: 'CyberOptics LSM2',
    path: `${UPLOADS}/2025/05/LSM2_compressed.pdf`,
    kind: 'brochure',
    status: 'legacy',
    vendor: 'CyberOptics',
    bytes: 345688,
  },
  {
    slug: 'cyberoptics-lsm300',
    title: 'CyberOptics LSM 300',
    path: `${UPLOADS}/2025/05/LSM300_compressed.pdf`,
    kind: 'brochure',
    status: 'legacy',
    vendor: 'CyberOptics',
    bytes: 277938,
    review: 'Ships with Windows 98. Archive only.',
  },

  // ---------------------------------------------------------------------
  // Service and capability literature
  // ---------------------------------------------------------------------
  {
    slug: 'service-support-programs',
    title: 'Customer Service and Support Programs',
    path: `${USERFILES}/Service_menu.pdf`,
    kind: 'service',
    status: 'current',
    bytes: 50994,
  },
  {
    slug: 'scanning-services',
    title: 'Scanning Services',
    path: `${USERFILES}/Scanning.pdf`,
    kind: 'service',
    status: 'current',
    bytes: 550147,
  },
  {
    slug: 'contract-scanning',
    title: 'Contract Scanning Services',
    // The stored filename contains a space; it must stay encoded in links.
    path: `${USERFILES}/contract%20scanning.pdf`,
    kind: 'service',
    status: 'current',
    bytes: 790141,
  },

  // ---------------------------------------------------------------------
  // Manuals — deliberately gated behind the contact form
  // ---------------------------------------------------------------------
  {
    slug: 'criterion-vantage-3-admin',
    title: 'Criterion Vantage 3 — Admin Training Manual',
    path: `${USERFILES}/admin_training_manual.pdf`,
    kind: 'manual',
    status: 'current',
    bytes: 1230300,
    gated: true,
  },
  {
    slug: 'criterion-vantage-3-acquire',
    title: 'Criterion Vantage 3 — Acquire Training Manual',
    path: `${USERFILES}/acquire_training_manual.pdf`,
    kind: 'manual',
    status: 'current',
    bytes: 271352,
    gated: true,
  },
  {
    slug: 'criterion-vantage-3-analysis',
    title: 'Criterion Vantage 3 — Analysis Training Manual',
    path: `${USERFILES}/analysis_training_manual.pdf`,
    kind: 'manual',
    status: 'current',
    bytes: 119617,
    gated: true,
  },
  {
    slug: 'verax-training-manual',
    title: 'Verax SPC Software Suite — Training Manual',
    path: `${USERFILES}/vertran.pdf`,
    kind: 'manual',
    status: 'current',
    bytes: 667560,
    gated: true,
  },
]

/** Documents that may be linked and listed publicly. Excludes gated manuals. */
export const PUBLIC_DOCUMENTS = DOCUMENTS.filter((d) => !d.gated)

/**
 * Documents safe to advertise as current product literature: not gated, not
 * legacy, and carrying no unresolved `review` question.
 */
export const CURRENT_BROCHURES = DOCUMENTS.filter(
  (d) => d.kind === 'brochure' && d.status === 'current' && !d.gated && !d.review,
)

/**
 * Every path that resolves to a document, including retired URLs that now
 * redirect. Useful for checking that no link anywhere points at a dead file.
 */
export const ALL_DOCUMENT_PATHS = DOCUMENTS.flatMap((d) => [
  d.path,
  ...(d.redirectsFrom ?? []),
])

/** Retired duplicate URLs, each 301ing to the document that replaced it. */
export const RETIRED_DOCUMENT_PATHS = DOCUMENTS.flatMap((d) =>
  (d.redirectsFrom ?? []).map((from) => ({ from, to: d.path })),
)

/** Canonical paths only — this is what belongs in the sitemap. */
export const CANONICAL_DOCUMENT_PATHS = PUBLIC_DOCUMENTS.map((d) => d.path)

/** The brochure to offer on a product page, or undefined if there is not one. */
export function documentForProduct(product: string): LegacyDocument | undefined {
  return CURRENT_BROCHURES.find((d) => d.product === product)
}

/** Every document tied to a product page, including ones needing review. */
export function documentsForProduct(product: string): LegacyDocument[] {
  return DOCUMENTS.filter((d) => d.product === product && !d.gated)
}

/** Formats a byte count for display next to a download link, e.g. "1.2 MB". */
export function formatBytes(bytes: number): string {
  const mb = bytes / 1_000_000
  return mb >= 1 ? `${mb.toFixed(1)} MB` : `${Math.round(bytes / 1000)} KB`
}

/**
 * Look a document up by its slug. Used by the pre-owned pages, where each
 * model card links straight to that model's own brochure rather than to a
 * generic product-level datasheet.
 */
export function documentBySlug(slug: string): LegacyDocument | undefined {
  return DOCUMENTS.find((d) => d.slug === slug)
}
