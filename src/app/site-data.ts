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
    title: "Improving AI workflows at Scotiabank",
    status: "Professional experience",
    productType: "AI evaluation and RAG workflows",
    userBase: "Business users and internal delivery teams",
    oneLiner: "Defined evaluation metrics and led prompt and retrieval experiments to improve response quality, task success, and production readiness.",
    tags: ["AI evaluation", "RAG", "Experimentation", "Safety guardrails"],
    metrics: [
      { value: "68%", label: "Improvement in response quality" },
      { value: "46%", label: "Improvement in task success" },
      { value: "76%", label: "Reduction in hallucinations" },
    ],
    sections: [
      { title: "The problem", paragraphs: ["A fluent AI response is only useful if it helps someone complete their task reliably. My work at Scotiabank focuses on making that quality measurable and turning business needs into requirements that engineering teams can implement."] },
      { title: "My contribution", points: ["Defined evaluation metrics for accuracy, hallucinations, edge cases, and model drift to assess response quality and production readiness.", "Authored requirements for LLM prompts, RAG workflows, safety guardrails, and data governance.", "Led prompt and retrieval experiments, using task success and hallucination measures to assess improvements.", "Delivered AI and bot automations that reduced manual work and contributed to operational expense reductions exceeding $20M."] },
      { title: "Product judgment", paragraphs: ["I connect AI quality to the task the user needs to complete. Accuracy, task success, and hallucination measures provide different signals, so they should remain visible separately when assessing a change.", "This summary describes my scope and outcomes. It omits internal prompts, datasets, architecture, and customer information."] },
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
      { title: "My role", paragraphs: ["As a Software Development Engineer at AWS, I worked on secure identity microservices and platform integrations. This experience shaped how I approach product decisions today: understand the API contract, the operational requirements, and the teams that depend on a change."] },
      { title: "Delivery and operation", points: ["Partnered with product managers, UX, and ML teams to define and ship 12 major releases per year.", "Delivered identity microservices supporting account creation and reliable integrations on a platform processing over 10 million daily authentication requests.", "Coordinated release management, security compliance gates, and quality assurance across delivery teams.", "Defined success metrics and monitored KPIs across more than five concurrent identity workstreams to support prioritization and roadmap visibility."] },
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
    oneLiner: "Led delivery of an AI chatbot that increased user engagement by 25% and improved grant and event submission completions by 15%.",
    tags: ["AI product delivery", "User journeys", "Discovery", "Analytics"],
    metrics: [{ value: "25%", label: "Increase in user engagement" }, { value: "15%", label: "Uplift in submission completions" }],
    sections: [
      { title: "The user need", paragraphs: ["The grant platform helps organizations discover funding opportunities and complete submissions. The assistant supported that journey, with engagement and submission completion as the measures of user value."] },
      { title: "My contribution", points: ["Led delivery of the AI chatbot from product requirements through implementation.", "Used continuous user research and funnel analysis with Mixpanel and Hotjar to inform product priorities.", "Maintained a rolling roadmap across three workstreams and facilitated quarterly prioritization with engineering, design, and executive stakeholders."] },
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
      { title: "My contribution", points: ["Used automation and user research to redesign the grant application workflow.", "Led SugarCRM and SugarConnect integrations through APIs and backend services, connecting applications and eliminating manual handoffs for eight teams.", "Owned the roadmap across three workstreams and led quarterly prioritization with engineering, design, and executive stakeholders.", "Used Mixpanel, Hotjar, and continuous research to challenge priorities and reduce low value feature work by 20%."] },
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
      { title: "What I would measure", paragraphs: ["Test match quality and steward workload before setting thresholds. Measure registration completion, incorrect matches, duplicate records, and event delivery reliability. Endpoint consolidation and faster CRM delivery are design goals, not achieved outcomes."] },
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
