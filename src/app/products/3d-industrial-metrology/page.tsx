import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: '/products/3d-industrial-metrology' },
  title: "3D Industrial Metrology Systems",
  description: "Precision 3D laser scanning and metrology systems for electronics manufacturing. Sub-micron accuracy for dimensional verification, reverse engineering, and quality control.",
  keywords: ["3D metrology", "laser scanning", "dimensional measurement", "3D scanning", "industrial metrology", "precision measurement"],
  openGraph: {
    images: ['/og-image.png'],
    title: "3D Industrial Metrology Systems - ASC International",
    description: "Advanced laser scanning systems for precise 3D measurement and dimensional verification.",
    type: "website",
  },
};

export default function IndustrialMetrology() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "3D Industrial Metrology System",
    "description": "Precision 3D laser scanning and metrology systems for dimensional verification and quality control",
    "brand": {
      "@type": "Organization",
      "name": "ASC International"
    },
    "category": "Industrial Equipment",
    "manufacturer": {
      "@type": "Organization",
      "name": "ASC International"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Measurement Accuracy",
        "value": "0.5",
        "unitText": "micrometer",
        "description": "Sub-micron precision"
      },
      {
        "@type": "PropertyValue",
        "name": "Resolution",
        "value": "0.2-1",
        "unitText": "micrometer",
        "minValue": "0.2",
        "maxValue": "1"
      },
      {
        "@type": "PropertyValue",
        "name": "Scan Speed",
        "value": "2000000",
        "unitText": "points/second",
        "description": "High-speed data acquisition"
      },
      {
        "@type": "PropertyValue",
        "name": "Measurement Volume",
        "value": "50-500",
        "unitText": "mm",
        "minValue": "50",
        "maxValue": "500",
        "description": "Various models available"
      },
      {
        "@type": "PropertyValue",
        "name": "Measurement Technology",
        "value": "Blue LED laser triangulation",
        "description": "Non-contact optical measurement"
      },
      {
        "@type": "PropertyValue",
        "name": "Point Distance",
        "value": "2-50",
        "unitText": "micrometer",
        "minValue": "2",
        "maxValue": "50",
        "description": "Adjustable point spacing"
      },
      {
        "@type": "PropertyValue",
        "name": "Working Distance",
        "value": "100-300",
        "unitText": "mm",
        "minValue": "100",
        "maxValue": "300",
        "description": "Sensor to object distance"
      },
      {
        "@type": "PropertyValue",
        "name": "Laser Wavelength",
        "value": "405",
        "unitText": "nm",
        "description": "Blue LED laser"
      },
      {
        "@type": "PropertyValue",
        "name": "CAD Format Support",
        "value": "STEP, IGES, STL, Parasolid, CATIA, SolidWorks",
        "description": "Native CAD import/export"
      },
      {
        "@type": "PropertyValue",
        "name": "GD&T Standards",
        "value": "ASME Y14.5, ISO 1101",
        "description": "Industry standard compliance"
      },
      {
        "@type": "PropertyValue",
        "name": "Calibration Traceability",
        "value": "NIST traceable",
        "description": "Certified calibration"
      },
      {
        "@type": "PropertyValue",
        "name": "Operating Temperature",
        "value": "18-26",
        "unitText": "°C",
        "minValue": "18",
        "maxValue": "26",
        "description": "Controlled environment required"
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Products", href: "/products" },
            { name: "3D Industrial Metrology" },
          ]}
        />

        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">3D Industrial Metrology Systems</h1>
              <p className="text-xl text-white mb-8">
                Ultra-precise 3D laser scanning and measurement systems for dimensional verification, reverse engineering, and quality assurance
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Request Quote</Link>
                <Link href="#specifications" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500">View Specifications</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">What is 3D Industrial Metrology?</h2>
              <p className="text-white mb-4">
                3D industrial metrology involves the precise measurement of physical objects in three dimensions using advanced laser scanning and optical technologies. These systems capture millions of data points to create accurate 3D models that can be compared against CAD designs for dimensional verification. Using <a href="/glossary#structured-light" className="text-white hover:underline">structured light</a> or laser triangulation, metrology systems measure complex surfaces with sub-micron precision.
              </p>
              <p className="text-white mb-4">
                ASC International's 3D metrology systems provide sub-micron accuracy for applications requiring the highest precision. Our laser scanning technology enables non-contact measurement of complex geometries, reverse engineering of existing parts, and comprehensive quality control documentation. These systems are essential for measuring <a href="/glossary#coplanarity" className="text-white hover:underline">coplanarity</a> on <a href="/glossary#pcb" className="text-white hover:underline">PCBs</a>, verifying component dimensions, and analyzing board warpage.
              </p>
              <p className="text-white">
                Applications include first article inspection (FAI), tool and die verification, flatness analysis, and GD&T (Geometric Dimensioning and Tolerancing) reporting per <a href="/glossary#asme-y14-5" className="text-white hover:underline">ASME Y14.5</a> and ISO 1101 standards. Systems provide NIST-traceable calibration for regulated industries including aerospace, medical devices, and automotive.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Key Features & Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Sub-Micron Accuracy</h3>
                  <p className="text-gray-800">Measurement accuracy down to 0.5μm for critical dimensions and <a href="/glossary#coplanarity" className="text-blue-600 hover:underline">coplanarity</a> verification</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Fast Scanning Speed</h3>
                  <p className="text-gray-800">Capture millions of points per second for efficient measurement of <a href="/glossary#pcb" className="text-blue-600 hover:underline">PCBs</a> and assemblies</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">CAD Comparison</h3>
                  <p className="text-gray-800">Direct comparison with CAD models showing deviations with color maps and deviation analysis</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Non-Contact Measurement</h3>
                  <p className="text-gray-800">No physical contact with parts prevents damage and distortion during inspection</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Reverse Engineering</h3>
                  <p className="text-gray-800">Create accurate CAD models from physical parts for documentation and replication</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Comprehensive Reporting</h3>
                  <p className="text-gray-800">Detailed measurement reports with GD&T analysis per ASME Y14.5 and ISO 1101 standards</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Common Applications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">First Article Inspection</h3>
                  <p className="text-gray-800">Comprehensive verification of first production samples against specifications</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Tool & Die Verification</h3>
                  <p className="text-gray-800">Precision measurement of molds, dies, and tooling components</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">PCB Warpage Analysis</h3>
                  <p className="text-gray-800">Detailed flatness and warpage measurement of circuit boards</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Component Inspection</h3>
                  <p className="text-gray-800">Dimensional verification of connectors, housings, and mechanical parts</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="specifications" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>

              {/* Measurement Performance */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Measurement Performance</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Measurement Technology</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Blue LED laser triangulation (405nm wavelength)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Accuracy</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Up to 0.5μm (sub-micron precision)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Resolution</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">0.2μm - 1μm (model dependent)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Repeatability</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">±0.3μm (2σ)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Point Distance</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">2μm - 50μm (adjustable point spacing)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Scan Speed</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Up to 2 million points/second</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Measurement Rate</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">50-200 profiles/second (model dependent)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Z-Measurement Range</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">5mm - 100mm (model dependent)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Working Distance</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">100mm - 300mm (sensor to object)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Standoff Distance</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">150mm typical (safe working distance)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Scanning System */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Scanning System & Hardware</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Measurement Volume</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">50mm × 50mm to 500mm × 500mm (various models)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Laser Wavelength</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">405nm (blue LED laser)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Laser Class</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Class 2 laser (eye-safe with blink reflex)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Camera Resolution</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">2048 × 1536 pixels (3.1MP)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Line Width</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">20mm - 200mm (depending on model)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Motion System</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Linear stage with encoder feedback</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Stage Travel</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">300mm - 600mm (X-axis, model dependent)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Stage Accuracy</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">±1μm positioning accuracy</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Rotation Stage</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Optional 360° rotary table for full 3D capture</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Temperature Sensor</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Integrated thermal compensation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Software & Analysis */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Software & Analysis</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">CAD Import Formats</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">STEP, IGES, STL, Parasolid, CATIA, SolidWorks, Inventor</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Export Formats</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">STL, PLY, OBJ, XYZ, ASC, STEP, IGES</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">GD&T Standards</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">ASME Y14.5, ISO 1101 geometric tolerancing</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">CAD Comparison</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Best-fit alignment, color deviation maps, statistical analysis</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Deviation Tolerance</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">±0.5mm to ±10mm range (configurable)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Measurement Tools</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Distance, angle, radius, flatness, profile, position, runout</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Cross-Section Analysis</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">2D profile extraction at any plane</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Surface Filtering</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Gaussian, median, smoothing filters for noise reduction</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Reporting</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">PDF, Excel, customizable templates with images and statistics</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Scripting/Automation</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Python API for batch processing and custom workflows</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Point Cloud Processing</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Mesh generation, decimation, hole filling, smoothing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Standards & Calibration */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Standards & Calibration</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Calibration Standard</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">NIST traceable calibration artifacts</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Calibration Method</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Certified step gauge and calibration plate</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Calibration Frequency</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Annual recommended (per ISO 17025)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">VDI/VDE 2634</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Compliant with optical 3D measuring systems standard</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">ISO 10360</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">CMM acceptance and verification standard applicable</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Measurement Uncertainty</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">±(2μm + 4μm/m) per ISO GUM</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Quality Standards</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">AS9100, ISO 9001, ISO 13485 compatible</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Physical & Environmental */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Physical & Environmental</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">System Dimensions</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">800mm × 600mm × 700mm (typical desktop model)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">System Weight</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">60kg - 150kg (model dependent)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Power Requirements</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">100-240VAC, 50/60Hz, 200W typical</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Operating Temperature</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">18°C - 26°C (controlled environment required)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Storage Temperature</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">5°C - 40°C</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Operating Humidity</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">20% - 80% RH, non-condensing</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Temperature Stability</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">±1°C/hour for optimal accuracy</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Vibration Sensitivity</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Isolation table recommended for sub-micron work</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Computer Requirements</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Windows 10/11, Intel i7 or better, 16GB RAM, SSD storage</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Interface</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">USB 3.0, GigE Vision (Ethernet)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Safety Certifications</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">CE, FCC, RoHS compliant</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Warranty</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">2-year standard warranty with annual calibration service</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-900">
                  <strong>Note:</strong> Specifications may vary by model and configuration. For detailed specifications on specific metrology systems or custom measurement solutions, please <Link href="/contact" className="text-blue-600 font-semibold hover:underline">contact our metrology specialists</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Metrology Technology Comparison</h2>
              <p className="text-gray-800 mb-8">
                Compare laser scanning, structured light, and contact (CMM) measurement methods to determine the best approach for your application.
              </p>
              <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-blue-600">Laser Scanning</th>
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-gray-900">Structured Light</th>
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-gray-900">Contact (CMM)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Measurement Accuracy</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">0.5μm - 2μm (Excellent)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">5μm - 20μm (Good)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">0.3μm - 1μm (Best)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Measurement Speed</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Fast - Millions of points/sec</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Very Fast - Full area capture</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Slow - Point-by-point</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Surface Requirements</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Works on most surfaces</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Matte/coating may be needed</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">All surfaces (physical contact)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Part Contact</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Non-contact (no damage)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Non-contact (no damage)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Contact (may deflect soft parts)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Complex Geometry</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Excellent - captures details</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Good - full area view</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Limited - hard-to-reach areas</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Data Density</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Very High - dense point cloud</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Very High - full surface</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Low - sampled points only</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Typical Part Size</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">50mm - 500mm (versatile)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">100mm - 1000mm (larger parts)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">10mm - 3000mm (very large)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Cost Level</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Medium ($50K - $150K)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Medium-High ($80K - $200K)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">High ($100K - $500K+)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Environmental Sensitivity</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Low - stable in production</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Medium - ambient light affects</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">High - temperature controlled</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Training Required</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Moderate - 2-3 days</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Moderate - 2-4 days</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Extensive - weeks/months</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Best Applications</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">PCB warpage, flatness, reverse engineering</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Large parts, body panels, complex shapes</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">GD&T inspection, precision components</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-900">
                  <strong>Best for:</strong> Laser scanning excels for <a href="/glossary#pcb" className="text-blue-600 hover:underline">PCB</a> warpage analysis, <a href="/glossary#coplanarity" className="text-blue-600 hover:underline">coplanarity</a> measurement, and reverse engineering where non-contact measurement of complex surfaces is required. Ideal balance of speed, accuracy, and versatility for electronics manufacturing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Why Choose ASC for 3D Metrology</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Sub-Micron Accuracy</p>
                      <p className="text-sm text-gray-600">Proven precision in production environments, not just lab conditions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Open Data Formats</p>
                      <p className="text-sm text-gray-600">Export to STL, PLY, CSV and more -- no proprietary data lock-in</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Works with Any CAD/CAM Software</p>
                      <p className="text-sm text-gray-600">Compatible with STEP, IGES, SolidWorks, CATIA, and all major platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Application Engineering Support</p>
                      <p className="text-sm text-gray-600">Measurement setup and optimization support included with every system</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Sub-Micron Accuracy</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Open Data Export</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Multi-Platform</span>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-sm text-gray-600">
                    Comparing measurement technologies? Read our <Link href="/compare/3d-metrology-technologies" className="text-blue-600 hover:underline font-semibold">3D Metrology Technologies Comparison</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Precision Measurement Solutions</h2>
              <p className="text-xl mb-8 text-white">
                Contact us to learn how 3D metrology can improve quality assurance and reduce measurement time
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Request a Quote</Link>
                <a href="tel:+18884782912" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500">Call Us Today</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
