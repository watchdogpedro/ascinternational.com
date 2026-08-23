import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: '/case-studies' },
  title: "Inspection Case Studies | SPI & AOI Success Stories",
  description: "Real-world inspection case studies showing measurable results. See how manufacturers in automotive, medical, aerospace, and contract manufacturing achieved dramatic quality improvements with ASC inspection systems.",
  keywords: ["inspection case studies", "SPI results", "AOI success stories", "defect reduction case study", "inspection ROI case study"],
  openGraph: {
    images: ['/og-image.png'],
    title: "Inspection Case Studies - ASC International",
    description: "Real-world results from manufacturers using ASC inspection systems across automotive, medical, aerospace, and contract manufacturing.",
    type: "website",
  },
};

const caseStudies = [
  {
    slug: "automotive-ems-defect-reduction",
    industry: "Automotive Electronics",
    title: "How a Tier 1 Automotive EMS Reduced Defects by 67%",
    challenge: "A Tier 1 automotive EMS provider was struggling with a 3% defect rate and mounting customer complaints, threatening IATF 16949 compliance.",
    keyMetric: "67%",
    metricLabel: "Defect Reduction",
    secondaryMetrics: [
      { value: "$750K", label: "Annual Savings" },
      { value: "8 mo", label: "Payback Period" },
    ],
    color: "blue",
  },
  {
    slug: "medical-device-zero-defect",
    industry: "Medical Devices",
    title: "Achieving Near-Zero Defect Manufacturing for Medical Devices",
    challenge: "A Class III medical device manufacturer needed to meet stringent FDA and ISO 13485 requirements while scaling production volume.",
    keyMetric: "99.97%",
    metricLabel: "First-Pass Yield",
    secondaryMetrics: [
      { value: "Zero", label: "Field Returns" },
      { value: "100%", label: "Lot Traceability" },
    ],
    color: "green",
  },
  {
    slug: "aerospace-as9100-compliance",
    industry: "Aerospace & Defense",
    title: "Meeting AS9100 Requirements with Automated Inspection",
    challenge: "An aerospace electronics manufacturer faced repeated audit findings related to manual inspection inconsistencies and documentation gaps.",
    keyMetric: "Zero",
    metricLabel: "Audit Findings",
    secondaryMetrics: [
      { value: "45%", label: "Labor Reduction" },
      { value: "100%", label: "Digital Traceability" },
    ],
    color: "purple",
  },
  {
    slug: "contract-manufacturer-roi",
    industry: "Contract Manufacturing",
    title: "Contract Manufacturer Achieves 4-Month ROI on Inspection Investment",
    challenge: "A high-mix contract manufacturer with thin margins needed to improve quality across hundreds of different products without adding labor costs.",
    keyMetric: "4 mo",
    metricLabel: "Payback Period",
    secondaryMetrics: [
      { value: "80%", label: "Rework Reduction" },
      { value: "15%", label: "Capacity Increase" },
    ],
    color: "orange",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", badge: "bg-blue-100 text-blue-700" },
  green: { bg: "bg-green-50", text: "text-green-700", border: "border-green-200", badge: "bg-green-100 text-green-700" },
  purple: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200", badge: "bg-purple-100 text-purple-700" },
  orange: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200", badge: "bg-orange-100 text-orange-700" },
};

export default function CaseStudies() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "ASC International Inspection Case Studies",
    "description": "Real-world case studies demonstrating inspection system results across multiple industries",
    "publisher": {
      "@type": "Organization",
      "name": "ASC International",
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": caseStudies.map((cs, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `${SITE_URL}/case-studies/${cs.slug}`,
        "name": cs.title,
      })),
    },
  };

  return (
    <>
      <Header />
      <main className="bg-dark-bg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Case Studies" },
          ]}
        />

        {/* Hero Section */}
        <section className="relative overflow-hidden py-16">
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
              }}
            />
          </div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[120px]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full mb-6">
                <span className="text-sm font-semibold text-accent-cyan">CASE STUDIES</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
                Case Studies
              </h1>
              <p className="text-xl text-white mb-8">
                Real-world results from manufacturers who transformed their quality and efficiency with ASC International inspection systems. Explore measurable outcomes across automotive, medical, aerospace, and contract manufacturing.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {caseStudies.map((cs) => {
                  const colors = colorMap[cs.color];
                  return (
                    <Link
                      key={cs.slug}
                      href={`/case-studies/${cs.slug}`}
                      className={`block bg-white border ${colors.border} rounded-lg overflow-hidden hover:shadow-xl transition-all group`}
                    >
                      <div className={`${colors.bg} p-6`}>
                        <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${colors.badge}`}>
                          {cs.industry}
                        </span>
                        <div className="mt-4 flex items-end gap-2">
                          <span className={`text-5xl font-bold ${colors.text}`}>{cs.keyMetric}</span>
                          <span className={`text-sm font-semibold ${colors.text} mb-2`}>{cs.metricLabel}</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {cs.title}
                        </h2>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                          {cs.challenge}
                        </p>
                        <div className="flex gap-4 mb-4">
                          {cs.secondaryMetrics.map((m) => (
                            <div key={m.label} className="text-center">
                              <p className="text-lg font-bold text-gray-900">{m.value}</p>
                              <p className="text-xs text-gray-500">{m.label}</p>
                            </div>
                          ))}
                        </div>
                        <span className="text-blue-600 font-semibold text-sm group-hover:underline">
                          Read Full Case Study →
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Summary Stats */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-12">Results Our Customers Achieve</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <p className="text-4xl font-bold text-blue-600">67%</p>
                  <p className="text-sm text-gray-600 mt-2">Average Defect Reduction</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-600">4-8 mo</p>
                  <p className="text-sm text-gray-600 mt-2">Typical Payback Period</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-600">99.97%</p>
                  <p className="text-sm text-gray-600 mt-2">Best First-Pass Yield</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-blue-600">$750K+</p>
                  <p className="text-sm text-gray-600 mt-2">Annual Savings Achieved</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-dark-secondary to-dark-card relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 217, 255, 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 217, 255, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Achieve Similar Results?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Contact our applications team to discuss how ASC inspection solutions can deliver measurable quality improvements in your operation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all">
                  Request Consultation
                </Link>
                <Link href="/products" className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all">
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
