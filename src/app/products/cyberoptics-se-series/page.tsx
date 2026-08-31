import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { documentForProduct, formatBytes } from "@/lib/documents";

export const metadata: Metadata = {
  alternates: { canonical: '/products/cyberoptics-se-series' },
  title: "CyberOptics SE Series | Pre-Owned 3D SPI",
  description: "Pre-owned high-speed inline 3D SPI from CyberOptics, with 3,000+ systems installed worldwide. CyberPrint OPTIMIZER software, in-process SMT inspection.",
  keywords: ["CyberOptics SE Series", "pre-owned SPI", "inline 3D SPI", "SE600", "CyberPrint OPTIMIZER", "solder paste inspection"],
};

const highlights = [
  "High-speed inline 3D SPI",
  "Pre-owned, reconditioned platform",
  "Award-winning CyberPrint OPTIMIZER software",
  "Automated in-process SMT inspection",
  "Measures paste deposit height & quality",
  "Flagship SE600 / SE500ULTRA models",
  "3,000+ systems installed worldwide",
  "Closed-loop printer process control",
];

const datasheet = documentForProduct("cyberoptics-se-series");

export default function CyberOpticsSESeries() {
  return (
    <>
      <Header />
      <main className="bg-dark-bg">
        <Breadcrumb items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: "CyberOptics SE Series" },
        ]} />

        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(0,217,255,0.06) 0%, transparent 60%)" }} />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl border border-accent-cyan/30 bg-dark-bg mx-auto w-fit">
                  <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(0,217,255,0.1) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                  <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 55%, rgba(0,217,255,0.18) 0%, rgba(14,165,233,0.08) 45%, transparent 72%)" }} />
                  <div className="absolute top-2 left-2 w-7 h-7 border-t-2 border-l-2 border-accent-cyan/60" />
                  <div className="absolute top-2 right-2 w-7 h-7 border-t-2 border-r-2 border-accent-cyan/60" />
                  <div className="absolute bottom-2 left-2 w-7 h-7 border-b-2 border-l-2 border-accent-cyan/30" />
                  <div className="absolute bottom-2 right-2 w-7 h-7 border-b-2 border-r-2 border-accent-cyan/30" />
                  <div className="relative z-10 flex items-center justify-center p-4">
                    <Image src="/images/products/cyberoptics-se-series.png" alt="CyberOptics SE Series Inline 3D SPI System" width={320} height={380} className="object-contain h-[300px] sm:h-[460px] w-auto max-w-full rounded-lg" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,217,255,0.6), transparent)" }} />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 text-xs font-semibold px-3 py-1 rounded-full">Inline</span>
                  <span className="bg-white/5 text-gray-400 border border-white/10 text-xs font-semibold px-3 py-1 rounded-full">Pre-Owned 3D SPI</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">CyberOptics SE Series</h1>
                <p className="text-lg text-gray-300 mb-3 leading-relaxed">
                  Pre-owned high-speed inline 3D solder paste inspection from CyberOptics — the world&apos;s number-one supplier of SPI equipment, with more than 3,000 systems installed globally.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  The CyberOptics SE Series monitors and controls one of the most crucial steps affecting finished board quality, providing automated in-process inspection on the SMT assembly line. The platform measures solder paste deposit height and quality and pairs with the award-winning CyberPrint OPTIMIZER software for closed-loop printer process control. Flagship SE600 and SE500ULTRA models have earned consecutive industry recognition. Reconditioned and supported by ASC International, the SE Series offers a cost-effective route to proven inline SPI capability.
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
            <p className="text-gray-400 mb-6">The datasheet covers dimensions, throughput and measurement specifications. Configuration options are quoted against your line.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {datasheet && (
                <a
                  href={datasheet.path}
                  target="_blank"
                  rel="noopener"
                  className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/40 transition-all"
                >
                  Download Datasheet{" "}
                  <span className="font-normal opacity-75">(PDF, {formatBytes(datasheet.bytes)})</span>
                </a>
              )}
              <Link href="/contact" className="px-6 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all">Request Full Specs</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
