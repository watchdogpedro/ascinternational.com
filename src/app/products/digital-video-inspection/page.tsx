import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Digital Video Inspection Systems",
  description: "High-resolution digital video inspection microscopes for PCB assembly. Manual and semi-automated inspection with HD imaging, magnification up to 200x, and easy operation.",
  keywords: ["digital video inspection", "inspection microscope", "PCB inspection", "visual inspection", "digital microscope", "manual inspection"],
  openGraph: {
    title: "Digital Video Inspection Systems - ASC International",
    description: "Professional digital microscopy solutions for detailed visual inspection and quality verification.",
    type: "website",
  },
};

export default function DigitalVideoInspection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Digital Video Inspection System",
    "description": "High-resolution digital video inspection microscopes for detailed visual inspection of PCB assemblies",
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
        "name": "Camera Resolution",
        "value": "1920×1080",
        "unitText": "pixels",
        "description": "Full HD imaging"
      },
      {
        "@type": "PropertyValue",
        "name": "Magnification Range",
        "value": "7-200",
        "unitText": "x",
        "minValue": "7",
        "maxValue": "200",
        "description": "Optical + digital zoom"
      },
      {
        "@type": "PropertyValue",
        "name": "Working Distance",
        "value": "90-110",
        "unitText": "mm",
        "minValue": "90",
        "maxValue": "110"
      },
      {
        "@type": "PropertyValue",
        "name": "Field of View Range",
        "value": "2.1-35",
        "unitText": "mm",
        "minValue": "2.1",
        "maxValue": "35",
        "description": "Varies with magnification"
      },
      {
        "@type": "PropertyValue",
        "name": "Frame Rate",
        "value": "60",
        "unitText": "fps",
        "description": "Real-time HD video"
      },
      {
        "@type": "PropertyValue",
        "name": "Monitor Size",
        "value": "21.5-27",
        "unitText": "inches",
        "minValue": "21.5",
        "maxValue": "27",
        "description": "Full HD LCD display"
      },
      {
        "@type": "PropertyValue",
        "name": "Illumination Type",
        "value": "LED ring light + coaxial",
        "description": "Adjustable intensity"
      },
      {
        "@type": "PropertyValue",
        "name": "Image Capture Formats",
        "value": "JPG, PNG, BMP, AVI",
        "description": "Still images and video"
      },
      {
        "@type": "PropertyValue",
        "name": "Measurement Accuracy",
        "value": "±2",
        "unitText": "micrometer",
        "description": "On-screen measurement tools"
      },
      {
        "@type": "PropertyValue",
        "name": "USB Output",
        "value": "USB 3.0",
        "description": "High-speed data transfer"
      },
      {
        "@type": "PropertyValue",
        "name": "Power Requirements",
        "value": "100-240VAC, 50/60Hz",
        "description": "Universal power supply"
      },
      {
        "@type": "PropertyValue",
        "name": "Operating Temperature",
        "value": "15-30",
        "unitText": "°C",
        "minValue": "15",
        "maxValue": "30"
      }
    ]
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
            { name: "Digital Video Inspection" },
          ]}
        />

        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Digital Video Inspection Systems
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                High-resolution digital microscopy for detailed visual inspection, rework verification, and quality documentation
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Request Quote
                </Link>
                <Link href="#specifications" className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500">
                  View Specifications
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">What is Digital Video Inspection?</h2>
              <p className="text-white mb-4">
                Digital video inspection systems are advanced visual inspection tools that combine high-resolution digital cameras with precision optics and ergonomic viewing monitors. These systems provide operators with magnified, high-definition views of electronic assemblies for detailed inspection, rework guidance, and quality verification. Unlike traditional microscopes with eyepieces, digital video systems display images on large LCD monitors, reducing operator fatigue and enabling collaborative viewing.
              </p>
              <p className="text-white mb-4">
                ASC International's digital video inspection systems bridge the gap between manual inspection and fully <a href="/glossary#aoi" className="text-white hover:underline">automated AOI systems</a>. They provide excellent image quality for inspecting <a href="/glossary#smt" className="text-white hover:underline">SMT</a> assemblies, including fine-pitch components, <a href="/glossary#bga" className="text-white hover:underline">BGAs</a>, and <a href="/glossary#conformal-coating" className="text-white hover:underline">conformal coating</a> applications.
              </p>
              <p className="text-white">
                These systems are essential tools for incoming inspection, in-process verification, rework stations, and final quality checks in electronics manufacturing. They comply with <a href="/glossary#ipc-a-610" className="text-white hover:underline">IPC-A-610</a> standards and provide documentation capabilities for quality records.
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
                  <h3 className="text-xl font-semibold mb-3">HD Imaging</h3>
                  <p className="text-gray-800">Full HD 1920×1080 resolution for crystal-clear inspection images of <a href="/glossary#pcb" className="text-blue-600 hover:underline">PCB</a> assemblies</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">High Magnification</h3>
                  <p className="text-gray-800">Zoom range from 7x to 200x for detailed <a href="/glossary#chip-component" className="text-blue-600 hover:underline">chip component</a> and <a href="/glossary#bga" className="text-blue-600 hover:underline">BGA</a> inspection</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Large Working Distance</h3>
                  <p className="text-gray-800">Extended working distance for operator comfort and board accessibility during inspection and rework</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">LED Illumination</h3>
                  <p className="text-gray-800">Adjustable LED ring and coaxial lighting for optimal contrast and <a href="/glossary#solder-joint" className="text-blue-600 hover:underline">solder joint</a> visibility</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Image Capture</h3>
                  <p className="text-gray-800">Built-in image and video recording for documentation, training, and <a href="/glossary#ipc-a-610" className="text-blue-600 hover:underline">IPC-A-610</a> compliance</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Measurement Tools</h3>
                  <p className="text-gray-800">On-screen measurement and annotation capabilities with <a href="/glossary#fiducial" className="text-blue-600 hover:underline">fiducial</a> calibration</p>
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
                  <h3 className="font-semibold text-lg mb-2">Rework & Repair Stations</h3>
                  <p className="text-gray-800">Visual guidance for precision rework and component replacement</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Quality Inspection</h3>
                  <p className="text-gray-800">Manual inspection of critical assemblies and high-value products</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Failure Analysis</h3>
                  <p className="text-gray-800">Detailed examination of defects and failure modes</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Incoming Inspection</h3>
                  <p className="text-gray-800">Component and material verification before assembly</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="specifications" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>

              {/* Camera & Imaging Performance */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Camera & Imaging Performance</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Camera Resolution</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">1920×1080 Full HD (1080p)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Frame Rate</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">60 fps at Full HD</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Image Sensor</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">1/2.8" CMOS sensor</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Magnification Range</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">7x - 200x (optical: 7x-45x, with digital zoom to 200x)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Field of View</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">2.1mm - 35mm (varies with magnification)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Working Distance</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">90mm - 110mm (depending on configuration)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Depth of Field</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">0.3mm - 15mm (magnification dependent)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Focus Type</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Manual focus with fine adjustment</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Zoom Control</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Manual or motorized zoom (configuration dependent)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Display & Viewing */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Display & Viewing</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Monitor Size</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">21.5", 24", or 27" Full HD LCD</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Monitor Resolution</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">1920×1080 (Full HD)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Display Type</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">LED-backlit LCD, anti-glare coating</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Viewing Angle</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">178° horizontal/vertical (IPS panel)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Brightness</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">250-350 cd/m² (model dependent)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Contrast Ratio</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">1000:1 typical</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Monitor Adjustments</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Tilt, swivel, and height adjustable stand</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">HDMI Output</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Yes, for external display or projector</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Illumination System */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Illumination System</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Light Source</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">High-efficiency LED (50,000+ hour lifespan)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Illumination Type</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Dual: Ring light + Coaxial illumination</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Color Temperature</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">5600K - 6500K (daylight balanced)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Intensity Control</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Independent adjustment for ring and coaxial lights</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Ring Light Segments</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">4-segment control for directional lighting</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Power Consumption</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">15W - 30W (LED illumination)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Software & Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Software & Measurement Features</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Image Capture</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Still images: JPG, PNG, BMP, TIFF</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Video Recording</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">AVI, MP4 format at 1080p/60fps</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Measurement Tools</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Distance, angle, radius, area, point-to-point</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Measurement Accuracy</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">±2μm (after calibration)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Calibration</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Built-in calibration wizard with reference scale</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Annotation Tools</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Text, arrows, circles, rectangles, freehand drawing</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Image Enhancement</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Brightness, contrast, sharpness, color adjustment</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Comparison Mode</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Split-screen, side-by-side image comparison</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Overlay Features</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Grid, crosshair, scale bar, reticle patterns</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">File Management</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Organized storage with date/time stamp, project folders</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Export Options</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">USB drive, network share, cloud storage compatible</td>
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
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Stand Type</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Boom stand with articulating arm</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Vertical Travel</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">300mm - 400mm (model dependent)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Base Dimensions</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">400mm × 300mm footprint</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">System Weight</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">12kg - 18kg (configuration dependent)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Power Supply</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">100-240VAC, 50/60Hz, auto-switching</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Power Consumption</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">80W - 120W typical operation</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Operating Temperature</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">15°C - 30°C</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Storage Temperature</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">-10°C - 40°C</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Humidity Range</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">20% - 80% RH, non-condensing</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Interface Connectivity</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">USB 3.0, HDMI, Ethernet (model dependent)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Operating System</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Windows 10/11 compatible software</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Standards Compliance</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">CE, FCC, RoHS compliant</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-900">
                  <strong>Note:</strong> Specifications may vary by model configuration. For detailed specifications on specific models or custom configurations, please <Link href="/contact" className="text-blue-600 font-semibold hover:underline">contact our sales team</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Inspection Method Comparison</h2>
              <p className="text-gray-800 mb-8">
                Compare manual microscope, digital video inspection, and automated AOI approaches to determine the best fit for your application.
              </p>
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
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Excellent - Minimal operator interaction</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Documentation Capability</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">None - Manual recording only</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Excellent - HD images & video</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Excellent - Automatic archiving</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Magnification Range</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">10x - 100x typical</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">7x - 200x with digital zoom</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Fixed based on camera setup</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Cost Level</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Low ($2K - $8K)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Medium ($8K - $25K)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">High ($50K - $250K+)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Inspection Speed</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Slow - Manual positioning</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Medium - Manual with quick setup</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Fast - Fully automated</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Training Required</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Moderate - Focus & positioning skills</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Minimal - Intuitive interface</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Extensive - Programming & maintenance</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Measurement Capability</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Limited - Eyepiece reticle only</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Good - On-screen tools (±2μm)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Excellent - Sub-micron precision</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Image Storage</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">None - No digital capture</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Unlimited - USB/network storage</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Extensive - Database storage</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Multi-User Viewing</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">No - Single operator only</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Yes - Group viewing on monitor</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Yes - Remote review capability</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Automation Level</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">None - 100% manual</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Semi-automated - Operator guided</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-600">Fully automated - No operator</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-900">
                  <strong>Best for:</strong> Digital video inspection excels in rework stations, incoming inspection, failure analysis, and applications requiring documentation with flexible viewing. Ideal for low-to-medium volume production or high-mix environments where <a href="/glossary#aoi" className="text-blue-600 hover:underline">automated AOI</a> is not cost-justified.
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
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Why Choose ASC for Digital Video Inspection</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Ergonomic Designs</p>
                      <p className="text-sm text-gray-600">Built for operator comfort with large monitor viewing that eliminates eye strain</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Easy Integration</p>
                      <p className="text-sm text-gray-600">Fits seamlessly into existing workflows with minimal setup and training</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Full HD Capture</p>
                      <p className="text-sm text-gray-600">1080p image and video documentation for quality records and training</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Expert Configuration Support</p>
                      <p className="text-sm text-gray-600">We help you select and configure the right system for your specific application</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">HD Imaging</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Ergonomic Design</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Easy Integration</span>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-sm text-gray-600">
                    Comparing inspection approaches? Read our <Link href="/compare/visual-inspection-methods" className="text-blue-600 hover:underline font-semibold">Visual Inspection Methods Comparison</Link>.
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
                Enhance Visual Inspection Capabilities
              </h2>
              <p className="text-xl mb-8 text-white">
                Contact us to learn how digital video inspection can improve quality and reduce rework time
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Request a Quote
                </Link>
                <a href="tel:+18884782912" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500">
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
