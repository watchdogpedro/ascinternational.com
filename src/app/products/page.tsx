import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Inspection & Measurement Products | ASC International",
  description: "Complete product lineup from ASC International — 3D SPI, AOI, conformal coating, digital video, 3D metrology, and jetting valves. 12 precision inspection systems for electronics, semiconductor, and industrial manufacturing.",
  keywords: ["ASC International products", "SPI systems", "AOI systems", "3D solder paste inspection", "automated optical inspection", "LineMaster", "VisionPro", "inspection equipment"],
};

const spiProducts = [
  {
    name: "LineMaster Fusion 3D",
    slug: "linemaster-fusion-3d",
    type: "Inline 3D SPI",
    image: "/images/products/linemaster-fusion-3d.png",
    description: "High-speed inline 3D solder paste inspection with fully automatic measurement, eliminating operator errors and delivering outstanding repeatability at an affordable price.",
    badge: "Inline",
  },
  {
    name: "VisionPro HSi",
    slug: "visionpro-hsi",
    type: "Offline 3D SPI",
    image: "/images/products/visionpro-hsi.jpg",
    description: "High-speed portable benchtop 3D SPI system for the production floor. Accurate 3D measurements of paste pads, BGAs, and PCB features with excellent repeatability.",
    badge: "Offline",
  },
  {
    name: "VisionPro AP500",
    slug: "visionpro-ap500",
    type: "Offline 3D SPI",
    image: "/images/products/visionpro-ap500.jpg",
    description: "ASC International's most popular VisionPro AP model — rugged benchtop 3D SPI with fully automatic measurement and minimal operator training required.",
    badge: "Offline",
  },
  {
    name: "VisionPro SP3D",
    slug: "visionpro-sp3d",
    type: "Benchtop Laser SPI",
    image: "/images/products/visionpro-sp3d.png",
    description: "Laser-based benchtop SPI with reliable height, area, and volume measurements. Onboard SPC charting, custom data reports, and Windows 10/11 Pro via ASCan Ultra software.",
    badge: "Benchtop",
  },
  {
    name: "VisionPro M500",
    slug: "visionpro-m500",
    type: "Benchtop Advanced SPI",
    image: "/images/products/visionpro-m500.png",
    description: "Advanced true 3D benchtop SPI with 0.48μm Z-resolution, 6.8μm lateral resolution, and a larger FOV sensor for superior paste measurement in demanding applications.",
    badge: "Benchtop",
  },
  {
    name: "LaserVision SP3D Mini",
    slug: "laservision-sp3d-mini",
    type: "Benchtop Budget SPI",
    image: "/images/products/laservision-sp3d-mini.png",
    description: "Affordable laser-based 3D SPI delivering the same measurement capability as the VisionPro SP3D on a cost-optimized platform. Customer-supplied PC option available.",
    badge: "Benchtop",
  },
  {
    name: "LineMaster DMI",
    slug: "linemaster-dmi",
    type: "Dual Mode SPI + AOI",
    image: "/images/products/linemaster-dmi.jpg",
    description: "Revolutionary dual-mode offline platform combining 3D SPI sensor technology with image-based AOI. Detects missing parts, bridging, polarity issues, and solder defects in a single pass.",
    badge: "Dual Mode",
  },
  {
    name: "LineMaster Fusion DMI",
    slug: "linemaster-fusion-dmi",
    type: "Dual Mode 3D SPI + AOI",
    image: "/images/products/linemaster-fusion-dmi.jpg",
    description: "Dual-mode offline platform merging phase-shift interferometry 3D SPI with image-based AOI. 1µm height accuracy, 4µm lateral SPI resolution, and component inspection down to 01005 in a single system.",
    badge: "Dual Mode",
  },
  {
    name: "CyberOptics SE Series",
    slug: "cyberoptics-se-series",
    type: "Pre-Owned Inline 3D SPI",
    image: "/images/products/cyberoptics-se-series.png",
    description: "Pre-owned high-speed inline 3D SPI from CyberOptics, the world's leading SPI supplier with 3,000+ installs. Award-winning CyberPrint OPTIMIZER software for closed-loop printer process control.",
    badge: "Inline",
  },
];

const aoiProducts = [
  {
    name: "LineMaster Falcon Plus",
    slug: "linemaster-falcon-plus",
    type: "Inline Dual Mode AOI + SPI",
    image: "/images/products/linemaster-falcon-plus.jpg",
    description: "Inline dual-mode system combining 3D SPI and state-of-the-art AOI in one platform. Validates solder printing and component placement in a single pass with a 12 MP color camera.",
    badge: "Inline",
  },
  {
    name: "LineMaster Falcon",
    slug: "linemaster-falcon",
    type: "Inline 2D-3D AOI",
    image: "/images/products/linemaster-falcon.jpg",
    description: "Affordable inline 2D-3D AOI powered by Detech2 Technology. Detects absence, polarity, OCR, solder defects, and lead quality with very low false call rates down to 01005 components.",
    badge: "Inline",
  },
  {
    name: "VisionPro Merlin",
    slug: "visionpro-merlin",
    type: "Offline 2D-3D AOI",
    image: "/images/products/visionpro-merlin.jpg",
    description: "Affordable offline AOI with Detech2 Technology for absence, polarity, OCR, solder, and lead quality inspection. 20″×16″ inspection area expandable to 26″×22″.",
    badge: "Offline",
  },
  {
    name: "VisionPro Merlin XL",
    slug: "visionpro-merlin-xl",
    type: "Large-Format Offline AOI",
    image: "/images/products/visionpro-merlin-xl.png",
    description: "Large-format offline AOI for oversized boards up to 26″×22″. Image-modeling detection with RGBW lighting, OCR, and 01005 component capability for manufacturers needing extended board capacity.",
    badge: "Offline",
  },
  {
    name: "AV 880 Series",
    slug: "av-880-series",
    type: "Inline AOI",
    image: "/images/products/av-880-series.png",
    description: "High-level inline AOI in a cost-effective standalone platform. Large 22″×26″ inspection field, 0.33s per field of view, CAD-based programming via CPL data, OCR, and real-time SPC charting.",
    badge: "Inline",
  },
];

