import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contract Manufacturing (EMS) Inspection Solutions | ASC International",
  description: "Flexible, high-mix inspection solutions for contract manufacturers and EMS providers. Fast changeovers, multi-standard compliance, and open architecture that works with any equipment on your line.",
  keywords: ["EMS inspection", "contract manufacturing quality", "high-mix inspection", "CEM inspection", "EMS quality control", "contract electronics manufacturing"],
  openGraph: {
    title: "Contract Manufacturing (EMS) Inspection - ASC International",
    description: "High-mix, high-flexibility inspection solutions built for the unique demands of contract electronics manufacturing.",
    type: "website",
  },
};

export default function ContractManufacturing() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Contract Manufacturing Inspection",
    "provider": {
      "@type": "Organization",
      "name": "ASC International"
    },
    "areaServed": "Worldwide",
    "description": "Flexible inspection solutions for contract manufacturers and EMS providers handling high-mix, multi-standard production environments"
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
            { name: "Industries", href: "/industries" },
            { name: "Contract Manufacturing (EMS)" },
          ]}
        />

        <section className="relative overflow-hidden py-16">
          {/* Background effects */}
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
                <span className="text-sm font-semibold text-accent-cyan">CONTRACT MANUFACTURING</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">Contract Manufacturing (EMS) Inspection Solutions</h1>
              <p className="text-xl text-white mb-8">
                High-mix, high-flexibility inspection for contract manufacturers who need fast changeovers, multi-standard compliance, and equipment-agnostic integration
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all">
                  Request Consultation
                </Link>
                <Link href="/products" className="px-6 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all">
                  View Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold mb-6 text-gray-900">Inspection Built for the EMS Business Model</h2>
              <p className="text-gray-900 text-lg mb-4 leading-relaxed">
                Contract electronics manufacturers operate in one of the most demanding production environments in the industry. Unlike OEMs running dedicated lines for a single product, EMS providers must handle dozens or even hundreds of different assemblies across multiple customers, each with their own quality requirements, component specifications, and industry standards. Inspection systems that cannot keep pace with this complexity become a liability instead of an asset.
              </p>
              <p className="text-gray-900 text-lg mb-4 leading-relaxed">
                ASC International understands the EMS business model. Our inspection solutions are designed from the ground up for high-mix environments where changeover speed, programming flexibility, and multi-standard compliance are not optional features but fundamental requirements. We help contract manufacturers win new business by giving them the quality infrastructure to serve customers across automotive, medical, aerospace, and consumer electronics simultaneously.
              </p>
              <p className="text-gray-900 text-lg leading-relaxed">
                Critically, ASC&apos;s open architecture works with any equipment on your production line. Unlike conglomerate vendors who push their own printers, pick-and-place machines, and ovens as a bundled ecosystem, we integrate with whatever equipment you already have and whatever equipment you choose to add in the future. Your inspection platform should never dictate your capital equipment decisions.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">EMS Manufacturing Challenges We Solve</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Frequent Changeovers</h3>
                  <p className="text-gray-600 mb-4">
                    EMS operations may switch products multiple times per shift. Every minute spent on inspection changeover is a minute of lost production. Our systems minimize downtime with rapid program loading, automated board recognition, and CAD-driven program generation that can have a new product ready to inspect in minutes, not hours.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Sub-5-minute program changeover</li>
                    <li>• Automated board recognition and program recall</li>
                    <li>• CAD/Gerber-driven program generation</li>
                    <li>• Recipe management for hundreds of products</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Diverse Customer Requirements</h3>
                  <p className="text-gray-600 mb-4">
                    Each customer brings their own quality specifications, reporting formats, and compliance requirements. Your inspection system needs to be flexible enough to apply different criteria to different products while maintaining centralized data management.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Customer-specific quality profiles</li>
                    <li>• Configurable defect classification rules</li>
                    <li>• Custom reporting formats per customer</li>
                    <li>• Per-product traceability and data segregation</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Thin Margins</h3>
                  <p className="text-gray-600 mb-4">
                    Contract manufacturing operates on tight margins where scrap, rework, and warranty costs directly impact profitability. Effective inspection at the right process stages prevents costly defects from escaping while minimizing false calls that waste operator time and slow production.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Optimized inspection coverage for cost efficiency</li>
                    <li>• Industry-leading low false call rates</li>
                    <li>• Defect cost analysis and ROI tracking</li>
                    <li>• First-pass yield improvement data</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Multiple Quality Standards</h3>
                  <p className="text-gray-600 mb-4">
                    An EMS provider might build automotive boards to IATF 16949 in the morning, medical devices to ISO 13485 in the afternoon, and aerospace assemblies to AS9100 overnight. Each standard has different requirements and documentation needs.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Multi-standard compliance in a single system</li>
                    <li>• IPC Class 2 and Class 3 inspection criteria</li>
                    <li>• Automated standard-specific reporting</li>
                    <li>• Audit-ready documentation and traceability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">EMS Inspection Solutions</h2>
              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Fast Program Changeover</h3>
                  <p className="text-gray-600 mb-4">
                    Our inspection platforms are engineered for the rapid product transitions that define EMS operations. Import CAD data, generate inspection programs automatically, and fine-tune parameters in minutes. Library-based component models mean most components are already defined, dramatically reducing new product introduction (NPI) time.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">CAD-Driven Programming</p>
                      <p className="text-sm text-gray-600">Import ODB++, GenCAD, or Gerber data to auto-generate inspection programs with minimal manual intervention</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Component Library</p>
                      <p className="text-sm text-gray-600">Extensive pre-built component models that grow with every product you run, accelerating NPI over time</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Smart Recipe Management</p>
                      <p className="text-sm text-gray-600">Store, version-control, and instantly recall inspection programs for your entire product portfolio</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Flexible Inspection Coverage</h3>
                  <p className="text-gray-600 mb-4">
                    Not every product requires the same level of inspection. Our systems let you tailor inspection coverage based on customer requirements, product complexity, and risk level. Run full inspection for new products during qualification, then optimize coverage for volume production to maximize throughput.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Adjustable Coverage</p>
                      <p className="text-sm text-gray-600">Configure inspection intensity per product from full board coverage down to critical-component-only sampling</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Risk-Based Inspection</p>
                      <p className="text-sm text-gray-600">Focus inspection resources on high-risk joints and components while maintaining statistical process monitoring</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Adaptive Algorithms</p>
                      <p className="text-sm text-gray-600">AI-powered inspection adapts to product variations and process drift without constant manual threshold adjustments</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Multi-Standard Compliance</h3>
                  <p className="text-gray-600 mb-4">
                    A single inspection platform that supports the quality standards your customers require. Switch between IPC Class 2 and Class 3 criteria, generate standard-specific reports, and maintain the documentation trails needed for regulated industry audits.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">IPC Class 2 & 3 Criteria</p>
                      <p className="text-sm text-gray-600">Built-in IPC-A-610 acceptance criteria with one-click switching between Class 2 and Class 3 thresholds</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Industry-Specific Reports</p>
                      <p className="text-sm text-gray-600">Generate compliance documentation formatted for automotive PPAP, medical DHF, and aerospace FAIR requirements</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="font-semibold mb-2 text-gray-900">Traceability Integration</p>
                      <p className="text-sm text-gray-600">Complete board-level traceability linking inspection data to serial numbers, lot codes, and customer POs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">The Open Architecture Advantage</h2>
              <p className="text-gray-600 mb-8 text-lg">
                This is where ASC International fundamentally differs from conglomerate inspection vendors.
              </p>
              <div className="bg-white border-2 border-blue-500 p-8 rounded-lg mb-8">
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Why This Matters for EMS Providers</h3>
                <p className="text-gray-600 mb-4">
                  Large inspection conglomerates sell printers, pick-and-place machines, ovens, and inspection equipment as a bundled package. Their inspection systems are optimized for their own equipment and may offer limited functionality or degraded communication when paired with competitors&apos; machines. This creates vendor lock-in that limits your flexibility and increases your costs over time.
                </p>
                <p className="text-gray-600 mb-4">
                  ASC International makes inspection equipment. That is all we do, and we do it exceptionally well. Our open architecture platform communicates equally with any printer, any placement machine, and any oven on your line regardless of manufacturer. When you add a new line or replace equipment, your ASC inspection investment remains fully functional.
                </p>
                <p className="text-gray-600 font-semibold">
                  For EMS providers who run diverse equipment sets across multiple lines and facilities, this vendor independence is not just a nice-to-have. It is a strategic advantage that protects your capital investment and preserves your freedom to choose the best equipment for each application.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Any Printer</h3>
                  <p className="text-gray-600 text-sm">Full closed-loop SPC feedback with DEK, MPM, EKRA, Yamaha, and all major stencil printer brands</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Any Placement Machine</h3>
                  <p className="text-gray-600 text-sm">Seamless data exchange with Fuji, Panasonic, Yamaha, Juki, ASM, and all placement platforms</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500 text-center">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">Any MES/ERP</h3>
                  <p className="text-gray-600 text-sm">Standard APIs and protocols for integration with your existing manufacturing execution and resource planning systems</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">Industry Standards Compliance</h2>
              <p className="text-gray-600 mb-6">
                ASC inspection systems help EMS providers meet the diverse quality standards required across their customer base:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">IATF 16949</h3>
                  <p className="text-gray-600">Automotive quality management system standard with PPAP documentation, control plans, and SPC requirements for automotive EMS customers</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">ISO 13485</h3>
                  <p className="text-gray-600">Medical device quality management standard with complete traceability, validation documentation, and risk management integration for medical CMs</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">AS9100</h3>
                  <p className="text-gray-600">Aerospace quality management standard with enhanced configuration management, first article inspection (FAI), and non-conformance handling</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">IPC-A-610 Class 2 & 3</h3>
                  <p className="text-gray-600">Industry-standard acceptance criteria for electronic assemblies with configurable Class 2 (dedicated service) and Class 3 (high reliability) thresholds</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">J-STD-001</h3>
                  <p className="text-gray-600">Requirements for soldered electrical and electronic assemblies with automated joint quality verification against published acceptance criteria</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-all hover:border-blue-500">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">ISO 9001</h3>
                  <p className="text-gray-600">Foundational quality management system standard with process monitoring, measurement system analysis, and continuous improvement documentation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">Common Applications</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Automotive EMS</h3>
                    <p className="text-gray-600">Contract manufacturers building ECUs, ADAS modules, powertrain controllers, and infotainment systems for automotive OEMs. IATF 16949 compliance with full PPAP documentation, SPC data collection, and zero-defect quality programs for safety-critical assemblies.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Medical Device Contract Manufacturers</h3>
                    <p className="text-gray-600">CMs building patient monitors, diagnostic instruments, implantable device electronics, and laboratory equipment. ISO 13485 compliance with design history file (DHF) documentation, validated inspection processes, and complete lot traceability for FDA audit readiness.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Aerospace Subcontractors</h3>
                    <p className="text-gray-600">Electronics manufacturing subcontractors serving aerospace and defense primes. AS9100 compliance with first article inspection reporting, special process controls, and IPC Class 3 workmanship standards for mission-critical avionics and defense electronics.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Consumer Electronics EMS</h3>
                    <p className="text-gray-600">High-volume contract manufacturers producing smartphones, wearables, IoT devices, and consumer appliance electronics. Speed-optimized inspection with high throughput, low false call rates, and the flexibility to handle rapid product lifecycle changes.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Industrial & Telecom EMS</h3>
                    <p className="text-gray-600">Contract manufacturers serving industrial automation, telecommunications, and networking equipment OEMs. Mixed-technology inspection handling SMT, through-hole, press-fit, and odd-form components on complex multi-layer assemblies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">Proven EMS Results</h2>
              <p className="text-gray-600 mb-6 text-lg">
                See how contract manufacturers are using ASC inspection solutions to improve quality, reduce costs, and win new business.
              </p>
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-lg">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-4">Contract Manufacturer ROI Case Study</h3>
                <p className="text-gray-600 mb-4">
                  Learn how a mid-size EMS provider reduced inspection changeover time by over 70%, cut false call rates in half, and qualified for new automotive and medical customer programs after deploying ASC inspection systems across their production lines.
                </p>
                <Link href="/case-studies/contract-manufacturer-roi" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Read the Full Case Study
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

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
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">Grow Your EMS Business with Better Inspection</h2>
              <p className="text-xl mb-8 text-gray-300">
                Contact us to discuss how ASC inspection solutions can help you win new customers and improve margins
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
