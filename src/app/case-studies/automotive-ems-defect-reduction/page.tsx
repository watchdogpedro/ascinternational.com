import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: '/case-studies/automotive-ems-defect-reduction' },
  title: "Automotive EMS Defect Reduction Case Study | 67% Fewer Defects",
  description: "Learn how a Tier 1 automotive EMS provider reduced defects by 67% and saved $750K annually using ASC 3D SPI and AOI with closed-loop feedback. IATF 16949 compliance achieved.",
  keywords: ["automotive inspection case study", "IATF 16949 compliance", "defect reduction", "3D SPI automotive", "AOI closed-loop feedback", "EMS quality improvement"],
  openGraph: {
    images: ['/og-image.png'],
    title: "How a Tier 1 Automotive EMS Reduced Defects by 67%",
    description: "Case study: Automotive EMS achieves 67% defect reduction, $750K annual savings, and full IATF 16949 compliance with ASC inspection systems.",
    type: "article",
  },
};

export default function AutomotiveEMSCaseStudy() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How a Tier 1 Automotive EMS Reduced Defects by 67%",
    "description": "Case study showing how ASC 3D SPI and AOI with closed-loop feedback helped an automotive EMS provider achieve dramatic defect reduction and cost savings.",
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
      "@id": `${SITE_URL}/case-studies/automotive-ems-defect-reduction`,
    },
    "articleSection": "Case Studies",
    "keywords": ["automotive", "defect reduction", "IATF 16949", "3D SPI", "AOI"],
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
            { name: "Automotive EMS Defect Reduction" },
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
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full mb-6">
                <span className="text-sm font-semibold text-blue-400">AUTOMOTIVE ELECTRONICS</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
                How a Tier 1 Automotive EMS Reduced Defects by 67%
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                A comprehensive inspection solution with closed-loop feedback delivered dramatic quality improvements and cost savings for a leading automotive electronics manufacturer.
              </p>
            </div>
          </div>
        </section>

        {/* Key Results Banner */}
        <section className="bg-blue-600 py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-white">67%</p>
                <p className="text-blue-100 text-sm mt-1">Defect Reduction</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">0.5%</p>
                <p className="text-blue-100 text-sm mt-1">Scrap Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">$750K</p>
                <p className="text-blue-100 text-sm mt-1">Annual Savings</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">8 mo</p>
                <p className="text-blue-100 text-sm mt-1">Payback Period</p>
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
                    <p className="text-gray-900 font-medium">Tier 1 Automotive EMS</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase">Production Volume</p>
                    <p className="text-gray-900 font-medium">2.4 million boards/year</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase">Products</p>
                    <p className="text-gray-900 font-medium">ECUs, ADAS modules, powertrain controllers</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase">Certifications</p>
                    <p className="text-gray-900 font-medium">IATF 16949, ISO 14001</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-900 text-lg leading-relaxed">
                This Tier 1 automotive electronics manufacturer produces safety-critical electronic control units (ECUs) and advanced driver-assistance system (ADAS) modules for major OEMs across North America, Europe, and Asia. Operating four high-volume SMT lines, the company processes over 2.4 million boards annually with an average board value exceeding $85.
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
                Despite being a well-established manufacturer, the company faced mounting quality challenges that threatened both their customer relationships and their IATF 16949 certification. Their existing 2D inspection systems were struggling to keep pace with increasingly complex automotive assemblies.
              </p>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">Rising Defect Rates</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The company's overall defect rate had climbed to 3%, significantly above the 1% target set by their primary OEM customers. Solder paste defects accounted for approximately 60% of all failures, with issues ranging from insufficient paste volume on fine-pitch QFP leads to bridging on 0402 components. Their aging 2D SPI system could not reliably measure paste volume, leading to many defects escaping to downstream processes.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">Customer Complaints and Escalations</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Three major OEM customers had issued quality escalation notices in the preceding 12 months. Two of these involved field returns of ADAS modules with solder joint failures, triggering expensive root cause investigations and containment actions. The company was at risk of losing contracts worth $12 million annually if quality did not improve.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">IATF 16949 Compliance Risk</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Their most recent IATF 16949 surveillance audit identified multiple minor nonconformities related to inspection capability and process control. The auditor specifically noted the lack of 3D measurement capability for solder paste inspection and the absence of closed-loop feedback between inspection and printing processes. Another audit finding would trigger a major nonconformity, jeopardizing their certification.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">Excessive Scrap and Rework Costs</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The 3% defect rate translated to approximately 72,000 defective boards per year. With a 1.5% scrap rate and significant rework requirements, the company was losing over $1.2 million annually in direct quality costs. Rework operations consumed 12 full-time equivalent technicians, and reworked boards required additional re-inspection cycles that further slowed throughput.
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
                After evaluating multiple inspection vendors, the manufacturer selected ASC International to provide a comprehensive inspection solution across all four production lines. The decision was based on ASC&apos;s proven track record in automotive applications and the ability to deliver true closed-loop process control.
              </p>

              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">3D Solder Paste Inspection</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    ASC deployed 3D SPI systems on each of the four SMT lines, replacing the existing 2D systems. The new systems provided true volumetric measurement of every solder paste deposit, enabling precise detection of insufficient paste, excess paste, bridging, and offset conditions that the 2D systems had been missing.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">&#10003;</span>
                      True 3D volume measurement with less than 1% measurement repeatability
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">&#10003;</span>
                      100% pad coverage on every board including 01005 and micro-BGA deposits
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">&#10003;</span>
                      Real-time statistical process control with customizable control limits
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">&#10003;</span>
                      Cycle time under 8 seconds for the largest board, maintaining line throughput
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">3D Automated Optical Inspection</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Post-reflow 3D AOI systems were installed on each line to verify component placement and solder joint quality. The systems used advanced multi-angle imaging and AI-powered defect classification to minimize false calls while maintaining comprehensive defect coverage.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">&#10003;</span>
                      3D solder fillet measurement for all component types
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">&#10003;</span>
                      AI-based defect classification reducing false call rate below 0.1%
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">&#10003;</span>
                      Component verification including polarity, presence, and correct value
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">&#10003;</span>
                      Side-view cameras for lead and gull-wing inspection
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Closed-Loop Feedback Integration</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    The key differentiator in the ASC solution was the implementation of closed-loop feedback between the SPI systems and the solder paste printers. When the SPI detected trending conditions such as gradual volume decline or increasing offset, it automatically communicated corrections to the printer to maintain optimal paste deposition.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">&#10003;</span>
                      Automatic stencil alignment correction based on SPI offset measurements
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">&#10003;</span>
                      Proactive cleaning cycle triggers when volume trends approach control limits
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">&#10003;</span>
                      SPI-to-AOI data correlation for comprehensive defect traceability
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">&#10003;</span>
                      Centralized dashboard providing real-time quality metrics across all lines
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-8 text-gray-900">Implementation Timeline</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-right mr-6">
                    <span className="text-sm font-bold text-blue-600">Month 1</span>
                  </div>
                  <div className="flex-grow border-l-2 border-blue-200 pl-6 pb-6">
                    <h3 className="font-semibold text-gray-900">Site Assessment and Planning</h3>
                    <p className="text-gray-600 text-sm">ASC applications team conducted a thorough production audit, identified key defect modes, and designed the optimal inspection strategy.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-right mr-6">
                    <span className="text-sm font-bold text-blue-600">Month 2-3</span>
                  </div>
                  <div className="flex-grow border-l-2 border-blue-200 pl-6 pb-6">
                    <h3 className="font-semibold text-gray-900">Line 1 & 2 Installation</h3>
                    <p className="text-gray-600 text-sm">SPI and AOI systems installed on the first two lines. Operator training conducted. Initial programs created for 28 active products.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-right mr-6">
                    <span className="text-sm font-bold text-blue-600">Month 3-4</span>
                  </div>
                  <div className="flex-grow border-l-2 border-blue-200 pl-6 pb-6">
                    <h3 className="font-semibold text-gray-900">Line 3 & 4 Installation</h3>
                    <p className="text-gray-600 text-sm">Remaining lines equipped. Closed-loop feedback activated. Centralized monitoring dashboard deployed.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-right mr-6">
                    <span className="text-sm font-bold text-blue-600">Month 5-6</span>
                  </div>
                  <div className="flex-grow border-l-2 border-blue-200 pl-6 pb-6">
                    <h3 className="font-semibold text-gray-900">Optimization and Validation</h3>
                    <p className="text-gray-600 text-sm">Fine-tuned inspection parameters. Validated defect coverage against known defect library. Conducted MSA studies to confirm measurement capability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Results</h2>
              <p className="text-gray-900 text-lg leading-relaxed mb-8">
                Within six months of full deployment, the manufacturer achieved transformative improvements across every quality metric. The results exceeded initial projections and satisfied all customer quality requirements.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
                  <p className="text-5xl font-bold text-blue-700">67%</p>
                  <p className="text-blue-600 font-semibold mt-2">Defect Reduction</p>
                  <p className="text-gray-600 text-sm mt-2">From 3.0% to under 1.0% overall defect rate, meeting all OEM quality targets</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
                  <p className="text-5xl font-bold text-blue-700">0.5%</p>
                  <p className="text-blue-600 font-semibold mt-2">Scrap Rate</p>
                  <p className="text-gray-600 text-sm mt-2">Down from 1.5%, saving over 24,000 boards per year from scrap</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
                  <p className="text-5xl font-bold text-green-700">$750K</p>
                  <p className="text-green-600 font-semibold mt-2">Annual Savings</p>
                  <p className="text-gray-600 text-sm mt-2">Combined savings from reduced scrap, rework, warranty costs, and labor</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
                  <p className="text-5xl font-bold text-green-700">8 mo</p>
                  <p className="text-green-600 font-semibold mt-2">Payback Period</p>
                  <p className="text-gray-600 text-sm mt-2">Total system investment recovered in under 8 months from deployment</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Detailed Savings Breakdown</h3>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <table className="w-full text-left">
                  <thead className="border-b-2 border-gray-300">
                    <tr>
                      <th className="py-3 text-gray-900">Category</th>
                      <th className="py-3 text-right text-gray-900">Before</th>
                      <th className="py-3 text-right text-gray-900">After</th>
                      <th className="py-3 text-right text-gray-900">Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Scrap costs</td>
                      <td className="py-3 text-right text-gray-600">$306,000/yr</td>
                      <td className="py-3 text-right text-gray-600">$102,000/yr</td>
                      <td className="py-3 text-right font-semibold text-green-700">$204,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Rework labor</td>
                      <td className="py-3 text-right text-gray-600">$480,000/yr</td>
                      <td className="py-3 text-right text-gray-600">$168,000/yr</td>
                      <td className="py-3 text-right font-semibold text-green-700">$312,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Warranty claims</td>
                      <td className="py-3 text-right text-gray-600">$185,000/yr</td>
                      <td className="py-3 text-right text-gray-600">$37,000/yr</td>
                      <td className="py-3 text-right font-semibold text-green-700">$148,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Manual inspection labor</td>
                      <td className="py-3 text-right text-gray-600">$120,000/yr</td>
                      <td className="py-3 text-right text-gray-600">$34,000/yr</td>
                      <td className="py-3 text-right font-semibold text-green-700">$86,000</td>
                    </tr>
                    <tr className="border-t-2 border-gray-900">
                      <td className="py-3 font-bold text-gray-900">Total Annual Savings</td>
                      <td className="py-3"></td>
                      <td className="py-3"></td>
                      <td className="py-3 text-right font-bold text-green-700 text-lg">$750,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Additional Outcomes</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">&#10003;</span>
                  <span className="text-gray-700"><strong>IATF 16949 compliance restored</strong> - All previous audit findings resolved. Subsequent surveillance audit completed with zero nonconformities.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">&#10003;</span>
                  <span className="text-gray-700"><strong>Customer escalations eliminated</strong> - Zero quality escalation notices in the 12 months following deployment.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">&#10003;</span>
                  <span className="text-gray-700"><strong>New business won</strong> - Improved quality metrics enabled the company to win $4.2M in new contracts from two additional OEM customers.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1 font-bold">&#10003;</span>
                  <span className="text-gray-700"><strong>Rework staff redeployed</strong> - Eight rework technicians reassigned to higher-value production roles, improving overall labor utilization.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Customer Quote */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white border-l-4 border-blue-600 p-8 rounded-r-lg shadow-sm">
                <svg className="w-10 h-10 text-blue-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-4">
                  &quot;The ASC inspection solution didn&apos;t just fix our quality problems - it transformed how we think about process control. The closed-loop feedback between SPI and our printers catches issues before they become defects. We went from firefighting customer complaints to proactively optimizing our processes. The ROI was obvious within the first quarter.&quot;
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900">Vice President of Quality</p>
                  <p className="text-gray-500 text-sm">Tier 1 Automotive EMS Manufacturer</p>
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
                Facing Similar Automotive Quality Challenges?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Contact our automotive applications team to discuss how ASC inspection solutions can help you meet IATF 16949 requirements and achieve zero-defect targets.
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
