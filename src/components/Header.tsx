"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const productsMenu = [
    {
      category: "SPI — Inline & Dual Mode",
      items: [
        { name: "LineMaster Fusion 3D", href: "/products/linemaster-fusion-3d", desc: "High-speed inline 3D SPI" },
        { name: "LineMaster DMI", href: "/products/linemaster-dmi", desc: "Dual mode offline SPI + AOI" },
      ]
    },
    {
      category: "SPI — Benchtop & Offline",
      items: [
        { name: "VisionPro HSi", href: "/products/visionpro-hsi", desc: "High-speed offline 3D SPI" },
        { name: "VisionPro AP500", href: "/products/visionpro-ap500", desc: "Most popular offline SPI" },
        { name: "VisionPro SP3D", href: "/products/visionpro-sp3d", desc: "Benchtop laser SPI" },
        { name: "VisionPro M500", href: "/products/visionpro-m500", desc: "Advanced benchtop SPI" },
        { name: "LaserVision SP3D Mini", href: "/products/laservision-sp3d-mini", desc: "Budget benchtop laser SPI" },
      ]
    },
    {
      category: "AOI Systems",
      items: [
        { name: "LineMaster Falcon Plus", href: "/products/linemaster-falcon-plus", desc: "Inline dual mode AOI + SPI" },
        { name: "LineMaster Falcon", href: "/products/linemaster-falcon", desc: "Affordable inline 2D-3D AOI" },
        { name: "VisionPro Merlin", href: "/products/visionpro-merlin", desc: "Affordable offline 2D-3D AOI" },
      ]
    },
    {
      category: "Digital Video & Metrology",
      items: [
        { name: "MSS 130 DVI", href: "/products/mss-130-dvi", desc: "Digital video inspection scope" },
        { name: "VANT-2 V3", href: "/products/vant-2-v3", desc: "3D industrial metrology scanner" },
      ]
    },
  ];

  const servicesMenu = [
    { name: "New Equipment", href: "/services/new-equipment", desc: "Latest inspection systems" },
    { name: "Pre-Owned Systems", href: "/services/pre-owned-systems", desc: "Certified refurbished equipment" },
    { name: "Contract Inspection", href: "/services/contract-inspection", desc: "Professional inspection services" },
    { name: "Technical Support", href: "/services/technical-support", desc: "Expert support from our engineers" },
  ];

  const industriesMenu = [
    { name: "Electronics Manufacturing", href: "/industries/electronics-manufacturing" },
    { name: "Automotive Electronics", href: "/industries/automotive-electronics" },
    { name: "Medical Devices", href: "/industries/medical-devices" },
    { name: "Aerospace & Defense", href: "/industries/aerospace-defense" },
    { name: "Semiconductor", href: "/industries/semiconductor" },
    { name: "Contract Manufacturing", href: "/industries/contract-manufacturing" },
  ];

  const aboutMenu = [
    { name: "Company History", href: "/about/company" },
    { name: "Why Choose ASC", href: "/about/why-choose-asc" },
    { name: "Technical Support", href: "/services/technical-support" },
    { name: "Case Studies", href: "/case-studies" },
  ];

  return (
    <header className="bg-dark-card/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-display font-bold text-accent-cyan group-hover:text-white transition-colors">ASC</span>
              <span className="ml-2 text-sm text-gray-400 hidden sm:block group-hover:text-gray-300 transition-colors">International</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            <Link
              href="/"
              className="text-gray-300 hover:text-accent-cyan px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-300 hover:text-accent-cyan px-3 py-2 text-sm font-medium transition-colors flex items-center">
                Products
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === "products" && (
                <div className="absolute left-0 mt-0 w-[820px] bg-dark-secondary/95 backdrop-blur-md shadow-2xl rounded-lg border border-white/10 p-6">
                  <div className="flex gap-1 mb-4 pb-3 border-b border-white/10">
                    <Link href="/products" className="text-xs font-semibold text-accent-cyan hover:text-white transition-colors">
                      View All Products →
                    </Link>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {productsMenu.map((category) => (
                      <div key={category.category}>
                        <h3 className="text-sm font-semibold text-accent-cyan mb-3">{category.category}</h3>
                        <ul className="space-y-2">
                          {category.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="block p-2 rounded hover:bg-white/5 transition-colors group"
                              >
                                <div className="text-sm font-medium text-white group-hover:text-accent-cyan transition-colors">{item.name}</div>
                                <div className="text-xs text-gray-400">{item.desc}</div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-300 hover:text-accent-cyan px-3 py-2 text-sm font-medium transition-colors flex items-center">
                Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === "services" && (
                <div className="absolute left-0 mt-0 w-80 bg-dark-secondary/95 backdrop-blur-md shadow-2xl rounded-lg border border-white/10 p-4">
                  <ul className="space-y-1">
                    {servicesMenu.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="block p-2 rounded hover:bg-white/5 transition-colors group"
                        >
                          <div className="text-sm font-medium text-white group-hover:text-accent-cyan transition-colors">{item.name}</div>
                          <div className="text-xs text-gray-400">{item.desc}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("industries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-300 hover:text-accent-cyan px-3 py-2 text-sm font-medium transition-colors flex items-center">
                Industries
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === "industries" && (
                <div className="absolute left-0 mt-0 w-64 bg-dark-secondary/95 backdrop-blur-md shadow-2xl rounded-lg border border-white/10 p-3">
                  <ul className="space-y-1">
                    {industriesMenu.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="block px-3 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-accent-cyan rounded transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-300 hover:text-accent-cyan px-3 py-2 text-sm font-medium transition-colors flex items-center">
                About
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === "about" && (
                <div className="absolute left-0 mt-0 w-56 bg-dark-secondary/95 backdrop-blur-md shadow-2xl rounded-lg border border-white/10 p-3">
                  <ul className="space-y-1">
                    {aboutMenu.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="block px-3 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-accent-cyan rounded transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("resources")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-300 hover:text-accent-cyan px-3 py-2 text-sm font-medium transition-colors flex items-center">
                Resources
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === "resources" && (
                <div className="absolute left-0 mt-0 w-72 bg-dark-secondary/95 backdrop-blur-md shadow-2xl rounded-lg border border-white/10 p-4">
                  <ul className="space-y-1">
                    <li>
                      <Link href="/resources" className="block p-2 rounded hover:bg-white/5 transition-colors group">
                        <div className="text-sm font-medium text-white group-hover:text-accent-cyan transition-colors">Downloads & Manuals</div>
                        <div className="text-xs text-gray-400">Manuals, software & troubleshooting</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="block p-2 rounded hover:bg-white/5 transition-colors group">
                        <div className="text-sm font-medium text-white group-hover:text-accent-cyan transition-colors">Blog</div>
                        <div className="text-xs text-gray-400">Industry insights & guides</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/compare" className="block p-2 rounded hover:bg-white/5 transition-colors group">
                        <div className="text-sm font-medium text-white group-hover:text-accent-cyan transition-colors">Equipment Comparisons</div>
                        <div className="text-xs text-gray-400">Side-by-side technology comparisons</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/tools/roi-calculator" className="block p-2 rounded hover:bg-white/5 transition-colors group">
                        <div className="text-sm font-medium text-white group-hover:text-accent-cyan transition-colors">ROI Calculator</div>
                        <div className="text-xs text-gray-400">Estimate your inspection ROI</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/application-notes" className="block p-2 rounded hover:bg-white/5 transition-colors group">
                        <div className="text-sm font-medium text-white group-hover:text-accent-cyan transition-colors">Application Notes</div>
                        <div className="text-xs text-gray-400">Technical documentation</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/glossary" className="block p-2 rounded hover:bg-white/5 transition-colors group">
                        <div className="text-sm font-medium text-white group-hover:text-accent-cyan transition-colors">Glossary</div>
                        <div className="text-xs text-gray-400">Inspection terminology</div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="block p-2 rounded hover:bg-white/5 transition-colors group">
                        <div className="text-sm font-medium text-white group-hover:text-accent-cyan transition-colors">FAQ</div>
                        <div className="text-xs text-gray-400">Frequently asked questions</div>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link
              href="/events/apex-expo-2026"
              className="ml-2 bg-yellow-500 text-black px-3 py-2 rounded-lg text-sm font-bold hover:bg-yellow-400 transition-colors"
            >
              APEX 2026
            </Link>

            <Link
              href="/contact"
              className="ml-2 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg px-4 py-2 rounded-lg text-sm font-bold hover:shadow-lg hover:shadow-accent-cyan/50 transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-accent-cyan p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 max-h-[80vh] overflow-y-auto bg-dark-secondary/50 backdrop-blur-md rounded-lg mt-2">
            <Link
              href="/"
              className="block text-gray-300 hover:text-accent-cyan px-3 py-2 text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div className="px-3 py-2">
              <div className="text-xs font-semibold text-accent-cyan uppercase mb-2">Products</div>
              {productsMenu.flatMap(category => category.items).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-accent-cyan py-2 pl-4 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="px-3 py-2">
              <div className="text-xs font-semibold text-accent-cyan uppercase mb-2">Services</div>
              {servicesMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-accent-cyan py-2 pl-4 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="px-3 py-2">
              <div className="text-xs font-semibold text-accent-cyan uppercase mb-2">Industries</div>
              {industriesMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-accent-cyan py-2 pl-4 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="px-3 py-2">
              <div className="text-xs font-semibold text-accent-cyan uppercase mb-2">About</div>
              {aboutMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-accent-cyan py-2 pl-4 text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="px-3 py-2">
              <div className="text-xs font-semibold text-accent-cyan uppercase mb-2">Resources</div>
              <Link href="/resources" className="block text-gray-300 hover:text-accent-cyan py-2 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>Downloads & Manuals</Link>
              <Link href="/blog" className="block text-gray-300 hover:text-accent-cyan py-2 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
              <Link href="/compare" className="block text-gray-300 hover:text-accent-cyan py-2 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>Equipment Comparisons</Link>
              <Link href="/tools/roi-calculator" className="block text-gray-300 hover:text-accent-cyan py-2 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>ROI Calculator</Link>
              <Link href="/application-notes" className="block text-gray-300 hover:text-accent-cyan py-2 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>Application Notes</Link>
              <Link href="/glossary" className="block text-gray-300 hover:text-accent-cyan py-2 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>Glossary</Link>
              <Link href="/faq" className="block text-gray-300 hover:text-accent-cyan py-2 pl-4 text-sm" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
            </div>

            <Link
              href="/events/apex-expo-2026"
              className="block bg-yellow-500 text-black mx-3 my-2 px-3 py-2 rounded-lg text-base font-bold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              APEX 2026 - Visit Our Booth
            </Link>

            <Link
              href="/contact"
              className="block text-gray-300 hover:text-accent-cyan px-3 py-2 text-base font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
