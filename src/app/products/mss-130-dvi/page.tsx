import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: '/products/mss-130-dvi' },
  title: "MSS 130 DVI | Digital Video Inspection Scope",
  description: "Plug-and-play digital video inspection scope with measurement tools for lines, circles, angles, and arcs. Supports multiple lenses, fully controllable lighting, and network-ready for multi-scope installations.",
  keywords: ["MSS 130 DVI", "digital video inspection", "inspection microscope", "DVI scope"],
};

const highlights = [
  "Plug-and-play to any computer",
  "Multiple image enhancement tools",
  "Measurement: lines, circles, angles, arcs",
  "Supports variety of lenses",
  "Fully controllable lighting options",
  "Network-capable for multiple scopes",
  "Center point measurement capability",
  "Compatible with Windows systems",
];

export default function MSS130DVI() {
  return (
    <>
      <Header />
      <main className="bg-dark-bg">
        <Breadcrumb items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: "MSS 130 DVI" },
        ]} />

        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(234,179,8,0.06) 0%, transparent 60%)" }} />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl border border-yellow-500/30 bg-dark-bg" style={{ height: "420px" }}>
                  <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(234,179,8,0.08) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                  <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 55%, rgba(234,179,8,0.15) 0%, rgba(0,217,255,0.07) 45%, transparent 72%)" }} />
                  <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-yellow-500/60" />
                  <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-yellow-500/60" />
                  <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-yellow-500/30" />
                  <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-yellow-500/30" />
                  <div className="relative z-10 h-full flex items-center justify-center p-8">
                    <Image src="/images/products/mss-130-dvi.jpg" alt="MSS 130 DVI Digital Video Inspection Scope" width={360} height={380} className="object-contain max-h-full w-auto" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(234,179,8,0.6), transparent)" }} />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-yellow-500/15 text-yellow-400 border border-yellow-500/30 text-xs font-semibold px-3 py-1 rounded-full">Digital Video</span>
                  <span className="bg-white/5 text-gray-400 border border-white/10 text-xs font-semibold px-3 py-1 rounded-full">Inspection Scope</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">MSS 130 DVI</h1>
                <p className="text-lg text-gray-300 mb-3 leading-relaxed">
                  Plug-and-play digital video inspection scope that connects to any computer and provides powerful imaging enhancement tools along with precise measurement capabilities.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  The MSS 130 DVI supports measurement of lines, circles, angles, center points, and arcs. Compatible with a variety of lenses and fully controllable lighting systems, it can be networked to connect multiple digital scopes across a facility — enabling centralized quality review and collaborative inspection workflows.
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
            <p className="text-gray-400 mb-6">Complete technical specifications and lens/lighting configuration options available upon request.</p>
            <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/40 transition-all">Request Datasheet</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
