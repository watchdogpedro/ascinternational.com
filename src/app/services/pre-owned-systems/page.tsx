import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pre-Owned & Refurbished Inspection Systems",
  description: "Factory-certified pre-owned SPI and AOI systems at 30–50% below new equipment cost. CyberOptics SE Series, QX Series, LSM Series and more. Warranty included. Contact ASC International.",
  keywords: ["pre-owned SPI", "refurbished AOI", "used inspection equipment", "CyberOptics SE500", "CyberOptics QX600", "used SPI system", "refurbished inspection systems", "pre-owned AOI"],
  openGraph: {
    title: "Pre-Owned & Refurbished Inspection Systems — ASC International",
    description: "Factory-certified pre-owned SPI and AOI systems. Real models, real savings. Backed by warranty and ASC support.",
    type: "website",
  },
};

const spiInlineSystems = [
  {
    model: "CyberOptics SE600",
    type: "High Speed Inline SPI",
    badge: "Available",
    highlights: ["Inline conveyor configuration", "High-speed 3D measurement", "Closed-loop printer feedback", "SMEMA compatible"],
  },
  {
    model: "CyberOptics SE500",
    type: "High Speed Inline SPI",
    badge: "Available",
    highlights: ["Inline 3D solder paste inspection", "Phase-shift measurement technology", "Real-time SPC output", "Small footprint"],
  },
  {
    model: "CyberOptics SE 300 Ultra",
    type: "High Speed Inline SPI",
    badge: "Available",
    highlights: ["Proven inline platform", "3D volume & height measurement", "Automated program generation", "Compact design"],
  },
  {
    model: "CyberOptics SE Series",
    type: "High Speed Inline SPI",
    badge: "Multiple Units",
    highlights: ["Various configurations available", "Inline inspection capability", "Full 3D measurement", "Contact us for current stock"],
  },
];

const spiOfflineSystems = [
  {
    model: "CyberOptics LSM 300",
    type: "Offline SPI",
    badge: "Available",
    highlights: ["Offline manual & semi-auto inspection", "3D solder paste measurement", "Ideal for low-volume/high-mix", "Benchtop configuration"],
  },
  {
    model: "CyberOptics LSM 2",
    type: "Offline SPI",
    badge: "Available",
    highlights: ["Automated in-process inspection", "Industry-proven platform", "3,000+ units deployed globally", "Easy setup & operation"],
  },
  {
    model: "CyberOptics LSM",
    type: "Offline SPI",
    badge: "Available",
    highlights: ["First-generation SPI platform", "Manual inspection workflow", "Cost-effective entry point", "Trusted by 1,000s of engineers"],
  },
];

const aoiSystems = [
  {
    model: "CyberOptics QX600",
    type: "High Resolution 2D AOI",
    badge: "Available",
    highlights: ["High-resolution 2D optical inspection", "Full PCB coverage", "Low false-call rate", "Inline capable"],
  },
  {
    model: "CyberOptics QX500",
    type: "2D AOI",
    badge: "Available",
    highlights: ["Proven 2D AOI platform", "Component placement verification", "Solder joint inspection", "Reliable defect detection"],
  },
  {
    model: "CyberOptics QX150i",
    type: "High Resolution 2D AOI",
    badge: "Available",
    highlights: ["High-resolution imaging", "Compact inline AOI", "Fast programming", "SMEMA compatible"],
  },
];

const otherBrands = [
  "Koh Young", "Mirtec", "Omron", "Parmi", "Pemtron", "TRI",
];

