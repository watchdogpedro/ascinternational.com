import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-card border-t border-white/10 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4">
              <span className="text-accent-cyan">ASC</span> International
            </h3>
            <p className="text-gray-400 mb-4">
              Global supplier of precision inspection and measurement systems for electronics, semiconductor, life science, and industrial metrology since 1992.
            </p>
            <p className="text-gray-500 text-sm">
              Over <span className="text-accent-cyan font-semibold">34 years</span> of experience serving <span className="text-accent-cyan font-semibold">1,000+ customers</span> worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-accent-cyan">Quick Links</h4>
            <ul className="space-y-0 lg:space-y-2">
              <li>
                <Link href="/products" className="inline-block py-3 lg:py-0 text-gray-400 hover:text-accent-cyan transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="inline-block py-3 lg:py-0 text-gray-400 hover:text-accent-cyan transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="inline-block py-3 lg:py-0 text-gray-400 hover:text-accent-cyan transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="inline-block py-3 lg:py-0 text-gray-400 hover:text-accent-cyan transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="inline-block py-3 lg:py-0 text-gray-400 hover:text-accent-cyan transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/compare" className="inline-block py-3 lg:py-0 text-gray-400 hover:text-accent-cyan transition-colors">
                  Equipment Comparisons
                </Link>
              </li>
              <li>
                <Link href="/tools/roi-calculator" className="inline-block py-3 lg:py-0 text-gray-400 hover:text-accent-cyan transition-colors">
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="inline-block py-3 lg:py-0 text-gray-400 hover:text-accent-cyan transition-colors">
                  Glossary
                </Link>
              </li>
              <li>
                <Link href="/about/company" className="inline-block py-3 lg:py-0 text-gray-400 hover:text-accent-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="inline-block py-3 lg:py-0 text-gray-400 hover:text-accent-cyan transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="inline-block py-3 lg:py-0 text-gray-400 hover:text-accent-cyan transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-accent-cyan">Contact</h4>
            <ul className="space-y-0 text-gray-400 lg:space-y-3">
              <li>
                <a href="tel:+18884782912" className="inline-block py-3 lg:py-0 hover:text-accent-cyan transition-colors">
                  Toll Free: +1 (888) 478-2912
                </a>
              </li>
              <li>
                <a href="tel:+17634796210" className="inline-block py-3 lg:py-0 hover:text-accent-cyan transition-colors">
                  Tel: +1 (763) 479-6210
                </a>
              </li>
              <li>
                <a href="mailto:info@ascinternational.com" className="inline-block [overflow-wrap:anywhere] py-3 lg:py-0 hover:text-accent-cyan transition-colors">
                  info@ascinternational.com
                </a>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                North America Support
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} ASC International. All rights reserved.</p>
          <span className="hidden sm:inline">|</span>
          <Link href="/privacy-policy" className="inline-block py-3 lg:py-0 hover:text-accent-cyan transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
