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
      {/* Title */}
      <PageShell>
        <PageTitle>{cs.title}</PageTitle>
      </PageShell>

      {/* Meta row */}
      <PageShell>
        <ShadowBox direction="tl" offset={6}>
          <div className="bg-neutral-100 p-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div>
                <div className="text-xs font-extrabold uppercase tracking-widest text-neutral-500 mb-1">Product Type</div>
                <div className="text-sm font-bold text-neutral-900">{cs.productType}</div>
              </div>
              <div>
                <div className="text-xs font-extrabold uppercase tracking-widest text-neutral-500 mb-1">User Base</div>
                <div className="text-sm font-bold text-neutral-900">{cs.userBase}</div>
              </div>
              <div>
                <div className="text-xs font-extrabold uppercase tracking-widest text-neutral-500 mb-1">Company</div>
                <div className="text-sm font-bold text-neutral-900">{cs.org}</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-neutral-300">
              {cs.tags.map((t) => (
                <span key={t} className="border-2 border-neutral-900 px-3 py-1 text-xs font-bold">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </ShadowBox>
      </PageShell>

      {/* Body */}
      <PageShell>
        {cs.slug === "intelligent-agreement-hub" ? (
          <IntelligentAgreementHubContent />
        ) : cs.slug === "hcp-brand-portal" ? (
          <HCPBrandPortalContent />
        ) : cs.slug === "accessoci-ai-assistant" ? (
          <GrantPlatformAIContent />
        ) : cs.slug === "grant-workflow-modernization" ? (
          <GrantWorkflowContent />
        ) : (
          <PlaceholderContent />
        )}
      </PageShell>

      <PageShell>
        <Link className="underline underline-offset-4 font-bold" href="/portfolio">
          ← Back to Portfolio
        </Link>
      </PageShell>
    </div>
  );
}

/* ─────────────────────────────────────────
   Layout primitives
───────────────────────────────────────── */

function LeftLabel({ text }: { text: string }) {
  return (
    <ShadowBox direction="tl" offset={6}>
      <div className="h-[180px] flex items-center justify-center">
        <div className="text-2xl font-extrabold tracking-tight text-center px-4 leading-tight">{text}</div>
      </div>
    </ShadowBox>
  );
}

function RightPanel({ children }: { children: React.ReactNode }) {
  return (
    <ShadowBox direction="tl" offset={6}>
      <div className="bg-neutral-100 p-6 text-sm leading-7 text-neutral-800 space-y-3">{children}</div>
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

function Ul({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

function Metric({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="border-2 border-neutral-900 p-4 bg-white">
      <div className="text-xs font-extrabold uppercase tracking-widest text-neutral-500 mb-1">{label}</div>
      <div className="text-xl font-extrabold text-neutral-900">{value}</div>
      {sub && <div className="text-xs text-neutral-500 mt-0.5">{sub}</div>}
    </div>
  );
}

function SubH({ children }: { children: React.ReactNode }) {
  return <div className="font-extrabold text-neutral-900 mt-4 first:mt-0">{children}</div>;
}

/* ─────────────────────────────────────────
   1. Intelligent Agreement Hub
───────────────────────────────────────── */

function IntelligentAgreementHubContent() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[380px_1fr]">

      <StickyRow label="The Product">
        <p>
          The Intelligent Agreement Hub is a platform proposal for a unified employment agreement lifecycle — spanning
          contract generation, e-signature, and secure document storage. It targets global Employer-of-Record (EOR)
          platforms whose agreement workflow is fragmented across Word documents, email chains, local legal counsel,
          and disparate cloud storage.
        </p>
        <p>
          Each international hire currently takes 5–7 business days and $2,000–$5,000 in external legal fees. The
          platform replaces that process with an API-driven rules engine that assembles a compliant, localized
          agreement in under 15 minutes — turning a cost center into a proprietary strategic asset.
        </p>
      </StickyRow>

      <StickyRow label="My Role">
        <p>
          I authored this product proposal end-to-end — from problem framing and customer segmentation through
          solution architecture, scope definition, risk analysis, and roadmap recommendation. The work was structured
          as a full product brief intended to drive organizational alignment and engineering investment.
        </p>
        <p>
          My focus was on making the business case airtight: grounding every decision in a measurable outcome,
          evaluating trade-offs between three distinct solution architectures, and designing a compliance methodology
          that treated legal updates with the same rigor as software releases.
        </p>
      </StickyRow>

      <StickyRow label="What I Did">
        <Ul items={[
          "Defined the problem space through customer segmentation across three user types — external HR buyers, internal ops specialists, and end-user candidates — mapping distinct pain points and business impact for each",
          "Established baseline metrics from industry data ($2,000–$5,000 per contract, 5–7 days per hire) to anchor success targets and build the investment case",
          "Scoped v1 to 3 priority markets (Canada, India, UK) and internal specialist workflows only — explicitly deferring self-serve UI and post-signature lifecycle to focus the engineering bet",
          "Designed a two-layered dynamic assembly model separating immutable local law (version-controlled, centrally managed) from configurable company policy (customer-managed admin panel)",
          "Evaluated three solution architectures — Unified Platform, Concierge Service, Legal Marketplace — and recommended the Unified Platform as the only model that scales at near-zero marginal cost per contract",
          "Introduced 'Compliance-as-Code': legal clause updates treated as versioned software releases with automated testing and a formal deployment process",
          "Defined risk mitigations for both legal/compliance failure modes and technical integration failure modes across microservices boundaries",
        ]} />
      </StickyRow>

      <StickyRow label="Metrics">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Metric label="Velocity target" value="< 15 min" sub="Down from 5–7 business days" />
          <Metric label="Legal cost reduction" value="80%" sub="Customer spend on external counsel" />
          <Metric label="Adoption target" value="90%" sub="Specialist adoption within 6 months" />
        </div>
        <p className="text-xs text-neutral-500 mt-1">
          Customer confidence score target: 4.5/5.0 via post-generation survey.
        </p>
      </StickyRow>

      <StickyRow label="Key Takeaways">
        <Ul items={[
          "Scoping is strategy — explicitly defining what is out of scope (self-serve UI, executive agreements, post-signature lifecycle) was as important as defining what was in scope, keeping the v1 bet focused and testable",
          "Legal as a software release: Compliance-as-Code reframes legal review from a bottleneck into a quality gate — the same rigor applied to a code deployment applies to a clause update",
          "Architecture determines ceiling — the Unified Platform is the only architecture that enables a fully self-service, instantaneous experience; the other two solutions introduce human or partner bottlenecks that cap scale",
          "A rules engine is a moat — proprietary legal logic that improves over time and is difficult to replicate is a stronger competitive differentiator than UX alone",
        ]} />
      </StickyRow>

    </div>
  );
}

/* ─────────────────────────────────────────
   2. HCP Brand Portal
───────────────────────────────────────── */

function HCPBrandPortalContent() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[380px_1fr]">

      <StickyRow label="The Product">
        <p>
          A major pharma customer is launching a gated brand portal for a newly approved allergy drug. Healthcare
          Professionals (HCPs) register on the portal to verify their identity, declare product interests, update
          their practice information, and request drug samples.
        </p>
        <p>
          None of these actions are standalone — each must connect to the customer's healthcare Master Data Management
          (MDM) system, which is the system of record for every HCP in the network. The integration layer I designed
          sits between the portal and the MDM, handling identity verification, controlled data ingestion, and
          high-value event routing to the Pharma CRM.
        </p>
      </StickyRow>

      <StickyRow label="My Role">
        <p>
          I served as the product owner for the API and integration strategy — responsible for defining the
          integration architecture, authoring the API contracts, establishing the data ingestion rules, conducting a
          gap analysis against the existing MDM API surface, and proposing a roadmap to close the gaps.
        </p>
        <p>
          The work required deep collaboration with engineering on technical feasibility and close alignment with
          compliance stakeholders on data governance — particularly around the principle that the portal is a
          data collector, not a data owner.
        </p>
      </StickyRow>

      <StickyRow label="What I Did">
        <Ul items={[
          "Defined four core integration requirements — identity verification, registration & interest tracking, profile updates via DCR, and near-real-time CRM push for high-value engagements (sample requests)",
          "Established key design decisions: strict matching over flexible matching to protect MDM integrity; no direct overwrite (all portal submissions enter pending Data Change Request state); tiered sync model (synchronous for registration, near-real-time for sample requests, async batch for profile updates)",
          "Designed a 3-tier matching engine using NPI as the primary key — Tier 1 exact match auto-verifies, Tier 2 fuzzy match (≥85% Jaro-Winkler) routes to human review, Tier 3 no match rejects and prompts for additional credentials",
          "Authored five data ingestion rules governing source priority, address deduplication, specialty validation via medical board registries, email/phone as alternates (not replacements), and a full audit trail per ingestion event",
          "Authored the API contracts for registration/verification (synchronous, NPI-keyed) and profile updates (DCR-based, async)",
          "Conducted a gap analysis identifying 4 platform gaps — no atomic registration endpoint, no idempotency key on ingest, no native product interest object, no outbound CRM webhook",
          "Proposed a new endpoint (POST /v1/hcp/portal-engage) that resolves all 4 gaps in a single atomic call — combining match, verify, ingest, product interest capture, and CRM webhook in one contract",
        ]} />
      </StickyRow>

      <StickyRow label="Metrics">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Metric label="Platform gaps closed" value="4 → 1" sub="Endpoint consolidation via roadmap pitch" />
          <Metric label="API calls per registration" value="3+ → 1" sub="Atomic endpoint eliminates chaining" />
          <Metric label="CRM sync SLA" value="< 30 sec" sub="Near-real-time for sample request events" />
        </div>
      </StickyRow>

      <StickyRow label="Key Takeaways">
        <Ul items={[
          "Data integrity over convenience: prioritizing strict MDM matching — even at the cost of registration friction — prevents downstream corruption in CRM, compliance, and sampling systems that depend on the Golden Record as source of truth",
          "The portal is a data collector, not a data owner: framing this principle early shaped every ingestion rule and governance decision throughout the design",
          "Gap analysis as roadmap input: documenting platform gaps with evidence (HIGH/MEDIUM severity, root cause per gap) gave the engineering team a concrete, prioritized pitch rather than vague technical debt",
          "Atomic API design reduces operational surface: consolidating 3+ chained calls into one endpoint eliminates partial-failure states, removes duplicate-record risk, and makes the integration dramatically easier to test and monitor",
        ]} />
      </StickyRow>

    </div>
  );
}

/* ─────────────────────────────────────────
   3. Grant Platform AI Assistant
───────────────────────────────────────── */

function GrantPlatformAIContent() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[380px_1fr]">

      <StickyRow label="The Product">
        <p>
          The Grant Platform is a web platform that serves as the primary interface through which organizations
          discover, apply for, and manage funding programs — spanning the full lifecycle from discovery through
          decision.
        </p>
        <p>
          The AI Assistant is an embedded chatbot that helps applicants navigate program eligibility, find the right
          funding stream, get answers to submission questions, and complete applications — without needing to call
          support or wait for a staff response. It was designed to reduce friction at the highest drop-off points in
          the funnel without replacing the human advisory layer for complex cases.
        </p>
      </StickyRow>

      <StickyRow label="My Role">
        <p>
          As Technical Product Manager, I owned the full delivery lifecycle — from discovery and requirement
          definition through sprint execution, stakeholder alignment, and go-to-market. I worked directly with
          engineering, design, and the executive team to define scope, set success metrics, and manage
          prioritization trade-offs across the delivery timeline.
        </p>
      </StickyRow>

      <StickyRow label="What I Did">
        <Ul items={[
          "Ran discovery across applicant support tickets, drop-off data, and funnel analysis (Mixpanel, Hotjar) to identify the highest-friction points in the application journey — navigation confusion, eligibility uncertainty, and mid-form abandonment",
          "Defined the AI assistant's scope: answering program eligibility questions, surfacing relevant funding streams, guiding users through submission requirements, and escalating edge cases to human advisors",
          "Translated OKRs into user stories and acceptance criteria, improving sprint delivery velocity by 30% and compressing release cycles by 25%",
          "Managed prioritization across engineering and design — balancing AI response quality, platform stability, and delivery timelines within a fixed sprint cadence",
          "Coordinated go-to-market with communications, customer success, and the executive team — hitting adoption targets within 30 days of launch",
          "Monitored post-launch performance through engagement metrics and submission funnel data to validate impact and inform follow-on iterations",
        ]} />
      </StickyRow>

      <StickyRow label="Metrics">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Metric label="User engagement" value="+25%" sub="Increase post-AI assistant launch" />
          <Metric label="Submission completions" value="+15%" sub="Grant & event submission uplift" />
          <Metric label="Sprint velocity" value="+30%" sub="Via OKR-to-story translation discipline" />
        </div>
      </StickyRow>

      <StickyRow label="Key Takeaways">
        <Ul items={[
          "AI as an enablement layer: the assistant was most effective when scoped to specific, high-frequency friction points (eligibility questions, navigation) rather than trying to automate the full advisory experience",
          "Funnel data drives scope decisions: drop-off analysis was the single most credible input for prioritizing which questions the assistant should answer first — more actionable than any stakeholder assumption",
          "OKR-to-story discipline compounds: translating OKRs into explicit acceptance criteria before sprint planning reduced scope creep and gave engineering a clear definition of done, which directly drove the velocity improvement",
          "Soft launch with monitoring: shipping to a subset of users first and tracking engagement and submission rate before full release gave us a feedback loop to validate the assistant's responses before broad exposure",
        ]} />
      </StickyRow>

    </div>
  );
}

