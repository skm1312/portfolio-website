import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "../../site-data";
import ShadowBox from "../../components/ShadowBox";
import { PageShell, PageTitle } from "../../components/Page";

function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return notFound();

  return (
    <div className="space-y-10">
      <PageShell>
        <PageTitle>{cs.title}</PageTitle>
      </PageShell>

      {/* Header meta card — full width, no left label */}
      <PageShell>
        <ShadowBox direction="tl" offset={6}>
          <div className="bg-neutral-100 p-6">
            <div className="text-sm font-bold text-neutral-500 mb-1">{cs.org}</div>
            <p className="text-base leading-7 text-neutral-700">{cs.oneLiner}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {cs.tags.map((t) => (
                <span key={t} className="border-2 border-neutral-900 px-3 py-1 text-xs font-bold text-neutral-900">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </ShadowBox>
      </PageShell>

      {/* Body — two-column sticky layout */}
      <PageShell>
        {cs.slug === "intelligent-agreement-hub" ? (
          <IntelligentAgreementHubWriteup />
        ) : cs.slug === "hcp-brand-portal" ? (
          <HCPBrandPortalWriteup />
        ) : (
          <PlaceholderWriteup />
        )}
      </PageShell>

      <PageShell>
        <Link className="underline underline-offset-4 font-bold" href="/portfolio">
          ← Back to Product Portfolio
        </Link>
      </PageShell>
    </div>
  );
}

/* ─────────────────────────────────────────
   Shared layout primitives
───────────────────────────────────────── */

function LeftLabel({ text }: { text: string }) {
  return (
    <ShadowBox direction="tl" offset={6}>
      <div className="h-[180px] flex items-center justify-center">
        <div className="text-3xl font-extrabold tracking-tight text-center px-4">{text}</div>
      </div>
    </ShadowBox>
  );
}

function RightPanel({ children }: { children: React.ReactNode }) {
  return (
    <ShadowBox direction="tl" offset={6}>
      <div className="bg-neutral-100 p-6 space-y-3 text-sm leading-7 text-neutral-800">{children}</div>
    </ShadowBox>
  );
}

function StickyRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <>
      <div className="md:sticky md:top-28 self-start">
        <LeftLabel text={label} />
      </div>
      <RightPanel>{children}</RightPanel>
    </>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <div className="font-extrabold text-neutral-900 mt-4 mb-1 first:mt-0">{children}</div>;
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function MetricBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-2 border-neutral-900 p-4 bg-white">
      <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">{label}</div>
      <div className="text-base font-extrabold text-neutral-900">{value}</div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Intelligent Agreement Hub
───────────────────────────────────────── */

function IntelligentAgreementHubWriteup() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[380px_1fr]">
      <StickyRow label="Problem">
        <p>
          Creating, signing, and managing employment agreements for a global workforce is slow, expensive, and legally
          risky. The existing workflow is fragmented across Word documents, email chains, local legal counsel, and
          disparate cloud storage — with no single system of record.
        </p>
        <p>
          Each international hire triggers an average of 5–7 business days of effort and $2,000–$5,000 in external
          legal fees. At scale, this model hits a hard ceiling: the only way to grow global headcount is to also grow
          the legal and operations team. That isn't a sustainable product.
        </p>
        <p>
          The opportunity is to treat the contract lifecycle not as an administrative burden but as a{" "}
          <strong>strategic platform asset</strong> — one that delivers compliance confidence, operational velocity,
          and structured insight from every agreement ever signed.
        </p>
      </StickyRow>

      <StickyRow label="Who This Is For">
        <SubHeading>Primary customer (External) — HR Managers & People Ops at SMBs</SubHeading>
        <p>
          They submit hiring details and wait. They can't give candidates a clear timeline, and they have no
          visibility into where a contract is in the legal review process. Every international hire is a black box.
        </p>
        <SubHeading>Primary user (Internal) — Legal & Onboarding Operations Teams</SubHeading>
        <p>
          Their workflow is manual and unscalable. They juggle Word documents, email threads, and external lawyer
          reviews simultaneously. Their capacity directly caps the company's ability to expand into new markets.
        </p>
        <SubHeading>End user (External) — Candidates / New Hires</SubHeading>
        <p>
          The current experience asks candidates to print, sign, scan, and email sensitive legal documents. It's
          insecure, cumbersome, and signals a poor employer brand before day one.
        </p>
      </StickyRow>

      <StickyRow label="Metrics">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <MetricBadge label="Velocity" value="5 days → under 15 min" />
          <MetricBadge label="Cost reduction" value="80% less legal spend" />
          <MetricBadge label="Adoption" value="90% specialist use in 6 months" />
        </div>
        <p className="mt-2 text-xs text-neutral-500">
          Confidence score target: 4.5/5.0 via post-generation survey. Baseline: $2,000–$5,000/contract, 5–7 business
          days per international hire.
        </p>
      </StickyRow>

      <StickyRow label="Scope">
        <p>
          A unified, API-driven platform for the full agreement lifecycle —{" "}
          <strong>Create → Sign → Store</strong> — can transform a cost center into a proprietary competitive asset.
          The legal rules engine is the moat: difficult to replicate, improving over time, near-zero marginal cost
          per contract at scale.
        </p>
        <SubHeading>In scope (v1)</SubHeading>
        <Ul items={[
          "Internal-facing UI for specialists to manage the full Create–Sign–Store workflow",
          "Standard full-time employment agreements in 3 priority markets: Canada, India, UK",
          "Deep integration with a leading e-signature API",
          "Secure, searchable document vault",
        ]} />
        <SubHeading>Out of scope</SubHeading>
        <Ul items={[
          "Customer-facing self-service UI — planned as a fast-follow post v1 validation",
          "Contractor, freelance, and executive-level agreements",
          "Post-signature lifecycle management (amendments, terminations)",
        ]} />
      </StickyRow>

      <StickyRow label="Architecture">
        <p>
          The core challenge: combining two rule sets that operate at different change frequencies — immutable local
          law and configurable company policy.
        </p>
        <SubHeading>Layer 1 — Immutable Local Laws</SubHeading>
        <p>
          A version-controlled, centrally managed library of legally mandated clauses per country. Non-editable by
          end users. Legal partners shift from manual drafting to auditing and updating clause logic — their role
          becomes a quality gate on a software release, not a bespoke drafting engagement.
        </p>
        <SubHeading>Layer 2 — Variable Company Policies</SubHeading>
        <p>
          A customer-specific library of optional clauses — NDAs, IP assignment, remote work policies, stock options.
          Customers configure these directly in an admin panel.
        </p>
        <p>
          The rules engine dynamically assembles the final contract by combining the mandatory legal base for the
          hire's country with the customer's selected policies, producing a compliant, localized agreement in minutes.
        </p>
      </StickyRow>

      <StickyRow label="Solutions">
        <SubHeading>Solution 1 — Unified Internal Platform (Recommended)</SubHeading>
        <p>
          Specialists use a proprietary rules engine to create contracts; the platform handles Sign and Store
          seamlessly in one workflow. The only architecture designed for exponential growth at near-zero marginal
          cost per contract.
        </p>
        <SubHeading>Solution 2 — Tech-Enabled Concierge Service</SubHeading>
        <p>
          Specialists manually draft via a co-pilot tool, then upload into the platform for Sign and Store. Removes
          the legal bottleneck but retains a human creation bottleneck — doesn't scale.
        </p>
        <SubHeading>Solution 3 — Legal Partner Marketplace</SubHeading>
        <p>
          Customers select a law firm from within the platform; the firm uploads the draft, then the platform handles
          Sign and Store. Introduces an external partner dependency that limits speed and differentiation.
        </p>
        <p>
          <strong>Recommendation: Solution 1.</strong> It is the only path to a fully automated, self-service,
          instantaneous experience — and the rules engine itself becomes a proprietary moat competitors cannot
          easily replicate.
        </p>
      </StickyRow>

      <StickyRow label="Risks">
        <SubHeading>Legal / Compliance Risk</SubHeading>
        <p>
          The rules engine containing outdated or incorrect legal logic — a single bad clause invalidates a contract
          and exposes the customer to liability.
        </p>
        <p>
          <strong>Mitigation: Compliance-as-Code.</strong> Legal clause updates are treated exactly like software
          releases — versioned, reviewed by legal partners, automatically tested, and deployed through formal change
          management. No clause goes live without passing the same quality bar as a production code deployment.
        </p>
        <SubHeading>Technical Risk</SubHeading>
        <p>
          Building an integrated platform across contract generation, e-signature, and vault introduces multiple
          points of failure across system boundaries.
        </p>
        <p>
          <strong>Mitigation: Microservices architecture.</strong> Create, Sign, and Store are distinct services
          with robust APIs — independent development, independent scaling, fault isolation so a failure in one
          component doesn't cascade.
        </p>
      </StickyRow>
    </div>
  );
}

