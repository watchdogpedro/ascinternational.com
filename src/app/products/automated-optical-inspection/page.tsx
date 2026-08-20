import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automated Optical Inspection (AOI) Systems | ASC International",
  description: "Advanced 2D-3D AOI systems for post-reflow PCB inspection. AI-powered defect detection for component placement, solder joints, and assembly quality verification.",
  keywords: ["AOI systems", "automated optical inspection", "PCB inspection", "2D AOI", "3D AOI", "post-reflow inspection", "electronics inspection"],
  openGraph: {
    title: "Automated Optical Inspection Systems - ASC International",
    description: "Industry-leading AOI systems with AI-powered defect detection for comprehensive PCB assembly inspection.",
    type: "website",
  },
};

export default function AutomatedOpticalInspection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Automated Optical Inspection System",
    "description": "Advanced 2D-3D AOI systems for comprehensive post-reflow PCB inspection with AI-powered defect detection. Features 29MP camera resolution, ±2μm height accuracy, and inspection speeds up to 120cm²/sec.",
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
        "name": "Imaging Technology",
        "value": "2D color + 3D structured light hybrid"
      },
      {
        "@type": "PropertyValue",
        "name": "Camera Resolution",
        "value": "29",
        "unitText": "megapixel",
        "maxValue": "29"
      },
      {
        "@type": "PropertyValue",
        "name": "XY Resolution",
        "value": "10-15",
        "unitText": "micrometer"
      },
      {
        "@type": "PropertyValue",
        "name": "Height Measurement Accuracy",
        "value": "±2",
        "unitText": "micrometer"
      },
      {
        "@type": "PropertyValue",
        "name": "Z-Axis Resolution",
        "value": "±1",
        "unitText": "micrometer"
      },
      {
        "@type": "PropertyValue",
        "name": "Inspection Speed",
        "value": "120",
        "unitText": "cm²/sec",
        "maxValue": "120"
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
        "value": "510x510",
        "unitText": "mm"
      },
      {
        "@type": "PropertyValue",
        "name": "Board Thickness Range",
        "value": "0.4-8.0",
        "unitText": "mm"
      },
      {
        "@type": "PropertyValue",
        "name": "Smallest Component Size",
        "value": "01005",
        "description": "0.4mm × 0.2mm (Metric 0402)"
      },
      {
        "@type": "PropertyValue",
        "name": "Defect Types Detected",
        "value": "50+",
        "description": "Component and solder defects"
      },
      {
        "@type": "PropertyValue",
        "name": "Communication Protocols",
        "value": "IPC-CFX, SECS/GEM, SMEMA, Ethernet"
      },
      {
        "@type": "PropertyValue",
        "name": "AI Detection",
        "value": "Deep learning-based defect recognition"
      },
      {
        "@type": "PropertyValue",
        "name": "False Call Rate",
        "value": "<0.5%",
        "description": "With AI optimization"
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
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Products", href: "/products" },
            { name: "Automated Optical Inspection" },
          ]}
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Automated Optical Inspection (AOI) Systems
              </h1>
              <p className="text-xl text-white mb-8">
                Advanced 2D-3D AOI technology with AI-powered defect detection for comprehensive post-reflow PCB inspection and assembly verification
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
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

        {/* What is AOI Section */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">What is Automated Optical Inspection?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-white mb-4">
                  <Link href="/glossary#aoi" className="text-white hover:underline font-semibold">Automated Optical Inspection (AOI)</Link> is a critical quality control technology used in{' '}
                  <Link href="/glossary#smt" className="text-white hover:underline">electronics manufacturing</Link> to inspect{' '}
                  <Link href="/glossary#pcb" className="text-white hover:underline">printed circuit board</Link> assemblies after the{' '}
                  <Link href="/glossary#reflow-soldering" className="text-white hover:underline">reflow soldering</Link> process. AOI systems use advanced cameras and intelligent algorithms to detect defects in component placement, solder joint quality, and overall assembly integrity.
                </p>
                <p className="text-white mb-4">
                  ASC International's AOI systems combine{' '}
                  <Link href="/glossary#2d-aoi" className="text-white hover:underline">2D</Link> and{' '}
                  <Link href="/glossary#3d-aoi" className="text-white hover:underline">3D</Link> imaging technologies with artificial intelligence and{' '}
                  <Link href="/glossary#machine-vision" className="text-white hover:underline">machine vision</Link> to provide comprehensive inspection coverage. Our systems detect a wide range of defects including{' '}
                  <Link href="/glossary#missing-component" className="text-white hover:underline">missing components</Link>, wrong components, component skew,{' '}
                  <Link href="/glossary#tombstoning" className="text-white hover:underline">tombstoning</Link>,{' '}
                  <Link href="/glossary#bridging" className="text-white hover:underline">solder bridges</Link>,{' '}
                  <Link href="/glossary#insufficient-solder" className="text-white hover:underline">insufficient solder</Link>, and many others.
                </p>
                <p className="text-white">
                  By catching defects immediately after reflow, AOI systems prevent defective boards from moving forward in production, reducing rework costs and improving overall manufacturing{' '}
                  <Link href="/glossary#first-pass-yield" className="text-white hover:underline">yield</Link>.
                </p>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">True 3D Imaging</h3>
                  <p className="text-gray-800">
                    Advanced 3D reconstruction for accurate solder joint inspection and component height verification
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI-Powered Detection</h3>
                  <p className="text-gray-800">
                    Machine learning algorithms continuously improve defect recognition and reduce false calls
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">High-Speed Inspection</h3>
                  <p className="text-gray-800">
                    Inspect full PCB assemblies at production speeds without compromising accuracy
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Comprehensive Defect Library</h3>
                  <p className="text-gray-800">
                    Detects 50+ defect types including component and solder defects
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
                  <p className="text-gray-800">
                    Real-time SPC, trend analysis, and defect pareto charts for process optimization
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Easy Programming</h3>
                  <p className="text-gray-800">
                    Auto-programming from CAD data and intuitive teach mode for fast setup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Defect Detection */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Defect Detection Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Component Defects</h3>
                  <ul className="space-y-2">
                    {[
                      "Missing components",
                      "Wrong component type",
                      "Wrong polarity",
                      "Component shift/skew",
                      "Lifted leads",
                      "Tombstoning",
                      "Billboard effect",
                      "Component damage"
                    ].map((defect) => (
                      <li key={defect} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-900">{defect}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Solder Joint Defects</h3>
                  <ul className="space-y-2">
                    {[
                      "Insufficient solder",
                      "Excessive solder",
                      "Solder bridges",
                      "Cold solder joints",
                      "Dewetting",
                      "Solder balls",
                      "Voiding",
                      "Non-wetting"
                    ].map((defect) => (
                      <li key={defect} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-900">{defect}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                  <h3 className="font-semibold text-lg mb-2">Post-Reflow Inspection</h3>
                  <p className="text-gray-800">
                    Complete assembly verification after reflow soldering process
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">High-Volume Manufacturing</h3>
                  <p className="text-gray-800">
                    Fast, reliable inspection for high-throughput production lines
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Complex Assemblies</h3>
                  <p className="text-gray-800">
                    Inspection of double-sided boards, BGAs, and fine-pitch components
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Traceability & Documentation</h3>
                  <p className="text-gray-800">
                    Complete image archiving and defect documentation for quality records
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2D vs 3D AOI Comparison */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">2D AOI vs 3D AOI Comparison</h2>
              <p className="text-gray-800 mb-8">
                Understanding the key differences between 2D, 3D, and hybrid AOI inspection technologies
              </p>
              <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2.5 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Feature
                      </th>
                      <th className="px-3 py-2.5 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        2D AOI
                      </th>
                      <th className="px-3 py-2.5 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        3D AOI (Recommended)
                      </th>
                      <th className="px-3 py-2.5 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Hybrid 2D+3D
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Solder Joint Inspection</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-orange-700">Limited (top view only)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Excellent (full 3D profile)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Excellent (combined)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Component Height</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-orange-700">Cannot measure</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">±2μm accuracy</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">±2μm accuracy</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Coplanarity Detection</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-orange-700">No</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Yes</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Yes</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Polarity Detection</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Excellent (color imaging)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-orange-700">Limited (grayscale)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Excellent (color + 3D)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Tombstoning Detection</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-orange-700">Moderate</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Excellent</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Excellent</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">False Call Rate</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-orange-700">2-5% typical</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">&lt;1% with AI</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">&lt;0.5% with AI</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Inspection Speed</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Very fast (150cm²/sec)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Fast (120cm²/sec)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Moderate (100cm²/sec)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">BGA Inspection</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-orange-700">Ball presence only</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Volume & height</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Complete analysis</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Best For</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Simple assemblies, Class 1-2</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Complex assemblies, Class 3</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">All applications, highest accuracy</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Initial Investment</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Lower</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Moderate</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Higher</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-sm text-gray-900">
                  <strong>Recommendation:</strong> Hybrid 2D+3D systems provide the most comprehensive inspection coverage,
                  combining color imaging for polarity detection with 3D measurement for solder joint analysis. Ideal for
                  high-reliability applications. Read our detailed{' '}
                  <Link href="/blog/reduce-aoi-false-calls" className="text-blue-600 hover:underline font-semibold">
                    guide to reducing AOI false calls
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section id="specifications" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>

              {/* Imaging & Measurement */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Imaging & Measurement Performance</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Imaging Technology</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">2D high-resolution color + 3D structured light projection</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Camera Resolution</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Up to 29 megapixel per image</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">XY Resolution</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">10μm - 15μm configurable (0.0004" - 0.0006")</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Height Measurement Accuracy</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">±2μm (0.00008")</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Z-Axis Resolution</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">±1μm</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Inspection Speed</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Up to 120cm²/sec (18.6 in²/sec)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Field of View</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Multi-camera system for full board coverage</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Lighting System</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Programmable multi-angle LED with RGB capability</td>
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
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">50mm × 50mm to 510mm × 510mm (2" × 2" to 20" × 20")</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Board Thickness</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">0.4mm - 8.0mm (0.016" - 0.31")</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Board Weight</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Up to 7kg (15.4 lbs)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Board Warpage Handling</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Up to 5mm with laser height sensors</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Conveyor Configuration</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Dual-lane with automatic width adjustment</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Transport Height</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">900mm ± 20mm (35.4" ± 0.8")</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Top/Bottom Inspection</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Top side standard, bottom side optional</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Inspection Capabilities */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Inspection Capabilities & AI Features</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Smallest Component Size</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">01005 (0.4mm × 0.2mm / Metric 0402)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Minimum Component Pitch</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">0.3mm (0.012")</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Defect Types Detected</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">
                          50+ types including missing/wrong components, polarity, shift, skew, tombstone, lifted leads,
                          solder bridges, insufficient/excess solder, cold joints, solder balls
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">AI Detection Engine</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Deep learning neural networks with continuous learning</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">False Call Rate</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">&lt;0.5% with AI optimization (industry leading)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Escape Rate</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">&lt;0.1% for critical defects</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Component Library</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">10,000+ pre-trained components, expandable</td>
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
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">
                          Auto-programming from CAD (Gerber, ODB++, GenCAD), golden board teach, manual teach
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Communication Protocols</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">IPC-CFX, SECS/GEM, SMEMA, Hermes, Modbus TCP/IP</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Data Formats</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Gerber (RS-274X), ODB++, GenCAD, IPC-2581</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Statistical Analysis</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Real-time SPC, Cpk, Pareto charts, trend analysis, defect clustering</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Traceability</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">1D/2D barcode reading, serial number tracking, image archiving</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Reporting</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">PDF, Excel, CSV, XML with customizable templates</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Network Integration</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Ethernet, wireless, cloud connectivity for Industry 4.0</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">User Interface</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Multi-language touch screen with intuitive workflow</td>
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
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">1350mm (L) × 1250mm (W) × 1500mm (H)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Machine Weight</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Approximately 800kg (1,760 lbs)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Power Requirements</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">AC 200-240V, 50/60Hz, Single phase, 2.0kVA</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Compressed Air</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">0.5-0.7 MPa (73-100 PSI), clean dry air, 50 L/min</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Operating Temperature</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">20°C - 28°C (68°F - 82°F)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Operating Humidity</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">30% - 70% RH, non-condensing</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Noise Level</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">&lt;70 dB(A) during operation</td>
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
                      defect examples, and ROI calculations.
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
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Why Choose ASC for AOI</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Practical AI</p>
                      <p className="text-sm text-gray-600">No-hype, results-focused AI that delivers measurable defect detection improvements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Under 1% False Call Rate</p>
                      <p className="text-sm text-gray-600">Industry-leading accuracy that keeps your line running, not reviewing false alarms</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Open Data Export</p>
                      <p className="text-sm text-gray-600">No proprietary lock-in -- export your inspection data in any format you need</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Direct Engineer Support</p>
                      <p className="text-sm text-gray-600">Programming optimization support from the engineers who built the system</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">IPC-CFX Certified</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">AI-Powered Detection</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">IATF 16949 Ready</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">ISO 13485 Compatible</span>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-sm text-gray-600">
                    Evaluating AOI vendors? Read our <Link href="/compare/aoi-vendor-evaluation" className="text-blue-600 hover:underline font-semibold">AOI Vendor Evaluation Guide</Link> or <Link href="/blog/aoi-buyers-guide-2026" className="text-blue-600 hover:underline font-semibold">2026 AOI Buyer&apos;s Guide</Link>.
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
                Improve Assembly Quality with Advanced AOI
              </h2>
              <p className="text-xl mb-8 text-white">
                Contact our experts to learn how ASC's AOI systems can reduce defects and improve yield in your production line
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
