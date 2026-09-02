import Link from "next/link";
import { documentBySlug, formatBytes } from "@/lib/documents";

export interface PreOwnedSystem {
  model: string;
  type: string;
  badge: string;
  highlights: string[];
  /**
   * Slug of the brochure in `src/lib/documents.ts` for this specific model.
   * Omit when ASC holds no literature for it — the card then routes to the
   * contact form instead of a dead download.
   */
  doc?: string;
  /**
   * Internal page to link to when this card has no brochure of its own — used
   * by the catch-all "multiple units" cards on the hub page.
   */
  href?: string;
  /**
   * Set for literature that documents genuinely old kit (Windows 98 screens,
   * CRT monitors). The card still links to it, but labels it as archive
   * material so nobody reads it as a current spec.
   */
  legacyDoc?: boolean;
}

/**
 * One model in the pre-owned inventory. The whole card is a link: to that
 * model's brochure where one exists, otherwise to the contact form.
 */
export default function PreOwnedSystemCard({ model, type, badge, highlights, doc, href, legacyDoc }: PreOwnedSystem) {
  const brochure = doc ? documentBySlug(doc) : undefined;

  const body = (
    <>
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="text-white font-bold text-lg group-hover:text-accent-cyan transition-colors">{model}</div>
          <div className="text-sm text-gray-500">{type}</div>
        </div>
        <span className="text-xs font-semibold text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-1 rounded-full whitespace-nowrap">
          {badge}
        </span>
      </div>
      <ul className="space-y-1.5">
        {highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
            <svg className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {h}
          </li>
        ))}
      </ul>
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-sm font-semibold text-accent-cyan">
        {brochure ? (
          <>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-5l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>{legacyDoc ? "Legacy brochure" : "Spec sheet"}</span>
            <span className="font-normal text-gray-500">PDF, {formatBytes(brochure.bytes)}</span>
          </>
        ) : (
          <>
            <span>{href ? "See all models" : "Request specs"}</span>
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
          </>
        )}
      </div>
      {legacyDoc && (
        <p className="mt-2 text-xs text-gray-600 leading-relaxed">
          Archive literature for a discontinued platform. Contact us for the configuration actually in stock.
        </p>
      )}
    </>
  );

  const shell = "block bg-dark-card border border-white/10 rounded-xl p-5 hover:border-accent-cyan/30 hover:bg-white/[0.02] transition-all group";

  if (brochure) {
    return (
      <a
        href={brochure.path}
        target="_blank"
        rel="noopener"
        className={shell}
        aria-label={`${model} — ${legacyDoc ? "legacy brochure" : "spec sheet"} (PDF, ${formatBytes(brochure.bytes)})`}
      >
        {body}
      </a>
    );
  }

  return (
    <Link
      href={href ?? "/contact"}
      className={shell}
      aria-label={href ? `${model} — see all models` : `${model} — request specifications`}
    >
      {body}
    </Link>
  );
}
