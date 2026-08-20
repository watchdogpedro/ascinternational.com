import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: "Software Downloads | Inspection Software & Updates | ASC International",
  description:
    "Inspection software, control packages and version updates for ASC International systems — Criterion, VisionPro Series, AP212, AP450, AV862, HSi, LaserVision Mini SP3D, LineMaster FUSion, MSS130 DVI, SP2D and Verax. Request your software update.",
  keywords: [
    "ASC software downloads",
    "Criterion software",
    "VisionPro Series software",
    "SPI software update",
    "AOI inspection software",
    "MSS130 DVI software",
    "Verax software",
  ],
  openGraph: {
    title: "Software Downloads | ASC International",
    description: "Inspection software, control packages and version updates for ASC inspection systems.",
    type: "website",
  },
};

const software = [
  { name: "AP212 Software", desc: "Control software for the VisionPro AP212 system." },
  { name: "AP450 Software", desc: "Control software for the VisionMaster AP450 system." },
  { name: "Criterion 3.1.0", desc: "Inspection platform including Administration, Acquire and Analysis modules." },
  { name: "AV862 Software", desc: "Operating software for the AV862 inspection system." },
  { name: "HSi Software", desc: "Control software for the VisionPro HSi system." },
  { name: "LaserVision Mini SP3D Software", desc: "Operating software for the LaserVision Mini SP3D." },
  { name: "LineMaster FUSion Software", desc: "Inline control software for the LineMaster FUSion system." },
  { name: "MSS130 Software", desc: "Control software for the MSS130 system." },
  { name: "MSS130 DVI Software", desc: "Digital Video Inspection software for the MSS130." },
  { name: "Service Menu Utility", desc: "Service utility for the LaserVision Mini SP3D." },
  { name: "VisionPro Series 3D SPI Software", desc: "Inspection software for the VisionPro Series 3D SPI systems." },
  { name: "SP2D Software", desc: "Operating software for the SP2D inspection system." },
  { name: "Verax Software", desc: "Software package covering all Verax versions plus Criterion 3.0.0." },
  { name: "Scanning Services Package", desc: "Software supporting ASC scanning service applications." },
];

export default function SoftwareDownloads() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Software Downloads",
    description: "Inspection software, control packages and version updates for ASC International systems.",
    url: `${SITE_URL}/resources/software-downloads`,
    hasPart: software.map((s) => ({ "@type": "SoftwareApplication", name: s.name, description: s.desc, applicationCategory: "DeveloperApplication" })),
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
            { name: "Software Downloads" },
          ]}
        />

        {/* Hero */}
        <section className="py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 75% 40%, rgba(124,58,237,0.08) 0%, transparent 60%)" }} />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block bg-accent-purple/15 text-accent-purple border border-accent-purple/30 text-xs font-semibold px-3 py-1 rounded-full mb-5">
                Software
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">Software Downloads</h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Inspection software, control packages and version updates for ASC International systems. To make sure you receive a build compatible with your hardware and license, software is provided on request — find your system below and our team will deliver the correct package.
              </p>
            </div>
          </div>
        </section>

        {/* Software catalog */}
        <section className="pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {software.map((s) => (
                <div
                  key={s.name}
                  className="flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:border-accent-cyan/40 transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h2 className="font-semibold text-white leading-snug">{s.name}</h2>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed flex-1">{s.desc}</p>
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
              <h2 className="font-display text-2xl font-bold text-white mb-3">Request a Software Update</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                You can request any software update, user manual, or troubleshooting guide directly from our support team. Provide your system model, software version and serial number, and we&apos;ll send the right package along with installation guidance.
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
