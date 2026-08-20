import type { NextConfig } from "next";

/**
 * Canonical host switch — see src/lib/site.ts.
 *
 * Set NEXT_PUBLIC_CANONICAL_HOST=ascinternational.com in Vercel on cutover
 * day and every other domain 301s to it, path-for-path. Leave it unset and
 * no host redirect exists at all, which is what makes this file safe to ship
 * to production BEFORE the cutover.
 */
const CANONICAL_HOST = process.env.NEXT_PUBLIC_CANONICAL_HOST;

const LEGACY_HOSTS = [
  "solderpasteinspection.com",
  "www.solderpasteinspection.com",
  "solderpasteinspection.net",
  "www.solderpasteinspection.net",
];

const nextConfig: NextConfig = {
  async redirects() {
    const hostRedirects = CANONICAL_HOST
      ? LEGACY_HOSTS.filter((h) => h !== CANONICAL_HOST && h !== `www.${CANONICAL_HOST}`).map(
          (host) => ({
            source: "/:path*",
            has: [{ type: "host" as const, value: host }],
            destination: `https://${CANONICAL_HOST}/:path*`,
            permanent: true, // 301 — path-for-path, never a homepage dump
          }),
        )
      : [
          // Pre-cutover: .net still folds into .com. No ASC redirect yet.
          {
            source: "/:path*",
            has: [{ type: "host" as const, value: "solderpasteinspection.net" }],
            destination: "https://solderpasteinspection.com/:path*",
            permanent: true,
          },
          {
            source: "/:path*",
            has: [{ type: "host" as const, value: "www.solderpasteinspection.net" }],
            destination: "https://solderpasteinspection.com/:path*",
            permanent: true,
          },
        ];

    return [
      ...hostRedirects,

      // ══════════════════════════════════════════════════════════════
      // Legacy ascinternational.com (WordPress) → this site
      //
      // All 215 URLs from the old Rank Math sitemaps are covered.
      // 7 of them already exist here at the identical path (/blog,
      // /careers, /privacy-policy, /resources and the three
      // /resources/* pages) so they need no rule — that leaves 208.
      //
      // Every rule points at the closest matching page. None point at
      // the homepage (Google treats a homepage dump as a soft 404).
      // Source of truth for these mappings: docs/redirect-map.csv
      // ══════════════════════════════════════════════════════════════

      // ── Root-level pages (13) ────────────────────────────
      { source: "/about-us", destination: "/about/company", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/index", destination: "/", permanent: true },
      { source: "/industrial-metrology", destination: "/products/3d-industrial-metrology", permanent: true },
      { source: "/locations.kml", destination: "/about/global-support", permanent: true },
      { source: "/news", destination: "/blog", permanent: true },
      { source: "/process-control", destination: "/resources", permanent: true },
      { source: "/products-services-quicklist", destination: "/products", permanent: true },
      { source: "/shop", destination: "/products", permanent: true },
      { source: "/sitemap", destination: "/sitemap.xml", permanent: true },
      { source: "/smt-inspection", destination: "/products", permanent: true },
      { source: "/support", destination: "/services/technical-support", permanent: true },
      { source: "/thank-you", destination: "/contact", permanent: true },

      // ── SMT inspection solution pages (5) ───────────────
      { source: "/smt-inspection/automated-optical-inspection", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/smt-inspection/digital-video-inspection", destination: "/products/digital-video-inspection", permanent: true },
      { source: "/smt-inspection/pre-owned-refurbished", destination: "/services/pre-owned-systems", permanent: true },
      { source: "/smt-inspection/solder-paste-inspection", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/smt-inspection/universal-product-inspection", destination: "/products", permanent: true },

      // ── Industrial metrology pages (3) ──────────────────
      { source: "/industrial-metrology/3d-laser-scanners", destination: "/products/3d-industrial-metrology", permanent: true },
      { source: "/industrial-metrology/3d-laser-scanning-systems", destination: "/products/3d-industrial-metrology", permanent: true },
      { source: "/industrial-metrology/contract-inspection-services", destination: "/services/contract-inspection", permanent: true },

      // ── Product detail pages (old WordPress /product/*) (40) ──
      { source: "/product/av-880-series", destination: "/products/av-880-series", permanent: true },
      { source: "/product/cyberoptics-lsm", destination: "/services/pre-owned-systems", permanent: true },
      { source: "/product/cyberoptics-lsm-2", destination: "/services/pre-owned-systems", permanent: true },
      { source: "/product/cyberoptics-lsm-300", destination: "/services/pre-owned-systems", permanent: true },
      { source: "/product/cyberoptics-qx150i", destination: "/services/pre-owned-systems", permanent: true },
      { source: "/product/cyberoptics-qx500", destination: "/services/pre-owned-systems", permanent: true },
      { source: "/product/cyberoptics-qx600", destination: "/services/pre-owned-systems", permanent: true },
      { source: "/product/cyberoptics-se-200", destination: "/products/cyberoptics-se-series", permanent: true },
      { source: "/product/cyberoptics-se-300-ultra", destination: "/products/cyberoptics-se-series", permanent: true },
      { source: "/product/cyberoptics-se-series", destination: "/products/cyberoptics-se-series", permanent: true },
      { source: "/product/cyberoptics-se500", destination: "/products/cyberoptics-se-series", permanent: true },
      { source: "/product/cyberoptics-se600", destination: "/products/cyberoptics-se-series", permanent: true },
      { source: "/product/laservision-sp3d", destination: "/products/laservision-sp3d-mini", permanent: true },
      { source: "/product/laservision-sp3d-mini", destination: "/products/laservision-sp3d-mini", permanent: true },
      { source: "/product/linemaster-dmi", destination: "/products/linemaster-dmi", permanent: true },
      { source: "/product/linemaster-falcon", destination: "/products/linemaster-falcon", permanent: true },
      { source: "/product/linemaster-falcon-plus", destination: "/products/linemaster-falcon-plus", permanent: true },
      { source: "/product/linemaster-fusion-3d", destination: "/products/linemaster-fusion-3d", permanent: true },
      { source: "/product/linemaster-fusion-dmi", destination: "/products/linemaster-fusion-dmi", permanent: true },
      { source: "/product/linemaster-tht", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/product/mss-130-dvi", destination: "/products/mss-130-dvi", permanent: true },
      { source: "/product/visionmaster-150", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/product/visionmaster-450", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/product/visionmaster-ap212", destination: "/products/visionpro-ap500", permanent: true },
      { source: "/product/visionmaster-ap450", destination: "/products/visionpro-ap500", permanent: true },
      { source: "/product/visionmaster-m500", destination: "/products/visionpro-m500", permanent: true },
      { source: "/product/visionmaster-spi", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/product/visionpro-ap-xt", destination: "/products/visionpro-ap500", permanent: true },
      { source: "/product/visionpro-ap212", destination: "/products/visionpro-ap500", permanent: true },
      { source: "/product/visionpro-ap500", destination: "/products/visionpro-ap500", permanent: true },
      { source: "/product/visionpro-av862", destination: "/products/av-880-series", permanent: true },
      { source: "/product/visionpro-av871", destination: "/products/av-880-series", permanent: true },
      { source: "/product/visionpro-hsi", destination: "/products/visionpro-hsi", permanent: true },
      { source: "/product/visionpro-m-series", destination: "/products/visionpro-m500", permanent: true },
      { source: "/product/visionpro-m300", destination: "/products/visionpro-m500", permanent: true },
      { source: "/product/visionpro-m500", destination: "/products/visionpro-m500", permanent: true },
      { source: "/product/visionpro-merlin", destination: "/products/visionpro-merlin", permanent: true },
      { source: "/product/visionpro-merlin-xl", destination: "/products/visionpro-merlin-xl", permanent: true },
      { source: "/product/visionpro-sp3d", destination: "/products/visionpro-sp3d", permanent: true },
      { source: "/product/visionpro-upi", destination: "/products", permanent: true },

      // ── Dealer / distributor pages (24) ──────────────────
      { source: "/dealers/addis-electronic", destination: "/about/global-support", permanent: true },
      { source: "/dealers/airtron-electronics", destination: "/about/global-support", permanent: true },
      { source: "/dealers/argo-zeta", destination: "/about/global-support", permanent: true },
      { source: "/dealers/asc-international-corporate-headquarters", destination: "/about/company", permanent: true },
      { source: "/dealers/asc-international-south", destination: "/about/global-support", permanent: true },
      { source: "/dealers/cabiotec-s-r-l", destination: "/about/global-support", permanent: true },
      { source: "/dealers/ceren", destination: "/about/global-support", permanent: true },
      { source: "/dealers/eps-electronics-ltd", destination: "/about/global-support", permanent: true },
      { source: "/dealers/grsys-service-ltda", destination: "/about/global-support", permanent: true },
      { source: "/dealers/h-i-n", destination: "/about/global-support", permanent: true },
      { source: "/dealers/inetest", destination: "/about/global-support", permanent: true },
      { source: "/dealers/kvms", destination: "/about/global-support", permanent: true },
      { source: "/dealers/marc-technologies-inc", destination: "/about/global-support", permanent: true },
      { source: "/dealers/maxem-engineering-ltd", destination: "/about/global-support", permanent: true },
      { source: "/dealers/maxtronix", destination: "/about/global-support", permanent: true },
      { source: "/dealers/murray-a-percival-company", destination: "/about/global-support", permanent: true },
      { source: "/dealers/pb-tec-gmbh", destination: "/about/global-support", permanent: true },
      { source: "/dealers/renex", destination: "/about/global-support", permanent: true },
      { source: "/dealers/sierra-manufacturing-technology", destination: "/about/global-support", permanent: true },
      { source: "/dealers/sinerji-grup", destination: "/about/global-support", permanent: true },
      { source: "/dealers/southwest-systems-technology", destination: "/about/global-support", permanent: true },
      { source: "/dealers/tangtek-unotek-international-limited", destination: "/about/global-support", permanent: true },
      { source: "/dealers/techsystems-northern-california", destination: "/about/global-support", permanent: true },
      { source: "/dealers/univertools", destination: "/about/global-support", permanent: true },

      // ── Legacy /process-control articles (16) ────────────
      { source: "/process-control/3d-spi-machines-in-electronics-manufacturing", destination: "/blog/spi-buyers-guide-2026", permanent: true },
      { source: "/process-control/asc-international-revolutionizing-the-electronics-industry-in-brazil-tldr-asc", destination: "/about/company", permanent: true },
      { source: "/process-control/automated-visual-inspection-with-cutting-edge-related-faq-questions-systems-in", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/process-control/billions-of-solder-joints", destination: "/blog/billions-of-solder-joints", permanent: true },
      { source: "/process-control/discover-the-world-of-automated-inspection-with-asc-international-dealers", destination: "/about/global-support", permanent: true },
      { source: "/process-control/introducing-the-visionmaster-450-revolutionizing-process-control-in-nebraska-tldr", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/process-control/mastering-understanding-solder-paste-inspection-a-comprehensive-beginners-guide-tldr", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/process-control/solder-paste-measurement-justification", destination: "/blog/solder-paste-measurement-justification", permanent: true },
      { source: "/process-control/stamp-out-rework", destination: "/blog/stamp-out-rework", permanent: true },
      { source: "/process-control/the-essential-guide-to-asc-international-global-support-centers", destination: "/about/global-support", permanent: true },
      { source: "/process-control/the-ultimate-guide-to-laservision-sp3d-in-kentucky-for-process", destination: "/products/laservision-sp3d-mini", permanent: true },
      { source: "/process-control/unlocking-the-power-of-process-control-with-asc-international-in", destination: "/about/company", permanent: true },
      { source: "/process-control/visionpro-ap212-revolutionizing-process-control-in-wyoming-tldr-the-asc", destination: "/products/visionpro-ap500", permanent: true },
      { source: "/process-control/visionpro-ap500-your-solution-for-precision-automated-3d-solder-paste-inspection", destination: "/products/visionpro-ap500", permanent: true },
      { source: "/process-control/visionpro-m500-revolutionizing-process-control-in-north-america", destination: "/products/visionpro-m500", permanent: true },
      { source: "/process-control/yield-improvement-strategies", destination: "/blog/yield-improvement-strategies", permanent: true },

      // ── Legacy /history articles (11) ────────────────────
      { source: "/history/cyberoptics-se-200-revolutionizing-history-in-colorado-tldr-discover-how", destination: "/products/cyberoptics-se-series", permanent: true },
      { source: "/history/discover-the-revolutionary-asc-international-solution-for-precision-inspection-in", destination: "/about/company", permanent: true },
      { source: "/history/dive-into-the-world-of-asc-international-your-source-for", destination: "/about/company", permanent: true },
      { source: "/history/headline-precision-inspection-revolution-unveiling-the-power-of-automated-optical", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/history/headline-uncover-the-secrets-of-automated-optical-inspection-a-comprehensive", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/history/how-do-spi-machines-work-unlocking-the-secrets-of-visual", destination: "/blog/spi-buyers-guide-2026", permanent: true },
      { source: "/history/the-ultimate-guide-to-cyberoptics-se-series-transforming-inspection-in", destination: "/products/cyberoptics-se-series", permanent: true },
      { source: "/history/the-ultimate-guide-to-related-faq-questions-in-northern-mariana", destination: "/faq", permanent: true },
      { source: "/history/title-visionpro-sp3d-the-cutting-edge-inspection-technology-revolutionizing-georgias-industries", destination: "/history/visionpro-sp3d-georgia", permanent: true },
      { source: "/history/unlocking-efficiency-in-electronics-manufacturing-the-benefits-of-spi-machines", destination: "/blog/spi-buyers-guide-2026", permanent: true },
      { source: "/history/unlocking-the-power-of-optical-inspection-asc-international-in-alaska", destination: "/history/asc-international-alaska", permanent: true },

      // ── Legacy /resources articles (14) ──────────────────
      { source: "/resources/cyberoptics-revolutionizing-manufacturing-with-precision-inspection-harness-the", destination: "/products/cyberoptics-se-series", permanent: true },
      { source: "/resources/discover-the-cutting-edge-world-of-automatic-surface-inspection-asc-internationals", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/resources/discover-the-ultimate-solution-for-enhanced-automated-optical-inspection-in", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/resources/discover-what-services-asc-international-offers-unlocking-advanced-inspection-technologies", destination: "/services", permanent: true },
      { source: "/resources/headline-uncover-the-power-of-cyberoptics-lsm-2-your-precision", destination: "/services/pre-owned-systems", permanent: true },
      { source: "/resources/headline-unlocking-precision-with-cyberoptics-lsm-in-north-dakota-tldr", destination: "/services/pre-owned-systems", permanent: true },
      { source: "/resources/refurbished-aoi-spi-revolutionizing-electronics-inspection-in-south-korea", destination: "/services/pre-owned-systems", permanent: true },
      { source: "/resources/related-faq-questions-the-near-me-resource-for-everything", destination: "/faq", permanent: true },
      { source: "/resources/solder-paste-inspection-process-unlocking-precision-for-printed-circuit-boards", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/resources/the-ultimate-guide-to-aoi-automated-optical-inspection-defect-inspection", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/resources/unveiling-the-power-of-aoi-in-maine-efficiency-and-precision", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/resources/unveiling-the-secrets-of-aoi-spi-pcp-inspection-automation-your-comprehensive-guide-to-success", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/resources/visionpro-m500-supercharging-smt-inspection-in-norway-and-beyond", destination: "/products/visionpro-m500", permanent: true },
      { source: "/resources/visionpro-m500-your-gateway-to-precision-3d-solder-paste-inspection-in-the-u-s-a", destination: "/products/visionpro-m500", permanent: true },

      // ── Legacy /cyberoptics articles (12) ────────────────
      { source: "/cyberoptics/cyberoptics-innovations-asc-international-revolutionizing-inspection-technologies-tldr-experience-the", destination: "/products/cyberoptics-se-series", permanent: true },
      { source: "/cyberoptics/cyberoptics-lsm-a-game-changer-for-precision-inspection-in-saudi-arabia", destination: "/services/pre-owned-systems", permanent: true },
      { source: "/cyberoptics/cyberoptics-se-series-unveiling-the-power-of-optical-inspection-in", destination: "/products/cyberoptics-se-series", permanent: true },
      { source: "/cyberoptics/discover-cyberoptics-se-200-the-ultimate-game-changer-in-north-carolina", destination: "/products/cyberoptics-se-series", permanent: true },
      { source: "/cyberoptics/discover-the-cutting-edge-of-industrial-inspection-asc-international-and-cyberoptics", destination: "/products/cyberoptics-se-series", permanent: true },
      { source: "/cyberoptics/revolutionizing-solder-paste-inspection-asc-internationals-state-of-the-art-machine-details-in", destination: "/products/cyberoptics-se-series", permanent: true },
      { source: "/cyberoptics/spi-machine-benefits-revolutionizing-solder-inspection-and-pcb-assembly-in", destination: "/products/cyberoptics-se-series", permanent: true },
      { source: "/cyberoptics/the-cyber-optics-revolution-reshaping-inspection-technologies-transform-your", destination: "/products/cyberoptics-se-series", permanent: true },
      { source: "/cyberoptics/uncover-the-history-shaping-capabilities-of-cyberoptics-se500-in-connecticut-tldr", destination: "/products/cyberoptics-se-series", permanent: true },
      { source: "/cyberoptics/uncover-the-secrets-of-precision-3d-solder-paste-inspection-cyberoptics-lsm-300", destination: "/services/pre-owned-systems", permanent: true },
      { source: "/cyberoptics/unraveling-the-secrets-of-spi-machines-a-comprehensive-guide-imagine", destination: "/blog/spi-buyers-guide-2026", permanent: true },
      { source: "/cyberoptics/visionpro-merlin-precision-inspection-for-japans-booming-electronics-industry-summary", destination: "/products/visionpro-merlin", permanent: true },

      // ── Legacy /3d-aoi articles (25) ─────────────────────
      { source: "/3d-aoi/aoi-enhancing-precision-in-hawaiis-inspection-landscape-tldr-automated-optical", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/asc-international-advancing-pcb-and-solder-inspection-with-revolutionary-automation", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/asc-international-advancing-the-electronics-industry-with-cutting-edge-inspection-solutions", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/asc-international-dealers-your-trusted-solution-for-automated-optical-inspection", destination: "/about/global-support", permanent: true },
      { source: "/3d-aoi/asc-international-driving-innovations-in-electronics-inspection-automation-electronics-manufacturing", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/asc-international-revolutionizing-automated-3d-aoi-and-solder-inspection-tldr", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/asc-international-revolutionizing-pcb-and-solder-inspection-automation-understanding-the", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/asc-international-revolutionizing-pcb-and-solder-paste-inspection-automation-asc", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/automated-optical-inspection-the-future-of-quality-assurance-in-manufacturing", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/dive-into-the-realm-of-pcb-and-solder-inspection-automation", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/embracing-innovation-asc-international-transforms-electronics-inspection-with-advanced-automation", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/headline-the-world-of-pcb-and-solder-paste-inspection-unlocking-precision", destination: "/3d-aoi/pcb-solder-paste-inspection-precision", permanent: true },
      { source: "/3d-aoi/headline-unraveling-the-mysteries-of-cyber-optics-a-comprehensive-guide", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/how-3d-aoi-equipment-and-machines-help-your-manufacturing-process", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/revolutionizing-pcba-and-solder-paste-inspection-asc-international", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/the-cutting-edge-of-pcb-and-solder-inspection-asc-internationals-automated", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/the-guardians-of-pcb-and-solder-inspection-a-comprehensive-guide", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/the-ultimate-guide-to-cyber-optics-in-utah-unlocking-precision", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/tldr-asc-international-is-a-leading-provider-of-pcb-and", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/unlocking-precision-and-efficiency-aoi-spi-pcp-inspection-automation-in", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/unlocking-precision-and-efficiency-asc-international-pioneers-pcb-and-solder", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/unlocking-precision-discover-the-power-of-asc-corporate-systems-in", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/unlocking-the-power-of-3d-aoi-asc-international-machine-applications", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/unveiling-the-secrets-of-automated-optical-inspection-a-comprehensive-guide", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/3d-aoi/visionpro-sp3d-in-canada-revolutionizing-optical-inspection-tldr-unlock-the", destination: "/products/visionpro-sp3d", permanent: true },

      // ── Legacy /3d-spi articles (23) ─────────────────────
      { source: "/3d-spi/3d-solder-paste-inspection-spi-solutions-revolutionizing-pcb-assembly-in", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/3d-spi/3d-spi-in-hawaii-a-comprehensive-guide-to-asc-international", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/3d-spi/3d-spi-revolutionizing-electronics-manufacturing-unlock-the-benefits-tldr-discover", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/3d-spi/asc-international-your-premier-partner-for-advanced-3d-spi-solutions", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/3d-spi/cost-of-automated-optical-solder-paste-inspection-machines", destination: "/tools/roi-calculator", permanent: true },
      { source: "/3d-spi/cyberoptics-se-series-revolutionizing-automated-optical-inspection-in-michigan-tldr", destination: "/products/cyberoptics-se-series", permanent: true },
      { source: "/3d-spi/discover-the-revolutionary-solder-paste-inspection-process-enhancing-efficiency-in", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/3d-spi/headline-empowering-industries-with-advanced-asc-international-corporate-information-in", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/3d-spi/headline-revolutionize-electronics-manufacturing-with-the-power-of-spi-machines", destination: "/blog/spi-buyers-guide-2026", permanent: true },
      { source: "/3d-spi/linemaster-fusion-3d-revolutionizing-inspection", destination: "/products/linemaster-fusion-3d", permanent: true },
      { source: "/3d-spi/revolutionizing-3d-spi-of-asc-international", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/3d-spi/the-definitive-guide-to-solder-paste-inspection-machines-in-vermont", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/3d-spi/the-importance-a-3-d-solder-paste-inspection", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/3d-spi/the-revolutionary-benefits-of-solder-paste-inspection-machines-a-comprehensive", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/3d-spi/the-ultimate-guide-to-spi-machines-in-kansas-revolutionizing-inspection", destination: "/blog/spi-buyers-guide-2026", permanent: true },
      { source: "/3d-spi/unleashing-the-power-of-visionmaster-ap450-in-switzerland-a-comprehensive", destination: "/products/visionpro-ap500", permanent: true },
      { source: "/3d-spi/unlock-your-pcb-precision-with-the-power-of-solder-paste", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/3d-spi/visionpro-ap500-in-wyoming-the-ultimate-guide-tldr-discover-the", destination: "/products/visionpro-ap500", permanent: true },
      { source: "/3d-spi/visionpro-m500-revolutionizing-optical-inspection-in-the-u-s", destination: "/products/visionpro-m500", permanent: true },
      { source: "/3d-spi/visionpro-m500-revolutionizing-visual-inspection", destination: "/products/visionpro-m500", permanent: true },
      { source: "/3d-spi/what-is-a-solder-paste-inspection-machine", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/3d-spi/what-is-asc-international-a-world-renowned-leader-in-3d-spi", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/3d-spi/why-you-need-cyberoptics-3d-inspection-equipment", destination: "/products/cyberoptics-se-series", permanent: true },

      // ── Legacy /solder-paste-inspection articles (21) ────
      { source: "/solder-paste-inspection/3d-solder-paste-inspection", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/solder-paste-inspection/aoi-soldering-inspection-equipment-in-italy-a-comprehensive-guide-to", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/solder-paste-inspection/choosing-the-right-solder-paste-inspection-machine-your-guide-to", destination: "/blog/spi-buyers-guide-2026", permanent: true },
      { source: "/solder-paste-inspection/cyberoptics-lsm-300-revolutionizing-solder-paste-inspection-in-norway-tldr", destination: "/services/pre-owned-systems", permanent: true },
      { source: "/solder-paste-inspection/discover-the-revolutionary-impact-of-asc-international-on-the-kansas", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/solder-paste-inspection/discover-the-revolutionary-visionmaster-ap450-a-game-changer-for-arkansas-solder", destination: "/products/visionpro-ap500", permanent: true },
      { source: "/solder-paste-inspection/discover-the-secrets-of-solder-paste-inspection-an-in-depth-guide", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/solder-paste-inspection/electrify-the-future-of-montana-electronics-manufacturing-with-asc-international", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/solder-paste-inspection/get-your-eyes-on-the-prize-cyberoptics-lsm-2-revolutionizes", destination: "/services/pre-owned-systems", permanent: true },
      { source: "/solder-paste-inspection/headline-revolutionize-solder-paste-inspection-with-cutting-edge-technology-tldr-discover", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/solder-paste-inspection/laservision-sp3d-revolutionizing-industrial-inspection-in-hawaii-and-beyond-tldr", destination: "/products/laservision-sp3d-mini", permanent: true },
      { source: "/solder-paste-inspection/solder-paste-inspection-reduces-errors-for-florida-pcb-manufacturer", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/solder-paste-inspection/the-cyberoptics-se-series-revolutionizing-solder-paste-inspection-in-south", destination: "/products/cyberoptics-se-series", permanent: true },
      { source: "/solder-paste-inspection/the-importance-of-solder-paste-inspection", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/solder-paste-inspection/the-revolutionary-asc-international-system-connecticuts-leading-solder-paste-inspection", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/solder-paste-inspection/the-revolutionary-edge-asc-internationals-cyber-optics-innovations-for-solder", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/solder-paste-inspection/title-revolutionize-how-can-i-contact-asc-international-for-more", destination: "/contact", permanent: true },
      { source: "/solder-paste-inspection/unveiling-the-evolution-of-asc-international-a-leader-in-solder", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/solder-paste-inspection/visionmaster-ap450-the-ultimate-solder-paste-inspection-solution", destination: "/products/visionpro-ap500", permanent: true },
      { source: "/solder-paste-inspection/what-is-sp3d-3d-solder-paste-inspection-equipment", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/solder-paste-inspection/why-you-need-a-solder-paste-inspection-in-florida", destination: "/products/3d-solder-paste-inspection", permanent: true },

      // ── Legacy /automated-optical-inspection articles (1) ──
      { source: "/automated-optical-inspection/unveiling-the-power-of-visionmaster-150-image-detection-for-precise", destination: "/products/automated-optical-inspection", permanent: true },
      // ── Catch-alls: anything not named above ──────────────────
      { source: "/product-category/refurbished-aoi-spi", destination: "/services/pre-owned-systems", permanent: true },
      { source: "/product-category/:slug*", destination: "/products", permanent: true },
      { source: "/product/:slug", destination: "/products", permanent: true },
      { source: "/dealers/:slug*", destination: "/about/global-support", permanent: true },
      { source: "/smt-inspection/:slug*", destination: "/products", permanent: true },
      { source: "/industrial-metrology/:slug*", destination: "/products/3d-industrial-metrology", permanent: true },
      { source: "/3d-spi/:slug*", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/solder-paste-inspection/:slug*", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/cyberoptics/:slug*", destination: "/products/cyberoptics-se-series", permanent: true },
      { source: "/automated-optical-inspection/:slug*", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/process-control/:slug*", destination: "/resources", permanent: true },
    ];
  },
};

export default nextConfig;
