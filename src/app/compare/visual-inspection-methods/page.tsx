import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: '/compare/visual-inspection-methods' },
  title: "Microscope vs Video vs AOI",
  description: "Manual microscope, digital video, and automated AOI compared. Ergonomics, documentation, speed, and cost for electronics inspection.",
  keywords: ["manual microscope vs digital", "digital video inspection", "visual inspection comparison", "microscope vs AOI"],
};

export default function VisualInspectionComparison() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ComparisonTable",
    "name": "Visual Inspection Methods Comparison",
    "description": "Compare manual microscope, digital video inspection, and automated AOI for electronics inspection"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Compare", href: "/compare" },
            { name: "Visual Inspection Methods" },
          ]}
        />

        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Visual Inspection Methods Comparison</h1>
              <p className="text-xl text-blue-100 mb-4">
                Compare manual microscope, digital video inspection, and automated AOI for PCB assembly quality verification and rework.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Quick Summary</h2>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <p className="text-lg text-gray-800 font-semibold mb-3">
                  TL;DR: Digital Video for rework stations, Automated AOI for production lines, Manual Microscope for basic lab use.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Choose Digital Video if:</strong> Rework stations, failure analysis, training, need HD documentation, ergonomic viewing, or measurement tools (±2μm accuracy).
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Choose Automated AOI if:</strong> Production inspection, high volume, need automated defect detection, statistical analysis, or inline integration.
                </p>
                <p className="text-gray-700">
                  <strong>Choose Manual Microscope if:</strong> Basic lab inspection, low budget, prototyping, simple visual checks, or limited inspection needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Detailed Comparison Table</h2>
              <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-gray-900">Manual Microscope</th>
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-blue-600">Digital Video Inspection</th>
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-gray-900">Automated AOI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Operator Ergonomics</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Poor - Eye strain from eyepiece</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Excellent - Large monitor viewing</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Excellent - Minimal interaction</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Documentation</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">✗ None (manual notes)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">✓ HD images & video</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">✓ Automatic archiving</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Magnification</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">10x - 100x typical</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">7x - 200x with digital zoom</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Fixed (camera dependent)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Measurement Capability</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">⚠ Eyepiece reticle (limited)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">✓ On-screen tools (±2μm)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">✓ Sub-micron precision</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Image Storage</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">✗ No digital capture</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">✓ Unlimited (USB/network)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">✓ Extensive database</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Multi-User Viewing</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">✗ Single operator only</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">✓ Group viewing on monitor</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">✓ Remote review</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Inspection Speed</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Slow (manual positioning)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Medium (operator guided)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Fast (fully automated)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Training Required</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Moderate (focus & positioning)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Minimal (intuitive interface)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Extensive (programming)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Automation Level</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">None (100% manual)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Semi-automated (operator guided)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Fully automated</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Cost Level</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Low ($2K - $8K)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Medium ($8K - $25K)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">High ($50K - $250K+)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Best Applications</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Basic lab checks, prototypes</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Rework, failure analysis, training</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Production lines, high volume</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">When to Choose Each Method</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-600">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Choose Digital Video Inspection If:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Rework and repair stations requiring detailed visual guidance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Failure analysis and root cause investigation with documentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Training environment where multiple people need to view same image</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Need HD image/video capture for quality documentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Reduce operator eye strain and fatigue from eyepiece viewing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>On-screen measurement tools needed (±2μm accuracy)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-600">
                  <h3 className="text-2xl font-bold mb-4 text-gray-600">Choose Automated AOI If:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Production line integration for inline or offline inspection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>High-volume manufacturing requiring fast, automated inspection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Need comprehensive defect detection (50+ defect types)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Statistical process control and traceability requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>ROI justifies $50K+ investment through defect reduction</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-300">
                  <h3 className="text-2xl font-bold mb-4 text-gray-600">Choose Manual Microscope If:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Low-volume prototype or R&D work</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Basic visual inspection for simple boards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Budget constraints prevent digital system investment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-600 mr-2">✓</span>
                      <span>Occasional inspection needs (under 1 hour/day)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Enhance Visual Inspection Capabilities</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact us to learn how digital video inspection can improve quality and reduce operator fatigue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Request Consultation
                </Link>
                <Link href="/products/digital-video-inspection" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500">
                  View Digital Video Systems
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
