import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: '/products/jetting-valves' },
  title: "Precision Jetting Valves",
  description: "High-speed precision jetting valves for solder paste and adhesive dispensing. Non-contact dispensing with minimal waste, high accuracy, and flexible integration.",
  keywords: ["jetting valves", "dispensing systems", "solder paste jetting", "adhesive dispensing", "precision dispensing", "non-contact dispensing"],
  openGraph: {
    images: ['/og-image.png'],
    title: "Precision Jetting Valves - ASC International",
    description: "Advanced jetting valve technology for precise, high-speed dispensing of fluids in electronics manufacturing.",
    type: "website",
  },
};

export default function JettingValves() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Precision Jetting Valve",
    "description": "High-speed precision jetting valves for non-contact dispensing of solder paste, adhesives, and other fluids",
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
        "name": "Dispense Volume Range",
        "value": "0.5-50000",
        "unitText": "nanoliters",
        "minValue": "0.5",
        "maxValue": "50000",
        "description": "Per deposit"
      },
      {
        "@type": "PropertyValue",
        "name": "Dispense Rate",
        "value": "1000",
        "unitText": "Hz",
        "maxValue": "1000",
        "description": "Up to 1000 dots per second"
      },
      {
        "@type": "PropertyValue",
        "name": "Volume Repeatability",
        "value": "±1",
        "unitText": "%",
        "description": "Consistent deposit accuracy"
      },
      {
        "@type": "PropertyValue",
        "name": "Viscosity Range",
        "value": "1-1000000",
        "unitText": "cP",
        "minValue": "1",
        "maxValue": "1000000",
        "description": "Wide material compatibility"
      },
      {
        "@type": "PropertyValue",
        "name": "Jetting Height",
        "value": "1-5",
        "unitText": "mm",
        "minValue": "1",
        "maxValue": "5",
        "description": "Non-contact standoff distance"
      },
      {
        "@type": "PropertyValue",
        "name": "Actuation Technology",
        "value": "Piezoelectric or Pneumatic",
        "description": "Model dependent"
      },
      {
        "@type": "PropertyValue",
        "name": "Response Time",
        "value": "<1",
        "unitText": "millisecond",
        "description": "Fast actuation for high-speed operation"
      },
      {
        "@type": "PropertyValue",
        "name": "Dot Size Range",
        "value": "0.3-5",
        "unitText": "mm",
        "minValue": "0.3",
        "maxValue": "5",
        "description": "Diameter depending on parameters"
      },
      {
        "@type": "PropertyValue",
        "name": "Operating Pressure",
        "value": "1-7",
        "unitText": "bar",
        "minValue": "1",
        "maxValue": "7",
        "description": "Pneumatic supply pressure"
      },
      {
        "@type": "PropertyValue",
        "name": "Material Compatibility",
        "value": "Solder paste, adhesives, flux, underfills, encapsulants",
        "description": "Multiple fluid types"
      },
      {
        "@type": "PropertyValue",
        "name": "Control Interface",
        "value": "RS-232, Ethernet, Digital I/O",
        "description": "Multiple communication options"
      },
      {
        "@type": "PropertyValue",
        "name": "Operating Temperature",
        "value": "15-40",
        "unitText": "°C",
        "minValue": "15",
        "maxValue": "40"
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
            { name: "Jetting Valves" },
          ]}
        />

        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Precision Jetting Valves</h1>
              <p className="text-xl text-white mb-8">
                Advanced non-contact jetting technology for high-speed, accurate dispensing of solder paste, adhesives, and specialty fluids
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
              <h2 className="text-3xl font-bold mb-6 text-white">What are Jetting Valves?</h2>
              <p className="text-white mb-4">
                Jetting valves are precision dispensing devices that use high-speed pneumatic or piezoelectric actuation to dispense small, controlled amounts of fluid without physical contact with the substrate. This non-contact method enables high-speed operation, minimal waste, and exceptional placement accuracy. Unlike contact dispensing methods, jetting valves propel individual fluid droplets through the air to the target location.
              </p>
              <p className="text-white mb-4">
                ASC International's jetting valves are designed for electronics manufacturing applications including selective <a href="/glossary#solder-paste" className="text-white hover:underline">solder paste</a> deposition, underfill dispensing for <a href="/glossary#bga" className="text-white hover:underline">BGAs</a>, adhesive application for <a href="/glossary#smt" className="text-white hover:underline">SMT</a> components, and flux application. These systems are particularly valuable for rework operations, prototype production, and selective deposition where traditional <a href="/glossary#stencil-printing" className="text-white hover:underline">stencil printing</a> is not feasible.
              </p>
              <p className="text-white">
                Our systems integrate seamlessly with automated dispensing platforms, robotics, and <a href="/glossary#3d-spi" className="text-white hover:underline">inspection systems</a> to provide repeatable, high-quality fluid deposits at production speeds. Jetting technology reduces material waste by up to 50% compared to contact methods and eliminates issues like stringing, dripping, and nozzle clogging.
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
                  <h3 className="text-xl font-semibold mb-3">Non-Contact Dispensing</h3>
                  <p className="text-gray-800">No physical contact prevents contamination and <a href="/glossary#pcb" className="text-blue-600 hover:underline">PCB</a> damage during dispensing</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">High Speed Operation</h3>
                  <p className="text-gray-800">Dispense rates up to 1000 dots per second for maximum throughput in production</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Precise Volume Control</h3>
                  <p className="text-gray-800">Consistent deposit size from nanoliters to microliters with ±1% repeatability</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Minimal Waste</h3>
                  <p className="text-gray-800">On-demand dispensing reduces <a href="/glossary#solder-paste" className="text-blue-600 hover:underline">solder paste</a> and adhesive consumption by up to 50%</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Wide Viscosity Range</h3>
                  <p className="text-gray-800">Handle fluids from 1 cP to 1,000,000 cP including high-viscosity materials</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Flexible Integration</h3>
                  <p className="text-gray-800">Easily integrate with <a href="/glossary#smt" className="text-blue-600 hover:underline">SMT</a> lines, robotics, and automated systems</p>
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
                  <h3 className="font-semibold text-lg mb-2">Selective Solder Paste Deposition</h3>
                  <p className="text-gray-800">Targeted solder paste application for specific components or rework</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Underfill Dispensing</h3>
                  <p className="text-gray-800">Precise underfill application for BGA and flip-chip packages</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Adhesive Application</h3>
                  <p className="text-gray-800">Surface mount adhesive and component bonding applications</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Flux Dispensing</h3>
                  <p className="text-gray-800">Selective flux application for wave soldering and hand soldering</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Gasket & Seal Application</h3>
                  <p className="text-gray-800">Precise gasket material deposition for enclosures and housings</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="font-semibold text-lg mb-2">Dam & Fill Operations</h3>
                  <p className="text-gray-800">Dam creation and cavity filling for advanced packaging</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="specifications" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>

              {/* Dispensing Performance */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Dispensing Performance</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Dispense Volume Range</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">0.5nL - 50μL per deposit (model dependent)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Typical Dispense Volume</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">5nL - 10μL (most common applications)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Volume Repeatability</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">±1% (CV &lt; 3% for optimal conditions)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Dispense Rate</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Up to 1000 Hz (1000 dots per second)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Continuous Operation Speed</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">500-800 Hz sustained (fluid dependent)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Dot Size Range</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">0.3mm - 5mm diameter (parameter dependent)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Placement Accuracy</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">±25μm (with precision motion system)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Jetting Height</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">1mm - 5mm standoff (non-contact distance)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Optimal Jetting Height</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">2mm - 3mm (minimizes satellite formation)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Response Time</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">&lt;1ms (piezo), 2-5ms (pneumatic)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Valve & Actuation */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Valve & Actuation System</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Actuation Technology</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Piezoelectric or pneumatic (model dependent)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Piezo Drive Voltage</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">24VDC (internal high voltage amplification)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Pneumatic Pressure Range</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">1-7 bar (15-100 psi)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Air Consumption</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">3-5 L/min @ 5 bar (pneumatic models)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Nozzle Orifice Size</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">50μm - 500μm (interchangeable nozzles)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Nozzle Material</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Stainless steel, tungsten carbide, ceramic</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Valve Body Material</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Anodized aluminum, stainless steel</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Fluid Path Material</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">316 stainless steel, PEEK, PTFE</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Seal Material</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">EPDM, Viton, FFKM (fluid compatible)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Cycle Life</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">100 million+ cycles (typical)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Maintenance Interval</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">500-1000 hours (depends on fluid)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Material Handling */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Material Handling & Compatibility</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Viscosity Range</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">1 cP - 1,000,000 cP (model dependent)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Low Viscosity Range</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">1-100 cP (flux, low-viscosity adhesives)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Medium Viscosity Range</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">100-10,000 cP (solder paste, adhesives)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">High Viscosity Range</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">10,000-1,000,000 cP (thick pastes, encapsulants)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Compatible Materials</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Solder paste (SAC305, SnPb), SMT adhesives, epoxies</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Additional Materials</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Flux, underfills, encapsulants, silicones, acrylics</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Filler Content</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Up to 50% by volume (particle size &lt; 50μm)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Reservoir Capacity</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">3cc - 30cc cartridge (model dependent)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Pressure Regulation</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Precision regulator with digital display (0.01 bar resolution)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Material Temperature Control</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Heated cartridge option: 25°C - 60°C (±1°C)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Control & Integration */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Control & Integration</h3>
                <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Control Interface</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">RS-232, Ethernet TCP/IP, EtherCAT</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Digital I/O</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Trigger input, dispense complete output, status signals</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Trigger Input</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">TTL/CMOS compatible, 5-24VDC, optoisolated</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Control Software</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Windows-based GUI with parameter setup and diagnostics</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Programming</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Teach pendant, CAD import (Gerber, DXF), manual entry</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Recipe Management</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Unlimited recipes, secure storage, import/export</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Vision Integration</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Fiducial recognition, pattern matching, dispense verification</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Process Monitoring</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Real-time pressure monitoring, shot counter, error detection</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Data Logging</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">CSV export, database integration, traceability features</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Network Protocols</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">TCP/IP, Modbus TCP, OPC UA (Industry 4.0 ready)</td>
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
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900 w-1/3">Valve Dimensions</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">50mm × 30mm × 80mm (typical head unit)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Valve Weight</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">200g - 500g (depending on configuration)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Controller Dimensions</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">300mm × 200mm × 100mm (benchtop unit)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">System Weight</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">5kg - 8kg (valve + controller)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Power Requirements</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">100-240VAC, 50/60Hz, 100W typical</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Operating Temperature</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">15°C - 40°C ambient</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Storage Temperature</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">-10°C - 50°C</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Operating Humidity</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">20% - 80% RH, non-condensing</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Mounting Options</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Robot flange, XYZ gantry, manual stand</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Cable Length</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">2m standard (5m optional)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Safety Certifications</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">CE, FCC, RoHS compliant</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Warranty</td>
                        <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">1-year standard warranty with service support</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-900">
                  <strong>Note:</strong> Specifications may vary by valve model and fluid properties. Viscosity ranges and dispense volumes depend on nozzle selection and operating parameters. For detailed specifications on specific jetting valve models or fluid compatibility testing, please <Link href="/contact" className="text-blue-600 font-semibold hover:underline">contact our dispensing specialists</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Dispensing Method Comparison</h2>
              <p className="text-gray-800 mb-8">
                Compare jetting, contact dispensing, and spray coating methods to determine the optimal approach for your application.
              </p>
              <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-blue-600">Jetting Valve</th>
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-gray-900">Contact Dispensing</th>
                      <th className="px-3 py-3 sm:px-6 sm:py-4 text-left text-sm font-semibold text-gray-900">Spray Coating</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Substrate Contact</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Non-contact (no damage)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Contact required (potential issues)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Non-contact (overspray concerns)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Placement Accuracy</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">±25μm (excellent precision)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">±50μm (good precision)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">±500μm (area coverage)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Dispense Speed</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Very Fast (up to 1000 dots/sec)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Moderate (limited by motion)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Fast (continuous)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Material Waste</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Minimal (50% reduction vs contact)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Moderate (stringing, drips)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">High (overspray, masking needed)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Selective Deposition</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Excellent - precise targeting</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Good - targeted application</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Poor - masking required</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Volume Repeatability</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">±1% (excellent)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">±3-5% (good)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">±10-20% (variable)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Viscosity Range</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">1 - 1,000,000 cP (very wide)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">100 - 500,000 cP (wide)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">1 - 5,000 cP (limited)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Maintenance</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Low - minimal nozzle clogging</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Moderate - tip wear, clogging</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">High - nozzle cleaning required</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Equipment Cost</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Medium ($5K - $25K)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Low-Medium ($2K - $15K)</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Medium-High ($10K - $50K)</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Operating Cost</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Low - minimal waste</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Medium - consumables, waste</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">High - material waste, filters</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Setup/Changeover</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Fast - recipe change only</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Moderate - tip change, calibration</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Slow - masking, cleaning</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 font-medium text-gray-900">Best Applications</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-blue-600 font-semibold">Selective solder paste, rework, high-mix</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Underfill, gaskets, lines/beads</td>
                      <td className="px-3 py-3 sm:px-6 sm:py-4 text-gray-800">Conformal coating, large area coverage</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 bg-blue-50 p-6 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-900">
                  <strong>Best for:</strong> Jetting valves excel for selective <a href="/glossary#solder-paste" className="text-blue-600 hover:underline">solder paste</a> deposition, rework operations, prototype production, and high-mix low-volume manufacturing where precision, speed, and minimal waste are critical. Ideal alternative to <a href="/glossary#stencil-printing" className="text-blue-600 hover:underline">stencil printing</a> for flexible production.
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
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Why Choose ASC for Jetting Valves</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Material-Agnostic</p>
                      <p className="text-sm text-gray-600">Handles solder paste, adhesives, coatings, and specialty fluids with one platform</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Easy Integration</p>
                      <p className="text-sm text-gray-600">Drop-in compatible with existing dispensing platforms and robotic systems</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Low Maintenance Design</p>
                      <p className="text-sm text-gray-600">100M+ cycle life with 500-1000 hour maintenance intervals</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">Direct Application Engineering</p>
                      <p className="text-sm text-gray-600">Fluid testing and parameter optimization support from dispensing specialists</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Non-Contact Dispensing</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Multi-Material</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Low Maintenance</span>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <p className="text-sm text-gray-600">
                    Comparing dispensing methods? Read our <Link href="/compare/dispensing-methods" className="text-blue-600 hover:underline font-semibold">Dispensing Methods Comparison</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Optimize Your Dispensing Process</h2>
              <p className="text-xl mb-8 text-white">
                Contact us to learn how jetting valves can reduce material waste and improve dispensing accuracy
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
