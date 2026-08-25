import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { DOCUMENTS, formatBytes, type LegacyDocument } from "@/lib/documents";

export const metadata: Metadata = {
  alternates: { canonical: "/resources/product-literature" },
  title: "Product Literature & Datasheets",
  description:
    "Download datasheets for ASC inspection and metrology systems — VisionPro, LineMaster, LaserVision, MSS and CyberOptics SE and QX. Includes archived literature.",
  keywords: [
    "SPI datasheet",
    "AOI datasheet",
    "VisionPro brochure",
    "LineMaster Fusion datasheet",
    "CyberOptics SE series brochure",
    "LaserVision SP3D specifications",
    "solder paste inspection specifications",
  ],
  openGraph: {
    images: ["/og-image.png"],
    title: "Product Literature & Datasheets | ASC International",
    description:
      "Datasheets and specifications for the ASC inspection and metrology lineup, plus archived literature for discontinued systems.",
    type: "website",
  },
};

const brochures = DOCUMENTS.filter(
  (d) => d.kind === "brochure" && d.status === "current" && !d.gated,
);
const serviceDocs = DOCUMENTS.filter((d) => d.kind === "service" && !d.gated);
const archive = DOCUMENTS.filter((d) => d.status === "legacy" && !d.gated);

function DocumentCard({ doc }: { doc: LegacyDocument }) {
  return (
    <a
      href={doc.path}
      target="_blank"
      rel="noopener"
      className="group flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:border-accent-cyan/40 hover:bg-white/[0.07] transition-all"
    >
      <div className="flex items-start gap-3 mb-3">
        <svg
          className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <h3 className="font-semibold text-white leading-snug group-hover:text-accent-cyan transition-colors">
          {doc.title}
        </h3>
      </div>
      {doc.vendor && (
        <p className="text-xs text-gray-500 mb-2">Manufactured by {doc.vendor}</p>
      )}
      <span className="mt-auto pt-3 text-sm font-semibold text-accent-cyan inline-flex items-center gap-1.5">
        Download PDF
        <span className="text-gray-500 font-normal">({formatBytes(doc.bytes)})</span>
      </span>
    </a>
  );
}

export default function ProductLiterature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Product Literature & Datasheets",
    description:
      "Datasheets and specifications for ASC International inspection and metrology systems.",
    url: `${SITE_URL}/resources/product-literature`,
    hasPart: [...brochures, ...serviceDocs, ...archive].map((d) => ({
      "@type": "DigitalDocument",
      name: d.title,
      url: `${SITE_URL}${d.path}`,
      encodingFormat: "application/pdf",
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
            { name: "Resources", href: "/resources" },
            { name: "Product Literature" },
          ]}
        />

        {/* Hero */}
        <section className="py-16 lg:py-20 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 25% 40%, rgba(14,165,233,0.07) 0%, transparent 60%)",
            }}
          />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 text-xs font-semibold px-3 py-1 rounded-full mb-5">
                Datasheets
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
                Product Literature
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Specifications for the inspection and metrology systems ASC supplies, free to
                download. Further down you&apos;ll find archived literature for systems we no
                longer sell — kept online because plenty of them are still running on production
                floors.
              </p>
            </div>
          </div>
        </section>

        {/* Current product literature */}
        <section className="pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-white mb-6">
              Inspection &amp; Metrology Systems
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {brochures.map((doc) => (
                <DocumentCard key={doc.slug} doc={doc} />
              ))}
            </div>
          </div>
        </section>

        {/* Service literature */}
        <section className="pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-white mb-2">
              Service &amp; Capabilities
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl">
              What our support programs cover, and what our scanning services can measure.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {serviceDocs.map((doc) => (
                <DocumentCard key={doc.slug} doc={doc} />
              ))}
            </div>
          </div>
        </section>

        {/* Archive */}
        <section className="py-16 bg-dark-secondary border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h2 className="font-display text-2xl font-bold text-white">Archive</h2>
              <span className="bg-amber-500/15 text-amber-400 border border-amber-500/30 text-xs font-semibold px-3 py-1 rounded-full">
                Discontinued systems
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl leading-relaxed">
              These describe equipment ASC no longer sells. Some date back far enough to
              advertise Windows XP or Windows 98. They are here for anyone maintaining an
              older system who needs the original specifications — not as a guide to what to
              buy today. For a current equivalent,{" "}
              <Link href="/contact" className="text-accent-cyan hover:text-white transition-colors">
                talk to our team
              </Link>
              .
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {archive.map((doc) => (
                <DocumentCard key={doc.slug} doc={doc} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border border-white/10 rounded-2xl p-8 backdrop-blur-md max-w-3xl">
              <h2 className="font-display text-2xl font-bold text-white mb-3">
                Need something that isn&apos;t here?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Operator and training manuals are sent on request so we can match the version to
                your equipment and software revision. Tell us your model and serial number and
                we&apos;ll send the right one.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/resources/user-manuals-guides"
                  className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/40 transition-all"
                >
                  Request a Manual
                </Link>
                <a
                  href="mailto:info@ascinternational.com"
                  className="text-sm text-gray-300 hover:text-accent-cyan transition-colors"
                >
                  info@ascinternational.com
                </a>
                <a
                  href="tel:+18884782912"
                  className="text-sm text-gray-300 hover:text-accent-cyan transition-colors"
                >
                  +1 (888) 478-2912
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
