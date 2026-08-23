import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Conformal Coating Inspection Systems",
  description: "Advanced conformal coating inspection and measurement systems. UV fluorescence imaging for precise coverage analysis and thickness measurement on PCB assemblies.",
  keywords: ["conformal coating inspection", "coating thickness measurement", "UV fluorescence inspection", "PCB coating verification", "conformal coat AOI"],
  openGraph: {
    title: "Conformal Coating Inspection Systems - ASC International",
    description: "Precise measurement and verification of conformal coating coverage and thickness on electronic assemblies.",
    type: "website",
  },
};

export default function ConformalCoatingInspection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Conformal Coating Inspection System",
    "description": "Advanced conformal coating inspection systems with UV fluorescence imaging for coverage analysis and thickness measurement. Features ±5μm thickness accuracy, 15-25μm coverage resolution, and support for acrylic, urethane, silicone, and epoxy coatings.",
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
        "value": "UV fluorescence + white light hybrid"
      },
      {
        "@type": "PropertyValue",
        "name": "Thickness Measurement Range",
        "value": "25-250",
        "unitText": "micrometer"
      },
      {
        "@type": "PropertyValue",
        "name": "Thickness Measurement Accuracy",
        "value": "±5",
        "unitText": "micrometer"
      },
      {
        "@type": "PropertyValue",
        "name": "Coverage Resolution",
        "value": "15-25",
        "unitText": "micrometer"
      },
      {
        "@type": "PropertyValue",
        "name": "Inspection Area Maximum",
        "value": "510x460",
        "unitText": "mm"
      },
      {
        "@type": "PropertyValue",
        "name": "Compatible Coating Types",
        "value": "Acrylic, Urethane, Silicone, Epoxy, Parylene",
        "description": "With UV tracers"
      },
      {
        "@type": "PropertyValue",
        "name": "UV Wavelength",
        "value": "365",
        "unitText": "nanometer"
      },
      {
        "@type": "PropertyValue",
        "name": "Standards Compliance",
        "value": "IPC-A-610, IPC-CC-830, MIL-I-46058C"
      },
      {
        "@type": "PropertyValue",
        "name": "Defect Detection Types",
        "value": "Holidays, insufficient coverage, excessive thickness, keep-out violations, bubbles, voids"
      },
      {
        "@type": "PropertyValue",
        "name": "Minimum Defect Size",
        "value": "0.5",
        "unitText": "mm²"
      },
      {
        "@type": "PropertyValue",
        "name": "Inspection Time",
        "value": "30-90",
        "unitText": "seconds per board"
      },
      {
        "@type": "PropertyValue",
        "name": "Communication Protocols",
        "value": "IPC-CFX, SMEMA, Ethernet"
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
            { name: "Conformal Coating Inspection" },
          ]}
        />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Conformal Coating Inspection Systems
              </h1>
              <p className="text-xl text-white mb-8">
                Precision measurement and verification of conformal coating coverage and thickness using advanced UV fluorescence imaging technology
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

        {/* What is Conformal Coating Inspection */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">What is Conformal Coating Inspection?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-white mb-4">
                  <Link href="/glossary#conformal-coating-inspection" className="text-white hover:underline font-semibold">Conformal coating inspection</Link> is a quality control process that verifies the proper application of protective{' '}
                  <Link href="/glossary#conformal-coating" className="text-white hover:underline">coatings</Link> on{' '}
                  <Link href="/glossary#pcb" className="text-white hover:underline">printed circuit board</Link> assemblies. These coatings protect electronics from moisture, chemicals, temperature extremes, and other environmental factors that could cause premature failure.
                </p>
                <p className="text-white mb-4">
                  ASC International's conformal coating inspection systems use UV fluorescence imaging technology to analyze coating coverage and measure coating thickness with precision. The systems detect defects such as insufficient coverage, excessive coating, uncoated areas (holidays), coating on prohibited areas, and thickness variations.
                </p>
                <p className="text-white">
                  By ensuring proper coating application, our inspection systems help manufacturers meet{' '}
                  <Link href="/glossary#ipc-a-610" className="text-white hover:underline">IPC</Link> standards (IPC-A-610, IPC-CC-830) and prevent field failures due to environmental exposure, which is critical for automotive, aerospace, military, and medical applications.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">UV Fluorescence Imaging</h3>
                  <p className="text-gray-800">
                    Advanced UV imaging reveals coating presence with exceptional clarity and contrast
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Thickness Measurement</h3>
                  <p className="text-gray-800">
                    Accurate coating thickness measurement with ±5μm precision for process control
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Coverage Analysis</h3>
                  <p className="text-gray-800">
                    Comprehensive coverage mapping to identify holidays and insufficient coating areas
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">IPC Compliance</h3>
                  <p className="text-gray-800">
                    Automated verification against IPC-A-610 and IPC-CC-830 acceptance criteria
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Keep-Out Zone Verification</h3>
                  <p className="text-gray-800">
                    Automatic detection of coating on prohibited areas like connectors and test points
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Process Optimization</h3>
                  <p className="text-gray-800">
                    Statistical analysis and trending to optimize coating application parameters
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Holidays (Uncoated Areas)</h3>
                  <p className="text-gray-800 text-sm">
                    Missing coating in required areas that could expose components to environment
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Insufficient Coverage</h3>
                  <p className="text-gray-800 text-sm">
                    Coating thickness below specification minimums
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Excessive Thickness</h3>
                  <p className="text-gray-800 text-sm">
                    Coating thickness exceeding maximum limits
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Coating on Keep-Outs</h3>
                  <p className="text-gray-800 text-sm">
                    Unwanted coating on connectors, switches, or test points
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Bubbles & Voids</h3>
                  <p className="text-gray-800 text-sm">
                    Air pockets or voids in the coating layer
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Uneven Distribution</h3>
                  <p className="text-gray-800 text-sm">
                    Non-uniform coating thickness across the board
                  </p>
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
                  <h3 className="font-semibold text-lg mb-2">Automotive Electronics</h3>
                  <p className="text-gray-800">
                    Critical ECU and sensor modules requiring environmental protection
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Aerospace & Defense</h3>
                  <p className="text-gray-800">
                    High-reliability applications with strict coating requirements
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Medical Devices</h3>
                  <p className="text-gray-800">
                    Protection against bodily fluids and sterilization processes
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Industrial Controls</h3>
                  <p className="text-gray-800">
                    Harsh environment protection for control systems and instrumentation
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">LED Lighting</h3>
                  <p className="text-gray-800">
                    Outdoor and high-humidity lighting applications
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Consumer Electronics</h3>
                  <p className="text-gray-800">
                    Wearables and portable devices exposed to moisture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inspection Methods Comparison */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Coating Inspection Methods Comparison</h2>
              <p className="text-gray-800 mb-8">
                Understanding the differences between manual inspection, UV fluorescence, and advanced 3D measurement
              </p>
              <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2.5 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Feature
                      </th>
                      <th className="px-3 py-2.5 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Manual Visual
                      </th>
                      <th className="px-3 py-2.5 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        UV Fluorescence (Recommended)
                      </th>
                      <th className="px-3 py-2.5 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        3D Measurement
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Coverage Detection</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-orange-700">Visual only (subjective)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Excellent (high contrast)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Excellent (measured)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Thickness Measurement</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-orange-700">Not possible</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">±5μm accuracy</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">±2μm accuracy</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Inspection Speed</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-orange-700">Very slow (5-10 min/board)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Fast (30-90 sec/board)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Moderate (2-3 min/board)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Repeatability</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-orange-700">Poor (operator dependent)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Excellent (automated)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Excellent (automated)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Small Defect Detection</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-orange-700">Limited (&gt;1mm)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Good (&gt;0.5mm²)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Excellent (&gt;0.1mm²)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Documentation</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-orange-700">Manual notes</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Automatic images & reports</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Full 3D data & images</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Statistical Analysis</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-orange-700">Not available</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Real-time SPC</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-green-700">Advanced analytics</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Coating Types</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">All types</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">UV-traceable only</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">All types</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Initial Investment</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Minimal</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Moderate</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Higher</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Best For</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Low volume, non-critical</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">High volume, automotive, medical</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Aerospace, military, R&D</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-sm text-gray-900">
                  <strong>Recommendation:</strong> UV fluorescence inspection provides the best balance of speed, accuracy, and cost for most production environments. It offers automated, objective measurement with excellent coverage detection and thickness measurement capabilities.
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

              {/* Measurement Performance */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Measurement Performance</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Imaging Technology</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">UV fluorescence (365nm) + white light hybrid</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Thickness Measurement Range</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">25μm - 250μm (1 mil - 10 mils)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Thickness Measurement Accuracy</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">±5μm (±0.0002")</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Thickness Repeatability</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">±2μm (3σ)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Coverage Resolution</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">15μm - 25μm (0.0006" - 0.001")</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Minimum Defect Size Detectable</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">0.5mm² (0.0008 in²)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">UV Wavelength</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">365nm LED array</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Camera Resolution</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Up to 12 megapixel</td>
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
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Inspection Area Maximum</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">510mm × 460mm (20" × 18")</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Board Size Minimum</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">50mm × 50mm (2" × 2")</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Board Thickness Range</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">0.4mm - 6.0mm (0.016" - 0.24")</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Board Weight</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Up to 5kg (11 lbs)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Board Warpage Handling</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Up to 3mm with auto-focus</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Conveyor Configuration</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Dual-lane SMEMA compatible</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Inspection Time</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">30-90 seconds per board (size dependent)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Coating Types & Standards */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Coating Types & Standards Compliance</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Compatible Coating Types</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">
                          Acrylic (AR), Urethane (UR), Silicone (SR), Epoxy (ER), Parylene (XY) - All with UV tracers
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">UV Tracer Concentration</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">0.1% - 1.0% (coating dependent)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Coating Color Detection</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">All colors (clear, amber, red, black)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Standards Compliance</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">IPC-A-610 (all classes), IPC-CC-830, MIL-I-46058C</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Acceptance Criteria</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">
                          Programmable thickness limits, coverage percentage, keep-out zone violations
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Defect Library</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">
                          Holidays, insufficient coverage, excessive thickness, bubbles, voids, keep-out violations
                        </td>
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
                          Auto-programming from Gerber/CAD, manual teach mode, golden board import
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Keep-Out Zone Definition</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">CAD import or manual teach for connectors, test points, switches</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Communication Protocols</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">IPC-CFX, SMEMA, Ethernet, Modbus TCP/IP</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Data Output Formats</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">
                          Coverage heat maps, thickness distribution charts, defect location maps, PDF/CSV/XML reports
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Statistical Analysis</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Real-time SPC, Cpk, trend analysis, process optimization</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Traceability</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Barcode reading, serial number tracking, image archiving</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">User Interface</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Touch screen with intuitive workflow, multi-language support</td>
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
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">1100mm (L) × 950mm (W) × 1400mm (H)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Machine Weight</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Approximately 450kg (992 lbs)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Power Requirements</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">AC 200-240V, 50/60Hz, Single phase, 1.0kVA</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Compressed Air</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">0.5-0.6 MPa (73-87 PSI), clean dry air</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Operating Temperature</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">20°C - 28°C (68°F - 82°F)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Operating Humidity</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">35% - 75% RH, non-condensing</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">UV Safety</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Enclosed system with interlock safety switches</td>
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
                      Need Coating Type Specifications?
                    </h3>
                    <p className="text-gray-900 mb-4">
                      Download our comprehensive guide including coating type comparison charts, thickness specifications for different applications, and IPC acceptance criteria references.
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
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Why Choose ASC for Conformal Coating Inspection</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Multi-Coating Compatibility</p>
                      <p className="text-sm text-gray-600">Works with any material type -- acrylic, urethane, silicone, epoxy, and parylene</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Integrates with Any Coating Line</p>
                      <p className="text-sm text-gray-600">Drop-in compatible with your existing coating equipment and workflow</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Open Measurement Data</p>
                      <p className="text-sm text-gray-600">Export coverage maps, thickness data, and reports in standard formats</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Application-Specific Training</p>
                      <p className="text-sm text-gray-600">Hands-on training from engineers tailored to your coating materials and processes</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">IPC-A-610 Compliant</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">UV Fluorescence</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Multi-Coating Support</span>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-sm text-gray-600">
                    Comparing inspection methods? Read our <Link href="/compare/conformal-coating-inspection-methods" className="text-blue-600 hover:underline font-semibold">Conformal Coating Inspection Methods Comparison</Link>.
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
                Ensure Perfect Conformal Coating Coverage
              </h2>
              <p className="text-xl mb-8 text-white">
                Contact our experts to learn how ASC's coating inspection systems can verify quality and meet IPC standards
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
