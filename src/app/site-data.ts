import { experience } from "./profile-data";

export type CaseStudy = {
  slug: string;
  org: string;
  title: string;
  status: "Professional experience" | "Product proposal";
  productType: string;
  userBase: string;
  oneLiner: string;
  tags: string[];
  metrics?: { value: string; label: string }[];
  sections: { title: string; paragraphs?: string[]; points?: string[] }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-quality-and-evaluation",
    org: "Scotiabank",
    title: "LLM workflows and banking automation",
    status: "Professional experience",
    productType: "RPA, agentic workflows, and LLM evaluation",
    userBase: "Business users and internal delivery teams",
    oneLiner: "Delivered banking automation using RPA and LLM workflows, with prompt engineering, RAG experiments, and evaluation criteria guiding production readiness.",
    tags: ["RPA", "Agentic workflows", "RAG", "LLM evaluation"],
    metrics: [
      { value: "68%", label: "Improvement in response quality" },
      { value: "46%", label: "Improvement in task success" },
      { value: "76%", label: "Reduction in hallucinations" },
    ],
    sections: [
      { title: "The problem", paragraphs: ["The challenge was to translate banking processes into automation requirements that could run within existing infrastructure. I worked across RPA, agentic workflows, and LLM behavior, connecting business tasks with prompt and retrieval requirements, evaluation criteria, and data governance."] },
      { title: "My contribution", points: experience[0].points },
      { title: "Technical approach", paragraphs: ["I treated prompt design, retrieved context, and generated responses as parts of the same workflow. Evaluation criteria covered factual accuracy, hallucinations, edge cases, and drift, while task success connected those technical measures to whether the automation helped someone complete their work.", "This summary describes my scope and outcomes. It omits internal prompts, datasets, architecture, and customer information."] },
    ],
  },
  {
    slug: "identity-platform-delivery",
    org: "Amazon Web Services",
    title: "Delivering an identity platform at scale",
    status: "Professional experience",
    productType: "Identity APIs and microservices",
    userBase: "Platform consumers and engineering teams",
    oneLiner: "Delivered secure identity services on a platform processing over 10 million daily authentication requests, working across engineering, product, UX, and ML teams.",
    tags: ["Platform engineering", "APIs", "Release quality", "Identity"],
    metrics: [{ value: "10M+", label: "Daily authentication requests" }, { value: "12", label: "Major releases per year" }, { value: "30%", label: "Reduction in feature cycle time" }],
    sections: [
      { title: "My role", paragraphs: ["As a Software Development Engineer at AWS, I developed identity microservices and API interfaces for account creation and integration workflows. The work combined software delivery with security compliance gates, quality assurance, and service success metrics on a platform processing over 10 million daily authentication requests."] },
      { title: "Delivery and operation", points: experience[2].points },
      { title: "What I bring forward", paragraphs: ["I bring software engineering experience to discussions about architecture, release risk, and platform dependencies. It helps me work closely with engineers and turn a product objective into a delivery decision with clear success measures."] },
    ],
  },
  {
    slug: "accessoci-ai-assistant",
    org: "Ontario Centre of Innovation",
    title: "Grant Platform AI Assistant",
    status: "Professional experience",
    productType: "AI assistant in a grant platform",
    userBase: "Grant applicants and innovation ecosystem participants",
    oneLiner: "Shipped an AI chatbot for program Q&A and submission guidance, increasing engagement by 25% and grant and event submission completions by 15%.",
    tags: ["Conversational AI", "Q&A workflows", "Funnel analysis", "Product delivery"],
    metrics: [{ value: "25%", label: "Increase in user engagement" }, { value: "15%", label: "Uplift in submission completions" }],
    sections: [
      { title: "The user need", paragraphs: ["The grant platform connects program discovery with application submission. The AI chatbot supported program Q&A and submission guidance within that journey. My product scope connected chatbot requirements and delivery with engagement and completion measures."] },
      { title: "My contribution", points: [experience[1].points[1], experience[1].points[4], experience[1].points[3]] },
      { title: "The outcome", paragraphs: ["The assistant increased user engagement by 25% and drove a 15% uplift in grant and event submission completions. Tracking completion alongside engagement connected product usage to the task applicants came to accomplish."] },
    ],
  },
  {
    slug: "grant-workflow-modernization",
    org: "Ontario Centre of Innovation",
    title: "Grant Workflow Modernization",
    status: "Professional experience",
    productType: "Workflow automation and enterprise integration",
    userBase: "Grant applicants, reviewers, and internal operations teams",
    oneLiner: "Redesigned application workflows and connected enterprise systems, reducing turnaround time by 40% and tripling annual processing capacity.",
    tags: ["Platform delivery", "API integration", "User research", "Roadmaps"],
    metrics: [{ value: "40%", label: "Reduction in turnaround time" }, { value: "3×", label: "Annual processing capacity" }, { value: "8", label: "Teams with manual handoffs eliminated" }],
    sections: [
      { title: "The problem", paragraphs: ["Grant processing depended on workflows and systems that created manual handoffs. The product opportunity was to make the application journey faster while increasing the capacity of the teams operating it."] },
      { title: "My contribution", points: ["Used automation and user research to redesign the grant application workflow.", experience[1].points[2], "Owned the roadmap across three workstreams and led quarterly prioritization with engineering, design, and executive stakeholders.", "Used Mixpanel, Hotjar, and continuous research to challenge priorities and reduce low value feature work by 20%."] },
      { title: "The outcome", paragraphs: ["Turnaround time fell by 40% and processing capacity grew to three times the previous year. The integrations supported a shared workflow across eight teams, connecting platform changes to an operational result."] },
    ],
  },
  {
    slug: "hcp-brand-portal",
    org: "Independent product case study",
    title: "Healthcare Professional Portal",
    status: "Product proposal",
    productType: "API and integration strategy",
    userBase: "Healthcare professionals, data stewards, and CRM teams",
    oneLiner: "An integration proposal for identity matching, controlled profile updates, and CRM event delivery between a professional portal and a healthcare master data platform.",
    tags: ["API integration", "Data quality", "Workflow design"],
    sections: [
      { title: "The proposal", paragraphs: ["This independent case study explores how a portal could verify healthcare professional identities and submit profile updates while preserving the master data platform as the system of record. The focus is on registration, profile maintenance, and reliable data exchange."] },
      { title: "Design decisions", points: ["Use deterministic identity matching where possible and route ambiguous matches to a data steward.", "Submit profile changes as reviewable requests rather than overwriting the master record.", "Separate synchronous registration from asynchronous profile review and CRM event delivery.", "Propose an atomic registration contract with idempotency and clear failure handling to reduce partial updates across services."] },
      { title: "Success metrics", paragraphs: ["The measurement plan covers registration completion, identity match accuracy, duplicate record rates, data steward workload, and CRM event delivery reliability. These measures connect integration quality to the experience of portal users and operations teams."] },
    ],
  },
  {
    slug: "intelligent-agreement-hub",
    org: "Global employment platform exploration",
    title: "The Intelligent Agreement Hub",
    status: "Product proposal",
    productType: "Agreement lifecycle platform proposal",
    userBase: "HR managers, legal specialists, and operations teams",
    oneLiner: "A platform proposal for generating, signing, and storing employment agreements with versioned legal rules and configurable company policy.",
    tags: ["Platform strategy", "Versioning", "Workflow design"],
    sections: [
      { title: "The proposal", paragraphs: ["This proposal brings agreement creation, electronic signature, and document storage into one workflow. The aim is to reduce coordination between HR, operations, and legal teams. It is a product design exercise, with proposed targets rather than production results."] },
      { title: "Platform decisions", points: ["Separate centrally managed legal rules from company policy so each can change with clear ownership.", "Version legal clauses and test changes before release, with legal review as an explicit decision point.", "Start with internal specialist workflows in a limited set of markets before adding broader customer access.", "Compare a shared platform with concierge and marketplace alternatives, considering repeat usage, operating cost, and review requirements."] },
      { title: "How I would measure value", paragraphs: ["Validate the current workflow with legal and operations teams, then measure time to a reviewed agreement, rework, specialist adoption, and cost per agreement. A proposed generation target is under 15 minutes, subject to the required review process."] },
    ],
  },
];

export const featuredWork = caseStudies.slice(0, 4);
