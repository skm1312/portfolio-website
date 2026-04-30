export type CaseStudy = {
  slug: string;
  org: string;
  title: string;
  productType: string;
  userBase: string;
  oneLiner: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "intelligent-agreement-hub",
    org: "Global EOR Platform",
    title: "The Intelligent Agreement Hub",
    productType: "B2B SaaS · Platform Proposal",
    userBase: "HR Managers, Legal & Ops Specialists, Candidates",
    oneLiner:
      "Designed a unified Create–Sign–Store platform to eliminate dependency on external legal counsel and compress international employment agreement generation from 5 days to under 15 minutes.",
    tags: ["B2B SaaS", "Compliance", "API Platform", "Workflow Automation"],
  },
  {
    slug: "hcp-brand-portal",
    org: "Pharma Technology Platform",
    title: "HCP Brand Portal: API & Integration Strategy",
    productType: "API Integration Strategy · B2B SaaS",
    userBase: "Healthcare Professionals, Pharma CRM Teams, Internal Ops",
    oneLiner:
      "Architected the integration layer connecting a gated brand portal to a healthcare MDM — 3-tier identity matching, controlled data ingestion, near-real-time CRM sync, and a gap analysis that condensed a fragmented 3-call flow into a single atomic endpoint.",
    tags: ["API Strategy", "Healthcare", "MDM", "Integration Architecture"],
  },
  {
    slug: "accessoci-ai-assistant",
    org: "Public Sector Technology Platform",
    title: "Grant Platform AI Assistant",
    productType: "AI-Powered Web Platform",
    userBase: "Grant Applicants, Innovation Ecosystem Stakeholders",
    oneLiner:
      "Led end-to-end delivery of an AI assistant embedded in a grant platform — increasing user engagement by 25% and driving a 15% uplift in grant and event submission completions.",
    tags: ["AI / LLMs", "Self-Serve Enablement", "UX", "Analytics"],
  },
  {
    slug: "grant-workflow-modernization",
    org: "Public Sector Technology Platform",
    title: "Grant Workflow Modernization",
    productType: "Internal Platform · Workflow Automation",
    userBase: "Grant Reviewers, Applicants, Business Development Team",
    oneLiner:
      "Redesigned intake and review workflows using automation and continuous user research — cutting turnaround time by 40% and scaling processing capacity 3× year-over-year.",
    tags: ["Workflow Design", "Platform Modernization", "Ops", "CRM Integration"],
  },
];

export const featuredWork = caseStudies.slice(0, 4);
