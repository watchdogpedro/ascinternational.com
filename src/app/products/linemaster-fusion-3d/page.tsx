import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: '/products/linemaster-fusion-3d' },
  title: "LineMaster Fusion 3D | Inline 3D SPI",
  description: "High-speed inline 3D SPI with 1um height accuracy, PSI 1500 sensor, and closed-loop printer feedback, at an accessible price. 3-year warranty.",
  keywords: [
    "LineMaster Fusion 3D",
    "inline SPI",
    "3D solder paste inspection",
    "affordable inline SPI",
    "PSI 1500 sensor",
    "SPI system",
    "solder paste measurement",
    "inline 3D SPI system",
    "closed loop SPI",
    "GerberPro programming",
  ],
  openGraph: {
    images: ['/og-image.png'],
    title: "LineMaster Fusion 3D — Inline 3D SPI System | ASC International",
    description: "Affordable inline 3D solder paste inspection with sub-micron accuracy, 5-minute GerberPro® programming, and real-time SPC. Closed-loop printer feedback included.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "LineMaster Fusion 3D",
  "description": "Affordable inline 3D solder paste inspection system with PSI 1500® sensor technology, 1µm height accuracy, 0.33 second per FOV inspection speed, and closed-loop printer feedback.",
  "brand": { "@type": "Organization", "name": "ASC International" },
  "manufacturer": { "@type": "Organization", "name": "ASC International" },
  "category": "Solder Paste Inspection System",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD",
    "seller": { "@type": "Organization", "name": "ASC International" },
  },
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Inspection Speed", "value": "0.33 sec/FOV" },
    { "@type": "PropertyValue", "name": "Height Accuracy", "value": "1µm (0.04 mils)" },
    { "@type": "PropertyValue", "name": "Z Resolution", "value": "0.125µm (0.005 mils)" },
    { "@type": "PropertyValue", "name": "Lateral Resolution XY", "value": "8µm (0.3 mils)" },
    { "@type": "PropertyValue", "name": "Gauge R&R", "value": "<<10% at ±30% tolerance" },
    { "@type": "PropertyValue", "name": "Inspection Area", "value": "20\" x 20\" standard, expandable to 48\" x 24\"" },
    { "@type": "PropertyValue", "name": "Minimum Paste Deposit", "value": "51µm (2 mils)" },
    { "@type": "PropertyValue", "name": "Warranty", "value": "3 years end-user warranty with online support" },
  ],
};

const highlights = [
  "Precise high-speed 3D measurement",
  "Fully automatic — seamless post-print control",
  "Closed-loop solder paste printer feedback",
  "True height, area, volume, X-Y, and bridging",
  "Photo-realistic 3D profiles for every board",
  "5-minute GerberPro® programming",
  "Real-time SPC run charts with data traceability",
  "NIST Calibration Standard included",
  "Windows 11 Pro operating system",
  "SMEMA conveyor compatible",
  "3-year end-user warranty with online support",
  "Expandable inspection area up to 48″ × 24″",
];

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "PSI 1500® 3D Sensor Technology",
    description:
      "ASC's proprietary Phase-Shift Interferometry sensor delivers genuine 3D measurement data — not interpolated 2D. True volumetric readings of every solder paste deposit with 0.125µm Z-resolution.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "5-Minute GerberPro® Programming",
    description:
      "Import your Gerber files and the system auto-generates a complete inspection program in under 5 minutes. No manual pad teaching. No lengthy setup. New product introductions are no longer a bottleneck.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Closed-Loop Printer Feedback",
    description:
      "The Fusion 3D communicates directly with your solder paste printer to auto-correct stencil offsets and squeegee pressure before a bad board ever leaves the printer. Catch drift at the source.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Real-Time SPC Run Charts",
    description:
      "Statistical process control data is captured and displayed in real time on-screen. Track trends, identify stencil wear, and intervene before you generate scrap — not after.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Photo-Realistic 3D Profiles",
    description:
      "Every board generates true photo-realistic 3D renderings of solder paste deposits. Operators and engineers can visually confirm measurement data and zoom in on any suspect pad with a single click.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "NIST Traceable Calibration",
    description:
      "Factory calibration is traceable to NIST standards, giving you a defensible measurement chain for ISO audits, customer requirements, and internal quality programs.",
  },
];