/* ─────────────────────────────────────────
   HCP Brand Portal
───────────────────────────────────────── */

function HCPBrandPortalWriteup() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[380px_1fr]">
      <StickyRow label="Problem">
        <p>
          A major pharma customer is launching a gated brand portal for a newly approved allergy drug. Healthcare
          Professionals (HCPs) register on the portal to verify their identity, track product interests, update
          demographic information, and request drug samples.
        </p>
        <p>
          None of these actions are isolated — each one must connect to a healthcare master data management (MDM)
          system, the system of record for every HCP in the network. The challenge: designing an integration layer
          fast enough for a real-time registration experience, accurate enough to protect MDM integrity, and
          auditable enough to meet pharma compliance requirements.
        </p>
        <SubHeading>Four integration functions to wire end-to-end:</SubHeading>
        <Ul items={[
          "Identity verification — match HCP registration data against an existing Golden Record in the MDM",
          "Registration & interest tracking — record when an HCP registered and which products they indicated interest in",
          "Profile updates — ingest updated demographics via controlled Data Change Request (DCR), never a direct overwrite",
          "High-value engagement handling — trigger near-real-time push to Pharma CRM when an HCP requests a drug sample",
        ]} />
      </StickyRow>

      <StickyRow label="Design Decisions">
        <SubHeading>A1 — Strict matching over flexible matching</SubHeading>
        <p>
          Prioritize high-confidence matching to protect MDM integrity, even at the cost of some registration
          friction. A mis-matched Golden Record cascades into CRM, compliance, and sampling systems downstream —
          the risk of a false positive far outweighs the cost of a manual review queue.
        </p>
        <SubHeading>A2 — No direct overwrite; MDM is always the System of Record</SubHeading>
        <p>
          All portal submissions enter a pending DCR state and are validated before being applied to any record.
          The portal acts as a data collector, not a data owner. This prevents data corruption in all downstream
          systems that depend on the MDM.
        </p>
        <SubHeading>A3 — Tiered sync model by event type</SubHeading>
        <p>
          Sample requests require near-real-time CRM sync (&lt;30 seconds) — a delayed notification means a missed
          sales rep touchpoint. Profile updates are processed asynchronously in batch. Registration verification is
          synchronous — the HCP waits for a match result before proceeding.
        </p>
      </StickyRow>

      <StickyRow label="Matching Engine">
        <p>
          NPI (National Provider Identifier) is the primary match key. Required fields: NPI, first name, last name,
          ZIP code, and state (used as a partial address signal, not a full address match).
        </p>
        <div className="space-y-4 mt-2">
          <div className="border-l-4 border-neutral-900 pl-4">
            <div className="font-extrabold">Tier 1 — Exact Match (High Confidence)</div>
            <p className="mt-1">NPI matches AND full name matches (normalized, case-insensitive). Action: Auto-verify, return HCP VID, proceed to registration immediately.</p>
          </div>
          <div className="border-l-4 border-neutral-500 pl-4">
            <div className="font-extrabold">Tier 2 — Fuzzy Match (Medium Confidence)</div>
            <p className="mt-1">NPI matches AND name similarity ≥85% (Jaro-Winkler), OR NPI missing but name + ZIP/State partial-match. Action: Flag for human review, queue in portal, notify HCP to wait.</p>
          </div>
          <div className="border-l-4 border-neutral-300 pl-4">
            <div className="font-extrabold">Tier 3 — No Match</div>
            <p className="mt-1">NPI not found OR name similarity below threshold. Action: Reject auto-verify, prompt for additional credentials or full manual review.</p>
          </div>
        </div>
      </StickyRow>

      <StickyRow label="Ingestion Rules">
        <p>Every field update submitted through the portal is staged and validated before any MDM record is changed.</p>
        <SubHeading>R1 — Source Priority</SubHeading>
        <p>Portal submissions enter pending DCR state. No field in the MDM is overwritten until the DCR is approved — automatically or by a data steward.</p>
        <SubHeading>R2 — Address Ingestion</SubHeading>
        <p>Duplicate check on address line + ZIP. New address → added as Active, prior Active moved to Inactive. Active = currently practicing there. Inactive = no longer in use.</p>
        <SubHeading>R3 — Specialty Updates</SubHeading>
        <p>Specialty changes trigger a DCR workflow and are validated against medical board registries and NPI specialty codes before any record is updated.</p>
        <SubHeading>R4 — Email & Phone</SubHeading>
        <p>New contact info added as an alternate record, never replacing the existing primary. Deduplication check runs before write.</p>
        <SubHeading>R5 — Audit Trail</SubHeading>
        <p>Every ingestion event writes a log: submission_id, timestamp, HCP VID, fields changed, previous values, source = 'brand_portal'. Full traceability for compliance review.</p>
      </StickyRow>

      <StickyRow label="API Contract">
        <SubHeading>Registration & Verification</SubHeading>
        <p>
          <code className="font-mono text-xs bg-white border border-neutral-300 px-1 py-0.5">POST /api/v1/brand-portal/register</code>{" "}
          — Synchronous. HCP waits for the match result. NPI is the primary match key. Returns match_tier, confidence score (0.0–1.0), HCP VID for verified records, and engagement_logged confirmation.
        </p>
        <SubHeading>Profile Update</SubHeading>
        <p>
          <code className="font-mono text-xs bg-white border border-neutral-300 px-1 py-0.5">POST /api/v1/brand-portal/profile-update</code>{" "}
          — All updates enter DCR state. Requires hcp_vid from a prior match. Address updates require an intent field (new_primary or add). Specialty changes trigger the full DCR validation workflow.
        </p>
      </StickyRow>

      <StickyRow label="Gap Analysis">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <MetricBadge label="GAP 1 · HIGH" value="No atomic registration endpoint" />
          <MetricBadge label="GAP 2 · HIGH" value="No idempotency key on ingest" />
          <MetricBadge label="GAP 3 · MEDIUM" value="No native product interest object" />
          <MetricBadge label="GAP 4 · HIGH" value="No outbound CRM webhook" />
        </div>
        <Ul items={[
          "GAP 1 — Match and ingest APIs are separate calls. A single HCP registration requires 3+ sequential API calls with no atomic rollback if one fails.",
          "GAP 2 — Two identical registration payloads create two independent DCRs. Duplicate detection must be built entirely by the caller.",
          "GAP 3 — The MDM exposes standard HCP fields but has no native product_interests[], portal_engagement, or interaction_history field.",
          "GAP 4 — MDM-to-downstream data flow uses batch/scheduled export jobs only. No push notification or webhook — making near-real-time CRM sync impossible without custom polling infrastructure.",
        ]} />
      </StickyRow>

      <StickyRow label="Roadmap Pitch">
        <p>
          <code className="font-mono text-xs bg-white border border-neutral-300 px-1 py-0.5">POST /v1/hcp/portal-engage</code>{" "}
          — one atomic call that resolves all four gaps simultaneously.
        </p>
        <Ul items={[
          "Single atomic call: Match + Verify + Ingest + Record in one request — no chaining, no partial failure states",
          "Idempotency key: Prevents duplicate submissions from creating redundant records",
          "Native product interests: Stores product_interests[] directly on the HCP record — no custom objects",
          "CRM webhook: Triggers a configurable webhook to the Pharma CRM when high_value_event flag is set (sample request)",
          "Enriched response: Returns Golden Record + match_tier + confidence_score + engagement_logged confirmation",
          "Audit log: Writes a portal_engagement_event with source, timestamp, and product interaction data",
        ]} />
        <p>
          This endpoint transforms the integration layer from a brittle, multi-call orchestration into a single,
          reliable contract — reducing failure surface, eliminating duplicate-record risk, and enabling the
          near-real-time sample-request flow the existing architecture cannot support.
        </p>
      </StickyRow>
    </div>
  );
}

/* ─────────────────────────────────────────
   Placeholder
───────────────────────────────────────── */

function PlaceholderWriteup() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[380px_1fr]">
      <StickyRow label="Overview">
        <p>Placeholder case study. Replace with: context, users, problem, your role, constraints, what you shipped, and impact.</p>
      </StickyRow>
      <StickyRow label="Structure">
        <Ul items={[
          "Problem + who it impacted",
          "What you chose to do (and what you explicitly didn't)",
          "How you prioritized",
          "Execution notes (trade-offs, iterations)",
          "Results (metrics) + learnings",
        ]} />
      </StickyRow>
    </div>
  );
}
