import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: '/resources' },
  title: "Resources: Manuals, Software, Guides",
  description:
    "ASC resource hub: datasheets, user manuals, software downloads and troubleshooting guides for VisionPro, Criterion, LaserVision and more, plus tools.",
  keywords: [
    "ASC International resources",
    "solder paste inspection downloads",
    "SPI user manuals",
    "AOI software downloads",
    "inspection troubleshooting guides",
    "VisionPro manual",
    "Criterion software",
  ],
  openGraph: {
    images: ['/og-image.png'],
    title: "Resources & Downloads | ASC International",
    description:
      "Datasheets, user manuals, software downloads and troubleshooting guides for ASC inspection systems, plus blog, application notes, glossary and ROI tools.",
    type: "website",
  },
};

const resourceCards = [
  {
    title: "Product Literature",
    href: "/resources/product-literature",
    desc: "Datasheets and specifications for the VisionPro, LineMaster, LaserVision, MSS and CyberOptics lines, free to download, plus archived literature for discontinued systems.",
    tag: "Datasheets",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
  },
  {
    title: "User Manuals & Guides",
    href: "/resources/user-manuals-guides",
    desc: "Operation manuals and quick-start guides for VisionPro, Criterion, LaserVision, AV862, SP2D, Verax and the full ASC inspection lineup.",
    tag: "Documentation",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
  },
  {
    title: "Software Downloads",
    href: "/resources/software-downloads",
    desc: "Inspection software, control packages and version updates for ASC systems including Criterion, VisionPro Series, MSS130 DVI and more.",
    tag: "Software",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    ),
  },
  {
    title: "Troubleshooting Guides",
    href: "/resources/troubleshooting-guides",
    desc: "Configuration help, error resolution and maintenance references to keep your ASC SPI and AOI systems running at peak performance.",
    tag: "Support",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    ),
  },
];

const relatedLinks = [
  { title: "Blog & Articles", href: "/blog", desc: "Insights on SPI, AOI and electronics inspection best practices." },
  { title: "Application Notes", href: "/application-notes", desc: "Technical notes covering real-world inspection processes." },
  { title: "Glossary", href: "/glossary", desc: "Definitions of key inspection and SMT manufacturing terms." },
  { title: "FAQ", href: "/faq", desc: "Answers to common questions about ASC inspection systems." },
  { title: "SPI ROI Calculator", href: "/tools/roi-calculator", desc: "Estimate the return on investment from adding SPI to your line." },
];

export default function ResourcesHub() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Resources & Downloads",
    description:
      "ASC International resource hub: product datasheets, user manuals and guides, software downloads, and troubleshooting guides for inspection systems.",
    url: `${SITE_URL}/resources`,
    hasPart: resourceCards.map((c) => ({
      "@type": "WebPage",
      name: c.title,
      url: `${SITE_URL}${c.href}`,
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
            { name: "Resources" },
          ]}
        />

        {/* Hero */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 25% 40%, rgba(14,165,233,0.07) 0%, transparent 60%)" }} />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 text-xs font-semibold px-3 py-1 rounded-full mb-5">
                Resources &amp; Downloads
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
                Resources &amp; Downloads
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Datasheets and specifications for the full SPI and AOI lineup, operation manuals, software downloads and troubleshooting references — alongside our blog, application notes, glossary, FAQ and ROI tools.
              </p>
            </div>
          </div>
        </section>

        {/* Primary resource cards */}
        <section className="pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {resourceCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-7 hover:border-accent-cyan/50 hover:bg-white/[0.07] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {card.icon}
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-accent-purple uppercase tracking-wider">{card.tag}</span>
                  <h2 className="font-display text-xl font-bold text-white mt-1 mb-3 group-hover:text-accent-cyan transition-colors">
                    {card.title}
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{card.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-cyan">
                    Browse
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Note about requesting files */}
        <section className="pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border border-white/10 rounded-2xl p-7 backdrop-blur-md">
              <h2 className="font-display text-xl font-bold text-white mb-2">Need a specific file?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our manuals, software updates and troubleshooting guides are provided on request to ensure you receive the correct version for your exact system and serial number. Browse the catalogs above, then reach out and our support team will send you what you need.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-5 py-2.5 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/40 transition-all">
                  Contact Support
                </Link>
                <a href="mailto:info@ascinternational.com" className="text-sm text-gray-300 hover:text-accent-cyan transition-colors">
                  info@ascinternational.com
                </a>
                <a href="tel:+18884782912" className="text-sm text-gray-300 hover:text-accent-cyan transition-colors">
                  +1 (888) 478-2912
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related resources */}
        <section className="py-16 bg-dark-secondary border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-white mb-2">More Resources</h2>
            <p className="text-gray-400 mb-8">Explore knowledge and tools across the ASC International site.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:border-accent-cyan/50 transition-all"
                >
                  <h3 className="font-semibold text-white mb-1 group-hover:text-accent-cyan transition-colors">{link.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
