import Link from "next/link";
import { caseStudies } from "../site-data";

export default function PortfolioPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold tracking-tight">Product Portfolio.</h1>

      <div className="space-y-8">
        {caseStudies.map((cs) => (
          <article key={cs.slug} className="space-y-2">
            <div className="text-sm text-neutral-500">{cs.category}</div>
            <Link
              href={`/case-studies/${cs.slug}`}
              className="text-xl font-semibold tracking-tight hover:underline underline-offset-4"
            >
              {cs.title}
            </Link>
            <p className="text-neutral-700 leading-relaxed">{cs.summary}</p>
            <Link
              href={`/case-studies/${cs.slug}`}
              className="inline-block text-sm underline underline-offset-4 text-neutral-800 hover:text-neutral-950"
            >
              More Details
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
