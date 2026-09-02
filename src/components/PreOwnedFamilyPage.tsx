import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import PreOwnedSystemCard, { type PreOwnedSystem } from "@/components/PreOwnedSystemCard";

export interface PreOwnedFamilyPageProps {
  /** Family name as it appears in the breadcrumb and the H1. */
  family: string;
  /** Route segment under /pre-owned, for the JSON-LD identifier. */
  slug: string;
  /** Short kicker above the H1 — the inspection category. */
  kicker: string;
  /** Second line of the H1, rendered in the cyan-to-green gradient. */
  headline: string;
  /** Opening paragraph. Two or three sentences. */
  intro: string;
  /** Supporting paragraph. What the platform actually does on a line. */
  detail: string;
  /** Four short stat pairs for the hero strip. */
  stats: { value: string; label: string }[];
  /** The models ASC stocks in this family. */
  systems: PreOwnedSystem[];
  /** Heading above the model grid. */
  systemsHeading: string;
  /** Intro under that heading. */
  systemsIntro: string;
  /** Tailwind column count for the model grid at lg and up. */
  systemsColumns: "3" | "4";
  /** "Good fit when" bullets — who should be looking at this family. */
  fitFor: string[];
  /** Honest note about the platform's age or limits. Optional. */
  caveat?: string;
  /** Product photo for the hero. Omitted where ASC has no photo of the family. */
  image?: { src: string; alt: string };
}

const gridCols: Record<string, string> = {
  "3": "grid-cols-1 sm:grid-cols-3 gap-4",
  "4": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
};

/**
 * Shared shell for the CyberOptics family pages under /pre-owned. Deliberately
 * mirrors the hub page's layout so the section reads as one thing.
 */
export default function PreOwnedFamilyPage({
  family,
  slug,
  kicker,
  headline,
  intro,
  detail,
  stats,
  systems,
  systemsHeading,
  systemsIntro,
  systemsColumns,
  fitFor,
  caveat,
  image,
}: PreOwnedFamilyPageProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Pre-Owned ${family}`,
    "description": intro,
    "url": `https://ascinternational.com/pre-owned/${slug}`,
    "numberOfItems": systems.length,
    "itemListElement": systems.map((s, i) => ({
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="bg-dark-bg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Pre-Owned", href: "/pre-owned" },
            { name: family },
          ]}
        />

        {/* Hero */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 60%, #00d9ff 0%, transparent 50%), radial-gradient(circle at 80% 30%, #22c55e 0%, transparent 40%)",
            }}
          />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={image ? "grid lg:grid-cols-[minmax(0,1.15fr)_auto] gap-12 items-center" : ""}>
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-green-400/10 border border-green-400/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Systems Available Now</span>
              </div>
              <div className="text-accent-cyan text-sm font-semibold uppercase tracking-widest mb-3">{kicker}</div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-balance">
                {family}
                <br />
                <span className="bg-gradient-to-r from-accent-cyan to-green-400 bg-clip-text text-transparent">
                  {headline}
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-4 max-w-2xl">{intro}</p>
              <p className="text-gray-400 mb-8 max-w-2xl leading-relaxed">{detail}</p>
              <div className="flex flex-wrap gap-8 mb-10">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-bold text-green-400">{s.value}</div>
                    <div className="text-sm text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/40 transition-all"
                >
                  Inquire About Availability
                </Link>
                <Link
                  href="/pre-owned"
                  className="px-6 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all"
                >
                  All Pre-Owned Systems
                </Link>
              </div>
            </div>
            {image && (
              <div className="relative overflow-hidden rounded-2xl border border-accent-cyan/30 bg-dark-bg mx-auto w-fit">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(0,217,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 55%, rgba(0,217,255,0.18) 0%, rgba(14,165,233,0.08) 45%, transparent 72%)",
                  }}
                />
                <div className="absolute top-1 left-1 w-7 h-7 border-t-2 border-l-2 border-accent-cyan/60" />
                <div className="absolute top-1 right-1 w-7 h-7 border-t-2 border-r-2 border-accent-cyan/60" />
                <div className="absolute bottom-1 left-1 w-7 h-7 border-b-2 border-l-2 border-accent-cyan/30" />
                <div className="absolute bottom-1 right-1 w-7 h-7 border-b-2 border-r-2 border-accent-cyan/30" />
                <div className="relative z-10 flex items-center justify-center p-[18px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={320}
                    height={380}
                    className="object-contain h-[300px] sm:h-[440px] w-auto max-w-full rounded-lg"
                  />
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(0,217,255,0.6), transparent)" }}
                />
              </div>
            )}
            </div>
          </div>
        </section>

        {/* Models */}
        <section className="py-20 border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <div className="text-accent-cyan text-sm font-semibold uppercase tracking-widest mb-2">Available Models</div>
              <h2 className="text-3xl font-bold text-white mb-2">{systemsHeading}</h2>
              <p className="text-gray-400 max-w-2xl">{systemsIntro}</p>
            </div>
            <div className={`grid ${gridCols[systemsColumns]}`}>
              {systems.map((s) => (
                <PreOwnedSystemCard key={s.model} {...s} />
              ))}
            </div>
            {caveat && (
              <p className="mt-8 max-w-3xl text-sm text-gray-500 leading-relaxed border-l-2 border-white/10 pl-4">
                {caveat}
              </p>
            )}
          </div>
        </section>

        {/* Fit */}
        <section className="py-16 bg-dark-secondary border-y border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Worth a look if</h2>
              <ul className="space-y-4">
                {fitFor.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Every system includes */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What you get with it</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Every pre-owned system leaves ASC disassembled to component level, rebuilt with OEM-grade parts,
                recalibrated against traceable standards, and documented. It ships with a calibration certificate,
                an inspection report, and warranty coverage, and it is supported by the same engineers who support
                the new equipment.
              </p>
              <Link
                href="/pre-owned#process"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-cyan hover:text-white transition-colors"
              >
                Read the six-step refurbishment process
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden border-t border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-accent-cyan/10" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Check Current Availability</h2>
              <p className="text-xl text-gray-300 mb-4">
                Stock on the {family} turns over. Tell us the board size, throughput and budget you are working to and
                we will tell you what is on the floor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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
