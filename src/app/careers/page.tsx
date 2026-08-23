import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: "Careers - Inspection & Metrology Jobs",
  description:
    "Build your career with ASC International, a global leader in electronics inspection and measurement since 1992. View current openings including our Automated Optical Inspection (AOI) Engineer role.",
  keywords: [
    "ASC International careers",
    "AOI Engineer job",
    "electronics inspection jobs",
    "Medina MN engineering jobs",
    "automated optical inspection careers",
    "SMT inspection jobs",
  ],
  openGraph: {
    images: ['/og-image.png'],
    title: "Careers at ASC International - Join a Growing Team",
    description:
      "Help manufacturers worldwide improve quality and yield. Explore engineering and support careers at ASC International.",
    type: "website",
  },
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Automated Optical Inspection (AOI) Engineer",
    description:
      "ASC International is seeking an experienced Automated Optical Inspection (AOI) Engineer to provide technical support, troubleshooting, training, and system upgrades for our Mechatronics AOI inspection systems and customers.",
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "ASC International, Inc.",
      sameAs: `${SITE_URL}`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "830 Tower Drive, Suite 200",
        addressLocality: "Medina",
        addressRegion: "MN",
        postalCode: "55340",
        addressCountry: "US",
      },
    },
    qualifications:
      "Bachelor's degree (or equivalent) in industrial, mechanical, or electrical engineering; 2 years of professional experience as an AOI Engineer including AOI programming and sensor repair.",
    responsibilities:
      "Troubleshoot Mechatronics AOI systems, service customer systems remotely, manage spare parts stock, lead customer support and engineer training, and oversee hardware and software upgrades.",
    industry: "Electronics Manufacturing / Inspection Equipment",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <Header />
      <main className="bg-dark-bg text-white">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Careers" },
          ]}
        />

        {/* Hero */}
        <section className="relative overflow-hidden bg-dark-bg py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-purple/10" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/20 backdrop-blur-sm border border-accent-cyan/40 rounded-full mb-6">
                <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" />
                <span className="text-sm font-medium text-accent-cyan">
                  We&apos;re Growing — Join Us
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Join Our Continuously{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-cyan">
                  Growing Team
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                For more than 34 years, ASC International has helped manufacturers
                worldwide improve quality and yield through precision inspection and
                measurement systems. We&apos;re always looking for talented people who
                share our passion for engineering excellence and customer success.
              </p>
            </div>
          </div>
        </section>

        {/* Why work here */}
        <section className="py-16 bg-dark-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold mb-10 text-center">
              Why Build Your Career Here
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Industry Leader Since 1992",
                  body: "Work alongside a team trusted by 1,000+ manufacturers worldwide in electronics, semiconductor, medical, and aerospace.",
                },
                {
                  title: "Cutting-Edge Technology",
                  body: "Hands-on work with advanced 3D SPI, AOI, and metrology systems featuring AI-driven inspection and sub-micron precision.",
                },
                {
                  title: "Real Impact",
                  body: "Help customers solve real production challenges, reduce defects, and improve yields on lines that ship products globally.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-accent-cyan/40 transition-colors"
                >
                  <h3 className="font-display text-xl font-semibold mb-3 text-accent-cyan">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current openings */}
        <section className="py-16 bg-dark-bg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold mb-10 text-center">
              Current Openings
            </h2>

            <div className="max-w-4xl mx-auto bg-dark-card border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-6 sm:p-8 border-b border-white/10 bg-gradient-to-r from-accent-cyan/10 to-transparent">
                <h3 className="font-display text-2xl font-bold mb-2">
                  Automated Optical Inspection (AOI) Engineer
                </h3>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="px-3 py-1 bg-accent-cyan/15 text-accent-cyan rounded-full">
                    Full-Time
                  </span>
                  <span className="px-3 py-1 bg-white/5 text-gray-300 rounded-full">
                    Medina, MN (HQ)
                  </span>
                  <span className="px-3 py-1 bg-white/5 text-gray-300 rounded-full">
                    ~50% Domestic Travel
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-display text-lg font-semibold mb-4 text-accent-cyan">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    {[
                      "Implement troubleshooting techniques to address technical issues in Mechatronics AOI systems",
                      "Access and service customer systems using remote software tools",
                      "Oversee spare parts stock for AOI equipment",
                      "Lead customer support initiatives and conduct engineer training",
                      "Guide clients on proper equipment usage and maintenance protocols",
                      "Oversee system upgrades for both hardware and software components",
                    ].map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="text-accent-cyan mt-1 flex-shrink-0">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-display text-lg font-semibold mb-4 text-accent-cyan">
                    Required Qualifications
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    {[
                      "Bachelor's degree (or equivalent) in industrial, mechanical, or electrical engineering",
                      "2 years of professional experience as an AOI Engineer, including proficiency in AOI programming and sensor repair",
                      "Capability for domestic travel approximately 50% of the time to client facilities",
                    ].map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="text-accent-cyan mt-1 flex-shrink-0">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to apply */}
        <section className="py-16 bg-dark-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl font-bold mb-4">How to Apply</h2>
              <p className="text-gray-300 mb-8">
                Ready to join the team? Submit your resume by email or mail and our HR
                team will be in touch.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <h3 className="font-display text-lg font-semibold mb-3 text-accent-cyan">
                    By Email
                  </h3>
                  <a
                    href="mailto:info@ascinternational.com?subject=Career%20Application"
                    className="text-white hover:text-accent-cyan transition-colors break-words"
                  >
                    info@ascinternational.com
                  </a>
                  <p className="text-gray-400 text-sm mt-2">
                    Toll Free: +1 (888) 478-2912
                  </p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <h3 className="font-display text-lg font-semibold mb-3 text-accent-cyan">
                    By Mail
                  </h3>
                  <address className="not-italic text-gray-300 leading-relaxed">
                    HR, ASC International, Inc.
                    <br />
                    830 Tower Drive, Suite 200
                    <br />
                    Medina, MN 55340 USA
                  </address>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
