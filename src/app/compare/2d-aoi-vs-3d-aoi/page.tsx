import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: "2D AOI vs 3D AOI vs Hybrid AOI: Complete Comparison 2026 | ASC International",
  description: "Compare 2D, 3D, and Hybrid AOI systems for PCB inspection. Detailed comparison of accuracy, speed, defect detection, cost, and ROI to choose the right automated optical inspection technology.",
  keywords: ["2D AOI vs 3D AOI", "Hybrid AOI comparison", "automated optical inspection comparison", "which AOI is better", "2D vs 3D AOI"],
  openGraph: {
    title: "2D AOI vs 3D AOI vs Hybrid: Which Technology is Right for You?",
    description: "Data-driven comparison of AOI technologies with specifications, use cases, and ROI analysis.",
    type: "article",
  },
};

export default function TwoDvs3DAOI() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ComparisonTable",
    "name": "2D AOI vs 3D AOI vs Hybrid AOI Comparison",
    "description": "Comprehensive comparison of 2D, 3D, and Hybrid automated optical inspection technologies",
    "url": `${SITE_URL}/compare/2d-aoi-vs-3d-aoi`
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between 2D AOI and 3D AOI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "2D AOI uses high-resolution cameras to capture top-down images from multiple angles, measuring component presence, position, and polarity. 3D AOI adds height measurement capability using phase-shift, laser triangulation, or structured light, enabling detection of component standoff, coplanarity, and solder joint volume. 3D AOI provides superior defect detection, especially for BGAs, QFPs, and lifted leads that 2D systems cannot reliably detect."
        }
      },
      {
        "@type": "Question",
        "name": "Is 3D AOI better than 2D AOI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, for most modern electronics manufacturing. 3D AOI detects 30-50% more defects than 2D AOI, particularly height-related defects like lifted leads, insufficient solder, coplanarity issues, and tombstoning. 3D AOI also has lower false call rates (under 0.5% vs 1-3% for 2D) and better handles component variations, warped PCBs, and complex assemblies. The 30-50% cost premium typically provides ROI within 8-18 months."
        }
      },
      {
        "@type": "Question",
        "name": "What is Hybrid AOI and when should I use it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hybrid AOI combines 2D imaging for fast area coverage with selective 3D measurement for critical areas. It provides a cost-effective balance between 2D speed and 3D accuracy. Choose Hybrid AOI when you have mixed assemblies (some simple, some complex), need to inspect large boards quickly while measuring BGAs and critical components in 3D, or want to upgrade from 2D with moderate cost increase (15-25% premium over 2D vs 30-50% for full 3D)."
        }
      },
      {
        "@type": "Question",
        "name": "Can 2D AOI detect lifted leads and insufficient solder?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, 2D AOI cannot reliably detect lifted leads or insufficient solder because it only captures 2D images without height information. Lifted leads may appear correctly positioned in 2D view but are actually elevated above the pad. Insufficient solder may show correct wetting in 2D but lack adequate volume. Only 3D AOI or Hybrid AOI with height measurement can detect these critical defects."
        }
      },
      {
        "@type": "Question",
        "name": "How much slower is 3D AOI compared to 2D AOI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Modern 3D AOI systems achieve 120 cm²/sec, comparable to 2D AOI speeds of 100-150 cm²/sec. The speed difference is minimal (10-20% in most cases) and often offset by reduced false calls and need for manual verification. Hybrid AOI can match or exceed 2D speeds by using 3D measurement only on critical areas. The superior defect detection of 3D AOI more than compensates for any minor speed difference."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Compare", href: "/compare" },
            { name: "2D AOI vs 3D AOI" },
          ]}
        />

        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                2D AOI vs 3D AOI vs Hybrid AOI Comparison
              </h1>
              <p className="text-xl text-blue-100 mb-4">
                Comprehensive guide to choosing between 2D, 3D, and Hybrid automated optical inspection systems for PCB assembly quality control.
              </p>
              <p className="text-lg text-blue-200">
                Updated January 2026 with latest technology specifications and performance data
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
                  TL;DR: 3D AOI is recommended for complex electronics, Hybrid AOI for mixed assemblies, 2D AOI for simple boards only.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Choose 3D AOI if:</strong> You have BGAs, QFPs, fine-pitch components, need height measurement, require low false call rates (&lt;0.5%), or want maximum defect detection (30-50% more than 2D).
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Choose Hybrid AOI if:</strong> Mixed board complexity, need speed with selective 3D measurement, budget-conscious upgrade from 2D, or want 15-25% cost savings vs full 3D.
                </p>
                <p className="text-gray-700">
                  <strong>Choose 2D AOI if:</strong> Simple boards with only large passives and connectors, extremely high-speed requirements (150+ cm²/sec), tight budget constraints, or basic presence/polarity checking only.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6">Technology Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-600">2D AOI</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Multiple high-resolution cameras capture images from different angles. Software analyzes component presence, position, rotation, and polarity.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Best for:</strong> Simple boards, high-speed needs
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-600">3D AOI (Recommended)</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Adds height measurement via phase-shift, laser, or structured light. Detects coplanarity, lifted leads, solder volume, and component standoff.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Best for:</strong> Complex boards, BGAs, high reliability
                  </p>
                </div>

                <div className="bg-white border-2 border-green-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3 text-green-600">Hybrid AOI</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    2D imaging for general inspection + selective 3D measurement for critical components. Balances speed, accuracy, and cost.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Best for:</strong> Mixed complexity, cost-conscious
                  </p>
                </div>
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
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-gray-900">2D AOI</th>
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-blue-600">3D AOI (Recommended)</th>
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-green-600">Hybrid AOI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Height Measurement</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">✗ Not available</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">✓ Full 3D measurement</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-600">✓ Selective areas</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Lifted Lead Detection</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">✗ Cannot detect</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">✓ Excellent (10μm resolution)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-600">✓ On measured components</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Coplanarity Detection</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">✗ No capability</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">✓ Yes (measures pad heights)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-600">✓ On critical components</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Solder Volume Assessment</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">⚠ Estimated only</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">✓ Accurate measurement</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-600">✓ Where measured in 3D</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Component Standoff</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">✗ Cannot verify</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">✓ Measures actual height</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-600">✓ For selected components</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Tombstone Detection</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">⚠ Limited (severe cases only)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">✓ Excellent (angle measurement)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-600">✓ Good</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">BGA Inspection</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">⚠ Limited to visible balls</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">✓ Full coplanarity check</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-600">✓ Targeted 3D measurement</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">False Call Rate</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">1-3% (moderate)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">&lt;0.5% (excellent)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-600">0.5-1% (good)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Defect Detection Rate</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">70-80% of defects</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">95-98% of defects</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-600">85-92% of defects</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Inspection Speed</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">100-150 cm²/sec (fastest)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">80-120 cm²/sec</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-600">90-130 cm²/sec</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Camera Resolution</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">16-29 MP typical</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">29 MP + height sensors</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-600">16-29 MP + selective 3D</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Component Library</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">30+ defect types</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">50+ defect types</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-600">40+ defect types</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Initial Cost</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">$80K - $180K</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">$120K - $300K (30-50% more)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-600">$100K - $220K (15-25% more)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">ROI Timeframe</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">18-24 months</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">8-18 months (defect savings)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-600">12-20 months</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Best Applications</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Simple boards, large components, high speed</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Complex assemblies, BGAs, QFPs, fine-pitch</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-600">Mixed complexity, budget-conscious</td>
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
              <h2 className="text-3xl font-bold mb-8">Key Defects Detected by Each Technology</h2>

              <div className="space-y-6">
                <div className="bg-white border-l-4 border-gray-400 p-6 rounded-r-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-3 text-gray-600">2D AOI Detects:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">✓</span> Missing components
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span> Wrong components
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span> Polarity errors
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span> Component rotation/shift
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span> Visible solder defects
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">✓</span> Obvious bridging
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">⚠</span> Component damage (limited)
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">⚠</span> Severe tombstoning only
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    <strong>Cannot detect:</strong> Lifted leads, coplanarity, component standoff, solder volume, subtle tombstoning
                  </p>
                </div>

                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-3 text-blue-600">3D AOI Detects (All of 2D plus):</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">✓</span> Lifted leads (QFP, SOIC)
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">✓</span> Component standoff issues
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">✓</span> <Link href="/glossary#coplanarity" className="text-blue-600 hover:underline">Coplanarity</Link> defects
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">✓</span> Insufficient solder volume
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">✓</span> Excessive solder volume
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">✓</span> <Link href="/glossary#tombstoning" className="text-blue-600 hover:underline">Tombstoning</Link> (all angles)
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">✓</span> Solder ball height
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">✓</span> Hidden bridging (3D space)
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">✓</span> Component tilt/warping
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">✓</span> Pad coplanarity on <Link href="/glossary#bga" className="text-blue-600 hover:underline">BGAs</Link>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-blue-700 font-semibold">
                    Detects 30-50% more defects than 2D AOI, especially critical height-related defects
                  </p>
                </div>

                <div className="bg-white border-l-4 border-green-600 p-6 rounded-r-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-3 text-green-600">Hybrid AOI Detects:</h3>
                  <p className="text-gray-700 mb-3">
                    Uses 2D inspection for general components and selective 3D measurement for critical areas (BGAs, QFPs, high-pin-count ICs).
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Strategy:</strong> Configure which component types or specific components receive 3D measurement. Achieves 85-92% of 3D AOI's defect detection at 15-25% lower cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Decision Guide: Which AOI Technology?</h2>

              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-600">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Choose 3D AOI If:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>BGAs, QFPs, or other packages where lifted leads are critical defects</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Need maximum defect detection (95-98% capture rate)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Lowest false call rate (&lt;0.5%) to maintain operator confidence</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Automotive, medical, aerospace, or other high-reliability applications</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span><Link href="/glossary#ipc-a-610" className="text-blue-600 hover:underline">IPC-A-610</Link> Class 3 requirements</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Complex boards with mixed component types and densities</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>High field failure costs justify investment in superior detection</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-2 border-green-600">
                  <h3 className="text-2xl font-bold mb-4 text-green-600">Choose Hybrid AOI If:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Mixed board complexity (some simple, some with critical BGAs/QFPs)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Want 3D measurement on specific component types only</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Budget-conscious but need some height measurement capability</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Upgrading from 2D AOI without full 3D cost premium</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Need faster inspection with selective 3D on large boards</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-300">
                  <h3 className="text-2xl font-bold mb-4 text-gray-600">Choose 2D AOI If:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Simple boards with only large passives (0603+), connectors, and through-hole</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Extremely high-speed requirements (150+ cm²/sec) are critical</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Only need basic presence, polarity, and position checking</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>No BGAs, QFPs, or fine-pitch components in your products</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Tight budget constraints and acceptable defect escape rate</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-4 bg-orange-50 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Note:</strong> Even for simple boards, consider Hybrid AOI for critical components. The modest cost increase often pays for itself through reduced field failures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">ROI & Cost Analysis</h2>

              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">3D AOI ROI Calculation Example</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Additional Defect Detection Value:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>30-50% more defects caught vs 2D AOI</li>
                      <li>Lifted lead detection prevents field failures ($500-$5000 each)</li>
                      <li>Typical savings: $80K - $200K annually</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">False Call Reduction Savings:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>2D AOI: 1-3% false calls = 15-45 min/day investigating</li>
                      <li>3D AOI: &lt;0.5% false calls = 2-5 min/day</li>
                      <li>Time savings: 10-40 min/day × $30/hour × 250 days = $3K - $10K annually</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Rework Cost Reduction:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Catch defects earlier in process (10x cheaper than field repair)</li>
                      <li>Reduce warranty claims and field failures</li>
                      <li>Typical savings: $40K - $100K annually</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">Example: 3D AOI vs 2D AOI</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>3D AOI Cost Premium:</strong> $60K more than 2D AOI</p>
                    <p><strong>Annual Defect Detection Value:</strong> $100K</p>
                    <p><strong>Annual False Call Savings:</strong> $8K</p>
                    <p><strong>Annual Rework Savings:</strong> $60K</p>
                    <p className="font-bold text-blue-600 pt-2"><strong>Payback Period: 4.3 months</strong></p>
                    <p><strong>3-Year Total Savings:</strong> $444K (versus 2D AOI)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold mb-6">Hybrid AOI Value Proposition</h3>
                <p className="text-gray-700 mb-4">
                  Hybrid AOI offers 80-90% of 3D AOI's defect detection at 60-75% of the cost premium. For mixed board complexity, this can be the optimal cost/performance balance.
                </p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">Example: Hybrid AOI Strategy</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Hybrid AOI Cost Premium:</strong> $35K more than 2D AOI</p>
                    <p><strong>Configure 3D measurement for:</strong> All BGAs, QFPs &gt;0.5mm pitch, high-value ICs</p>
                    <p><strong>Use 2D inspection for:</strong> Passives, connectors, simple ICs</p>
                    <p><strong>Achieves:</strong> 85-92% defect detection, 0.5-1% false call rate</p>
                    <p className="font-bold text-green-600 pt-2"><strong>Payback Period: 7-8 months</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">Q: What is the difference between 2D AOI and 3D AOI?</h3>
                  <p className="text-gray-700">
                    <strong>A:</strong> 2D AOI uses high-resolution cameras to capture top-down images from multiple angles, measuring component presence, position, and polarity. 3D AOI adds height measurement capability using phase-shift, laser triangulation, or structured light, enabling detection of component standoff, coplanarity, and solder joint volume. 3D AOI provides superior defect detection, especially for BGAs, QFPs, and lifted leads that 2D systems cannot reliably detect.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">Q: Is 3D AOI better than 2D AOI?</h3>
                  <p className="text-gray-700">
                    <strong>A:</strong> Yes, for most modern electronics manufacturing. 3D AOI detects 30-50% more defects than 2D AOI, particularly height-related defects like lifted leads, insufficient solder, coplanarity issues, and tombstoning. 3D AOI also has lower false call rates (under 0.5% vs 1-3% for 2D) and better handles component variations, warped PCBs, and complex assemblies. The 30-50% cost premium typically provides ROI within 8-18 months.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">Q: What is Hybrid AOI and when should I use it?</h3>
                  <p className="text-gray-700">
                    <strong>A:</strong> Hybrid AOI combines 2D imaging for fast area coverage with selective 3D measurement for critical areas. It provides a cost-effective balance between 2D speed and 3D accuracy. Choose Hybrid AOI when you have mixed assemblies (some simple, some complex), need to inspect large boards quickly while measuring BGAs and critical components in 3D, or want to upgrade from 2D with moderate cost increase (15-25% premium over 2D vs 30-50% for full 3D).
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">Q: Can 2D AOI detect lifted leads and insufficient solder?</h3>
                  <p className="text-gray-700">
                    <strong>A:</strong> No, 2D AOI cannot reliably detect lifted leads or insufficient solder because it only captures 2D images without height information. Lifted leads may appear correctly positioned in 2D view but are actually elevated above the pad. Insufficient solder may show correct wetting in 2D but lack adequate volume. Only 3D AOI or Hybrid AOI with height measurement can detect these critical defects.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">Q: How much slower is 3D AOI compared to 2D AOI?</h3>
                  <p className="text-gray-700">
                    <strong>A:</strong> Modern 3D AOI systems achieve 120 cm²/sec, comparable to 2D AOI speeds of 100-150 cm²/sec. The speed difference is minimal (10-20% in most cases) and often offset by reduced false calls and need for manual verification. Hybrid AOI can match or exceed 2D speeds by using 3D measurement only on critical areas. The superior defect detection of 3D AOI more than compensates for any minor speed difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Choose Your AOI System?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Our AOI specialists can help you evaluate your specific defect detection requirements and recommend the right technology for your production needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Request Consultation
                </Link>
                <Link href="/products/automated-optical-inspection" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500">
                  View AOI Systems
                </Link>
              </div>
              <p className="text-sm text-blue-200 mt-6">
                See detailed specifications: <Link href="/products/automated-optical-inspection#specifications" className="underline hover:text-white">AOI Specs</Link> | <Link href="/glossary" className="underline hover:text-white">Industry Glossary</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
