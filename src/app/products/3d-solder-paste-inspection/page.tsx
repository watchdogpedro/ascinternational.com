import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: '/products/3d-solder-paste-inspection' },
  title: "3D Solder Paste Inspection (SPI) Systems",
  description: "Advanced 3D solder paste inspection systems for PCB manufacturing. Inline and offline SPI solutions for accurate solder paste volume, height, and area measurement. 34+ years experience.",
  keywords: ["3D SPI", "solder paste inspection", "3D inspection systems", "PCB inspection", "solder paste measurement", "inline SPI", "offline SPI"],
  openGraph: {
    images: ['/og-image.png'],
    title: "3D Solder Paste Inspection Systems - ASC International",
    description: "Industry-leading 3D SPI systems for precise solder paste measurement and quality control in electronics manufacturing.",
    type: "website",
  },
};

export default function SolderPasteInspection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "3D Solder Paste Inspection System",
    "description": "Advanced 3D solder paste inspection systems for PCB manufacturing with inline and offline configurations. Features phase-shift 3D measurement technology with ±1μm height resolution and inspection speeds up to 85cm²/sec.",
    "brand": {
      "@type": "Organization",
      "name": "ASC International"
    },
    "category": "Industrial Equipment",
    "manufacturer": {
      "@type": "Organization",
      "name": "ASC International"
    },
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Inspection Technology",
        "value": "Phase-shift 3D measurement"
      },
      {
        "@type": "PropertyValue",
        "name": "Height Resolution",
        "value": "±1μm",
        "unitText": "micrometer"
      },
      {
        "@type": "PropertyValue",
        "name": "XY Resolution",
        "value": "10-20",
        "unitText": "micrometer"
      },
      {
        "@type": "PropertyValue",
        "name": "Inspection Speed",
        "value": "85",
        "unitText": "cm²/sec",
        "maxValue": "85"
      },
      {
        "@type": "PropertyValue",
        "name": "Board Size Minimum",
        "value": "50x50",
        "unitText": "mm"
      },
      {
        "@type": "PropertyValue",
        "name": "Board Size Maximum",
        "value": "510x460",
        "unitText": "mm"
      },
      {
        "@type": "PropertyValue",
        "name": "Board Thickness Range",
        "value": "0.4-6.0",
        "unitText": "mm"
      },
      {
        "@type": "PropertyValue",
        "name": "Smallest Component Size",
        "value": "01005",
        "description": "Metric 0402"
      },
      {
        "@type": "PropertyValue",
        "name": "Communication Protocols",
        "value": "IPC-CFX, SECS/GEM, SMEMA"
      },
      {
        "@type": "PropertyValue",
        "name": "Repeatability",
        "value": "±0.5μm",
        "unitText": "micrometer"
      },
      {
        "@type": "PropertyValue",
        "name": "Measurement Method",
        "value": "Non-contact optical"
      },
      {
        "@type": "PropertyValue",
        "name": "Programmable Lighting",
        "value": "Multi-angle LED illumination"
      }
    ],
    "applicationCategory": "Quality Control Equipment",
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Electronics Manufacturers"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Products", href: "/products" },
            { name: "3D Solder Paste Inspection" },
          ]}
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                3D Solder Paste Inspection (SPI) Systems
              </h1>
              <p className="text-xl text-white mb-8">
                Industry-leading 3D inspection technology for precise solder paste volume, height, and area measurement in PCB manufacturing
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Request Quote
                </Link>
                <Link
                  href="#specifications"
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500"
                >
                  View Specifications
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What is 3D SPI Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">What is 3D Solder Paste Inspection?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-white mb-4">
                  3D Solder Paste Inspection (SPI) is a critical quality control process in electronics manufacturing that measures the volume, height, and area of solder paste deposits on printed circuit boards (PCBs) after the printing process and before component placement. Using advanced phase-shift measurement technology, 3D SPI systems achieve ±1μm height resolution and ±2% volume accuracy - far superior to traditional 2D inspection methods.
                </p>
                <p className="text-white mb-4">
                  ASC International's 3D SPI systems use advanced optical technology and sophisticated algorithms to detect solder paste defects including insufficient volume, excessive volume, bridging, misalignment, and shape irregularities. Early detection of these defects prevents costly rework and improves overall manufacturing yield.
                </p>
                <p className="text-white mb-4">
                  Why is SPI so important? Studies consistently show that 60-70% of all electronics manufacturing defects originate at the solder paste printing stage. Catching these defects with SPI - before expensive components are placed - reduces fix costs by 100x compared to finding defects at AOI ($0.50 vs $50) or in the field ($500+). This makes 3D SPI one of the highest ROI investments in PCB assembly.
                </p>
                <p className="text-white mb-4">
                  Modern 3D SPI systems provide real-time statistical process control (SPC) and closed-loop feedback to solder paste printers, enabling automatic correction of offset and volume issues. This continuous improvement capability helps manufacturers achieve Six Sigma quality levels and meet stringent IPC Class 2 and Class 3 workmanship standards required for automotive, medical, and aerospace applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">How 3D SPI Works: Step-by-Step Process</h2>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Board Loading</h3>
                    <p className="text-gray-700">
                      After solder paste printing, the PCB automatically transfers from the printer to the SPI system via SMEMA conveyor. The system reads the board barcode for traceability and loads the appropriate inspection program based on the board type.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fiducial Detection & Alignment</h3>
                    <p className="text-gray-700">
                      High-resolution cameras locate fiducial marks on the PCB with sub-pixel accuracy. The system calculates board position and rotation, then aligns inspection coordinates to the actual board position, compensating for any misalignment from the printer.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">3D Measurement</h3>
                    <p className="text-gray-700">
                      The system projects multiple structured light patterns onto the board surface. Phase-shift algorithms analyze pattern distortion to construct a complete 3D point cloud showing the exact topography of all solder paste deposits. This process captures millions of height measurements across the board in seconds.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Defect Analysis</h3>
                    <p className="text-gray-700">
                      Advanced algorithms calculate volume, height, area, and X/Y offset for each paste deposit. The system compares these measurements against programmed tolerances and flags any deposits outside specifications. It detects insufficient paste, excessive paste, bridging, offset, missing deposits, and shape irregularities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Decision & Feedback</h3>
                    <p className="text-gray-700">
                      Based on inspection results, the system marks the board as PASS or FAIL. Real-time SPC charts track process trends (Cpk, X-bar, R-charts). Closed-loop feedback sends correction data back to the printer to automatically adjust stencil alignment or squeegee pressure. Failed boards can be routed to rework or scrap based on your process rules.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Data Logging & Reporting</h3>
                    <p className="text-gray-700">
                      All inspection data is logged to the database with board serial number, timestamp, and full measurement results. The system generates reports in PDF, CSV, or XML format and sends data to your MES/ERP system via IPC-CFX, OPC-UA, or REST API. This complete traceability supports ISO 9001, IATF 16949, and AS9100 quality requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Return on Investment: Why 3D SPI Pays for Itself</h2>
              <p className="text-lg text-gray-700 mb-8">
                Most manufacturers achieve 6-12 month payback on 3D SPI investment through defect cost reduction, scrap savings, and yield improvement.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
                  <h3 className="text-xl font-semibold mb-3 text-green-700">Cost Savings</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Reduce rework costs by 50-80%</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Eliminate wasted components on bad boards</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Decrease field failures and warranty claims</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Reduce manual inspection labor</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">Quality Benefits</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Improve first-pass yield by 10-20%</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Achieve Six Sigma process capability (Cpk &gt; 1.67)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Meet IPC Class 3 quality requirements</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Complete traceability for ISO/AS9100 compliance</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold mb-3">Real-World Example</h3>
                <p className="text-gray-800 mb-4">
                  A mid-size contract manufacturer producing 500 boards/day found that installing 3D SPI reduced their scrap rate from 3% to 0.5%. With average board value of $200, this saved $750,000 annually in scrap costs alone - paying back the SPI investment in just 4 months.
                </p>
                <Link href="/blog/calculating-inspection-roi" className="text-blue-600 hover:underline font-semibold">
                  Read our complete SPI ROI guide →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Key Features & Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">High Accuracy</h3>
                  <p className="text-gray-800">
                    Precise 3D measurement with ±1μm height resolution for accurate solder paste volume calculation
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Fast Inspection Speed</h3>
                  <p className="text-gray-800">
                    High-speed inspection up to 85cm²/sec for maximum production throughput
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Real-Time SPC</h3>
                  <p className="text-gray-800">
                    Statistical process control with trend analysis for continuous process improvement
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Industry 4.0 Ready</h3>
                  <p className="text-gray-800">
                    Full factory integration with IPC-CFX, SECS/GEM, and custom API support
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Flexible Configuration</h3>
                  <p className="text-gray-800">
                    Available in inline and offline configurations to fit your production line
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Proven Reliability</h3>
                  <p className="text-gray-800">
                    34+ years of experience with installations in over 1,000 factories worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3D vs 2D Comparison */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">3D SPI vs 2D SPI Comparison</h2>
              <p className="text-gray-800 mb-8">
                Understanding the key differences between 3D and 2D solder paste inspection technologies
              </p>
              <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2.5 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Feature
                      </th>
                      <th className="px-3 py-2.5 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        3D SPI (Recommended)
                      </th>
                      <th className="px-3 py-2.5 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        2D SPI
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Volume Measurement</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">
                        <span className="inline-flex items-center text-green-700">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Direct measurement (±2% accuracy)
                        </span>
                      </td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">
                        <span className="inline-flex items-center text-orange-700">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          Calculated (±10-15% accuracy)
                        </span>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Height Measurement</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Direct measurement (±1μm)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-orange-700">Not available</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Area Measurement</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">High accuracy</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">High accuracy</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Bridging Detection</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Excellent (3D profile analysis)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-orange-700">Limited (2D view only)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">PCB Warpage Handling</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Automatic compensation up to 3mm</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-orange-700">Requires manual setup</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Coplanarity Detection</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Yes (full 3D measurement)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-orange-700">No</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">False Call Rate</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">&lt; 1% (with proper setup)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-orange-700">3-5% typical</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Best For</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Fine pitch, high reliability, Class 3</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Large pads, Class 1-2, budget constraints</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">ROI Timeframe</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">12-18 months typical</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">18-24 months typical</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-sm text-gray-900">
                  <strong>Recommendation:</strong> 3D SPI is the industry standard for modern electronics manufacturing.
                  The superior accuracy and lower false call rate result in better ROI despite higher initial cost.
                  Read our detailed <Link href="/blog/3d-spi-vs-2d-spi-comparison" className="text-blue-600 hover:underline font-semibold">3D SPI vs 2D SPI comparison guide</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Common Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">SMT Assembly Lines</h3>
                  <p className="text-gray-800">
                    Critical quality checkpoint after solder paste printing, before component placement
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">High-Mix Production</h3>
                  <p className="text-gray-800">
                    Fast program changeover for facilities producing multiple PCB designs
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Fine-Pitch Components</h3>
                  <p className="text-gray-800">
                    Precise inspection of 01005 components and ultra-fine pitch BGAs
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Process Optimization</h3>
                  <p className="text-gray-800">
                    Data-driven printer optimization and maintenance scheduling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section id="specifications" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>

              {/* Measurement Performance */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Measurement Performance</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Inspection Technology</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Phase-shift 3D measurement with structured light projection</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Height Resolution</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">±1μm (0.00004")</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">XY Resolution</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">10μm - 20μm configurable (0.0004" - 0.0008")</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Repeatability</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">±0.5μm (3σ)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Measurement Method</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Non-contact optical measurement</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Inspection Speed</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Up to 85cm²/sec (13.2 in²/sec)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Board Handling */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Board Handling</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Board Size Range</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">50mm × 50mm to 510mm × 460mm (2" × 2" to 20" × 18")</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Board Thickness</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">0.4mm - 6.0mm (0.016" - 0.24")</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Board Weight</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Up to 5kg (11 lbs)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Board Warpage Handling</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Up to 3mm with automatic height compensation</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Conveyor Type</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Dual-lane SMEMA compatible</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Transport Height</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">900mm ± 20mm (35.4" ± 0.8")</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Inspection Capabilities */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Inspection Capabilities</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Smallest Component Size</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">01005 (0.4mm × 0.2mm / Metric 0402)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Minimum Pad Pitch</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">0.3mm (0.012")</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Defect Detection</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">
                          Insufficient paste, excess paste, bridging, offset, shape defects, missing deposits
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Measurement Parameters</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Volume, height, area, X/Y offset, shape analysis</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Fiducial Detection</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Automatic recognition with sub-pixel accuracy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Software & Integration */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Software & Integration</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Programming Methods</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Auto-programming from CAD, teach mode, golden board</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Communication Protocols</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">IPC-CFX, SECS/GEM, SMEMA, Modbus TCP/IP</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Data Formats</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Gerber (RS-274X), ODB++, GenCAD, IPC-2581</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Statistical Analysis</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Real-time SPC, Cpk calculation, trend charts, control charts</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Closed-Loop Feedback</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Automatic printer adjustment, offset correction</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Reporting</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">PDF, CSV, XML export with customizable templates</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Traceability</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Barcode/2D code reading, serial number tracking</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Environmental & Physical */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Environmental & Physical</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Machine Dimensions</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">1200mm (L) × 1100mm (W) × 1450mm (H)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Machine Weight</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Approximately 600kg (1,320 lbs)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Power Requirements</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">AC 200-240V, 50/60Hz, Single phase, 1.5kVA</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Compressed Air</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">0.5-0.7 MPa (73-100 PSI), clean dry air</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Operating Temperature</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">20°C - 28°C (68°F - 82°F)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Operating Humidity</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">35% - 75% RH, non-condensing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Download Spec Sheet */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="ml-3 flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Need a Complete Specification Sheet?
                    </h3>
                    <p className="text-gray-900 mb-4">
                      Download our comprehensive PDF specification sheet with detailed technical diagrams,
                      measurement examples, and integration guidelines.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Request Detailed Specs
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Why Choose ASC for 3D SPI</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Open Architecture</p>
                      <p className="text-sm text-gray-600">IPC-CFX, SECS/GEM, works with any printer brand</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Sub-Micron Repeatability</p>
                      <p className="text-sm text-gray-600">±0.5μm (3σ) proven in production environments</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">No Proprietary Data Lock-In</p>
                      <p className="text-sm text-gray-600">Export to CSV, XML, or any format you need</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Direct Engineer Support</p>
                      <p className="text-sm text-gray-600">Talk to the people who built the system, not a call center</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">IPC-CFX Certified</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">SECS/GEM Compatible</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">ISO 9001 Compliant</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">IATF 16949 Ready</span>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-sm text-gray-600">
                    Evaluating SPI vendors? Read our <Link href="/compare/spi-vendor-comparison" className="text-blue-600 hover:underline font-semibold">SPI Vendor Comparison Guide</Link> or <Link href="/blog/spi-buyers-guide-2026" className="text-blue-600 hover:underline font-semibold">2026 SPI Buyer&apos;s Guide</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Improve Your Solder Paste Process?
              </h2>
              <p className="text-xl mb-8 text-white">
                Contact our experts to learn how ASC's 3D SPI systems can reduce defects and increase yield in your production line
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Request a Quote
                </Link>
                <a
                  href="tel:+18884782912"
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500 inline-flex items-center justify-center"
                >
                  Call Us Today
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
