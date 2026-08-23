import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: '/history/visionpro-sp3d-georgia' },
  title: "VisionPro SP3D Inspection Technology in Georgia",
  description:
    "VisionPro SP3D laser-based 3D solder paste inspection for Georgia electronics manufacturers. High-resolution imaging and conical convergence illumination automate defect detection and measurement.",
  keywords: [
    "VisionPro SP3D Georgia",
    "solder paste inspection Georgia",
    "3D SPI Georgia",
    "automated inspection Georgia",
    "ASC International Georgia",
    "electronics manufacturing Georgia",
  ],
  openGraph: {
    images: ['/og-image.png'],
    title:
      "VisionPro SP3D: Cutting-Edge Inspection Technology Revolutionizing Georgia's Industries",
    description:
      "How Georgia manufacturers use VisionPro SP3D laser-based 3D inspection to automate defect detection and cut inspection time.",
    type: "article",
  },
};

const features = [
  {
    title: "Microscopic Defect Detection",
    body: "Identifies fine flaws that escape human inspection — down to defects on the order of tens of micrometers.",
  },
  {
    title: "Automated Flaw Marking",
    body: "Pinpoints and marks flaw locations automatically, eliminating tedious manual magnification switching.",
  },
  {
    title: "High-Resolution Imaging",
    body: "Captures sharp, low-noise images for thorough analysis of complex assemblies and dense layouts.",
  },
  {
    title: "Conical Convergence Illumination",
    body: "Even, multi-angle lighting eliminates blind spots and shadowing across the board surface.",
  },
  {
    title: "Wide-Field Selection",
    body: "Quickly zoom into specific regions of interest for detailed, on-demand review.",
  },
  {
    title: "Customizable Configurations",
    body: "Tailor the system to your products, throughput targets, and inspection criteria.",
  },
];

export default function VisionProSP3DGeorgia() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "VisionPro SP3D: Cutting-Edge Inspection Technology Revolutionizing Georgia's Industries",
    description:
      "VisionPro SP3D laser-based 3D solder paste inspection for Georgia electronics manufacturers.",
    author: { "@type": "Organization", name: "ASC International" },
    publisher: { "@type": "Organization", name: "ASC International" },
    about: "VisionPro SP3D 3D solder paste inspection in Georgia",
    articleSection: "Regional Inspection Solutions",
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
            { name: "VisionPro SP3D in Georgia" },
          ]}
        />

        {/* Hero */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 80% 40%, rgba(0,217,255,0.07) 0%, transparent 60%)",
            }}
          />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="bg-accent-blue/15 text-accent-blue border border-accent-blue/30 text-xs font-semibold px-3 py-1 rounded-full">
                Regional Solutions &middot; Georgia
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-5 mb-6">
                VisionPro SP3D: Inspection Technology Revolutionizing
                Georgia&rsquo;s Industries
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                A laser-based 3D inspection system that combines high-resolution
                imaging, conical convergence illumination, and advanced software
                to automate defect detection and measurement for Georgia
                manufacturers.
              </p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-16 bg-dark-secondary border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
              <h2 className="text-3xl font-bold text-white">
                Precision Quality Control for a Growing Manufacturing Hub
              </h2>
              <p>
                Georgia&rsquo;s electronics, automotive, aerospace, and contract
                manufacturing sectors demand tight quality control. The VisionPro
                SP3D brings laser-based 3D inspection to the production line,
                replacing slow, subjective manual review with automated,
                repeatable measurement.
              </p>
              <p>
                Rather than manually switching between magnification levels, the
                system automatically locates and marks flaw positions &mdash;
                identifying microscopic defects that often escape the human eye.
                The result is faster inspection, fewer escapes, and a consistent
                quality standard across every assembly.
              </p>

              <h2 className="text-3xl font-bold text-white pt-4">
                Measurable Performance Benefits
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Shorter inspection cycle times that free up skilled operators.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Lower labor cost through automated detection and marking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Improved accuracy and reduced rejection rates.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Higher, more consistent product quality standards.</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-white pt-4">
                Implementation Done Right
              </h2>
              <p>
                Getting the most from the VisionPro SP3D comes down to two
                things: comprehensive operator training and regular preventive
                maintenance. Together they keep the system performing at its best
                and extend its useful life on the floor.
              </p>

              <h2 className="text-3xl font-bold text-white pt-4">
                Looking Ahead
              </h2>
              <p>
                Ongoing enhancements &mdash; AI-assisted defect detection,
                connected remote access to inspection data, and richer
                three-dimensional imaging &mdash; continue to expand what Georgia
                manufacturers can achieve with automated inspection.
              </p>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-16 border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-10 text-center">
                Key VisionPro SP3D Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-accent-cyan/40 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {f.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {f.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-dark-secondary border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              See the VisionPro SP3D in Action
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Connect with ASC International to discuss a 3D solder paste
              inspection setup matched to your Georgia production line.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/40 transition-all"
              >
                Contact ASC International
              </Link>
              <Link
                href="/products"
                className="px-6 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all"
              >
                Explore Our Products
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
