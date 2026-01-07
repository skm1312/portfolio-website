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
    org: "Justworks (Product Proposal)",
    title: "The Intelligent Agreement Hub",
    category: "Compliance automation, e-sign + doc vault",
    oneLiner: "Transform global employment agreements into a compliant create-sign-store workflow.",
    summary:
      "A proposal for an API-driven platform that generates localized, compliant employment agreements in minutes, integrates e-signature, and stores contracts in a searchable vault.",
    tags: ["B2B SaaS", "Compliance", "Workflow", "Platform"],
  },
  {
    slug: "accessoci-ai-assistant",
    org: "Ontario Centre of Innovation (OCI)",
    title: "AccessOCI AI Assistant",
    category: "AI assistant, self-serve enablement",
    oneLiner: "An AI assistant embedded in a grant platform to improve navigation, answers, and submissions.",
    summary:
      "Case study placeholder — add your context, decisions, architecture, and outcomes (deflection, time-to-answer, submissions uplift).",
    tags: ["AI", "LLMs", "UX", "Analytics"],
  },
  {
    slug: "grant-workflow-modernization",
    org: "Ontario Centre of Innovation (OCI)",
    title: "Grant Workflow Modernization",
    category: "Workflow redesign, stakeholder experience",
    oneLiner: "Modernized intake + review workflows to reduce cycle time and increase throughput.",
    summary:
      "Case study placeholder — highlight problem framing, prioritization, delivery, and measurable improvements.",
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
