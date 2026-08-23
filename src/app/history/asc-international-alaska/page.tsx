import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: '/history/asc-international-alaska' },
  title: "Optical Inspection in Alaska",
  description:
    "Advanced optical and automated inspection systems for Alaska electronics and industrial manufacturers. High-resolution imaging, laser-based defect detection, and AI-ready quality control from ASC International.",
  keywords: [
    "optical inspection Alaska",
    "ASC International Alaska",
    "automated optical inspection Alaska",
    "defect detection Alaska",
    "quality inspection systems Alaska",
    "electronics manufacturing Alaska",
  ],
  openGraph: {
    images: ['/og-image.png'],
    title: "Unlocking the Power of Optical Inspection: ASC International in Alaska",
    description:
      "How Alaska manufacturers use advanced optical and automated inspection to detect defects with precision and reduce inspection time.",
    type: "article",
  },
};

const benefits = [
  {
    title: "Faster Inspection",
    body: "Automated optical inspection removes slow manual review, helping teams move boards and assemblies through quality control more quickly.",
  },
  {
    title: "Lower Operating Cost",
    body: "Eliminating manual flaw marking and rework reduces labor cost while improving throughput on every shift.",
  },
  {
    title: "Higher Detection Accuracy",
    body: "High-resolution imaging reveals fine defects that the human eye alone can miss, improving first-pass yield.",
  },
  {
    title: "Safer Handling",
    body: "Automated capture reduces repeated manual handling of sensitive or hazardous assemblies during inspection.",
  },
];

export default function ASCInternationalAlaska() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Unlocking the Power of Optical Inspection: ASC International in Alaska",
    description:
      "Advanced optical and automated inspection systems for Alaska electronics and industrial manufacturers.",
    author: { "@type": "Organization", name: "ASC International" },
    publisher: {
      "@type": "Organization",
      name: "ASC International",
    },
    about: "Optical inspection and automated optical inspection in Alaska",
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
            { name: "Optical Inspection in Alaska" },
          ]}
        />

        {/* Hero */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 20% 40%, rgba(14,165,233,0.08) 0%, transparent 60%)",
            }}
          />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="bg-accent-blue/15 text-accent-blue border border-accent-blue/30 text-xs font-semibold px-3 py-1 rounded-full">
                Regional Solutions &middot; Alaska
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-5 mb-6">
                Unlocking the Power of Optical Inspection in Alaska
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                ASC International helps Alaska electronics and industrial
                manufacturers detect defects with exceptional precision using
                advanced optical and automated inspection systems &mdash; built
                for the demands of remote, high-reliability production.
              </p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-16 bg-dark-secondary border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
              <h2 className="text-3xl font-bold text-white">
                Inspection Built for High-Reliability Manufacturing
              </h2>
              <p>
                Manufacturers across Alaska produce electronics and assemblies
                for aerospace, defense, energy, communications, and remote
                industrial applications &mdash; environments where a single
                undetected defect can be costly to service. Optical inspection
                gives quality teams a fast, repeatable way to catch problems
                before products ship.
              </p>
              <p>
                ASC International&rsquo;s systems combine high-resolution imaging
                with laser-based inspection methods to reveal the smallest of
                defects that the human eye alone cannot detect. Consistent,
                automated analysis means every board is judged against the same
                standard, shift after shift.
              </p>

              <h2 className="text-3xl font-bold text-white pt-4">
                Core Capabilities
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span><strong className="text-white">Advanced imaging</strong> &mdash; high-resolution capture with minimal noise for clear, detailed analysis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span><strong className="text-white">Even illumination</strong> &mdash; circular lighting that eliminates blind spots and shadowing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span><strong className="text-white">Customizable configurations</strong> &mdash; setups tailored to specific products and inspection requirements.</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-white pt-4">
                A Note on Alaska&rsquo;s Environment
              </h2>
              <p>
                Cold-climate facilities and remote sites place real demands on
                production equipment. For best results, we recommend appropriate
                temperature control in the inspection area, adequate workplace
                lighting, and proper operator training so teams can take full
                advantage of advanced detection features.
              </p>

              <h2 className="text-3xl font-bold text-white pt-4">
                Where Inspection Is Headed
              </h2>
              <p>
                ASC International continues to invest in better imaging,
                AI-assisted defect detection, and connected data analysis &mdash;
                so Alaska manufacturers can keep raising quality while controlling
                cost.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits grid */}
        <section className="py-16 border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-10 text-center">
                Why Alaska Manufacturers Choose Optical Inspection
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((b, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-accent-cyan/40 transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {b.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{b.body}</p>
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
              Bring Precision Inspection to Your Alaska Facility
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Talk with our team about the right optical and automated inspection
              configuration for your products, volumes, and environment.
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
