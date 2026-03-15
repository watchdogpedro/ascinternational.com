import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technical Support Services | ASC International",
  description: "Worldwide technical support for ASC inspection equipment. Remote diagnostics, on-site service, preventive maintenance, training, and 24/7 emergency support available.",
  keywords: ["technical support", "equipment service", "maintenance", "training", "remote support", "field service"],
  openGraph: {
    title: "Technical Support - ASC International",
    description: "Global technical support network keeping your inspection equipment running at peak performance.",
    type: "website",
  },
};

export default function TechnicalSupport() {
  return (
    <>
      <Header />
      <main className="bg-dark-bg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Technical Support" },
          ]}
        />

        <section className="relative overflow-hidden py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Technical Support Services</h1>
              <p className="text-xl text-white mb-8">
                Expert technical assistance and maintenance services to maximize equipment uptime and performance
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all">
                  Get Support
                </Link>
                <Link href="/contact" className="bg-white/5 border border-white/20 text-white font-semibold px-6 py-3 rounded-lg font-semibold hover:bg-white/10 hover:border-accent-cyan/50 transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">Support When You Need It</h2>
              <p className="text-gray-900 text-lg mb-4">
                ASC International's technical support team is dedicated to keeping your inspection systems running at peak performance. Our engineers provide rapid response to technical issues, comprehensive maintenance services, and ongoing training to ensure your team gets maximum value from your equipment investment.
              </p>
              <p className="text-gray-900 text-lg">
                From remote diagnostics to on-site field service, we offer flexible support options to meet your specific needs and minimize production downtime.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">Support Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Phone & Email Support</h3>
                  <p className="text-gray-600">Direct access to technical experts for troubleshooting and guidance</p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Remote Diagnostics</h3>
                  <p className="text-gray-600">Remote connection for fast problem diagnosis and resolution</p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">On-Site Field Service</h3>
                  <p className="text-gray-600">Certified technicians available for on-site repairs and maintenance</p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Preventive Maintenance</h3>
                  <p className="text-gray-600">Scheduled maintenance to prevent problems and extend equipment life</p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Training Programs</h3>
                  <p className="text-gray-600">Operator and maintenance training at your site or ours</p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Software Updates</h3>
                  <p className="text-gray-600">Regular software updates with new features and improvements</p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Spare Parts</h3>
                  <p className="text-gray-600">Comprehensive inventory with fast shipping worldwide</p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">24/7 Emergency Support</h3>
                  <p className="text-gray-600">Around-the-clock emergency support for critical issues (Premium/Enterprise)</p>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Documentation</h3>
                  <p className="text-gray-600">Complete technical manuals and online knowledge base access</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">How to Get Support</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-br from-accent-cyan to-accent-blue text-dark-bg rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                    Contact Us
                  </h3>
                  <p className="text-gray-600 ml-11">Call our support hotline or submit a support ticket via email with your system information</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-br from-accent-cyan to-accent-blue text-dark-bg rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                    Initial Diagnosis
                  </h3>
                  <p className="text-gray-600 ml-11">Our technician will guide you through troubleshooting steps or schedule remote diagnostics</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-br from-accent-cyan to-accent-blue text-dark-bg rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                    Resolution
                  </h3>
                  <p className="text-gray-600 ml-11">Issue resolved remotely, parts shipped, or field service technician dispatched as needed</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-br from-accent-cyan to-accent-blue text-dark-bg rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                    Follow-Up
                  </h3>
                  <p className="text-gray-600 ml-11">Verification that your system is running properly and documentation of all work performed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">Support Plans</h2>
              <p className="text-xl text-gray-600 mb-8">
                Choose the level of support that matches your needs, from basic coverage to comprehensive 24/7 service
              </p>
              <Link href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all">
                Contact Us About Support Plans
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Need Technical Support?</h2>
              <p className="text-xl mb-8 text-white">
                Our support team is ready to help keep your equipment running at peak performance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all">
                  Contact Support
                </Link>
                <a href="tel:+18884782912" className="bg-white/5 border border-white/20 text-white font-semibold px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-accent-cyan/50 transition-all">
                  Call Support Line
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