const specs = [
  { parameter: "Inspection Speed", value: "0.33 sec. / FOV" },
  { parameter: "Height Accuracy", value: "1µm (0.04 mils)" },
  { parameter: "Z Resolution", value: "0.125µm (0.005 mils)" },
  { parameter: "Lateral Resolution (X-Y)", value: "8µm (0.3 mils)  |  4µm (0.15 mils) optional" },
  { parameter: "Gauge R&R", value: "<<10% at ±30% Tolerance" },
  { parameter: "Minimum Paste Deposit", value: "51µm (2 Mils)" },
  { parameter: "Standard Inspection Area", value: '20" × 20" (508mm × 508mm)' },
  { parameter: "Maximum Inspection Area", value: '48" × 24" (1219mm × 610mm) expandable' },
  { parameter: "Sensor Technology", value: "PSI 1500® Phase-Shift Interferometry" },
  { parameter: "Measurements Captured", value: "Height, Area, Volume, X-Y Registration, Bridging" },
  { parameter: "Operating System", value: "Windows 11 Pro" },
  { parameter: "Conveyor Compatibility", value: "SMEMA Standard" },
  { parameter: "Programming", value: "GerberPro® (≈5 min) + Offline Programming" },
  { parameter: "Calibration", value: "NIST Traceable Standard" },
  { parameter: "Feedback", value: "Closed-Loop Solder Paste Printer" },
  { parameter: "Data & Reporting", value: "Real-Time SPC Run Charts with Full Traceability" },
  { parameter: "Warranty", value: "3 Years End-User with Online Support" },
  { parameter: "Optional Accessories", value: "Jetting Valves Integration" },
];

const relatedProducts = [
  {
    name: "LineMaster Falcon",
    href: "/products/linemaster-falcon",
    tag: "Inline AOI",
    description: "Inline 2D-3D automated optical inspection using Prey technology with Detech2 detection software.",
  },
  {
    name: "LineMaster DMI",
    href: "/products/linemaster-dmi",
    tag: "Dual-Mode SPI + AOI",
    description: "Combined inline 3D SPI sensor and image-based AOI in a single inline system.",
  },
  {
    name: "VisionPro M500",
    href: "/products/visionpro-m500",
    tag: "Benchtop SPI",
    description: "Benchtop 3D SPI with moiré technology for offline and sample inspection.",
  },
];

