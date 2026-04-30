export type CaseStudy = {
  slug: string;
  org: string;
  title: string;
  category: string;
  oneLiner: string;
  summary: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "intelligent-agreement-hub",
    org: "Global HR Platform (Product Proposal)",
    title: "The Intelligent Agreement Hub",
    category: "Compliance automation, e-sign + doc vault",
    oneLiner: "Transform global employment agreements into a compliant create-sign-store workflow.",
    summary:
      "A proposal for an API-driven platform that generates localized, compliant employment agreements in minutes, integrates e-signature, and stores contracts in a searchable vault.",
    tags: ["B2B SaaS", "Compliance", "Workflow", "Platform"],
  },
  {
    slug: "hcp-brand-portal",
    org: "Pharma Technology Integration (Product Proposal)",
    title: "HCP Brand Portal: API & Integration Strategy",
    category: "API strategy, Healthcare MDM integration",
    oneLiner:
      "Designed the integration architecture connecting a gated HCP brand portal to a healthcare master data management system — covering identity verification, controlled data ingestion, and real-time CRM sync.",
    summary:
      "A technical product proposal covering 3-tier identity matching, controlled MDM ingestion, near-real-time CRM push, and a gap analysis that proposed a new atomic API endpoint to replace a fragmented 3-call registration flow.",
    tags: ["API Strategy", "Healthcare", "MDM", "B2B SaaS"],
  },
  {
    slug: "accessoci-ai-assistant",
    org: "Ontario Centre of Innovation (OCI)",
    title: "AccessOCI AI Assistant",
    category: "AI assistant, self-serve enablement",
    oneLiner: "An AI assistant embedded in a grant platform to improve navigation, answers, and submissions.",
    summary:
      "Led end-to-end delivery of an AI-powered chatbot that increased user engagement by 25% and drove a 15% uplift in grant and event submission completions.",
    tags: ["AI", "LLMs", "UX", "Analytics"],
  },
  {
    slug: "grant-workflow-modernization",
    org: "Ontario Centre of Innovation (OCI)",
    title: "Grant Workflow Modernization",
    category: "Workflow redesign, stakeholder experience",
    oneLiner: "Modernized intake + review workflows to reduce cycle time and increase throughput.",
    summary:
      "Redesigned the grant application workflow using automation and user research insights, cutting turnaround time by 40% and scaling processing capacity 3x year-over-year.",
    tags: ["Workflow", "Ops", "SaaS", "Delivery"],
  },
  {
    slug: "security-awareness-rollout",
    org: "OCI (CIRA Platform)",
    title: "Cybersecurity Awareness Training Rollout",
    category: "Program launch, adoption",
    oneLiner: "Rolled out awareness training to improve security behaviors and organizational readiness.",
    summary:
      "Case study placeholder — add launch plan, comms, adoption strategy, and completion/phish metrics.",
    tags: ["GTM", "Adoption", "Enablement"],
  },
];

export const featuredWork = [
  caseStudies[0],
  caseStudies[1],
  caseStudies[2],
  caseStudies[3],
];
