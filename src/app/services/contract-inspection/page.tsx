import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: '/services/contract-inspection' },
  title: "Contract Inspection Services",
  description: "PCB and electronics inspection by ASC engineers, on-site or at our facility. 3D SPI, AOI, X-ray, and specialty inspection.",
  keywords: ["contract inspection", "inspection services", "PCB inspection services", "electronics testing services", "third-party inspection"],
  openGraph: {
    images: ['/og-image.png'],
    title: "Contract Inspection Services - ASC International",
    description: "Expert inspection services performed by certified technicians at your facility or ours.",
    type: "website",
  },
};

export default function ContractInspection() {
  return (
    <>
      <Header />
      <main className="bg-dark-bg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Contract Inspection" },
          ]}
        />

        <section className="relative overflow-hidden py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contract Inspection Services</h1>
              <p className="text-xl text-white mb-8">
                Professional inspection services performed by ASC experts at your facility or ours. Flexible, scalable, and cost-effective.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all">
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">When You Need Expert Inspection Services</h2>
              <p className="text-gray-900 text-lg mb-4">
                Contract inspection services provide the expertise and equipment you need without the capital investment. Whether you're launching a new product, ramping production, dealing with quality issues, or simply need temporary inspection capacity, ASC's contract services deliver professional results.
              </p>
              <p className="text-gray-900 text-lg">
                Our certified technicians bring decades of experience and state-of-the-art equipment to your inspection challenges. We work at your facility or perform inspections at our service centers, providing detailed reports and actionable recommendations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">Available Inspection Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">3D Solder Paste Inspection</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive analysis of solder paste deposits including volume, height, area, and shape measurements with statistical process control
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Volume accuracy verification</li>
                    <li>• Offset and alignment analysis</li>
                    <li>• Process capability studies</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Post-Reflow AOI</h3>
                  <p className="text-gray-600 mb-4">
                    Automated optical inspection of assembled boards for component and solder defects using advanced 3D imaging and AI algorithms
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Component presence/placement</li>
                    <li>• Solder joint quality assessment</li>
                    <li>• Defect documentation</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">X-Ray Inspection</h3>
                  <p className="text-gray-600 mb-4">
                    2D and 3D X-ray inspection for hidden solder joints including BGAs, QFNs, and other area array packages
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• BGA void analysis</li>
                    <li>• Hidden joint inspection</li>
                    <li>• Component orientation verification</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Conformal Coating Inspection</h3>
                  <p className="text-gray-600 mb-4">
                    UV fluorescence inspection and thickness measurement to ensure proper coating coverage and compliance
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Coverage verification</li>
                    <li>• Thickness measurement</li>
                    <li>• IPC standard compliance</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">First Article Inspection</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive dimensional and visual inspection of first production samples against design specifications
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• CAD comparison analysis</li>
                    <li>• Critical dimension verification</li>
                    <li>• Complete documentation</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Failure Analysis</h3>
                  <p className="text-gray-600 mb-4">
                    Detailed investigation of defects and failures to determine root causes and corrective actions
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Defect documentation</li>
                    <li>• Root cause analysis</li>
                    <li>• Corrective action recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">Service Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">On-Site Services</h3>
                  <p className="text-gray-600 mb-6">
                    Our technicians come to your facility with portable inspection equipment
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-900">No shipping required</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-900">Real-time results</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-900">Process consultation included</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-900">Ideal for large volumes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Lab Services</h3>
                  <p className="text-gray-600 mb-6">
                    Ship your boards to our inspection facility for comprehensive analysis
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-900">Full equipment capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-900">Detailed written reports</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-900">Cost-effective for small batches</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-900">Fast turnaround times</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">What You Receive</h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Comprehensive Reports</h3>
                  <p className="text-gray-600">Detailed inspection reports with images, measurements, and statistical analysis</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Defect Documentation</h3>
                  <p className="text-gray-600">High-resolution images and descriptions of all defects found</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Recommendations</h3>
                  <p className="text-gray-600">Expert recommendations for process improvements and corrective actions</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">Data Files</h3>
                  <p className="text-gray-600">Raw measurement data in standard formats for your records</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Get Professional Inspection Services</h2>
              <p className="text-xl mb-8 text-white">
                Contact us to discuss your inspection requirements and receive a custom quote
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all">
                  Request Quote
                </Link>
                <a href="tel:+18884782912" className="bg-white/5 border border-white/20 text-white font-semibold px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-accent-cyan/50 transition-all">
                  Call Us
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
