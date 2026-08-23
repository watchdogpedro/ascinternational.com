import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: '/products/av-880-series' },
  title: "AV 880 Series | Inline AOI System",
  description: "Inline AOI in a cost-effective standalone platform. 22x26 inch field, OCR, CAD-based programming, real-time SPC, 0.33s per field of view.",
  keywords: ["AV 880 Series", "inline AOI", "automated optical inspection", "CAD programming AOI", "inline inspection system"],
};

const highlights = [
  "Large 22\" × 26\" inspection field",
  "Inspection speed: 0.33s per field of view",
  "CAD-based programming via CPL data",
  "OCR text recognition",
  "Real-time SPC charting",
  "Height accuracy: 1µm",
  "Z resolution: 1.78µm, lateral 8µm",
  "Optional barcode reader & rework station",
];

export default function AV880Series() {
  return (
    <>
      <Header />
      <main className="bg-dark-bg">
        <Breadcrumb items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: "AV 880 Series" },
        ]} />

        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(0,217,255,0.06) 0%, transparent 60%)" }} />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl border border-accent-cyan/30 bg-dark-bg" style={{ height: "420px" }}>
                  <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(0,217,255,0.1) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                  <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 55%, rgba(0,217,255,0.18) 0%, rgba(14,165,233,0.08) 45%, transparent 72%)" }} />
                  <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-accent-cyan/60" />
                  <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-accent-cyan/60" />
                  <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-accent-cyan/30" />
                  <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-accent-cyan/30" />
                  <div className="relative z-10 h-full flex items-center justify-center p-8">
                    <Image src="/images/products/av-880-series.png" alt="AV 880 Series Inline AOI System" width={320} height={380} className="object-contain max-h-full w-auto" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,217,255,0.6), transparent)" }} />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 text-xs font-semibold px-3 py-1 rounded-full">Inline AOI</span>
                  <span className="bg-white/5 text-gray-400 border border-white/10 text-xs font-semibold px-3 py-1 rounded-full">Standalone Platform</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">AV 880 Series</h1>
                <p className="text-lg text-gray-300 mb-3 leading-relaxed">
                  High-level automated optical inspection in a cost-effective inline platform engineered for continuous production flow and strong return on investment.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  The AV 880 Series delivers fast, repeatable assembly inspection with a large 22″ × 26″ inspection field and an inspection speed of 0.33 seconds per field of view. CAD-based programming via CPL data, OCR text recognition, and real-time SPC charting make it easy to deploy and maintain on the production floor. Optional barcode reader and rework station integration round out a flexible standalone system.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-sm text-gray-300">{h}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/40 transition-all">Request a Quote</Link>
                  <Link href="/contact" className="px-6 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all">Schedule a Demo</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-dark-secondary border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
            <h2 className="text-2xl font-bold text-white mb-3">Full Specifications</h2>
            <p className="text-gray-400 mb-6">Complete technical specifications and configuration options available upon request.</p>
            <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/40 transition-all">Request Datasheet</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
