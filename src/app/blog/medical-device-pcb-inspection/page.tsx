import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: "Medical Device PCB Inspection: FDA, ISO 13485 & IPC Requirements",
  description: "What inspection standards apply to medical device PCB assembly. Covers FDA 21 CFR Part 820, ISO 13485, IPC-A-610 Class 3, and how 3D SPI and AOI help manufacturers meet them.",
  keywords: ["medical device PCB inspection", "ISO 13485 inspection", "FDA PCB quality", "IPC-A-610 Class 3", "medical electronics quality", "medical device manufacturing"],
  openGraph: {
    title: "Medical Device PCB Inspection: FDA, ISO 13485 & IPC Requirements",
    description: "A practical guide to inspection requirements for medical device electronics manufacturers — what the standards demand and how to meet them.",
    type: "article",
  },
};

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Medical Device PCB Inspection: FDA, ISO 13485, and IPC Requirements",
    "description": "What inspection standards apply to medical device PCB assembly, and how 3D SPI and AOI systems help manufacturers meet FDA, ISO 13485, and IPC-A-610 Class 3 requirements.",
    "author": {
      "@type": "Organization",
      "name": "ASC International"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ASC International",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`
      }
    },
    "datePublished": "2026-03-16",
    "dateModified": "2026-03-16",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/medical-device-pcb-inspection`
    },
    "articleSection": "Industry",
    "keywords": ["medical device", "ISO 13485", "FDA", "IPC-A-610", "Class 3", "PCB inspection", "quality management"]
  };

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: "Medical Device PCB Inspection Requirements" },
          ]}
        />

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <header className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Industry</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Medical Device PCB Inspection: FDA, ISO 13485 &amp; IPC Requirements
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  Medical device manufacturers face the most stringent PCB quality requirements of any industry. Here&apos;s what the standards actually require — and how automated inspection helps you meet them.
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <time dateTime="2026-03-16">March 16, 2026</time>
                  <span className="mx-2">•</span>
                  <span>14 min read</span>
                </div>
              </header>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  A failed solder joint in a consumer product is an inconvenience. A failed solder joint in an implantable cardiac device, a ventilator, or a surgical robot is a patient safety event. The consequences of electronics failure in medical devices justify — and in most cases legally require — the most rigorous inspection practices in electronics manufacturing.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Understanding what the relevant standards require, and how automated inspection systems satisfy those requirements, is essential for any manufacturer in this space.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4">The Regulatory Landscape</h2>
                <p className="text-gray-700 mb-4">
                  Medical device manufacturers operate under a layered set of requirements from multiple sources:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li><strong>FDA 21 CFR Part 820</strong> — Quality System Regulation for medical devices sold in the US</li>
                  <li><strong>ISO 13485:2016</strong> — International quality management standard for medical device manufacturers</li>
                  <li><strong>IPC-A-610</strong> — Industry standard for PCB assembly acceptability, Class 3 for medical applications</li>
                  <li><strong>IPC-7711/7721</strong> — Rework and repair standards for assembled boards</li>
                  <li><strong>EU MDR (Medical Device Regulation)</strong> — European requirements with design history file and technical documentation requirements</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  These standards are not independent — they overlap and reinforce each other. ISO 13485 is harmonized with FDA QSR requirements in many areas. IPC-A-610 Class 3 criteria are referenced by customer specifications rather than regulations directly, but in practice Class 3 is the minimum expectation for implantable and life-sustaining devices.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4">What FDA 21 CFR Part 820 Requires</h2>
                <p className="text-gray-700 mb-4">
                  The FDA Quality System Regulation (QSR) is a framework regulation — it specifies what outcomes a quality system must achieve without prescribing exactly how. Key sections relevant to PCB inspection include:
                </p>

                <div className="space-y-6 my-8">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Section 820.70 — Production and Process Controls</h3>
                    <p className="text-gray-700">Requires that manufacturing processes be controlled and validated, including establishing process parameters and monitoring systems that detect nonconformities. This is where SPI and AOI systems live — as process monitoring tools that detect paste deposition and component placement errors in real time.</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Section 820.80 — Receiving, In-Process, and Finished Device Acceptance</h3>
                    <p className="text-gray-700">Requires acceptance activities for components, in-process materials, and finished devices, with documented acceptance criteria and records. Every board that passes inspection must have a traceable record of its inspection results.</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Section 820.86 — Acceptance Status</h3>
                    <p className="text-gray-700">Requires that acceptance status of components and finished devices be clearly identified. Automated inspection systems that generate board-level pass/fail records satisfy this requirement — manual visual inspection with paper sign-off sheets often doesn&apos;t, at least not reliably.</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">Section 820.100 — Corrective and Preventive Action (CAPA)</h3>
                    <p className="text-gray-700">Requires identification of quality problems, root cause analysis, and corrective action. SPI process trend data — showing drift in paste volume or offset before defects occur — is exactly the kind of proactive data that supports a strong CAPA program.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4">ISO 13485 and PCB Assembly</h2>
                <p className="text-gray-700 mb-4">
                  ISO 13485:2016 is the most widely adopted quality management standard for medical device manufacturers worldwide. Its requirements for inspection and testing are found primarily in Section 7.5 (Production and Service Provision) and Section 8.2 (Monitoring and Measurement).
                </p>
                <p className="text-gray-700 mb-4">
                  Key requirements relevant to PCB inspection:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
                  <li><strong>Validation of special processes:</strong> Soldering is explicitly identified as a special process — one whose output cannot be fully verified by subsequent inspection alone. This requires process validation, not just end-point inspection.</li>
                  <li><strong>Traceability to the device level:</strong> ISO 13485 requires that components and materials used in each device be traceable. For PCB assembly, this means linking inspection records to individual board serial numbers, not just batch or lot records.</li>
                  <li><strong>Statistical techniques:</strong> The standard requires appropriate use of statistical methods for process monitoring. SPI process capability data (Cpk for paste volume, offset, area) directly satisfies this requirement.</li>
                  <li><strong>Control of monitoring and measuring equipment:</strong> Inspection systems must be calibrated and maintained, with calibration records that can be produced during audits.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4">IPC-A-610 Class 3: What It Actually Means for Assembly</h2>
                <p className="text-gray-700 mb-4">
                  IPC-A-610 defines three classes of acceptability for electronic assemblies:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li><strong>Class 1:</strong> General electronics — consumer products</li>
                  <li><strong>Class 2:</strong> Dedicated service electronics — industrial, commercial</li>
                  <li><strong>Class 3:</strong> High-performance electronics — medical, military, aerospace</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Class 3 tightens acceptance criteria across every assembly characteristic. For solder joints, Class 3 requires:
                </p>

                <div className="overflow-x-auto my-8">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="p-4 text-left">Characteristic</th>
                        <th className="p-4 text-left">Class 2 (Industrial)</th>
                        <th className="p-4 text-left">Class 3 (Medical)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="p-4 font-medium">Solder fill in PTH barrel</td>
                        <td className="p-4">75% minimum</td>
                        <td className="p-4 text-red-700 font-semibold">100% required</td>
                      </tr>
                      <tr className="bg-gray-50 border-b">
                        <td className="p-4 font-medium">Component misalignment</td>
                        <td className="p-4">25% offset acceptable</td>
                        <td className="p-4 text-red-700 font-semibold">25% max, zero bridging</td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="p-4 font-medium">Solder bridging</td>
                        <td className="p-4">Not acceptable</td>
                        <td className="p-4 text-red-700 font-semibold">Not acceptable</td>
                      </tr>
                      <tr className="bg-gray-50 border-b">
                        <td className="p-4 font-medium">Solder balls</td>
                        <td className="p-4">Process indicator</td>
                        <td className="p-4 text-red-700 font-semibold">Defect — reject</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-4 font-medium">Missing solder</td>
                        <td className="p-4">Defect</td>
                        <td className="p-4 text-red-700 font-semibold">Defect — zero tolerance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 mb-6">
                  Class 3 criteria leave no room for visual judgment calls. Either the joint meets the specification or it doesn&apos;t. This is precisely the kind of deterministic inspection that automated 3D AOI systems are designed for — where measurement replaces visual interpretation.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4">How SPI and AOI Satisfy These Requirements</h2>

                <h3 className="text-xl font-semibold mt-8 mb-3">3D SPI: Process Control at the Source</h3>
                <p className="text-gray-700 mb-4">
                  Since soldering is a special process under ISO 13485, the validation obligation cannot be discharged by final inspection alone — manufacturers must demonstrate that the process is controlled. 3D SPI satisfies this by providing quantitative, board-level data on every paste deposit: volume, height, area, and offset from the pad centerline.
                </p>
                <p className="text-gray-700 mb-6">
                  When SPI data is trended over time, process capability indices (Cpk) for paste volume can be calculated and reported. A Cpk of 1.33 or higher for paste volume is commonly used as evidence of process control in medical device manufacturing. This is auditable, objective evidence — exactly what FDA and ISO 13485 auditors look for.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-3">AOI: 100% Inspection with Objective Criteria</h3>
                <p className="text-gray-700 mb-4">
                  Automated optical inspection replaces or supplements manual visual inspection with machine-based detection. For medical applications, 3D AOI provides:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Height measurement of solder joints — detecting insufficiency that 2D systems miss</li>
                  <li>Consistent application of Class 3 acceptance criteria across every board, every shift</li>
                  <li>Board-level inspection records linked to serial numbers for traceability</li>
                  <li>False call rates low enough that 100% inspection is practical without overwhelming rework capacity</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-3">Data Retention and Audit Readiness</h3>
                <p className="text-gray-700 mb-6">
                  Both FDA QSR and ISO 13485 require that quality records be maintained for defined periods — typically the expected device lifetime plus two years, or a minimum of two years from device release for Class II/III devices. Inspection systems must export and archive board-level data in formats that can be retrieved and presented during audits. This argues strongly for systems with robust data export capabilities and compatibility with common MES and quality management platforms.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
                  <h3 className="text-lg font-semibold mb-3">Inspection System Checklist for Medical Device Manufacturers</h3>
                  <ul className="space-y-2 text-gray-800">
                    <li>✓ 3D SPI with Cpk reporting for paste volume and offset</li>
                    <li>✓ 100% inspection — no sampling-based coverage</li>
                    <li>✓ Board-level traceability (serial number linked to inspection record)</li>
                    <li>✓ IPC-A-610 Class 3 acceptance criteria programmed and locked</li>
                    <li>✓ Calibration records and calibration schedule documented</li>
                    <li>✓ Data export to MES or QMS for long-term retention</li>
                    <li>✓ Closed-loop printer feedback for process control evidence</li>
                    <li>✓ Audit trail for programming changes (who changed what, when)</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4">Common Audit Findings in Medical Electronics Manufacturing</h2>
                <p className="text-gray-700 mb-4">
                  FDA warning letters and ISO 13485 certification body findings for electronics manufacturers cluster around a few recurring themes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
                  <li><strong>Inadequate process validation:</strong> Relying on final inspection instead of demonstrating that the process itself is controlled. SPI with Cpk data directly addresses this.</li>
                  <li><strong>Lack of traceability:</strong> Inspection records that reference production lots rather than individual boards. Board-level serial number tracking is the correct approach.</li>
                  <li><strong>Undefined acceptance criteria:</strong> Inspectors making judgment calls without documented, objective criteria. Automated inspection with locked Class 3 programs eliminates this.</li>
                  <li><strong>CAPA not data-driven:</strong> Corrective actions based on complaints rather than process trend data. SPI trend data showing volume drift before defects occur is ideal CAPA input.</li>
                </ul>

                <div className="bg-blue-600 text-white rounded-xl p-8 mt-12">
                  <h3 className="text-2xl font-bold mb-3">Inspection Systems for Medical Device Manufacturing</h3>
                  <p className="mb-6 text-blue-100">
                    ASC International&apos;s SPI and AOI systems are deployed in FDA-regulated and ISO 13485-certified facilities. Our applications team can help you configure inspection programs that satisfy your quality and regulatory requirements.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Contact Our Medical Industry Team
                  </Link>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                  <ul className="space-y-2">
                    <li><Link href="/blog/ipc-a-610-class-2-vs-class-3" className="text-blue-600 hover:underline">Understanding IPC-A-610 Class 2 vs Class 3 Requirements</Link></li>
                    <li><Link href="/blog/aoi-buyers-guide-2026" className="text-blue-600 hover:underline">How to Choose an AOI System in 2026</Link></li>
                    <li><Link href="/blog/calculating-inspection-roi" className="text-blue-600 hover:underline">Calculating ROI for Inspection Equipment</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
