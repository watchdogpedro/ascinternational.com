import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: "Troubleshooting Guides | Inspection System Support | ASC International",
  description:
    "Troubleshooting and maintenance references for ASC International inspection systems — VisionPro AP212, AP450, Criterion, AV862, HSi, LaserVision Mini SP3D, LineMaster FUSion, MSS130, VisionPro Series, SP2D and Verax. Request a guide for your system.",
  keywords: [
    "ASC troubleshooting guides",
    "SPI troubleshooting",
    "AOI troubleshooting",
    "VisionPro troubleshooting",
    "Criterion troubleshooting",
    "inspection system maintenance",
    "LaserVision Mini SP3D support",
  ],
  openGraph: {
    title: "Troubleshooting Guides | ASC International",
    description: "Troubleshooting and maintenance references for ASC inspection systems.",
    type: "website",
  },
};

const guides = [
  { name: "AP212 Troubleshooting", desc: "Configuration help and error resolution for the VisionPro AP212 system." },
  { name: "AP450 Troubleshooting", desc: "Configuration help and error resolution for the VisionMaster AP450 system." },
  { name: "Criterion 3.1.0 Troubleshooting", desc: "Support references covering administration, acquisition and analysis modules." },
  { name: "AV862 Troubleshooting", desc: "Operations and maintenance support for the AV862 system." },
  { name: "HSi Troubleshooting", desc: "Basic feature and error-resolution support for the VisionPro HSi." },
  { name: "LaserVision Mini SP3D Troubleshooting", desc: "Feature support and service guidance for the LaserVision Mini SP3D." },
  { name: "LineMaster FUSion 3D Troubleshooting", desc: "Feature overview and support for the LineMaster FUSion 3D system." },
  { name: "MSS130 Troubleshooting", desc: "Digital Video Inspection operation and support for the MSS130." },
  { name: "VisionPro Series Troubleshooting", desc: "Feature support for the VisionPro Series 3D SPI systems." },
  { name: "SP2D Troubleshooting", desc: "Operations and user guidance support for the SP2D." },
  { name: "Verax Troubleshooting", desc: "Support references applicable to multiple Verax software versions." },
  { name: "Scanning Services Support", desc: "Guidance on the applications ASC scanning services can help with." },
];

export default function TroubleshootingGuides() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Troubleshooting Guides",
    description: "Troubleshooting and maintenance references for ASC International inspection systems.",
    url: `${SITE_URL}/resources/troubleshooting-guides`,
    hasPart: guides.map((g) => ({ "@type": "CreativeWork", name: g.name, description: g.desc })),
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
            { name: "Troubleshooting Guides" },
          ]}
        />

        {/* Hero */}
        <section className="py-16 lg:py-20 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 25% 40%, rgba(14,165,233,0.07) 0%, transparent 60%)" }} />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 text-xs font-semibold px-3 py-1 rounded-full mb-5">
                Support
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">Troubleshooting Guides</h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Configuration help, error resolution and maintenance references to keep your ASC International SPI and AOI systems running at peak performance. Find your system below and request the matching guide — or reach our engineers directly for hands-on support.
              </p>
            </div>
          </div>
        </section>

        {/* Guides catalog */}
        <section className="pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {guides.map((g) => (
                <div
                  key={g.name}
                  className="flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:border-accent-cyan/40 transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                    <h2 className="font-semibold text-white leading-snug">{g.name}</h2>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed flex-1">{g.desc}</p>
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
              <h2 className="font-display text-2xl font-bold text-white mb-3">Need Hands-On Help?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                You can request any troubleshooting guide, user manual, or software update directly from our support team. For urgent issues, our engineers provide direct technical support — tell us your system model, serial number and the symptom you&apos;re seeing.
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
