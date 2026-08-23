import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: '/3d-aoi/pcb-solder-paste-inspection-precision' },
  title:
    "PCB & Solder Paste Inspection Precision",
  description:
    "A guide to PCB and solder paste inspection. How 3D AOI and SPI catch missing components, bridges, voids, and cold joints, and how automation lifts yield.",
  keywords: [
    "PCB inspection",
    "solder paste inspection",
    "3D AOI",
    "automated optical inspection",
    "solder joint inspection",
    "SPI precision",
    "ASC International",
  ],
  openGraph: {
    images: ['/og-image.png'],
    title:
      "The World of PCB and Solder Paste Inspection: Unlocking Precision",
    description:
      "How PCB inspection and 3D solder paste inspection detect defects and improve electronics manufacturing quality.",
    type: "article",
  },
};

const defects = [
  {
    title: "Missing or Misaligned Components",
    body: "Inspection confirms every component is present and correctly placed before the board moves downstream.",
  },
  {
    title: "Solder Bridges",
    body: "Unintended solder connections between adjacent pads or pins are flagged before they cause shorts.",
  },
  {
    title: "Insufficient or Excess Solder",
    body: "Volume measurement catches starved and overloaded joints that compromise mechanical and electrical integrity.",
  },
  {
    title: "Voids and Cold Joints",
    body: "Hidden voids and poorly wetted, cold solder joints are detected to ensure reliable, long-lived connections.",
  },
];

export default function PCBSolderPasteInspectionPrecision() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "The World of PCB and Solder Paste Inspection: Unlocking Precision",
    description:
      "A guide to PCB and solder paste inspection and how 3D AOI and SPI improve electronics manufacturing quality.",
    author: { "@type": "Organization", name: "ASC International" },
    publisher: { "@type": "Organization", name: "ASC International" },
    about: "PCB inspection, solder paste inspection, and 3D AOI",
    articleSection: "3D AOI",
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
            { name: "PCB & Solder Paste Inspection Precision" },
          ]}
        />

        {/* Hero */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 30%, rgba(14,165,233,0.08) 0%, transparent 60%)",
            }}
          />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <span className="bg-accent-blue/15 text-accent-blue border border-accent-blue/30 text-xs font-semibold px-3 py-1 rounded-full">
                3D AOI &middot; Inspection Guide
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-5 mb-6">
                The World of PCB and Solder Paste Inspection: Unlocking Precision
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Printed circuit boards are the foundation of nearly every
                electronic device. Here&rsquo;s how modern PCB inspection and 3D
                solder paste inspection catch defects early, raise yield, and
                deliver consistent quality.
              </p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-16 bg-dark-secondary border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
              <h2 className="text-3xl font-bold text-white">
                PCB Inspection Fundamentals
              </h2>
              <p>
                A printed circuit board ties together the components that make an
                electronic product work. The inspection process verifies that the
                board is built correctly &mdash; identifying issues such as
                missing components, solder bridges, and component misalignments
                before they reach the customer.
              </p>
              <p>
                Catching these problems early in the line is far less costly than
                discovering them in final test or in the field, which is why
                inspection has become a core part of modern surface-mount
                assembly.
              </p>

              <h2 className="text-3xl font-bold text-white pt-4">
                Why Solder Paste Inspection Matters
              </h2>
              <p>
                Solder inspection verifies the integrity of the solder joints
                that connect each component to the board. Solder paste inspection
                (SPI) measures the deposited paste before reflow &mdash; checking
                volume, area, height, and alignment &mdash; so defects like
                voids, cold joints, and excess solder are caught at the earliest
                possible stage.
              </p>
              <p>
                Because the majority of assembly defects can be traced back to
                the paste print, catching print problems early is one of the most
                effective ways to improve overall board quality.
              </p>

              <h2 className="text-3xl font-bold text-white pt-4">
                The Advantage of Automated Inspection
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span><strong className="text-white">Less human error</strong> &mdash; automated systems apply the same criteria to every board.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span><strong className="text-white">Faster cycle times</strong> &mdash; high-speed capture keeps pace with production.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span><strong className="text-white">Greater consistency</strong> &mdash; repeatable results across batches and shifts.</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-white pt-4">
                High-Resolution 3D AOI
              </h2>
              <p>
                ASC International offers advanced 3D automated optical inspection
                with high-resolution measurement down to roughly 10 micrometers,
                multi-angle camera configurations, and true 3D measurement
                technology. The result is reliable detection of subtle defects
                that 2D inspection can miss.
              </p>

              <h2 className="text-3xl font-bold text-white pt-4">
                Where the Industry Is Heading
              </h2>
              <p>
                Inspection continues to evolve toward AI-assisted defect
                classification, ever more precise imaging and measurement, and
                cloud-based tools for remote monitoring and data analysis &mdash;
                giving manufacturers deeper insight into process health over time.
              </p>
            </div>
          </div>
        </section>

        {/* Defects grid */}
        <section className="py-16 border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-10 text-center">
                Common Defects Inspection Catches
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {defects.map((d, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-accent-cyan/40 transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {d.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{d.body}</p>
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
              Unlock Precision on Your Production Line
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Talk with ASC International about 3D AOI and solder paste inspection
              systems built to raise quality and yield in your facility.
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
