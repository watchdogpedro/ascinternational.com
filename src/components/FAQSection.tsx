"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  /** Set true for pages with light/white backgrounds */
  lightMode?: boolean;
}

export default function FAQSection({ title = "Frequently Asked Questions", subtitle, faqs, lightMode = false }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQPage schema for Google rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className={lightMode ? "py-16 bg-gray-50" : "py-16 bg-dark-secondary/50"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${lightMode ? "text-gray-900" : "text-white"}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`text-lg ${lightMode ? "text-gray-600" : "text-gray-400"}`}>
                {subtitle}
              </p>
            )}
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-lg border transition-colors ${
                  lightMode
                    ? openIndex === index
                      ? "border-blue-200 bg-white shadow-md"
                      : "border-gray-200 bg-white hover:border-blue-200"
                    : openIndex === index
                      ? "border-accent-cyan/30 bg-dark-card"
                      : "border-white/10 bg-dark-card/50 hover:border-accent-cyan/20"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  aria-expanded={openIndex === index}
                >
                  <span className={`font-semibold text-lg ${lightMode ? "text-gray-900" : "text-white"}`}>
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    } ${lightMode ? "text-blue-600" : "text-accent-cyan"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className={`px-6 pb-5 ${lightMode ? "text-gray-600" : "text-gray-300"} leading-relaxed`}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