const otherProducts = [
  {
    name: "MSS 130 DVI",
    slug: "mss-130-dvi",
    type: "Digital Video Inspection",
    image: "/images/products/mss-130-dvi.jpg",
    description: "Plug-and-play digital video inspection scope with multiple imaging tools, measurement capabilities for lines/circles/angles, and support for various lenses and lighting configurations.",
    badge: "Digital Video",
  },
  {
    name: "VANT-2 V3",
    slug: "vant-2-v3",
    type: "3D Industrial Metrology",
    image: "/images/products/vant-2-v3.png",
    description: "Precision 3D laser scanning metrology system for dimensional inspection, reverse engineering, and CAD comparison. NIST-traceable accuracy for critical measurement applications.",
    badge: "Metrology",
  },
];

const badgeColors: Record<string, string> = {
  "Inline": "bg-accent-cyan/15 text-accent-cyan border-accent-cyan/30",
  "Offline": "bg-accent-blue/15 text-accent-blue border-accent-blue/30",
  "Benchtop": "bg-accent-purple/15 text-purple-400 border-accent-purple/30",
  "Dual Mode": "bg-green-500/15 text-green-400 border-green-500/30",
  "Digital Video": "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  "Metrology": "bg-orange-500/15 text-orange-400 border-orange-500/30",
};

function ProductCard({ name, slug, type, image, description, badge }: {
  name: string; slug: string; type: string; image: string; description: string; badge: string;
}) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group flex flex-col bg-dark-card border border-white/10 rounded-xl overflow-hidden hover:border-accent-cyan/40 hover:shadow-2xl hover:shadow-accent-cyan/10 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image Frame — tech background effect */}
      <div
        className="relative overflow-hidden bg-dark-bg"
        style={{ height: "220px" }}
      >
        {/* Grid dot pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(0,217,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "22px 22px",
          }}
        />
        {/* Radial cyan glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(0,217,255,0.15) 0%, rgba(14,165,233,0.08) 40%, transparent 70%)",
          }}
        />
        {/* Corner accents */}
        <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-accent-cyan/50 rounded-tl" />
        <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-accent-cyan/50 rounded-tr" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-accent-cyan/25 rounded-bl" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-accent-cyan/25 rounded-br" />
        {/* Product image */}
        <div className="relative z-10 h-full flex items-center justify-center p-5">
          <Image
            src={image}
            alt={name}
            width={300}
            height={200}
            className="object-contain max-h-full w-auto group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {/* Bottom scan line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,217,255,0.5), transparent)",
          }}
        />
      </div>

      {/* Text Area */}
      <div
        className="flex flex-col flex-1 p-5"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,217,255,0.04) 0%, transparent 40%)",
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeColors[badge] ?? "bg-white/10 text-gray-400 border-white/20"}`}
          >
            {badge}
          </span>
          <span className="text-xs text-gray-500">{type}</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors leading-snug">
          {name}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed flex-1">
          {description}
        </p>
        <div className="mt-4 flex items-center gap-1 text-accent-cyan text-sm font-semibold">
          View product
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

function SectionHeader({ label, title, count }: { label: string; title: string; count: number }) {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-3 pt-6 pb-2 border-b border-white/10 mb-2 flex items-end justify-between">
      <div>
        <div className="text-accent-cyan text-xs font-semibold uppercase tracking-widest mb-1">{label}</div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <span className="text-gray-600 text-sm">{count} system{count !== 1 ? "s" : ""}</span>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="bg-dark-bg">
        <Breadcrumb
          items={[{ name: "Home", href: "/" }, { name: "Products" }]}
        />

        {/* Hero */}
        <section className="relative overflow-hidden py-16">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 70% 50%, rgba(0,217,255,0.06) 0%, transparent 60%), radial-gradient(circle at 20% 20%, rgba(14,165,233,0.05) 0%, transparent 50%)`,
            }}
          />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span className="text-accent-cyan text-sm font-medium">16 Precision Systems</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              All Products
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              The complete ASC International lineup — from inline solder paste inspection to 3D industrial metrology. Every system engineered for accuracy, speed, and production-floor reliability.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/40 transition-all"
            >
              Request a Demo or Quote
            </Link>
          </div>
        </section>

        {/* Full Product Grid */}
        <section className="py-12 pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* SPI */}
              <SectionHeader label="Solder Paste Inspection" title="3D SPI Systems" count={9} />
              {spiProducts.map((p) => (
                <ProductCard key={p.slug} {...p} />
              ))}

              {/* AOI */}
              <SectionHeader label="Automated Optical Inspection" title="AOI Systems" count={5} />
              {aoiProducts.map((p) => (
                <ProductCard key={p.slug} {...p} />
              ))}

              {/* Other */}
              <SectionHeader label="Digital Video & Metrology" title="Inspection & Measurement" count={2} />
              {otherProducts.map((p) => (
                <ProductCard key={p.slug} {...p} />
              ))}

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-dark-secondary border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Not Sure Which System Is Right?
              </h2>
              <p className="text-gray-400 mb-8">
                Our application engineers match inspection technology to your specific process requirements. 34+ years of experience, 1,000s of installations worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/40 transition-all"
                >
                  Talk to an Engineer
                </Link>
                <Link
                  href="/services/pre-owned-systems"
                  className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all"
                >
                  View Pre-Owned Systems
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