export default function LinemasterFusion3D() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="bg-dark-bg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Products", href: "/products" },
            { name: "LineMaster Fusion 3D" },
          ]}
        />

        {/* ── Hero ── */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 20% 50%, rgba(0,217,255,0.07) 0%, transparent 60%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Image frame */}
              <div className="relative order-2 lg:order-1">
                <div
                  className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
                  style={{
                    background:
                      "radial-gradient(ellipse, rgba(0,217,255,0.45) 0%, rgba(14,165,233,0.2) 50%, transparent 70%)",
                  }}
                />
                <div
                  className="relative overflow-hidden rounded-2xl border border-accent-cyan/25 bg-dark-bg"
                  style={{ minHeight: "420px" }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(0,217,255,0.08) 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 55%, rgba(0,217,255,0.18) 0%, rgba(14,165,233,0.07) 45%, transparent 72%)",
                    }}
                  />
                  <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-accent-cyan/60" />
                  <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-accent-cyan/60" />
                  <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-accent-cyan/30" />
                  <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-accent-cyan/30" />
                  <div className="relative z-10 flex items-center justify-center p-8" style={{ minHeight: "420px" }}>
                    <Image
                      src="/images/products/linemaster-fusion-3d.png"
                      alt="LineMaster Fusion 3D Inline 3D SPI System"
                      width={420}
                      height={360}
                      className="object-contain max-h-full w-auto"
                      priority
                    />
                  </div>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(0,217,255,0.6), transparent)",
                    }}
                  />
                  {/* Floating badge */}
                  <div className="absolute top-5 right-5 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-accent-cyan/40">
                    PSI 1500® Technology
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 text-xs font-semibold px-3 py-1 rounded-full">
                    Inline 3D SPI
                  </span>
                  <span className="bg-white/5 text-gray-400 border border-white/10 text-xs font-semibold px-3 py-1 rounded-full">
                    Solder Paste Inspection
                  </span>
                  <span className="bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-semibold px-3 py-1 rounded-full">
                    In Stock
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                  LineMaster Fusion 3D
                </h1>
                <p className="text-xl text-gray-200 mb-4 leading-relaxed">
                  The most affordable inline 3D SPI system on the market. High-speed, automatic
                  3-dimensional solder paste measurement with an intuitive Windows interface —
                  engineered for production-line integration from day one.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Powered by ASC&apos;s proprietary PSI 1500® 3D sensor, the Fusion 3D delivers
                  genuine volumetric measurement of every paste deposit on every board. Coupled
                  with 5-minute GerberPro® programming and closed-loop printer feedback, it
                  catches drift before defects are made — not after your reflow oven.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-300">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="group px-7 py-3.5 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-xl hover:shadow-accent-cyan/40 transition-all hover:scale-105 inline-flex items-center gap-2"
                  >
                    Request a Quote
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link
                    href="/contact"
                    className="px-7 py-3.5 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all"
                  >
                    Schedule a Demo
                  </Link>
                  <Link
                    href="/contact"
                    className="px-7 py-3.5 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all"
                  >
                    Download Datasheet
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Quick Stat Bar ── */}
        <section className="border-y border-white/10 bg-white/3">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {[
                { value: "1µm", label: "Height Accuracy" },
                { value: "0.33s", label: "Per FOV Speed" },
                { value: "<<10%", label: "Gauge R&R" },
                { value: "3 Year", label: "Warranty Included" },
              ].map(({ value, label }) => (
                <div key={label} className="py-6 px-6 text-center">
                  <div className="text-3xl font-bold text-accent-cyan mb-1">{value}</div>
                  <div className="text-sm text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Key Features ── */}
        <section className="py-20 relative">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="inline-block px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/25 rounded-full mb-4">
                <span className="text-sm font-semibold text-accent-cyan">CAPABILITIES</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Makes the Fusion 3D Different
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Six engineering decisions that set the LineMaster Fusion 3D apart from
                comparable inline SPI systems — without the premium price.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="group bg-white/3 border border-white/10 rounded-xl p-6 hover:border-accent-cyan/35 hover:bg-white/5 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-blue/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan mb-4 group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What It Measures ── */}
        <section className="py-16 border-t border-white/10 bg-white/2">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/25 rounded-full mb-4">
                  <span className="text-sm font-semibold text-accent-cyan">MEASUREMENT CAPABILITIES</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  Complete Solder Paste Characterization
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  The Fusion 3D doesn&apos;t just check if paste is present — it fully characterizes
                  every deposit in three dimensions. This means you catch under-printing,
                  over-printing, smearing, bridging, and X-Y offset simultaneously, on every
                  board, in line.
                </p>
                <div className="space-y-3">
                  {[
                    { measurement: "Paste Height", detail: "1µm accuracy — detects even subtle stencil clogging" },
                    { measurement: "Paste Volume", detail: "True volumetric reading, not estimated from area" },
                    { measurement: "Pad Coverage Area", detail: "Detect insufficient or excessive paste spread" },
                    { measurement: "X-Y Registration", detail: "Catches stencil misalignment before it becomes a short" },
                    { measurement: "Bridging Detection", detail: "Identifies paste between adjacent pads" },
                    { measurement: "BGA Deposits", detail: "Full 3D characterization of fine-pitch BGA pads" },
                  ].map(({ measurement, detail }) => (
                    <div key={measurement} className="flex gap-4 p-3 bg-white/3 border border-white/8 rounded-lg hover:border-accent-cyan/25 transition-colors">
                      <div className="w-2 h-2 bg-accent-cyan rounded-full flex-shrink-0 mt-1.5" />
                      <div>
                        <span className="text-white font-semibold text-sm">{measurement}</span>
                        <span className="text-gray-400 text-sm"> — {detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/3 border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Why 3D Matters</h3>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-1">2D Inspection Misses Volume</div>
                      <p className="text-gray-400 text-sm">A 2D system sees pad coverage area — but a pad at 50% height still looks &quot;covered&quot; from above. The joint fails downstream.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-1">3D Catches What Matters</div>
                      <p className="text-gray-400 text-sm">The Fusion 3D measures actual paste volume. Low volume = cold solder. Excess volume = bridging. Both are caught before reflow.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm mb-1">Data You Can Act On</div>
                      <p className="text-gray-400 text-sm">SPC run charts trend volume and height over time, so you see stencil degradation happening — not after 500 boards, but after 5.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Technical Specifications ── */}
        <section className="py-20 border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/25 rounded-full mb-4">
                <span className="text-sm font-semibold text-accent-cyan">SPECIFICATIONS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technical Specifications
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                All specifications are from ASC International&apos;s published datasheet.
                Contact us for custom configurations and extended inspection area options.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white/3 border border-white/10 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 bg-accent-cyan/10 border-b border-white/10">
                  <h3 className="font-bold text-white">LineMaster Fusion 3D — Full Specification Sheet</h3>
                </div>
                <div className="divide-y divide-white/8">
                  {specs.map(({ parameter, value }, i) => (
                    <div
                      key={i}
                      className={`grid grid-cols-2 gap-4 px-6 py-4 hover:bg-white/3 transition-colors ${i % 2 === 0 ? "" : "bg-white/2"}`}
                    >
                      <div className="text-sm font-semibold text-gray-300">{parameter}</div>
                      <div className="text-sm text-accent-cyan font-medium">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-center text-gray-500 text-xs mt-4">
                Specifications subject to change without notice. Contact ASC International for the latest datasheet.
              </p>
            </div>
          </div>
        </section>

        {/* ── Who Uses This System ── */}
        <section className="py-16 border-t border-white/10 bg-white/2">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Industries & Applications</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                The LineMaster Fusion 3D is deployed across electronics manufacturing wherever
                inline solder paste quality directly impacts yield and rework costs.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { industry: "Contract Electronics Manufacturing", detail: "Maximize uptime and yield across diverse product runs" },
                { industry: "Automotive Electronics", detail: "Meet IATF 16949 traceability requirements with full data logging" },
                { industry: "Medical Device Assembly", detail: "Support IPC Class 3 quality requirements with NIST-traceable data" },
                { industry: "Aerospace & Defense", detail: "Achieve high-reliability joint quality on safety-critical boards" },
                { industry: "Consumer Electronics", detail: "Sustain high-volume production with minimal operator overhead" },
                { industry: "Industrial Controls", detail: "Protect complex multi-layer PCBs from paste-related defects" },
              ].map(({ industry, detail }) => (
                <div key={industry} className="p-5 bg-white/3 border border-white/10 rounded-xl hover:border-accent-cyan/25 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-cyan rounded-full flex-shrink-0 mt-2" />
                    <div>
                      <div className="text-white font-semibold text-sm mb-1">{industry}</div>
                      <div className="text-gray-400 text-xs leading-relaxed">{detail}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related Products ── */}
        <section className="py-16 border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-8">Related Products</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {relatedProducts.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className="group block p-6 bg-white/3 border border-white/10 rounded-xl hover:border-accent-cyan/35 hover:bg-white/5 transition-all"
                >
                  <span className="inline-block text-xs font-semibold text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 px-3 py-1 rounded-full mb-3">
                    {p.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-accent-cyan text-sm font-medium">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="py-20 border-t border-white/10 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(0,217,255,0.08) 0%, transparent 65%)",
            }}
          />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/15 border border-accent-cyan/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-accent-cyan">Ready to Eliminate Paste Defects?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Get a Quote on the LineMaster Fusion 3D
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our application engineers will review your board types, production volume, and
              current defect profile — then give you a specific ROI projection for your line.
              No obligation. No sales pressure.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-2xl hover:shadow-accent-cyan/40 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Request a Quote
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all"
              >
                Schedule a Demo
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all"
              >
                Download Datasheet
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
