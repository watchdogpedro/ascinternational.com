import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: '/resources/user-manuals-guides' },
  title: "User Manuals & Guides",
  description:
    "Operation manuals and quick-start guides for ASC inspection systems: VisionPro, Criterion, AV862, HSi, LaserVision, LineMaster and more. Request yours.",
  keywords: [
    "ASC user manuals",
    "VisionPro AP212 manual",
    "VisionMaster AP450 manual",
    "Criterion manual",
    "LaserVision Mini SP3D manual",
    "SP2D manual",
    "Verax training manual",
    "SPI AOI documentation",
  ],
  openGraph: {
    images: ['/og-image.png'],
    title: "User Manuals & Guides | ASC International",
    description: "Operation manuals and quick-start guides for the full ASC inspection system lineup.",
    type: "website",
  },
};

const manuals = [
  { name: "AP212 User's Guide", desc: "Learn the basic operation of the VisionPro AP212 system." },
  { name: "AP450 Manual", desc: "Learn the basic operation of the VisionMaster AP450 system." },
  { name: "Criterion 3.1.0 — Administration", desc: "Administration reference for the Criterion 3.1.0 software platform." },
  { name: "Criterion 3.1.0 — Acquire", desc: "Image acquisition guide for Criterion 3.1.0." },
  { name: "Criterion 3.1.0 — Analysis", desc: "Defect analysis and reporting guide for Criterion 3.1.0." },
  { name: "AV862 Manual", desc: "Operations manual for the AV862 inspection system." },
  { name: "HSi Manual", desc: "Learn the basic operation of the VisionPro HSi system." },
  { name: "LaserVision Mini SP3D Manual", desc: "Learn the basic operation of the LaserVision Mini SP3D." },
  { name: "LineMaster FUSion Manual", desc: "Covers operation of the LineMaster FUSion inline system." },
  { name: "MSS130 Manual", desc: "Learn the basic operation of the MSS130 system." },
  { name: "MSS130 DVI Manual", desc: "Covers MSS130 Digital Video Inspection operation." },
  { name: "Service Menu Manual", desc: "Service operations reference for the LaserVision Mini SP3D." },
  { name: "VisionPro Manual", desc: "Learn the basic operation of the VisionPro system." },
  { name: "VisionPro Series Manual", desc: "Documentation for the VisionPro Series 3D SPI systems." },
  { name: "SP2D Manual", desc: "Operations manual for the SP2D inspection system." },
  { name: "Verax Training Manual", desc: "Training manual covering all Verax versions and Criterion 3.0.0." },
  { name: "Scanning Services Guide", desc: "Learn more about the applications ASC scanning services support." },
];

export default function UserManualsGuides() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "User Manuals & Guides",
    description: "Operation manuals and quick-start guides for ASC International inspection systems.",
    url: `${SITE_URL}/resources/user-manuals-guides`,
    hasPart: manuals.map((m) => ({ "@type": "CreativeWork", name: m.name, description: m.desc })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="bg-dark-bg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Resources", href: "/resources" },
            { name: "User Manuals & Guides" },
          ]}
        />

        {/* Hero */}
        <section className="py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 25% 40%, rgba(14,165,233,0.07) 0%, transparent 60%)" }} />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 text-xs font-semibold px-3 py-1 rounded-full mb-5">
                Documentation
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">User Manuals &amp; Guides</h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Operation manuals and quick-start guides for the full ASC International inspection lineup. Find the document for your system below, then request a copy and our support team will send the correct version for your equipment and software revision.
              </p>
            </div>
          </div>
        </section>

        {/* Manual catalog */}
        <section className="pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {manuals.map((m) => (
                <div
                  key={m.name}
                  className="flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:border-accent-cyan/40 transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h2 className="font-semibold text-white leading-snug">{m.name}</h2>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed flex-1">{m.desc}</p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-cyan hover:text-white transition-colors"
                  >
                    Request This File
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request CTA */}
        <section className="py-16 bg-dark-secondary border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border border-white/10 rounded-2xl p-8 backdrop-blur-md max-w-3xl">
              <h2 className="font-display text-2xl font-bold text-white mb-3">Request a Manual</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                You can request any user manual, software update, or troubleshooting guide directly from our support team. Tell us your system model and serial number and we&apos;ll send the matching documentation.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/40 transition-all">
                  Contact Support
                </Link>
                <a href="mailto:info@ascinternational.com" className="text-sm text-gray-300 hover:text-accent-cyan transition-colors">info@ascinternational.com</a>
                <a href="tel:+18884782912" className="text-sm text-gray-300 hover:text-accent-cyan transition-colors">+1 (888) 478-2912</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
