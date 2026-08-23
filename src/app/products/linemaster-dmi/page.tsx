import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: '/products/linemaster-dmi' },
  title: "LineMaster DMI | Dual Mode SPI + AOI",
  description: "Revolutionary offline dual-mode platform combining 3D SPI and AOI in one system. The LineMaster DMI detects solder paste defects and component placement errors — single pass, single system.",
  keywords: ["LineMaster DMI", "dual mode SPI AOI", "offline SPI AOI", "universal inspection"],
};

const highlights = [
  "3D SPI + AOI in a single offline platform",
  "Detects missing parts, polarity, bridging",
  "Lateral resolution: 10–15μm",
  "Inspects 01005 components",
  "Image and algorithm-based AOI engine",
  "Phase-shift 3D solder paste measurement",
  "Tombstoning and lift detection",
  "One system for paste and placement inspection",
];

export default function LinemasterDMI() {
  return (
    <>
      <Header />
      <main className="bg-dark-bg">
        <Breadcrumb items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: "LineMaster DMI" },
        ]} />

        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 60%, rgba(34,197,94,0.06) 0%, transparent 60%)" }} />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl border border-green-500/30 bg-dark-bg" style={{ height: "420px" }}>
                  <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(34,197,94,0.08) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                  <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 55%, rgba(34,197,94,0.15) 0%, rgba(0,217,255,0.07) 45%, transparent 72%)" }} />
                  <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-green-500/60" />
                  <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-green-500/60" />
                  <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-green-500/30" />
                  <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-green-500/30" />
                  <div className="relative z-10 h-full flex items-center justify-center p-8">
                    <Image src="/images/products/linemaster-dmi.jpg" alt="LineMaster DMI Dual Mode SPI AOI System" width={340} height={360} className="object-contain max-h-full w-auto" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.6), transparent)" }} />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-500/15 text-green-400 border border-green-500/30 text-xs font-semibold px-3 py-1 rounded-full">Dual Mode</span>
                  <span className="bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 text-xs font-semibold px-3 py-1 rounded-full">SPI + AOI</span>
                  <span className="bg-white/5 text-gray-400 border border-white/10 text-xs font-semibold px-3 py-1 rounded-full">Offline</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">LineMaster DMI</h1>
                <p className="text-lg text-gray-300 mb-3 leading-relaxed">
                  A revolutionary dual-mode offline platform that merges ASC International's 3D SPI sensor technology with image and algorithm-based AOI in a single system.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  The LineMaster DMI inspects both the solder paste printing process and component placement in one pass — detecting missing parts, incorrect components, bridging, polarity issues, tombstoning, and more. With lateral resolution down to 10–15μm, the DMI handles 01005 components and the most demanding miniaturization requirements.
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
