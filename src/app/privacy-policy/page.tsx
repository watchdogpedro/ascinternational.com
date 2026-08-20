import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_DOMAIN } from '@/lib/site'

export const metadata: Metadata = {
  title: "Privacy Policy | ASC International",
  description:
    `How ASC International collects, uses, and protects the personal information of visitors to ${SITE_DOMAIN}.`,
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/privacy-policy",
  },
};

const LAST_UPDATED = "June 21, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="bg-dark-bg text-white">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Privacy Policy" },
          ]}
        />

        {/* Hero */}
        <section className="relative overflow-hidden bg-dark-bg py-16">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-purple/10" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-400">Last updated: {LAST_UPDATED}</p>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-12 bg-dark-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-10 text-gray-300 leading-relaxed">
              <div>
                <p>
                  This Privacy Policy governs the manner in which ASC International,
                  Inc. (&ldquo;ASC International,&rdquo; &ldquo;we,&rdquo; or
                  &ldquo;us&rdquo;) collects, uses, maintains, and discloses
                  information collected from users (each, a &ldquo;User&rdquo;) of the
                  {SITE_DOMAIN} website (the &ldquo;Site&rdquo;). This
                  policy applies to the Site and all products and services offered by
                  ASC International.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-3 text-accent-cyan">
                  Personal Identification Information
                </h2>
                <p>
                  We may collect personal identification information from Users in a
                  variety of ways, including when Users visit our Site, fill out a
                  contact or quote-request form, subscribe to a newsletter, or
                  interact with other activities, services, or resources we make
                  available. Users may be asked for their name, email address, mailing
                  address, phone number, and company. Users may visit our Site
                  anonymously, and providing personal data is always voluntary —
                  though declining may prevent Users from engaging in certain
                  Site-related activities.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-3 text-accent-cyan">
                  Non-Personal Identification Information
                </h2>
                <p>
                  We may collect non-personal identification information about Users
                  whenever they interact with our Site. This may include the browser
                  name, the type of computer or device, and technical information
                  about the User&apos;s means of connection to our Site, such as the
                  operating system and the internet service providers utilized, along
                  with other similar information.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-3 text-accent-cyan">
                  Web Browser Cookies
                </h2>
                <p>
                  Our Site may use &ldquo;cookies&rdquo; to enhance the User
                  experience. Users may set their web browser to refuse cookies or to
                  alert them when cookies are being sent. If they do so, note that some
                  parts of the Site may not function properly.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-3 text-accent-cyan">
                  How We Use Collected Information
                </h2>
                <p className="mb-3">
                  ASC International may collect and use Users&apos; personal
                  information for the following purposes:
                </p>
                <ul className="space-y-2">
                  {[
                    "To improve customer service and respond more effectively to support requests",
                    "To personalize the User experience and understand how our Users as a group use the services and resources on our Site",
                    "To improve our Site, products, and services",
                    "To send periodic emails and respond to inquiries, questions, and other requests",
                    "To send information such as product updates, technical resources, and marketing communications that Users have opted to receive",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent-cyan mt-1 flex-shrink-0">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-3 text-accent-cyan">
                  How We Protect Your Information
                </h2>
                <p>
                  We adopt appropriate data collection, storage, and processing
                  practices and security measures to protect against unauthorized
                  access, alteration, disclosure, or destruction of your personal
                  information and data stored on our Site.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-3 text-accent-cyan">
                  Sharing Your Personal Information
                </h2>
                <p>
                  We do not sell, trade, or rent Users&apos; personal identification
                  information to others. We may share generic aggregated demographic
                  information not linked to any personal identification information
                  regarding visitors and Users with our business partners and trusted
                  affiliates. We may use third-party service providers to help us
                  operate our business and the Site or administer activities on our
                  behalf, and may share information with them for those limited
                  purposes.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-3 text-accent-cyan">
                  Third-Party Websites
                </h2>
                <p>
                  Users may find content on our Site that links to the sites and
                  services of partners, suppliers, advertisers, sponsors, licensors,
                  and other third parties. We do not control the content or links that
                  appear on these sites and are not responsible for the practices
                  employed by websites linked to or from our Site. Browsing and
                  interaction on any other website is subject to that website&apos;s
                  own terms and policies.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-3 text-accent-cyan">
                  Children&apos;s Privacy
                </h2>
                <p>
                  Our Site is not directed to individuals under the age of 13, and we
                  do not knowingly collect personal information from children under 13.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-3 text-accent-cyan">
                  Changes to This Privacy Policy
                </h2>
                <p>
                  ASC International has the discretion to update this Privacy Policy at
                  any time. When we do, we will revise the updated date at the top of
                  this page. We encourage Users to frequently check this page for any
                  changes. You acknowledge and agree that it is your responsibility to
                  review this Privacy Policy periodically and become aware of
                  modifications.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold mb-3 text-accent-cyan">
                  Contacting Us
                </h2>
                <p className="mb-3">
                  If you have any questions about this Privacy Policy or your dealings
                  with this Site, please contact us:
                </p>
                <address className="not-italic">
                  ASC International, Inc.
                  <br />
                  830 Tower Drive, Suite 200
                  <br />
                  Medina, MN 55340 USA
                  <br />
                  Toll Free:{" "}
                  <a
                    href="tel:+18884782912"
                    className="text-accent-cyan hover:underline"
                  >
                    +1 (888) 478-2912
                  </a>
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:info@ascinternational.com"
                    className="text-accent-cyan hover:underline"
                  >
                    info@ascinternational.com
                  </a>
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
