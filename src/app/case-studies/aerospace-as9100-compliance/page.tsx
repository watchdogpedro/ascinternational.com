import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: "Aerospace AS9100 Inspection Compliance Case Study",
  description: "How an aerospace electronics manufacturer eliminated AS9100 audit findings, reduced inspection labor by 45%, and achieved complete digital traceability with ASC automated inspection systems.",
  keywords: ["AS9100 compliance", "aerospace inspection", "automated inspection aerospace", "defense electronics inspection", "inspection labor reduction", "digital traceability"],
  openGraph: {
    title: "Meeting AS9100 Requirements with Automated Inspection",
    description: "Case study: Aerospace manufacturer achieves zero audit findings and 45% inspection labor reduction with ASC automated inspection systems.",
    type: "article",
  },
};

export default function AerospaceAS9100CaseStudy() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Meeting AS9100 Requirements with Automated Inspection",
    "description": "Case study showing how ASC automated inspection helped an aerospace manufacturer achieve full AS9100 compliance with zero audit findings.",
    "author": {
      "@type": "Organization",
      "name": "ASC International",
    },
    "publisher": {
      "@type": "Organization",
      "name": "ASC International",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`,
      },
    },
    "datePublished": "2026-02-01",
    "dateModified": "2026-02-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/case-studies/aerospace-as9100-compliance`,
    },
    "articleSection": "Case Studies",
    "keywords": ["aerospace", "AS9100", "defense electronics", "automated inspection", "traceability"],
  };

  return (
    <>
      <Header />
      <main className="bg-dark-bg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Case Studies", href: "/case-studies" },
            { name: "Aerospace AS9100 Compliance" },
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
              <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-400/30 rounded-full mb-6">
                <span className="text-sm font-semibold text-purple-400">AEROSPACE & DEFENSE</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
                Meeting AS9100 Requirements with Automated Inspection
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                How an aerospace electronics manufacturer eliminated audit findings, dramatically reduced inspection labor, and built a complete digital traceability system through automated inspection.
              </p>
            </div>
          </div>
        </section>

        {/* Key Results Banner */}
        <section className="bg-purple-600 py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-white">Zero</p>
                <p className="text-purple-100 text-sm mt-1">Audit Findings</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">45%</p>
                <p className="text-purple-100 text-sm mt-1">Labor Reduction</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">100%</p>
                <p className="text-purple-100 text-sm mt-1">Digital Traceability</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">3x</p>
                <p className="text-purple-100 text-sm mt-1">Throughput Increase</p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Company Overview</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase">Industry</p>
                    <p className="text-gray-900 font-medium">Aerospace & Defense Electronics</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase">Production Volume</p>
                    <p className="text-gray-900 font-medium">45,000 assemblies/year</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase">Products</p>
                    <p className="text-gray-900 font-medium">Avionics, radar systems, satellite communications</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase">Certifications</p>
                    <p className="text-gray-900 font-medium">AS9100D, ITAR registered, NADCAP</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-900 text-lg leading-relaxed">
                This aerospace and defense electronics manufacturer produces mission-critical avionics, radar processing units, and satellite communication modules for both military and commercial aerospace customers. Operating under AS9100D quality management system requirements and ITAR (International Traffic in Arms Regulations), the company maintains the highest levels of quality assurance and security. Their products endure extreme operating conditions and must demonstrate exceptional reliability over 20+ year service lives.
              </p>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">The Challenge</h2>
              <p className="text-gray-900 text-lg leading-relaxed mb-6">
                Aerospace manufacturing combines low-to-medium volumes with extremely high reliability requirements and rigorous documentation standards. The company&apos;s reliance on manual inspection processes was creating systemic issues that threatened their competitive position and certification status.
              </p>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">AS9100 Audit Findings</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Two consecutive AS9100D surveillance audits identified findings related to the company&apos;s inspection processes. The auditor noted that manual visual inspection did not provide sufficient measurement capability for the fine-pitch components used in modern avionics. Additionally, inspection records relied on paper-based checklists that were difficult to audit and did not meet AS9100D requirements for documented evidence of conformity. A third finding in the next audit cycle would trigger a major nonconformity review.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">Manual Inspection Inconsistencies</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The company employed 14 certified IPC-A-610 inspectors working across two shifts. Despite regular training and recertification, inter-inspector variability was significant. A correlation study revealed that inspectors agreed on only 78% of defect dispositions, with the greatest inconsistencies occurring on borderline solder joint conditions for fine-pitch QFPs and micro-BGAs. This variability created quality risk and was a frequent source of customer disputes on rejection decisions.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">Documentation and Traceability Gaps</h3>
                  <p className="text-gray-600 leading-relaxed">
                    AS9100D Clause 8.5.2 requires organizations to use suitable means to identify outputs with respect to monitoring and measuring requirements throughout production. The company&apos;s paper-based inspection records took an average of 15 minutes per board to complete and were prone to errors and omissions. When a customer required traceability data for a specific serial number, retrieving the records from physical archives took 2-4 hours. For NADCAP audits, the documentation preparation alone consumed two full weeks of quality engineering time.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">Inspection Bottleneck Limiting Growth</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Manual inspection was the production bottleneck, with each board requiring 20-45 minutes of visual inspection time depending on complexity. The company had won a significant new avionics contract that would increase production volume by 40%, but they could not hire and certify enough additional inspectors to support the increased throughput. Lead times were stretching beyond customer expectations, and the company risked losing the contract.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">The Solution</h2>
              <p className="text-gray-900 text-lg leading-relaxed mb-8">
                ASC International designed a comprehensive automated inspection solution that addressed both the quality and documentation challenges specific to aerospace manufacturing. The system was engineered to complement rather than entirely replace human inspectors, keeping experienced personnel focused on the highest-value inspection tasks.
              </p>

              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Full Inline Inspection Coverage</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    ASC deployed 3D SPI and 3D AOI systems inline on both production lines, providing 100% automated inspection of every solder paste deposit and every post-reflow solder joint. The systems were programmed to aerospace-specific IPC Class 3 acceptance criteria, providing objective and repeatable inspection against documented standards.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-1">&#10003;</span>
                      IPC-A-610 Class 3 criteria programmed into all inspection algorithms
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-1">&#10003;</span>
                      100% coverage of every pad and joint - no sampling, no skip
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-1">&#10003;</span>
                      Consistent, objective measurement eliminating inter-inspector variability
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-1">&#10003;</span>
                      Detection of defects invisible to manual inspection (paste volume, hidden joints)
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Automated Reporting and Documentation</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    The ASC system generates comprehensive digital inspection records automatically for every board inspected. Reports include 3D images of every flagged condition, measurement data, pass/fail disposition, and operator review notes - all linked to the board serial number and stored in a searchable database.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-1">&#10003;</span>
                      Automatic generation of First Article Inspection (FAI) reports per AS9102
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-1">&#10003;</span>
                      Digital inspection records with images, measurements, and timestamps
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-1">&#10003;</span>
                      Searchable database with instant retrieval of any serial number record
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-1">&#10003;</span>
                      Automated NADCAP and AS9100 audit report generation
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Integrated Traceability Architecture</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    The inspection systems were integrated with the company&apos;s existing ERP and MES platforms, creating a unified traceability system. Every inspection data point is linked to the board serial number, work order, operator, date/time, and environmental conditions, providing the complete traceability chain required by aerospace customers and regulators.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-1">&#10003;</span>
                      Bi-directional ERP/MES integration for complete production traceability
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-1">&#10003;</span>
                      Barcode/2D matrix serial number scanning for board identification
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-1">&#10003;</span>
                      Environmental data logging (temperature, humidity) linked to inspection records
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2 mt-1">&#10003;</span>
                      Secure data architecture meeting ITAR cybersecurity requirements
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Results</h2>
              <p className="text-gray-900 text-lg leading-relaxed mb-8">
                The ASC automated inspection solution resolved every audit finding, dramatically reduced inspection labor requirements, and positioned the company to support growth without proportional headcount increases.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
                  <p className="text-5xl font-bold text-purple-700">Zero</p>
                  <p className="text-purple-600 font-semibold mt-2">Audit Findings</p>
                  <p className="text-gray-600 text-sm mt-2">Next AS9100D surveillance audit completed with zero findings for the first time in three years</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
                  <p className="text-5xl font-bold text-purple-700">45%</p>
                  <p className="text-purple-600 font-semibold mt-2">Inspection Labor Reduction</p>
                  <p className="text-gray-600 text-sm mt-2">From 14 inspectors to 8, with remaining staff focused on complex review and disposition</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
                  <p className="text-5xl font-bold text-purple-700">100%</p>
                  <p className="text-purple-600 font-semibold mt-2">Digital Traceability</p>
                  <p className="text-gray-600 text-sm mt-2">Complete digital records for every board, instantly retrievable by serial number</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg text-center">
                  <p className="text-5xl font-bold text-purple-700">3x</p>
                  <p className="text-purple-600 font-semibold mt-2">Inspection Throughput</p>
                  <p className="text-gray-600 text-sm mt-2">From 20-45 minutes manual to 3-8 minutes automated per board</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Operational Improvements</h3>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <table className="w-full text-left">
                  <thead className="border-b-2 border-gray-300">
                    <tr>
                      <th className="py-3 text-gray-900">Metric</th>
                      <th className="py-3 text-right text-gray-900">Before</th>
                      <th className="py-3 text-right text-gray-900">After</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">AS9100 audit findings</td>
                      <td className="py-3 text-right text-gray-600">2-3 per audit</td>
                      <td className="py-3 text-right font-semibold text-purple-700">Zero</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Inspection labor (FTEs)</td>
                      <td className="py-3 text-right text-gray-600">14</td>
                      <td className="py-3 text-right font-semibold text-purple-700">8</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Inspection time per board</td>
                      <td className="py-3 text-right text-gray-600">20-45 minutes</td>
                      <td className="py-3 text-right font-semibold text-purple-700">3-8 minutes</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Inter-inspector agreement</td>
                      <td className="py-3 text-right text-gray-600">78%</td>
                      <td className="py-3 text-right font-semibold text-purple-700">99.8%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Record retrieval time</td>
                      <td className="py-3 text-right text-gray-600">2-4 hours</td>
                      <td className="py-3 text-right font-semibold text-purple-700">Under 10 seconds</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">NADCAP audit prep time</td>
                      <td className="py-3 text-right text-gray-600">2 weeks</td>
                      <td className="py-3 text-right font-semibold text-purple-700">2 days</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Annual inspection labor savings</td>
                      <td className="py-3 text-right text-gray-600">-</td>
                      <td className="py-3 text-right font-semibold text-green-700">$420,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Strategic Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1 font-bold">&#10003;</span>
                  <span className="text-gray-700"><strong>New avionics contract secured</strong> - The 40% volume increase was absorbed without additional inspection staffing, winning the contract worth $8.5M over five years.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1 font-bold">&#10003;</span>
                  <span className="text-gray-700"><strong>NADCAP accreditation maintained</strong> - The digital traceability system was praised by NADCAP auditors as a best practice example for the industry.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1 font-bold">&#10003;</span>
                  <span className="text-gray-700"><strong>Customer confidence improved</strong> - Major defense prime contractors specifically cited the automated inspection capability when awarding new programs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1 font-bold">&#10003;</span>
                  <span className="text-gray-700"><strong>Experienced inspectors redeployed</strong> - Six senior inspectors transitioned to higher-value roles in process engineering and quality analysis, improving retention.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Customer Quote */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-purple-50 border-l-4 border-purple-600 p-8 rounded-r-lg shadow-sm">
                <svg className="w-10 h-10 text-purple-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-4">
                  &quot;Our AS9100 auditor told us our inspection process went from being a weakness to a strength in a single audit cycle. The ASC system doesn&apos;t just inspect boards - it generates the documentation that aerospace programs demand. When a prime contractor asks for inspection data on a serial number from two years ago, we pull it up in seconds. That capability has become a competitive advantage we didn&apos;t anticipate.&quot;
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900">Director of Operations</p>
                  <p className="text-gray-500 text-sm">Aerospace & Defense Electronics Manufacturer</p>
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
                Need to Strengthen Your Aerospace Inspection Capability?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Contact our aerospace applications team to discuss automated inspection solutions that satisfy AS9100, NADCAP, and prime contractor requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all">
                  Request Consultation
                </Link>
                <Link href="/case-studies" className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all">
                  View All Case Studies
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
