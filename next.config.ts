import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── Domain-level: .net → .com ──────────────────────────────
      {
        source: "/:path*",
        has: [{ type: "host", value: "solderpasteinspection.net" }],
        destination: "https://solderpasteinspection.com/:path*",
        permanent: true, // 301 — passes SEO authority to .com
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.solderpasteinspection.net" }],
        destination: "https://solderpasteinspection.com/:path*",
        permanent: true,
      },

      // ── Legacy ascinternational.com (WordPress) → new site ──────
      // These fire by path, so they catch old ASC URLs once
      // ascinternational.com is pointed at this deployment in Vercel.
      // SPECIFIC rules first; generic param rules afterward.

      // Company / top-level pages
      { source: "/about-us", destination: "/about/company", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/news", destination: "/blog", permanent: true },
      { source: "/support", destination: "/services/technical-support", permanent: true },
      { source: "/sitemap", destination: "/sitemap.xml", permanent: true },
      { source: "/products-services-quicklist", destination: "/products", permanent: true },
      { source: "/shop", destination: "/products", permanent: true },
      { source: "/resources/related-faq-questions-the-near-me-resource-for-everything", destination: "/faq", permanent: true },

      // SMT inspection solution pages
      { source: "/smt-inspection", destination: "/products", permanent: true },
      { source: "/smt-inspection/solder-paste-inspection", destination: "/products/3d-solder-paste-inspection", permanent: true },
      { source: "/smt-inspection/automated-optical-inspection", destination: "/products/automated-optical-inspection", permanent: true },
      { source: "/smt-inspection/universal-product-inspection", destination: "/products", permanent: true },
      { source: "/smt-inspection/digital-video-inspection", destination: "/products/digital-video-inspection", permanent: true },
      { source: "/smt-inspection/pre-owned-refurbished", destination: "/services/pre-owned-systems", permanent: true },

      // Industrial metrology
      { source: "/industrial-metrology", destination: "/products/3d-industrial-metrology", permanent: true },
      { source: "/industrial-metrology/3d-laser-scanning-systems", destination: "/products/3d-industrial-metrology", permanent: true },
      { source: "/industrial-metrology/contract-inspection-services", destination: "/services/contract-inspection", permanent: true },

      // Process control articles → blog
      { source: "/process-control", destination: "/resources", permanent: true },
      { source: "/process-control/solder-paste-measurement-justification", destination: "/blog/solder-paste-measurement-justification", permanent: true },
      { source: "/process-control/yield-improvement-strategies", destination: "/blog/yield-improvement-strategies", permanent: true },
      { source: "/process-control/stamp-out-rework", destination: "/blog/stamp-out-rework", permanent: true },
      { source: "/process-control/billions-of-solder-joints", destination: "/blog/billions-of-solder-joints", permanent: true },

      // History / regional SEO pages (old long slugs → new clean slugs)
      { source: "/history/unlocking-the-power-of-optical-inspection-asc-international-in-alaska", destination: "/history/asc-international-alaska", permanent: true },
      { source: "/history/title-visionpro-sp3d-the-cutting-edge-inspection-technology-revolutionizing-georgias-industries", destination: "/history/visionpro-sp3d-georgia", permanent: true },
      { source: "/3d-aoi/headline-the-world-of-pcb-and-solder-paste-inspection-unlocking-precision", destination: "/3d-aoi/pcb-solder-paste-inspection-precision", permanent: true },

      // Product category pages (specific before generic)
      { source: "/product-category/refurbished-aoi-spi", destination: "/services/pre-owned-systems", permanent: true },
      { source: "/product-category/:slug*", destination: "/products", permanent: true },

      // Generic product detail: /product/<slug> → /products/<slug>
      // Covers every old WordPress product URL in one rule.
      { source: "/product/:slug", destination: "/products/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