/* ─────────────────────────────────────────
   4. Grant Workflow Modernization
───────────────────────────────────────── */

function GrantWorkflowContent() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[380px_1fr]">

      <StickyRow label="The Product">
        <p>
          The grant management platform processes hundreds of funding applications per year across multiple
          innovation programs. The intake and review workflow — the end-to-end path from application submission
          through reviewer assignment, evaluation, and decision — was built on a fragmented, largely manual process
          that created bottlenecks at every handoff.
        </p>
        <p>
          Reviewers were managing applications through email threads and spreadsheets. Program managers had no
          real-time visibility into pipeline status. Applicants received inconsistent updates and experienced long
          waits with no transparency. The system could not scale to meet growing application volumes without
          proportional headcount growth.
        </p>
      </StickyRow>

      <StickyRow label="My Role">
        <p>
          As Technical Product Manager, I owned the modernization initiative end-to-end — leading discovery,
          solution design, stakeholder alignment, delivery management, and go-to-market. I worked across engineering,
          program operations, and the executive team to redesign the workflow and integrate the tooling required to
          automate it.
        </p>
      </StickyRow>

      <StickyRow label="What I Did">
        <Ul items={[
          "Conducted continuous user research and funnel analysis using Mixpanel and Hotjar to map the current workflow, identify drop-off points, and surface the root causes of delay at each stage of the intake and review process",
          "Ran stakeholder interviews across reviewers, program managers, and the BD team to understand workflow pain points from every seat in the process — not just the applicant-facing surface",
          "Designed the modernized intake and review workflow — reducing manual handoffs, standardizing reviewer assignment logic, and introducing automated status notifications at key milestones",
          "Led integration of SugarCRM and SugarConnect across business development workflows, enabling 20+ leads to manage client pipelines, track engagement, and eliminate manual email-based handoffs",
          "Owned the rolling product roadmap across 3 concurrent workstreams, facilitating quarterly prioritization sessions with engineering, design, and executive stakeholders to sequence delivery against strategic goals",
          "Continuously used funnel and engagement data to challenge low-value feature requests — reducing work on initiatives that didn't move the key throughput or cycle time metrics by 20%",
          "Defined and executed go-to-market plans for 2 major platform releases, coordinating across engineering, marketing, and customer success to hit adoption targets within 30 days of each launch",
        ]} />
      </StickyRow>

      <StickyRow label="Metrics">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Metric label="Turnaround time" value="−40%" sub="Grant application processing time" />
          <Metric label="Processing capacity" value="3× YoY" sub="Applications processed per year" />
          <Metric label="Low-value work" value="−20%" sub="Feature work eliminated via data" />
        </div>
        <div className="mt-4">
          <Metric label="CRM adoption" value="20+ leads" sub="Managing pipelines via integrated CRM" />
        </div>
      </StickyRow>

      <StickyRow label="Key Takeaways">
        <Ul items={[
          "Automation at the handoff: the biggest throughput gains came not from speeding up individual tasks but from eliminating the wait time between them — automating handoffs and status notifications was the highest-leverage change",
          "User research across all seats: interviewing reviewers and program managers alongside applicants surfaced workflow problems that were invisible from the applicant side alone — the bottlenecks were almost entirely internal",
          "Data as a prioritization tool: using Mixpanel and Hotjar data to challenge feature requests — rather than just validate them — created a culture where every addition had to justify itself against the throughput metrics",
          "Roadmap across concurrent workstreams: maintaining a rolling roadmap with quarterly prioritization sessions kept three parallel tracks aligned and gave stakeholders a transparent view of sequencing trade-offs",
        ]} />
      </StickyRow>

    </div>
  );
}

/* ─────────────────────────────────────────
   Placeholder
───────────────────────────────────────── */

function PlaceholderContent() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-[380px_1fr]">
      <StickyRow label="The Product">
        <p>Add context — what is this product, who uses it, and why does it matter?</p>
      </StickyRow>
      <StickyRow label="My Role">
        <p>Describe your scope of ownership and who you worked with.</p>
      </StickyRow>
      <StickyRow label="What I Did">
        <p>Bullet the specific actions you took — research, decisions, delivery, stakeholder management.</p>
      </StickyRow>
      <StickyRow label="Metrics">
        <p>Quantify the outcome.</p>
      </StickyRow>
      <StickyRow label="Key Takeaways">
        <p>What did you learn that changed how you work?</p>
      </StickyRow>
    </div>
  );
}
