import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // Website schema for homepage
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ASC International",
    "url": "https://solderpasteinspection.com",
    "description": "Precision Inspection & Measurement Systems for Electronics, Semiconductor, Life Science, and Industrial Metrology",
    "publisher": {
      "@type": "Organization",
      "name": "ASC International"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://solderpasteinspection.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Product offerings as ItemList
  const productsListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "ASC International Products",
    "description": "Inspection and measurement systems for electronics, semiconductor, life science, and industrial applications",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "3D Solder Paste Inspection",
          "url": "https://solderpasteinspection.com/products/3d-solder-paste-inspection",
          "description": "Advanced inline and offline SPI systems for precise solder paste measurement"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "Automated Optical Inspection",
          "url": "https://solderpasteinspection.com/products/automated-optical-inspection",
          "description": "2D-3D AOI systems for comprehensive quality control"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "Conformal Coating Inspection",
          "url": "https://solderpasteinspection.com/products/conformal-coating-inspection",
          "description": "Precise measurement and verification for conformal coating"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Product",
          "name": "Digital Video Inspection",
          "url": "https://solderpasteinspection.com/products/digital-video-inspection",
          "description": "High-resolution digital video systems for detailed inspection"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Product",
          "name": "3D Industrial Metrology",
          "url": "https://solderpasteinspection.com/products/3d-industrial-metrology",
          "description": "Advanced laser scanning for precise 3D measurement"
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Product",
          "name": "Jetting Valves",
          "url": "https://solderpasteinspection.com/products/jetting-valves",
          "description": "Precision jetting valves for solder paste dispensing"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsListSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section - 20:9 Responsive Aspect Ratio */}
        <section className="relative overflow-hidden bg-dark-bg">
          {/* Responsive 20:9 Aspect Ratio Container */}
          <div className="relative w-full" style={{ aspectRatio: '20 / 9' }}>
            {/* Background Image - Futuristic SPI System */}
            <div className="absolute inset-0">
              <Image
                src="/images/hero-spi-system.jpg"
                alt="Advanced 3D Solder Paste Inspection System with Real-Time Analysis"
                fill
                priority
                className="object-cover object-left"
                style={{
                  filter: 'brightness(1.6) contrast(1.05)',
                }}
              />
            </div>

            {/* Gradient overlay for text legibility */}
            <div className="absolute inset-0 z-5 bg-gradient-to-r from-dark-bg/85 via-dark-bg/55 to-dark-bg/15" />

            {/* Additional subtle overlay for depth */}
            <div className="absolute inset-0 z-5 bg-gradient-to-b from-dark-bg/25 via-transparent to-dark-bg/45" />

            {/* Content Container - Centered within aspect ratio */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left: Content */}
                  <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/20 backdrop-blur-sm border border-accent-cyan/40 rounded-full mb-6 shadow-lg shadow-accent-cyan/20">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-accent-cyan">Industry Leading Since 1992</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight drop-shadow-2xl">
                  Inspection That <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-cyan animate-gradient-x">Delivers Results</span>
                </h1>

                <p className="text-lg md:text-xl text-white mb-6 leading-relaxed drop-shadow-lg">
                  Sub-micron accuracy. Under 1% false call rates. Measurable defect reduction from day one.
                  Trusted by <span className="text-accent-cyan font-bold">1,000+ manufacturers</span> worldwide since 1992.
                </p>

                {/* Key differentiators */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 hover:scale-105 transition-all shadow-lg">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-cyan/50">
                      <svg className="w-5 h-5 text-dark-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-white drop-shadow-md">Sub-Micron Repeatability</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 hover:scale-105 transition-all shadow-lg">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-cyan/50">
                      <svg className="w-5 h-5 text-dark-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-white drop-shadow-md">Zero-Config AI</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 hover:scale-105 transition-all shadow-lg">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-cyan/50">
                      <svg className="w-5 h-5 text-dark-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-white drop-shadow-md">Closed-Loop Control</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 hover:scale-105 transition-all shadow-lg">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent-cyan/50">
                      <svg className="w-5 h-5 text-dark-bg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-white drop-shadow-md">Open Architecture</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="group px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-2xl hover:shadow-accent-cyan/50 transition-all hover:scale-105 inline-flex items-center justify-center"
                  >
                    Get a Quote
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link
                    href="#products"
                    className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 hover:border-accent-cyan/50 transition-all inline-flex items-center justify-center shadow-lg"
                  >
                    View Products
                  </Link>
                </div>
              </div>

              {/* Right: Stats Dashboard - Visible on Large Screens */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-3">
                  {/* Stat 1 */}
                  <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:border-accent-cyan/50 hover:scale-105 transition-all shadow-2xl">
                    <div className="absolute top-3 right-3">
                      <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse shadow-lg shadow-accent-cyan/50" />
                    </div>
                    <div className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-white mb-2">&lt;1%</div>
                    <div className="text-white font-medium drop-shadow-md">False Call Rate</div>
                    <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[99%] bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full shadow-lg shadow-accent-cyan/30" />
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:border-accent-cyan/50 hover:scale-105 transition-all shadow-2xl">
                    <div className="absolute top-3 right-3">
                      <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse shadow-lg shadow-accent-blue/50" style={{ animationDelay: '0.5s' }} />
                    </div>
                    <div className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-white mb-2">±0.5μm</div>
                    <div className="text-white font-medium drop-shadow-md">Measurement Repeatability</div>
                    <div className="mt-3 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[97%] bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full shadow-lg shadow-accent-cyan/30" />
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:border-accent-cyan/50 hover:scale-105 transition-all shadow-2xl">
                    <div className="absolute top-3 right-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" style={{ animationDelay: '0.7s' }} />
                    </div>
                    <div className="text-4xl font-display font-bold text-white mb-2 drop-shadow-lg">6-12 mo</div>
                    <div className="text-white font-medium drop-shadow-md">Typical ROI Payback</div>
                  </div>

                  {/* Stat 4 */}
                  <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:border-accent-cyan/50 hover:scale-105 transition-all shadow-2xl">
                    <div className="absolute top-3 right-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" style={{ animationDelay: '1s' }} />
                    </div>
                    <div className="text-4xl font-display font-bold text-white mb-2 drop-shadow-lg">1,000+</div>
                    <div className="text-white font-medium drop-shadow-md">Installations Worldwide</div>
                  </div>
                </div>

                {/* Status indicator */}
                <div className="mt-4 p-3 bg-gradient-to-r from-green-500/20 to-accent-cyan/20 backdrop-blur-md border border-green-500/30 rounded-xl flex items-center gap-3 shadow-2xl">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                    <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white drop-shadow-md">Live Production Support</div>
                    <div className="text-xs text-white/90 drop-shadow-md">Real-time assistance available now</div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-4">
                <span className="text-sm font-semibold text-blue-600">OUR SOLUTIONS</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Cutting-Edge <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Inspection Systems</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced technology for precision quality control across electronics, semiconductor, life science, and industrial applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Product Card 1 */}
              <Link href="/products/3d-solder-paste-inspection" className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl transition-all">
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">3D Solder Paste Inspection</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Advanced inline and offline SPI systems for precise solder paste measurement and verification.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              {/* Product Card 2 */}
              <Link href="/products/automated-optical-inspection" className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl transition-all">
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">Automated Optical Inspection</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  State-of-the-art 2D-3D AOI systems for comprehensive quality control and defect detection.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              {/* Product Card 3 */}
              <Link href="/products/conformal-coating-inspection" className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl transition-all">
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">Conformal Coating Inspection</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Precise measurement and verification systems for conformal coating applications.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              {/* Product Card 4 */}
              <Link href="/products/digital-video-inspection" className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl transition-all">
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">Digital Video Inspection</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  High-resolution digital video systems for detailed visual inspection and analysis.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              {/* Product Card 5 */}
              <Link href="/products/3d-industrial-metrology" className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl transition-all">
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">3D Industrial Metrology</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Advanced laser scanning systems for precise 3D measurement and metrology.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              {/* Product Card 6 */}
              <Link href="/products/jetting-valves" className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-xl transition-all">
                <div className="absolute top-4 right-4 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">Jetting Valves</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Precision jetting valves for solder paste and adhesive dispensing applications.
                </p>
                <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Results Our Customers Achieve */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-4">
                <span className="text-sm font-semibold text-green-600">PROVEN RESULTS</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Results Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Customers Achieve</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real outcomes from real manufacturers, not awards on a shelf
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                <div className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-3">50-70%</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Defect Reduction</div>
                <p className="text-gray-600 text-sm">Average solder-related defect reduction within 90 days of deployment</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                <div className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-3">&lt;1%</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">False Call Rate</div>
                <p className="text-gray-600 text-sm">Industry-leading accuracy that operators actually trust and rely on</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                <div className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-3">6-12 mo</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">ROI Payback</div>
                <p className="text-gray-600 text-sm">Typical payback period through scrap reduction and yield improvement</p>
              </div>
            </div>

            {/* Customer Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  &ldquo;We cut our scrap rate from 3% to under 0.5% within the first quarter. The closed-loop feedback to our printers was a game-changer our previous vendor couldn&apos;t deliver.&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">Quality Director</p>
                  <p className="text-sm text-gray-500">Tier 1 Automotive EMS, Michigan</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  &ldquo;What sold us was the open architecture. We integrated with our existing MES in two days. No proprietary lock-in, no surprise licensing fees. Our data stays ours.&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">VP Manufacturing</p>
                  <p className="text-sm text-gray-500">Medical Device Manufacturer, Minnesota</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  &ldquo;When we call ASC, we talk to the engineer who designed the system. No ticket queues, no call centers. That level of support doesn&apos;t exist with the big conglomerates.&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">Process Engineer</p>
                  <p className="text-sm text-gray-500">Aerospace Contract Manufacturer, California</p>
                </div>
              </div>
            </div>

            {/* Trusted By Industries */}
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Trusted Across Industries</p>
              <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
                <span className="text-lg font-display font-bold text-gray-400">Automotive</span>
                <span className="text-gray-300">|</span>
                <span className="text-lg font-display font-bold text-gray-400">Medical Devices</span>
                <span className="text-gray-300">|</span>
                <span className="text-lg font-display font-bold text-gray-400">Aerospace & Defense</span>
                <span className="text-gray-300">|</span>
                <span className="text-lg font-display font-bold text-gray-400">Contract Manufacturing</span>
                <span className="text-gray-300">|</span>
                <span className="text-lg font-display font-bold text-gray-400">Semiconductor</span>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Generation CTA Section */}
        <section className="py-20 relative overflow-hidden bg-dark-bg">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-blue/10" />
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 217, 255, 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 217, 255, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-dark-secondary/80 to-dark-card/80 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full mb-6">
                    <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-accent-cyan">GET STARTED TODAY</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                    Ready to Improve Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-blue">Quality Control</span>?
                  </h2>
                  <p className="text-xl text-white mb-8">
                    Contact our team for a consultation on how ASC International can optimize your inspection and measurement processes with industry-leading solutions for any application.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/5 border border-white/10 rounded-lg">
                    <div className="text-3xl font-display font-bold text-accent-cyan mb-2">34+</div>
                    <div className="text-sm text-white">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 border border-white/10 rounded-lg">
                    <div className="text-3xl font-display font-bold text-accent-cyan mb-2">1,000+</div>
                    <div className="text-sm text-white">Satisfied Customers</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 border border-white/10 rounded-lg">
                    <div className="text-3xl font-display font-bold text-accent-cyan mb-2">500+</div>
                    <div className="text-sm text-white">Installations Worldwide</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="group px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-2xl hover:shadow-accent-cyan/50 transition-all hover:scale-105 inline-flex items-center justify-center"
                  >
                    Request a Quote
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <a
                    href="mailto:info@ascinternational.com"
                    className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose ASC Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">ASC International</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry-leading expertise and support for electronics, semiconductor, life science, and metrology professionals worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">Multiple Patents</h3>
                <p className="text-gray-600 text-sm">Innovative technology protected by multiple patents in the inspection field.</p>
              </div>

              <div className="group p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">Direct Engineer Access</h3>
                <p className="text-gray-600 text-sm">When you call ASC, you talk to the engineers who built your system — not a call center.</p>
              </div>

              <div className="group p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">Quality Focused</h3>
                <p className="text-gray-600 text-sm">Commitment to delivering the highest quality inspection solutions.</p>
              </div>

              <div className="group p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">Expert Team</h3>
                <p className="text-gray-600 text-sm">Experienced professionals dedicated to your manufacturing success.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
