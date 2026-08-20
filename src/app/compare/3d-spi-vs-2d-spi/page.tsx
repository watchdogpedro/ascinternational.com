import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: "3D SPI vs 2D SPI: Complete Comparison Guide 2026 | ASC International",
  description: "Comprehensive comparison of 3D and 2D solder paste inspection systems. Compare accuracy, speed, defect detection, ROI, and determine which SPI technology is right for your production needs.",
  keywords: ["3D SPI vs 2D SPI", "solder paste inspection comparison", "3D SPI advantages", "2D SPI vs 3D SPI", "which SPI is better"],
  openGraph: {
    title: "3D SPI vs 2D SPI: Which Technology is Right for You?",
    description: "Data-driven comparison of 3D and 2D solder paste inspection with specifications, use cases, and ROI analysis.",
    type: "article",
  },
};

export default function ThreeDSPIvs2DSPI() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ComparisonTable",
    "name": "3D SPI vs 2D SPI Comparison",
    "description": "Comprehensive comparison of 3D and 2D solder paste inspection technologies",
    "url": `${SITE_URL}/compare/3d-spi-vs-2d-spi`,
    "about": [
      {
        "@type": "Product",
        "name": "3D SPI System",
        "description": "Three-dimensional solder paste inspection using structured light or laser scanning"
      },
      {
        "@type": "Product",
        "name": "2D SPI System",
        "description": "Two-dimensional solder paste inspection using camera-based imaging"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the main difference between 3D SPI and 2D SPI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The main difference is that 3D SPI measures height and volume of solder paste deposits using structured light or laser scanning, while 2D SPI only captures a top-down image and measures area and coverage. 3D SPI provides ±1μm height resolution and accurate volume measurement, while 2D SPI is limited to 2D area measurements with no height data."
        }
      },
      {
        "@type": "Question",
        "name": "Is 3D SPI worth the extra cost compared to 2D SPI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, for most modern electronics manufacturing. 3D SPI typically provides ROI within 6-12 months through reduced defects (50-70% reduction), lower false call rates (under 1% vs 5-10% for 2D), and ability to detect volume-based defects that 2D systems miss. The cost premium of 20-40% is quickly recovered through improved quality and reduced rework costs."
        }
      },
      {
        "@type": "Question",
        "name": "Can 2D SPI detect solder paste volume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, 2D SPI cannot directly measure solder paste volume because it only captures a top-down 2D image. It can estimate volume based on area and grayscale intensity, but this is inaccurate and unreliable, especially on warped PCBs. Only 3D SPI can accurately measure actual paste volume using height data from structured light or laser scanning."
        }
      },
      {
        "@type": "Question",
        "name": "What defects can 3D SPI detect that 2D SPI cannot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "3D SPI can detect volume-based defects that 2D systems miss: insufficient volume (not enough paste), excessive volume (too much paste), coplanarity issues (uneven pad heights), bridging between pads (measured in 3D space), and PCB warpage effects on paste deposition. 3D SPI also handles reflective surfaces and varying lighting conditions better than 2D systems."
        }
      },
      {
        "@type": "Question",
        "name": "Is 2D SPI still relevant in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "2D SPI remains relevant for specific applications: very low-volume production (under 100 boards/day), simple boards with large components (0603 and larger), tight budget constraints, or basic paste presence verification. However, for modern electronics with fine-pitch components, BGAs, or IPC Class 2/3 requirements, 3D SPI is the recommended standard."
        }
      },
      {
        "@type": "Question",
        "name": "How much faster is 3D SPI compared to 2D SPI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Modern 3D SPI systems are actually comparable or faster than 2D SPI. Advanced 3D systems achieve 85 cm²/sec inspection speed using phase-shift technology, while 2D systems typically run at 60-80 cm²/sec. The speed difference is negligible, and 3D SPI's superior accuracy more than compensates for any minor speed trade-offs."
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
            { name: "3D SPI vs 2D SPI" },
          ]}
        />

        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                3D SPI vs 2D SPI: Complete Comparison Guide
              </h1>
              <p className="text-xl text-blue-100 mb-4">
                Understand the critical differences between 3D and 2D solder paste inspection systems to make the right investment decision for your production line.
              </p>
              <p className="text-lg text-blue-200">
                Updated January 2026 with latest technology specifications and ROI data
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
                  TL;DR: 3D SPI is the recommended choice for modern electronics manufacturing.
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Choose 3D SPI if:</strong> You manufacture fine-pitch components (0402 or smaller), BGAs, require IPC Class 2/3 compliance, need accurate volume measurement, or want to reduce defects by 50-70%.
                </p>
                <p className="text-gray-700">
                  <strong>Choose 2D SPI if:</strong> You have very low volumes (under 100 boards/day), simple boards with large components only, tight budget constraints, or only need basic paste presence verification.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6">What is the Difference?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">3D SPI</h3>
                  <p className="text-gray-700 mb-4">
                    Uses <Link href="/glossary#structured-light" className="text-blue-600 hover:underline">structured light</Link> projection or laser scanning to capture three-dimensional height data of <Link href="/glossary#solder-paste" className="text-blue-600 hover:underline">solder paste</Link> deposits.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Measures height, volume, and area
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      ±1μm height resolution
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Handles warped PCBs accurately
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      &lt;1% false call rate
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-600">2D SPI</h3>
                  <p className="text-gray-700 mb-4">
                    Uses high-resolution cameras to capture a top-down 2D image of solder paste deposits from multiple angles.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      Measures area only (no height data)
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      Cannot measure volume directly
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      Struggles with warped PCBs
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      5-10% false call rate
                    </li>
                  </ul>
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
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-blue-600">3D SPI (Recommended)</th>
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-gray-900">2D SPI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Volume Measurement</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">✓ Accurate (±1% typical)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">✗ Not available (estimates only)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Height Measurement</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">✓ ±1μm resolution</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">✗ No height data</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Area Measurement</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">✓ ±10μm accuracy</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">✓ ±15μm accuracy</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Bridging Detection</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">✓ Excellent (3D space analysis)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">⚠ Limited (top view only)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">PCB Warpage Handling</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">✓ Excellent (measures actual height)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">✗ Poor (false positives)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Coplanarity Detection</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">✓ Yes (measures pad heights)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">✗ No capability</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">False Call Rate</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">&lt;1% (excellent)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">5-10% (high false positives)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Inspection Speed</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Up to 85 cm²/sec</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">60-80 cm²/sec</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Fine Pitch Components</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">✓ 0201, 01005 capable</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">⚠ Limited to 0402+</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Reflective Surface Handling</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">✓ Good (structured light)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">⚠ Challenges with reflections</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Initial Cost</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">$100K - $250K</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">$60K - $150K (20-40% less)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">ROI Timeframe</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">6-12 months (defect reduction)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">12-18 months (limited improvement)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">IPC Class 2/3 Compliance</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">✓ Fully compliant</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">⚠ Limited compliance</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Best Use Cases</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Modern electronics, fine-pitch, BGAs, high-volume</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Simple boards, large components, low-volume</td>
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
              <h2 className="text-3xl font-bold mb-8">Key Differences Explained</h2>

              <div className="space-y-8">
                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-3">1. Volume Measurement Capability</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>3D SPI:</strong> Directly measures paste volume by calculating the actual height at thousands of points across each pad. This provides accurate volume measurements (±1% typical) that correlate directly with solder joint quality after reflow.
                  </p>
                  <p className="text-gray-700">
                    <strong>2D SPI:</strong> Cannot measure volume directly because it only captures a 2D image from above. Some systems attempt to estimate volume based on area and grayscale intensity, but this is unreliable, especially on warped PCBs or with varying lighting conditions.
                  </p>
                  <div className="mt-4 bg-blue-50 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Why this matters:</strong> Volume is the #1 predictor of solder joint quality. Insufficient volume causes opens and weak joints. Excessive volume causes bridging and shorts. Only 3D SPI can reliably detect volume defects before reflow.
                    </p>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-3">2. PCB Warpage Compensation</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>3D SPI:</strong> Measures the actual 3D topography of the PCB, including warpage, and compensates automatically. Paste height is measured relative to the actual pad surface, providing accurate measurements regardless of board flatness.
                  </p>
                  <p className="text-gray-700">
                    <strong>2D SPI:</strong> Assumes a perfectly flat PCB. When the board is warped (common with large boards, thin substrates, or after reflow), the focus plane is incorrect, leading to blurred images and false positives/negatives.
                  </p>
                  <div className="mt-4 bg-blue-50 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Why this matters:</strong> Modern PCBs commonly have 0.5-2mm of warpage, especially after thermal processes. 2D SPI generates excessive false calls on warped boards, forcing operators to increase tolerance windows and miss real defects.
                    </p>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-3">3. False Call Rate Reduction</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>3D SPI:</strong> Achieves &lt;1% false call rate by measuring actual 3D geometry. Operators spend minimal time on false positives and can trust the system to catch real defects.
                  </p>
                  <p className="text-gray-700">
                    <strong>2D SPI:</strong> Typically experiences 5-10% false call rates due to lighting variations, reflections, shadows, and warpage issues. Operators waste time investigating false positives and may start ignoring alerts.
                  </p>
                  <div className="mt-4 bg-blue-50 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Why this matters:</strong> High false call rates erode operator confidence in the system. If operators see 10 false positives for every 1 real defect, they start ignoring alerts entirely, defeating the purpose of inspection. 3D SPI's low false call rate maintains system credibility.
                    </p>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-3">4. Bridging Detection Accuracy</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>3D SPI:</strong> Detects bridging in 3D space by analyzing paste height profiles between adjacent pads. Can distinguish between paste that's merely close (acceptable) versus paste that's actually touching (bridging).
                  </p>
                  <p className="text-gray-700">
                    <strong>2D SPI:</strong> Only sees a top-down view. Paste deposits that appear separate from above may actually be bridged underneath. Conversely, deposits that appear to touch from above may have adequate clearance in 3D space.
                  </p>
                  <div className="mt-4 bg-blue-50 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Why this matters:</strong> Bridging is one of the most common solder defects, especially on fine-pitch components. 2D SPI's limited perspective leads to both missed bridges (escapes) and false bridging calls, while 3D SPI accurately identifies actual bridging conditions.
                    </p>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-3">5. Coplanarity Measurement</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>3D SPI:</strong> Measures the height of each pad relative to a reference plane, detecting coplanarity issues (uneven pad heights) that cause inconsistent paste deposition. Critical for BGAs and QFPs.
                  </p>
                  <p className="text-gray-700">
                    <strong>2D SPI:</strong> Has no capability to measure coplanarity since it captures no height information. Cannot detect when pads are at different heights, leading to missed defects.
                  </p>
                  <div className="mt-4 bg-blue-50 p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Why this matters:</strong> Coplanarity issues are common on BGAs, large QFPs, and boards with multiple thickness zones. These lead to uneven paste deposits that cause opens after reflow. Only 3D SPI can detect and flag these conditions before assembly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">When to Choose Each Technology</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-600">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Choose 3D SPI If You Have:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Fine-pitch components (0402, 0201, 01005)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>BGAs or other area array packages</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>IPC Class 2 or Class 3 requirements</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Medium to high production volumes (500+ boards/day)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Large PCBs prone to warpage (&gt;200mm)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Need for <Link href="/glossary#closed-loop" className="text-blue-600 hover:underline">closed-loop</Link> printer feedback</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Goal to reduce defects by 50-70%</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Automotive, medical, or aerospace applications</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Need ROI within 6-12 months</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-blue-50 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Recommendation:</strong> 3D SPI is the industry standard for modern electronics manufacturing and is worth the investment for virtually all production environments.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-300">
                  <h3 className="text-2xl font-bold mb-4 text-gray-600">Choose 2D SPI If You Have:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Very low production volumes (under 100 boards/day)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Simple boards with large components only (0603+)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Extremely tight budget constraints</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Only need basic paste presence verification</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>IPC Class 1 (consumer electronics) only</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Small, flat PCBs (under 100mm, &lt;0.3mm warp)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Prototyping or R&D lab use</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>Acceptable to miss volume-based defects</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-orange-50 rounded">
                    <p className="text-sm text-gray-700">
                      <strong>Note:</strong> Even in low-volume scenarios, consider the long-term costs of defect escapes and false call time. Many low-volume manufacturers find that 3D SPI pays for itself through quality improvements.
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
              <h2 className="text-3xl font-bold mb-8">ROI Analysis</h2>

              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Typical 3D SPI ROI Calculation</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Cost Savings from Defect Reduction:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>50-70% reduction in solder-related defects</li>
                      <li>Typical savings: $50K - $150K annually (volume dependent)</li>
                      <li>Fewer field failures and warranty claims</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Time Savings from Reduced False Calls:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>2D SPI: 5-10% false calls = 30-60 min/day investigating false positives</li>
                      <li>3D SPI: &lt;1% false calls = 5-10 min/day on false positives</li>
                      <li>Savings: 20-50 min/day × $30/hour × 250 days = $5K - $13K annually</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Process Optimization with Closed-Loop Feedback:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>3D SPI data sent back to stencil printer</li>
                      <li>Automatic adjustments reduce paste variations</li>
                      <li><Link href="/glossary#cpk" className="text-blue-600 hover:underline">Cpk</Link> improvement from 1.33 to 2.0 typical</li>
                      <li>Fewer printer adjustments and stoppages</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3">Example ROI Scenario:</h4>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>3D SPI Cost Premium:</strong> $50K more than 2D SPI</p>
                      <p><strong>Annual Defect Savings:</strong> $80K</p>
                      <p><strong>Annual Time Savings:</strong> $10K</p>
                      <p><strong>Process Improvement Value:</strong> $15K</p>
                      <p className="font-bold text-blue-600 pt-2"><strong>Payback Period: 5.7 months</strong></p>
                      <p><strong>3-Year Total Savings:</strong> $265K (versus 2D SPI)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <h4 className="font-semibold text-lg mb-2">Hidden Costs of 2D SPI:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Operator frustration from high false call rates</li>
                  <li>Missed defects that escape to later stages (10x more expensive to fix)</li>
                  <li>Cannot provide closed-loop feedback to printer</li>
                  <li>Limited ability to optimize process over time</li>
                  <li>May need upgrade to 3D within 2-3 years as quality requirements increase</li>
                </ul>
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
                  <h3 className="text-xl font-bold mb-3">Q: What is the main difference between 3D SPI and 2D SPI?</h3>
                  <p className="text-gray-700">
                    <strong>A:</strong> The main difference is that 3D SPI measures height and volume of solder paste deposits using structured light or laser scanning, while 2D SPI only captures a top-down image and measures area and coverage. 3D SPI provides ±1μm height resolution and accurate volume measurement, while 2D SPI is limited to 2D area measurements with no height data.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">Q: Is 3D SPI worth the extra cost compared to 2D SPI?</h3>
                  <p className="text-gray-700">
                    <strong>A:</strong> Yes, for most modern electronics manufacturing. 3D SPI typically provides ROI within 6-12 months through reduced defects (50-70% reduction), lower false call rates (under 1% vs 5-10% for 2D), and ability to detect volume-based defects that 2D systems miss. The cost premium of 20-40% is quickly recovered through improved quality and reduced rework costs.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">Q: Can 2D SPI detect solder paste volume?</h3>
                  <p className="text-gray-700">
                    <strong>A:</strong> No, 2D SPI cannot directly measure solder paste volume because it only captures a top-down 2D image. It can estimate volume based on area and grayscale intensity, but this is inaccurate and unreliable, especially on warped PCBs. Only 3D SPI can accurately measure actual paste volume using height data from structured light or laser scanning.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">Q: What defects can 3D SPI detect that 2D SPI cannot?</h3>
                  <p className="text-gray-700">
                    <strong>A:</strong> 3D SPI can detect volume-based defects that 2D systems miss: insufficient volume (not enough paste), excessive volume (too much paste), <Link href="/glossary#coplanarity" className="text-blue-600 hover:underline">coplanarity</Link> issues (uneven pad heights), bridging between pads (measured in 3D space), and PCB warpage effects on paste deposition. 3D SPI also handles reflective surfaces and varying lighting conditions better than 2D systems.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">Q: Is 2D SPI still relevant in 2026?</h3>
                  <p className="text-gray-700">
                    <strong>A:</strong> 2D SPI remains relevant for specific applications: very low-volume production (under 100 boards/day), simple boards with large components (0603 and larger), tight budget constraints, or basic paste presence verification. However, for modern electronics with fine-pitch components, BGAs, or <Link href="/glossary#ipc-a-610" className="text-blue-600 hover:underline">IPC-A-610</Link> Class 2/3 requirements, 3D SPI is the recommended standard.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-3">Q: How much faster is 3D SPI compared to 2D SPI?</h3>
                  <p className="text-gray-700">
                    <strong>A:</strong> Modern 3D SPI systems are actually comparable or faster than 2D SPI. Advanced 3D systems achieve 85 cm²/sec inspection speed using phase-shift technology, while 2D systems typically run at 60-80 cm²/sec. The speed difference is negligible, and 3D SPI's superior accuracy more than compensates for any minor speed trade-offs.
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
                Ready to Choose Your SPI System?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Our SPI specialists can help you evaluate your specific requirements and recommend the right system for your production needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Request Consultation
                </Link>
                <Link href="/products/3d-solder-paste-inspection" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500">
                  View 3D SPI Systems
                </Link>
              </div>
              <p className="text-sm text-blue-200 mt-6">
                See detailed specifications: <Link href="/products/3d-solder-paste-inspection#specifications" className="underline hover:text-white">3D SPI Specs</Link> | <Link href="/glossary" className="underline hover:text-white">Industry Glossary</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
