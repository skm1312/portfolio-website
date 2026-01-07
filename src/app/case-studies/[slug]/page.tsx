import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "../../site-data";

function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudy(params.slug);
  if (!cs) return notFound();

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <div className="text-sm text-neutral-500">{cs.org}</div>
        <h1 className="text-3xl font-semibold tracking-tight">{cs.title}</h1>
        <p className="text-lg text-neutral-700 leading-relaxed">{cs.oneLiner}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {cs.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-700"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      {cs.slug === "intelligent-agreement-hub" ? <IntelligentAgreementHubWriteup /> : <PlaceholderWriteup />}

      <div className="pt-6 border-t border-neutral-200">
        <Link className="underline underline-offset-4" href="/portfolio">
          ← Back to Product Portfolio
        </Link>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-2">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="text-neutral-700 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function IntelligentAgreementHubWriteup() {
  return (
    <div className="space-y-8">
      <Section title="Problem">
        <p>
          Creating, signing, and managing employment agreements for a global workforce is slow, manual, and expensive —
          often requiring external counsel per hire and introducing compliance risk.
        </p>
      </Section>

      <Section title="Goals / Success Metrics">
        <ul className="list-disc pl-5 space-y-1">
          <li>Reduce median time to generate a contract from ~5 business days to under 15 minutes.</li>
          <li>Target ~80% reduction in customer-reported spend on external legal counsel for standard agreements.</li>
          <li>Drive internal adoption: 90% of specialists using the system within 6 months.</li>
        </ul>
        <p className="text-sm text-neutral-500">
          Update these metrics to the exact numbers you want to publish.
        </p>
      </Section>

      <Section title="Solution">
        <p>
          Build a unified platform that supports the full <span className="font-medium">Create → Sign → Store</span>{" "}
          lifecycle: a rules engine to assemble compliant localized agreements, e-sign integration, and a secure searchable
          document vault.
        </p>
      </Section>

      <Section title="Key Product Decisions">
        <ul className="list-disc pl-5 space-y-1">
          <li>Start with an internal specialist workflow first; self-serve UI as a fast-follow.</li>
          <li>Launch with 3 priority markets (Canada, India, UK) to prove the model.</li>
          <li>“Compliance-as-Code”: legal clause updates treated like versioned releases with testing discipline.</li>
        </ul>
      </Section>

      <Section title="Scope">
        <ul className="list-disc pl-5 space-y-1">
          <li>In: Internal workflow UI, standard FTE agreements, e-sign + vault integration.</li>
          <li>Out: Contractor/executive agreements, post-signature lifecycle (amendments/terminations), self-serve v1.</li>
        </ul>
      </Section>
    </div>
  );
}

function PlaceholderWriteup() {
  return (
    <div className="space-y-8">
      <Section title="Overview">
        <p>
          Placeholder case study. Replace with: context, users, problem, your role, constraints, what you shipped, and impact.
        </p>
      </Section>
      <Section title="Suggested Structure">
        <ul className="list-disc pl-5 space-y-1">
          <li>Problem + who it impacted</li>
          <li>What you chose to do (and what you explicitly didn’t)</li>
          <li>How you prioritized</li>
          <li>Execution notes (trade-offs, iterations)</li>
          <li>Results (metrics) + learnings</li>
        </ul>
      </Section>
    </div>
  );
}
