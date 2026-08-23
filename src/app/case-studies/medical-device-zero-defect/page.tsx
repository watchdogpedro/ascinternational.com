import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: '/case-studies/medical-device-zero-defect' },
  title: "Medical Device Zero-Defect Case Study",
  description: "A Class III medical device maker reached 99.97% first-pass yield and zero field returns using ASC 3D SPI with full traceability. FDA and ISO 13485.",
  keywords: ["medical device inspection", "ISO 13485 compliance", "FDA inspection requirements", "zero defect manufacturing", "medical device traceability", "SPI medical devices"],
  openGraph: {
    images: ['/og-image.png'],
    title: "Achieving Near-Zero Defect Manufacturing for Medical Devices",
    description: "Case study: Medical device manufacturer achieves 99.97% first-pass yield and zero field returns with ASC 3D SPI and full traceability integration.",
    type: "article",
  },
};

export default function MedicalDeviceCaseStudy() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Achieving Near-Zero Defect Manufacturing for Medical Devices",
    "description": "Case study showing how ASC 3D SPI with full traceability integration helped a medical device manufacturer achieve near-zero defect rates.",
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
      "@id": `${SITE_URL}/case-studies/medical-device-zero-defect`,
    },
    "articleSection": "Case Studies",
    "keywords": ["medical devices", "zero defect", "ISO 13485", "FDA", "traceability"],
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
            { name: "Medical Device Zero-Defect Manufacturing" },
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
              <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-400/30 rounded-full mb-6">
                <span className="text-sm font-semibold text-green-400">MEDICAL DEVICES</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
                Achieving Near-Zero Defect Manufacturing for Medical Devices
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                How a Class III medical device manufacturer achieved industry-leading quality through 3D SPI with complete traceability integration, meeting the most stringent FDA and ISO 13485 requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Key Results Banner */}
        <section className="bg-green-600 py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-white">99.97%</p>
                <p className="text-green-100 text-sm mt-1">First-Pass Yield</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">Zero</p>
                <p className="text-green-100 text-sm mt-1">Field Returns</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">100%</p>
                <p className="text-green-100 text-sm mt-1">Lot Traceability</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">FDA</p>
                <p className="text-green-100 text-sm mt-1">Full Compliance</p>
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
                    <p className="text-gray-900 font-medium">Medical Device Manufacturing</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase">Production Volume</p>
                    <p className="text-gray-900 font-medium">180,000 assemblies/year</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase">Products</p>
                    <p className="text-gray-900 font-medium">Class III implantable devices, patient monitoring systems</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase">Certifications</p>
                    <p className="text-gray-900 font-medium">ISO 13485, FDA 21 CFR Part 820, EU MDR</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-900 text-lg leading-relaxed">
                This medical device manufacturer produces Class III implantable electronic devices and critical patient monitoring systems used in hospitals and surgical centers worldwide. Their products directly support patient safety, making manufacturing quality not just a business metric but a matter of life and death. The company operates two dedicated cleanroom SMT lines processing approximately 180,000 assemblies per year.
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
                Medical device manufacturing operates under the most demanding regulatory framework in electronics. The company faced multiple interconnected challenges that required a comprehensive solution rather than incremental improvements.
              </p>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">FDA Compliance Demands</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The FDA&apos;s 21 CFR Part 820 Quality System Regulation requires medical device manufacturers to establish and maintain procedures for monitoring and controlling process parameters. The company&apos;s existing inspection approach relied heavily on manual visual inspection and sampling-based SPC, which FDA auditors had flagged as insufficient for Class III devices. A recent FDA inspection resulted in a Form 483 observation citing inadequate process validation and monitoring for their solder paste printing process.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">ISO 13485 Traceability Requirements</h3>
                  <p className="text-gray-600 leading-relaxed">
                    ISO 13485 demands complete traceability of all components and processes used in medical device manufacturing. The company could trace components by lot but lacked the ability to link specific inspection data to individual serial numbers. In the event of a field issue, they could not determine which boards had been manufactured under similar conditions, potentially requiring full lot recalls rather than targeted containment.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">Class III Device Reliability Concerns</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Implantable devices must function reliably for 10+ years inside the human body. Even minor solder joint imperfections that might be acceptable in consumer electronics could lead to premature failure in an implant. The company&apos;s first-pass yield of 98.5% seemed good by general manufacturing standards, but the 1.5% requiring rework or disposition represented an unacceptable risk for life-sustaining devices. Two field advisory notices in three years had eroded confidence among their hospital customers.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">Scaling Production Without Compromising Quality</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The company had received regulatory approval for a next-generation implantable device that would double their production volume. Manual inspection was already a bottleneck, and adding inspectors would not scale - human visual inspection becomes less reliable as volumes increase due to fatigue and attention limitations. They needed an automated solution that could handle increased throughput while actually improving quality.
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
                ASC International worked closely with the manufacturer&apos;s quality and regulatory teams to design an inspection system architecture that met both manufacturing and compliance requirements. The solution was specifically designed to satisfy FDA expectations and ISO 13485 traceability standards.
              </p>

              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">3D SPI with Full Traceability Integration</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    ASC deployed 3D SPI systems on both production lines with deep integration into the company&apos;s MES (Manufacturing Execution System). Every board is tracked by unique serial number from paste printing through final test, with complete inspection data archived and linked to each individual assembly.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">&#10003;</span>
                      Serial number-level inspection data archiving for every board produced
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">&#10003;</span>
                      100% pad inspection with zero sampling - every paste deposit measured in 3D
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">&#10003;</span>
                      Tightened control limits specific to medical device requirements (Class III)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">&#10003;</span>
                      Automated data export to MES for complete Device History Record (DHR)
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Validated Inspection Process</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    ASC&apos;s applications team supported a full IQ/OQ/PQ (Installation, Operational, and Performance Qualification) validation of the inspection systems. This included documented measurement system analysis (MSA), gauge repeatability and reproducibility (GR&R) studies, and correlation analysis between SPI measurements and actual solder joint quality.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">&#10003;</span>
                      Complete IQ/OQ/PQ documentation package for FDA audit readiness
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">&#10003;</span>
                      GR&R studies demonstrating less than 5% measurement variation
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">&#10003;</span>
                      Validated inspection algorithms with documented detection capabilities
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">&#10003;</span>
                      Change control procedures for program modifications per 21 CFR Part 820
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Advanced Reporting and Compliance Tools</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    The ASC system was configured with medical device-specific reporting capabilities, including automated trend detection, CAPA (Corrective and Preventive Action) triggers, and audit-ready data exports. Electronic signatures and audit trails comply with FDA 21 CFR Part 11 requirements for electronic records.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">&#10003;</span>
                      21 CFR Part 11 compliant electronic records with audit trail
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">&#10003;</span>
                      Automated out-of-spec notifications with escalation procedures
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">&#10003;</span>
                      Batch-level quality reports for lot release documentation
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">&#10003;</span>
                      Long-term data archiving meeting regulatory retention requirements (15+ years)
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
                The ASC inspection solution delivered results that exceeded expectations on every dimension, from manufacturing quality to regulatory compliance and customer confidence.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
                  <p className="text-5xl font-bold text-green-700">99.97%</p>
                  <p className="text-green-600 font-semibold mt-2">First-Pass Yield</p>
                  <p className="text-gray-600 text-sm mt-2">Up from 98.5%, virtually eliminating rework on critical assemblies</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
                  <p className="text-5xl font-bold text-green-700">Zero</p>
                  <p className="text-green-600 font-semibold mt-2">Field Returns</p>
                  <p className="text-gray-600 text-sm mt-2">No solder-related field failures in 18 months since deployment</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
                  <p className="text-5xl font-bold text-green-700">100%</p>
                  <p className="text-green-600 font-semibold mt-2">Lot Traceability</p>
                  <p className="text-gray-600 text-sm mt-2">Complete serial number-level inspection data for every device produced</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
                  <p className="text-5xl font-bold text-green-700">Clean</p>
                  <p className="text-green-600 font-semibold mt-2">FDA Inspection</p>
                  <p className="text-gray-600 text-sm mt-2">Subsequent FDA inspection completed with zero Form 483 observations</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Quality Improvements in Detail</h3>
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
                      <td className="py-3 text-gray-700">First-pass yield</td>
                      <td className="py-3 text-right text-gray-600">98.50%</td>
                      <td className="py-3 text-right font-semibold text-green-700">99.97%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Solder-related field returns</td>
                      <td className="py-3 text-right text-gray-600">4/year</td>
                      <td className="py-3 text-right font-semibold text-green-700">0</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Traceability coverage</td>
                      <td className="py-3 text-right text-gray-600">Lot-level</td>
                      <td className="py-3 text-right font-semibold text-green-700">Serial number-level</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Inspection data retention</td>
                      <td className="py-3 text-right text-gray-600">6 months</td>
                      <td className="py-3 text-right font-semibold text-green-700">Permanent archive</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Recall risk scope</td>
                      <td className="py-3 text-right text-gray-600">Full lot</td>
                      <td className="py-3 text-right font-semibold text-green-700">Individual device</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Manual inspection labor</td>
                      <td className="py-3 text-right text-gray-600">6 FTEs</td>
                      <td className="py-3 text-right font-semibold text-green-700">1.5 FTEs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Regulatory and Business Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 font-bold">&#10003;</span>
                  <span className="text-gray-700"><strong>FDA Form 483 resolved</strong> - The previous observation regarding process monitoring was fully addressed, with the ASC system cited as a model implementation during the follow-up inspection.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 font-bold">&#10003;</span>
                  <span className="text-gray-700"><strong>EU MDR compliance</strong> - The enhanced traceability system satisfied new EU Medical Device Regulation requirements, enabling continued European market access.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 font-bold">&#10003;</span>
                  <span className="text-gray-700"><strong>Recall risk minimized</strong> - Serial number-level traceability reduced potential recall scope by 95%, from entire lots to specific devices manufactured under specific conditions.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 font-bold">&#10003;</span>
                  <span className="text-gray-700"><strong>Production scaling achieved</strong> - Successfully doubled production volume for new device launch while maintaining quality metrics, without adding inspection staff.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1 font-bold">&#10003;</span>
                  <span className="text-gray-700"><strong>Hospital customer confidence restored</strong> - Zero field advisory notices since deployment, resulting in two major hospital networks expanding their device adoption.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Customer Quote */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-r-lg shadow-sm">
                <svg className="w-10 h-10 text-green-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-4">
                  &quot;In medical devices, there is no acceptable defect rate - every unit must be perfect because every unit goes into a patient. The ASC system gives us the objective data we need to prove that every device we ship meets our specifications. When the FDA asked how we monitor our solder process, we showed them the ASC dashboard and they were genuinely impressed. That level of confidence is invaluable in our industry.&quot;
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900">Director of Quality Assurance</p>
                  <p className="text-gray-500 text-sm">Class III Medical Device Manufacturer</p>
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
                Manufacturing Life-Critical Medical Devices?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Contact our medical device applications team to discuss inspection solutions that meet FDA and ISO 13485 requirements while delivering the quality your patients depend on.
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