const benefits = [
  {
    title: "30–50% Cost Savings",
    description: "Acquire professional-grade inspection capability at a fraction of new equipment cost — without compromising on performance.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Factory Certified",
    description: "Every system is fully disassembled, inspected, repaired, and calibrated by ASC-certified technicians to factory specifications.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Warranty Included",
    description: "All refurbished systems include warranty coverage so you're protected after installation — not left to figure it out alone.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Fast Deployment",
    description: "Systems are tested, calibrated, and ready to ship. Get inspection capability on your floor in weeks, not months.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "ASC Technical Support",
    description: "Full access to ASC's global technical support network — the same team that supports new equipment customers.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Hard-to-Find Models",
    description: "Access discontinued and legacy models that are no longer available new — often the exact system needed to match an existing line.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
];

const refurbishmentSteps = [
  { step: "01", title: "Intake & Assessment", desc: "Complete system evaluation to document all components, identify wear, and establish a refurbishment scope." },
  { step: "02", title: "Disassembly & Cleaning", desc: "Full disassembly to component level. Precision cleaning of optics, mechanics, and PCBs." },
  { step: "03", title: "Parts Replacement", desc: "Worn or failed components replaced with OEM-grade parts. No shortcuts on critical measurement components." },
  { step: "04", title: "Calibration & Verification", desc: "System calibrated to factory specifications using traceable standards. Performance verified across full operating range." },
  { step: "05", title: "Software & Firmware", desc: "Latest stable software and firmware versions installed. All patches and updates applied." },
  { step: "06", title: "Final Certification", desc: "Full inspection report, calibration certificates, and documentation package prepared for handover." },
];

function SystemCard({ model, type, badge, highlights }: { model: string; type: string; badge: string; highlights: string[] }) {
  return (
    <div className="bg-dark-card border border-white/10 rounded-xl p-5 hover:border-accent-cyan/30 transition-all group">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="text-white font-bold text-lg group-hover:text-accent-cyan transition-colors">{model}</div>
          <div className="text-sm text-gray-500">{type}</div>
        </div>
        <span className="text-xs font-semibold text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-1 rounded-full whitespace-nowrap">
          {badge}
        </span>
      </div>
      <ul className="space-y-1.5">
        {highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
            <svg className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PreOwnedSystems() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Pre-Owned & Refurbished Inspection Systems",
    "description": "Factory-certified pre-owned SPI and AOI systems from ASC International",
    "numberOfItems": spiInlineSystems.length + spiOfflineSystems.length + aoiSystems.length,
    "itemListElement": [
      ...spiInlineSystems,
      ...spiOfflineSystems,
      ...aoiSystems,
    ].map((s, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "name": s.model,
        "description": s.type,
        "brand": { "@type": "Organization", "name": "CyberOptics" },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "USD",
          "seller": { "@type": "Organization", "name": "ASC International" },
        },
      },
    })),
  };

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
            { name: "Services", href: "/services" },
            { name: "Pre-Owned Systems" },
          ]}
        />

        {/* Hero */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg" />
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 60%, #00d9ff 0%, transparent 50%), radial-gradient(circle at 80% 30%, #22c55e 0%, transparent 40%)",
            }}
          />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-green-400/10 border border-green-400/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Systems Available Now</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Pre-Owned &amp; Refurbished<br />
                <span className="bg-gradient-to-r from-accent-cyan to-green-400 bg-clip-text text-transparent">
                  Inspection Systems
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Factory-certified SPI and AOI systems at 30–50% below new equipment cost. Every system disassembled, repaired, calibrated, and backed by warranty — not just cleaned up and resold.
              </p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div>
                  <div className="text-3xl font-bold text-green-400">30–50%</div>
                  <div className="text-sm text-gray-400">Below New Cost</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">10+</div>
                  <div className="text-sm text-gray-400">Models Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">100%</div>
                  <div className="text-sm text-gray-400">Factory Tested</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">Warranty</div>
                  <div className="text-sm text-gray-400">Included</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/40 transition-all"
                >
                  Inquire About Availability
                </Link>
                <Link
                  href="/services/new-equipment"
                  className="px-6 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all"
                >
                  Compare to New Equipment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-dark-secondary border-y border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Why Buy Pre-Owned from ASC?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan flex-shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">{b.title}</div>
                    <div className="text-gray-400 text-sm leading-relaxed">{b.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inline SPI */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="text-accent-cyan text-sm font-semibold uppercase tracking-widest mb-2">Solder Paste Inspection</div>
              <h2 className="text-3xl font-bold text-white mb-2">Inline SPI Systems</h2>
              <p className="text-gray-400 max-w-2xl">
                High-speed inline 3D solder paste inspection for production environments. Drop-in compatible with your existing SMT line via SMEMA.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {spiInlineSystems.map((s) => (
                <SystemCard key={s.model} {...s} />
              ))}
            </div>
          </div>
        </section>

        {/* Offline SPI */}
        <section className="py-16 bg-dark-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="text-accent-cyan text-sm font-semibold uppercase tracking-widest mb-2">Solder Paste Inspection</div>
              <h2 className="text-3xl font-bold text-white mb-2">Offline SPI Systems</h2>
              <p className="text-gray-400 max-w-2xl">
                Offline and benchtop SPI platforms for low-volume, high-mix production and quality lab inspection workflows.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {spiOfflineSystems.map((s) => (
                <SystemCard key={s.model} {...s} />
              ))}
            </div>
          </div>
        </section>

        {/* AOI Systems */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="text-accent-cyan text-sm font-semibold uppercase tracking-widest mb-2">Automated Optical Inspection</div>
              <h2 className="text-3xl font-bold text-white mb-2">AOI Systems</h2>
              <p className="text-gray-400 max-w-2xl">
                Pre-owned AOI systems for post-reflow board inspection. Verify component placement, polarity, and solder joint quality.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {aoiSystems.map((s) => (
                <SystemCard key={s.model} {...s} />
              ))}
            </div>
          </div>
        </section>

        {/* Other Brands */}
        <section className="py-16 bg-dark-secondary border-y border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-3">Additional Brands We Stock</h2>
                <p className="text-gray-400">
                  ASC International maintains inventory and expertise across a broad range of inspection equipment manufacturers. Contact us about your specific requirements.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {otherBrands.map((brand) => (
                  <span
                    key={brand}
                    className="bg-dark-card border border-white/10 text-gray-300 font-medium px-5 py-2.5 rounded-full text-sm"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Refurbishment Process */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="text-accent-cyan text-sm font-semibold uppercase tracking-widest mb-2">Our Standard</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The ASC Refurbishment Process</h2>
                <p className="text-gray-400">
                  We don't just test and ship. Every system goes through a rigorous six-step process before it earns an ASC certification.
                </p>
              </div>
              <div className="space-y-6">
                {refurbishmentSteps.map((step, i) => (
                  <div key={step.step} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-blue p-0.5">
                      <div className="w-full h-full bg-dark-bg rounded-xl flex items-center justify-center">
                        <span className="text-accent-cyan font-bold text-sm">{step.step}</span>
                      </div>
                    </div>
                    <div className="pt-1">
                      <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                      <p className="text-gray-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-accent-cyan/10" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Check Current Availability
              </h2>
              <p className="text-xl text-gray-300 mb-4">
                Inventory changes frequently. Contact us to confirm availability, get pricing, and discuss your specific inspection requirements.
              </p>
              <p className="text-gray-500 mb-8 text-sm">
                Tell us what you need — model, board size, throughput, budget — and we'll match you to the right system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/40 transition-all text-lg"
                >
                  Contact Us
                </Link>
                <a
                  href="tel:+17634796210"
                  className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all text-lg"
                >
                  Call (763) 479-6210
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
