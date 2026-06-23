import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LineMaster Fusion DMI | Dual-Mode 3D SPI + AOI | ASC International",
  description: "Dual-mode offline platform merging 3D SPI sensor technology with image-based AOI. Phase-shift interferometry for paste, image modeling for components — 1µm height accuracy, 01005 capability, 20\"×16\" area.",
  keywords: ["LineMaster Fusion DMI", "dual mode SPI AOI", "3D SPI", "AOI inspection", "phase shift interferometry"],
};

const highlights = [
  "Dual-mode: 3D SPI + image-based AOI",
  "Phase-shift interferometry paste measurement",
  "1µm height accuracy, 0.20µm Z-resolution",
  "SPI lateral resolution: 4µm",
  "AOI detects bridging, polarity, tombstoning",
  "Inspects down to 01005 components",
  "20\" × 16\" area (expandable to 20\" × 24\"+)",
  "NIST-traceable calibration, Windows 11 Pro",
];

export default function LineMasterFusionDMI() {
  return (
    <>
      <Header />
      <main className="bg-dark-bg">
        <Breadcrumb items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: "LineMaster Fusion DMI" },
        ]} />

        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(34,197,94,0.06) 0%, transparent 60%)" }} />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl border border-green-500/30 bg-dark-bg" style={{ height: "420px" }}>
                  <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(34,197,94,0.1) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                  <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 55%, rgba(34,197,94,0.16) 0%, rgba(0,217,255,0.08) 45%, transparent 72%)" }} />
                  <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-green-500/60" />
                  <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-green-500/60" />
                  <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-green-500/30" />
                  <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-green-500/30" />
                  <div className="relative z-10 h-full flex items-center justify-center p-8">
                    <Image src="/images/products/linemaster-fusion-dmi.jpg" alt="LineMaster Fusion DMI Dual-Mode 3D SPI and AOI System" width={320} height={380} className="object-contain max-h-full w-auto" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.6), transparent)" }} />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-500/15 text-green-400 border border-green-500/30 text-xs font-semibold px-3 py-1 rounded-full">Dual Mode</span>
                  <span className="bg-white/5 text-gray-400 border border-white/10 text-xs font-semibold px-3 py-1 rounded-full">3D SPI + AOI</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">LineMaster Fusion DMI</h1>
                <p className="text-lg text-gray-300 mb-3 leading-relaxed">
                  A dual-mode offline inspection platform that merges ASC International&apos;s 3D SPI sensor technology with image-based AOI — the most comprehensive, value-packed inspection solution available.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  The LineMaster Fusion DMI combines structured white-light phase-shift interferometry for precise solder paste measurement with image-modeling AOI for assembled-component verification. The SPI mode delivers 1µm height accuracy, 0.20µm Z-resolution, 4µm lateral resolution, and 51µm minimum paste deposit detection. The AOI mode detects missing or incorrect parts, bridging, polarity, tombstoning, and solderability issues down to 01005 components. Includes integrated SPC runtime charts, custom reporting, offline defect review, NIST-traceable calibration, and a two-year warranty on Windows 11 Pro.
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
