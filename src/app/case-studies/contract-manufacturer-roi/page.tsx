import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contract Manufacturer ROI Case Study | 4-Month Payback | ASC International",
  description: "How a high-mix contract manufacturer achieved 4-month ROI on inspection investment with 80% rework reduction and 15% capacity increase. ASC systems with fast changeover for EMS operations.",
  keywords: ["contract manufacturer inspection", "EMS inspection ROI", "high-mix inspection", "fast changeover inspection", "inspection payback period", "rework reduction"],
  openGraph: {
    title: "Contract Manufacturer Achieves 4-Month ROI on Inspection Investment",
    description: "Case study: High-mix EMS provider achieves 4-month payback, 80% rework reduction, and 15% capacity increase with ASC inspection systems.",
    type: "article",
  },
};

export default function ContractManufacturerCaseStudy() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Contract Manufacturer Achieves 4-Month ROI on Inspection Investment",
    "description": "Case study showing how ASC inspection systems with fast changeover helped a high-mix contract manufacturer achieve rapid ROI and dramatic quality improvements.",
    "author": {
      "@type": "Organization",
      "name": "ASC International",
    },
    "publisher": {
      "@type": "Organization",
      "name": "ASC International",
      "logo": {
        "@type": "ImageObject",
        "url": "https://solderpasteinspection.com/logo.png",
      },
    },
    "datePublished": "2026-02-01",
    "dateModified": "2026-02-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://solderpasteinspection.com/case-studies/contract-manufacturer-roi",
    },
    "articleSection": "Case Studies",
    "keywords": ["contract manufacturing", "ROI", "high-mix", "fast changeover", "rework reduction"],
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
            { name: "Contract Manufacturer ROI" },
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
              <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-400/30 rounded-full mb-6">
                <span className="text-sm font-semibold text-orange-400">CONTRACT MANUFACTURING</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
                Contract Manufacturer Achieves 4-Month ROI on Inspection Investment
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                How a high-mix EMS provider turned inspection from a cost center into a competitive advantage, achieving rapid payback while dramatically improving quality and capacity.
              </p>
            </div>
          </div>
        </section>

        {/* Key Results Banner */}
        <section className="bg-orange-600 py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-white">4 mo</p>
                <p className="text-orange-100 text-sm mt-1">Payback Period</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">80%</p>
                <p className="text-orange-100 text-sm mt-1">Rework Reduction</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">15%</p>
                <p className="text-orange-100 text-sm mt-1">Capacity Increase</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">350+</p>
                <p className="text-orange-100 text-sm mt-1">Products Supported</p>
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
                    <p className="text-gray-900 font-medium">Contract Electronics Manufacturing (EMS)</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase">Production Volume</p>
                    <p className="text-gray-900 font-medium">1.8 million boards/year</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase">Products</p>
                    <p className="text-gray-900 font-medium">350+ active part numbers across industrial, IoT, telecom</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase">Certifications</p>
                    <p className="text-gray-900 font-medium">ISO 9001, IPC-A-610 Class 2 & 3</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-900 text-lg leading-relaxed">
                This mid-sized EMS provider operates six SMT lines supporting over 350 active part numbers for customers in industrial controls, IoT, telecommunications, and general electronics. As a contract manufacturer, their business model depends on operational efficiency, fast changeovers, and maintaining quality across a diverse product mix. Average lot sizes range from 50 to 5,000 boards, with some lines performing 8-12 changeovers per shift.
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
                Contract manufacturers face a unique set of challenges that distinguish them from OEMs. Every inefficiency directly erodes thin margins, and quality issues affect customer relationships that drive revenue. This EMS provider was feeling pressure on multiple fronts simultaneously.
              </p>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">High-Mix Production Complexity</h3>
                  <p className="text-gray-600 leading-relaxed">
                    With 350+ active part numbers and frequent changeovers, the company struggled to maintain consistent quality across all products. Their existing inspection approach relied on first-article inspection and periodic sampling, which meant defects could propagate through an entire lot before being detected. The diverse product mix also made it impractical to develop and maintain manual inspection procedures for every product, leading to gaps in inspection coverage on less frequently produced boards.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">Frequent Changeover Delays</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Their existing 2D AOI system required 45-90 minutes for program changeover on new products and 15-20 minutes even for previously programmed products. On lines performing 8-12 changeovers per shift, inspection changeover time was consuming 2-4 hours of productive capacity per shift. The inspection systems had effectively become the changeover bottleneck, limiting the company&apos;s ability to efficiently serve their high-mix customer base.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">Thin Margins Under Pressure</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Operating on typical EMS margins of 8-12%, the company could not afford quality failures. A single bad lot shipped to a customer could wipe out the profit from an entire quarter of production for that customer. Current rework rates averaged 4.2% across all products, with some complex assemblies exceeding 8%. Rework consumed 10 full-time technicians and the associated floor space, consumables, and re-inspection time. The company estimated quality-related costs at $1.6 million annually.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">Customer Quality Demands Increasing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Several key customers had begun requiring 100% inspection coverage with documented results as a condition of continued business. Two customers had threatened to move production to competitors who offered automated inspection capability. A third customer, representing 15% of annual revenue, required 3D SPI data as part of their incoming quality acceptance criteria. Without investment in inspection technology, the company risked losing $4.8 million in annual revenue.
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
                ASC International designed an inspection solution specifically optimized for high-mix contract manufacturing. The emphasis was on fast changeover, easy programming, and open integration to work with the company&apos;s existing equipment from multiple vendors.
              </p>

              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Fast Program Changeover Systems</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    ASC deployed 3D SPI and 3D AOI systems on the four highest-volume lines, with the remaining two lines scheduled for phase two. The systems feature CAD-driven automatic program generation that creates inspection programs from Gerber and ODB++ data in minutes rather than hours, and barcode-triggered automatic program selection that eliminates manual changeover entirely.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 mt-1">&#10003;</span>
                      Automatic program generation from CAD data in under 5 minutes for new products
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 mt-1">&#10003;</span>
                      Barcode-triggered program selection with zero-touch changeover in under 30 seconds
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 mt-1">&#10003;</span>
                      Library of 350+ programs stored and version-controlled on the system
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 mt-1">&#10003;</span>
                      Automatic board width adjustment for fast mechanical changeover
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Open Integration Architecture</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    As a contract manufacturer using equipment from multiple vendors, the company needed inspection systems that could communicate with any printer, pick-and-place, and reflow oven regardless of manufacturer. ASC&apos;s open integration approach uses standard protocols and APIs to connect with any equipment on the line.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 mt-1">&#10003;</span>
                      SMEMA and Hermes (IPC-HERMES-9852) line communication
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 mt-1">&#10003;</span>
                      Closed-loop feedback compatible with all major printer brands
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 mt-1">&#10003;</span>
                      IPC-CFX (Connected Factory Exchange) support for Industry 4.0 integration
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 mt-1">&#10003;</span>
                      REST API for custom MES and ERP data exchange
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Centralized Quality Management</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    A centralized quality management server aggregates inspection data from all lines, providing real-time dashboards for management, customer-specific quality reports, and automated alerts when any product or process trends toward out-of-control conditions.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 mt-1">&#10003;</span>
                      Real-time quality dashboards accessible to management and production floor
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 mt-1">&#10003;</span>
                      Customer-specific quality portals for direct data access
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 mt-1">&#10003;</span>
                      Automated quality reports generated at lot completion
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2 mt-1">&#10003;</span>
                      Cross-product and cross-line analytics for process optimization
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
                The ASC inspection solution paid for itself faster than any other capital investment in the company&apos;s history, while simultaneously improving quality, capacity, and customer satisfaction.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg text-center">
                  <p className="text-5xl font-bold text-orange-700">4 mo</p>
                  <p className="text-orange-600 font-semibold mt-2">Payback Period</p>
                  <p className="text-gray-600 text-sm mt-2">Fastest ROI on any capital equipment purchase in company history</p>
                </div>
                <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg text-center">
                  <p className="text-5xl font-bold text-orange-700">80%</p>
                  <p className="text-orange-600 font-semibold mt-2">Rework Reduction</p>
                  <p className="text-gray-600 text-sm mt-2">From 4.2% to 0.8% average rework rate across all products</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
                  <p className="text-5xl font-bold text-green-700">15%</p>
                  <p className="text-green-600 font-semibold mt-2">Capacity Increase</p>
                  <p className="text-gray-600 text-sm mt-2">Recovered from eliminated changeover downtime and rework cycles</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
                  <p className="text-5xl font-bold text-green-700">$1.2M</p>
                  <p className="text-green-600 font-semibold mt-2">Annual Savings</p>
                  <p className="text-gray-600 text-sm mt-2">Combined rework reduction, scrap savings, labor, and capacity gains</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Financial Impact Breakdown</h3>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <table className="w-full text-left">
                  <thead className="border-b-2 border-gray-300">
                    <tr>
                      <th className="py-3 text-gray-900">Category</th>
                      <th className="py-3 text-right text-gray-900">Annual Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Rework cost reduction (80% decrease)</td>
                      <td className="py-3 text-right font-semibold text-green-700">$540,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Scrap cost reduction</td>
                      <td className="py-3 text-right font-semibold text-green-700">$185,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Rework labor redeployment (6 FTEs)</td>
                      <td className="py-3 text-right font-semibold text-green-700">$240,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Capacity increase (additional revenue contribution)</td>
                      <td className="py-3 text-right font-semibold text-green-700">$180,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Customer retention (at-risk revenue saved)</td>
                      <td className="py-3 text-right font-semibold text-green-700">$55,000</td>
                    </tr>
                    <tr className="border-t-2 border-gray-900">
                      <td className="py-3 font-bold text-gray-900">Total Annual Value</td>
                      <td className="py-3 text-right font-bold text-green-700 text-lg">$1,200,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Operational Improvements</h3>
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
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
                      <td className="py-3 text-gray-700">Program changeover time</td>
                      <td className="py-3 text-right text-gray-600">15-90 minutes</td>
                      <td className="py-3 text-right font-semibold text-orange-700">Under 30 seconds</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">New product programming</td>
                      <td className="py-3 text-right text-gray-600">2-4 hours</td>
                      <td className="py-3 text-right font-semibold text-orange-700">Under 5 minutes</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Average rework rate</td>
                      <td className="py-3 text-right text-gray-600">4.2%</td>
                      <td className="py-3 text-right font-semibold text-orange-700">0.8%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Inspection coverage</td>
                      <td className="py-3 text-right text-gray-600">Sampling only</td>
                      <td className="py-3 text-right font-semibold text-orange-700">100% of boards</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 text-gray-700">Customer quality complaints</td>
                      <td className="py-3 text-right text-gray-600">18/year</td>
                      <td className="py-3 text-right font-semibold text-orange-700">2/year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Business Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1 font-bold">&#10003;</span>
                  <span className="text-gray-700"><strong>At-risk customers retained</strong> - All three customers who had threatened to move production renewed their contracts, with two increasing their volume commitments.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1 font-bold">&#10003;</span>
                  <span className="text-gray-700"><strong>New customers won</strong> - The automated inspection capability was cited as a deciding factor in winning five new customer accounts worth $2.1M in annual revenue.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1 font-bold">&#10003;</span>
                  <span className="text-gray-700"><strong>Premium pricing enabled</strong> - For customers requiring 100% inspection with data, the company now offers a value-added service tier with higher margins.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1 font-bold">&#10003;</span>
                  <span className="text-gray-700"><strong>Rework staff redeployed</strong> - Six rework technicians moved to production operator roles, addressing a long-standing staffing shortage without new hires.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1 font-bold">&#10003;</span>
                  <span className="text-gray-700"><strong>Phase 2 approved</strong> - Based on phase 1 results, the board approved immediate investment for the remaining two lines, expected to deliver an additional $600K in annual savings.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Customer Quote */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-orange-50 border-l-4 border-orange-600 p-8 rounded-r-lg shadow-sm">
                <svg className="w-10 h-10 text-orange-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-4">
                  &quot;As a contract manufacturer, we thought we couldn&apos;t afford automated inspection. It turns out we couldn&apos;t afford not to have it. The 30-second changeover time was the game-changer for us - our old AOI system spent more time changing over than inspecting on some shifts. Now inspection runs as fast as the rest of the line, and our customers get quality data they used to have to pay testing labs for. The 4-month payback was the fastest ROI on any equipment purchase we&apos;ve ever made.&quot;
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900">Chief Operating Officer</p>
                  <p className="text-gray-500 text-sm">Mid-Size Contract Electronics Manufacturer</p>
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
                Running a High-Mix Manufacturing Operation?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Contact our EMS applications team to discuss inspection solutions designed for fast changeover, diverse product mixes, and the margins that contract manufacturing demands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all">
                  Request Consultation
                </Link>
                <Link href="/tools/roi-calculator" className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all">
                  Calculate Your ROI
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
