import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Electronics Inspection Equipment Comparisons | ASC International",
  description: "Compare inspection and dispensing technologies: 3D SPI vs 2D SPI, 2D AOI vs 3D AOI, jetting vs contact dispensing. Data-driven comparisons to help you choose the right equipment.",
  keywords: ["3D SPI vs 2D SPI", "2D AOI vs 3D AOI", "inspection comparison", "dispensing comparison", "equipment selection"],
  openGraph: {
    title: "Electronics Inspection Equipment Comparisons - ASC International",
    description: "Compare inspection technologies with detailed specifications, use cases, and recommendations.",
    type: "website",
  },
};

export default function ComparePage() {
  const comparisons = [
    {
      title: "3D SPI vs 2D SPI",
      description: "Compare 3D and 2D solder paste inspection technologies for accuracy, speed, and defect detection capabilities.",
      href: "/compare/3d-spi-vs-2d-spi",
      category: "Solder Paste Inspection",
      popular: true,
    },
    {
      title: "2D AOI vs 3D AOI vs Hybrid AOI",
      description: "Compare automated optical inspection methods for PCB assembly quality control and defect detection.",
      href: "/compare/2d-aoi-vs-3d-aoi",
      category: "Optical Inspection",
      popular: true,
    },
    {
      title: "SPI Vendor Comparison Guide 2026",
      description: "Comprehensive guide to evaluating SPI vendors. Compare accuracy, data openness, support quality, and total cost of ownership across specialist and conglomerate vendors.",
      href: "/compare/spi-vendor-comparison",
      category: "Vendor Evaluation",
      popular: true,
    },
    {
      title: "AOI System Evaluation Guide 2026",
      description: "How to evaluate AOI vendors objectively. Cut through AI marketing hype and focus on what matters: defect detection, false calls, data openness, and real-world support.",
      href: "/compare/aoi-vendor-evaluation",
      category: "Vendor Evaluation",
      popular: true,
    },
    {
      title: "All-in-One Platform vs Best-of-Breed Inspection",
      description: "Should you buy all inspection from one conglomerate vendor or choose best-of-breed specialists? A detailed analysis of technology, TCO, and vendor lock-in risks.",
      href: "/compare/single-platform-vs-best-of-breed",
      category: "Strategy",
      popular: false,
    },
    {
      title: "Manual vs UV vs 3D Conformal Coating Inspection",
      description: "Compare inspection methods for conformal coating coverage, thickness, and quality verification.",
      href: "/compare/conformal-coating-inspection-methods",
      category: "Conformal Coating",
      popular: false,
    },
    {
      title: "Manual Microscope vs Digital Video vs Automated AOI",
      description: "Compare visual inspection methods for electronics manufacturing and rework operations.",
      href: "/compare/visual-inspection-methods",
      category: "Visual Inspection",
      popular: false,
    },
    {
      title: "Laser Scanning vs Structured Light vs CMM",
      description: "Compare 3D metrology technologies for dimensional measurement and quality control.",
      href: "/compare/3d-metrology-technologies",
      category: "Metrology",
      popular: false,
    },
    {
      title: "Jetting vs Contact Dispensing vs Spray Coating",
      description: "Compare fluid dispensing methods for solder paste, adhesives, and coating applications.",
      href: "/compare/dispensing-methods",
      category: "Dispensing",
      popular: false,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Electronics Inspection Equipment Comparisons",
    "description": "Comprehensive comparisons of inspection, metrology, and dispensing technologies for electronics manufacturing",
    "url": "https://solderpasteinspection.com/compare",
    "hasPart": comparisons.map(comp => ({
      "@type": "WebPage",
      "name": comp.title,
      "description": comp.description,
      "url": `https://solderpasteinspection.com${comp.href}`
    }))
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
            { name: "Compare" },
          ]}
        />

        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Equipment Comparisons
              </h1>
              <p className="text-xl text-blue-100 mb-4">
                Data-driven comparisons to help you choose the right inspection, metrology, and dispensing equipment for your application.
              </p>
              <p className="text-lg text-blue-200">
                Compare technologies side-by-side with detailed specifications, use cases, and expert recommendations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Most Popular Comparisons</h2>
                <p className="text-gray-600">
                  Start with these high-value comparisons that help determine your equipment strategy.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {comparisons.filter(c => c.popular).map((comparison, index) => (
                  <Link
                    key={index}
                    href={comparison.href}
                    className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow border-2 border-blue-100 hover:border-blue-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                        {comparison.category}
                      </span>
                      <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                        POPULAR
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600">
                      {comparison.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {comparison.description}
                    </p>
                    <span className="text-blue-600 font-semibold inline-flex items-center">
                      View Comparison
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">All Comparisons by Category</h2>
                <p className="text-gray-600">
                  Explore technology comparisons across all inspection and dispensing categories.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {comparisons.filter(c => !c.popular).map((comparison, index) => (
                  <Link
                    key={index}
                    href={comparison.href}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
                  >
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full mb-3">
                      {comparison.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {comparison.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {comparison.description}
                    </p>
                    <span className="text-blue-600 font-semibold text-sm inline-flex items-center">
                      View Comparison
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Why Compare Equipment Before Buying?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-blue-600 mb-3">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Make Informed Decisions</h3>
                  <p className="text-gray-600">
                    Understand the technical differences, strengths, and limitations of each technology before investing.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-blue-600 mb-3">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Maximize ROI</h3>
                  <p className="text-gray-600">
                    Choose equipment that matches your production volume, quality requirements, and budget constraints.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-blue-600 mb-3">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Future-Proof Your Investment</h3>
                  <p className="text-gray-600">
                    Select technology that can scale with your business and adapt to changing requirements.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-blue-600 mb-3">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Avoid Common Pitfalls</h3>
                  <p className="text-gray-600">
                    Learn from industry best practices and avoid costly mistakes when selecting equipment.
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
                Need Help Choosing Equipment?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Our equipment specialists can help you evaluate your specific requirements and recommend the best solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Schedule Consultation
                </Link>
                <Link href="/products" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors border border-blue-500">
                  View All Products
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
