export const profile = {
  name: "Phany Jahnavi Uppuluri",
  email: "jahnavi.rao0104@gmail.com",
  phone: "647 336 6219",
  linkedin: "https://www.linkedin.com/in/phany-jahnavi-uppuluri-15459420a/",
  summary: "I’m a product manager with a software engineering background, working across LLM workflows, RAG, model evaluation, and API platforms.",
};

export const publication = {
  title: "Acoustic Event Classification using Graph Signals",
  venue: "IEEE TENCON",
  date: "Dec 2017",
  href: "https://ieeexplore.ieee.org/document/8228152",
  summary: "Coauthored research on graph signal features and SVM classification, evaluated against MFCC baselines in clean and noisy audio.",
  resumeSummary: "Coauthored research on graph signal features and SVM classification, evaluated against MFCC baselines.",
};

export const experience = [
  {
    company: "Scotiabank",
    role: "AI Product Manager",
    location: "Toronto, Canada",
    dates: "Aug 2026 to Present",
    points: [
      "Delivered RPA automations and LLM workflows within banking infrastructure, reducing manual processing and contributing to operational expense reductions exceeding $20M.",
      "Led prompt engineering and RAG experiments across retrieval context and response generation, improving task success by 46% and reducing hallucinations by 76%.",
      "Defined LLM evaluation criteria for factual accuracy, hallucinations, edge cases, and model drift, improving response quality by 68% and supporting production readiness.",
      "Specified agentic workflow orchestration, RAG requirements, safety guardrails, and data governance controls for production delivery in a banking environment.",
    ],
  },
  {
    company: "Ontario Centre of Innovation",
    role: "Technical Product Manager",
    location: "Toronto, Canada",
    dates: "Dec 2022 to Mar 2026",
    points: [
      "Redesigned grant intake and review workflows through automation and user research, reducing turnaround time by 40% and tripling annual processing capacity.",
      "Shipped an AI chatbot for program Q&A and submission guidance, increasing engagement by 25% and grant and event submission completions by 15%.",
      "Led API integrations and backend data flows for SugarCRM and SugarConnect, eliminating manual data handoffs across eight teams.",
      "Owned a roadmap across three platform workstreams, translating quarterly priorities into delivery plans with engineering, design, and executive stakeholders.",
      "Used Mixpanel, Hotjar, and user research to analyze funnel dropoffs and prioritize workflow changes, reducing low value feature work by 20%.",
    ],
  },
  {
    company: "Amazon Web Services",
    role: "Software Development Engineer",
    location: "Toronto, Canada",
    dates: "Sep 2021 to Dec 2022",
    points: [
      "Partnered with product, UX, and ML teams on 12 major platform releases per year, reducing feature cycle time by 30%.",
      "Developed identity microservices and API interfaces for account creation and system integration on a platform processing over 10 million daily authentication requests.",
      "Coordinated identity service releases, security compliance gates, and QA to balance delivery speed with reliability.",
      "Defined service success metrics and monitored KPIs across more than five identity workstreams to support release prioritization and executive roadmap reporting.",
    ],
  },
  { company: "NCR Corporation", role: "Software Developer", location: "Hyderabad, India", dates: "Apr 2018 to Aug 2019", points: [] },
];

export const skillGroups = [
  { title: "Product", text: "User research · Product requirements · Roadmaps · Prioritization · Stakeholder alignment · Agile · Scrum · Jira · Asana · Confluence · Figma · Miro · Productboard" },
  { title: "AI", text: "LLMs · RAG · Prompt engineering · Agentic workflows · LLM evaluation · Hallucination analysis · Edge case analysis · Model drift · Guardrails · RPA" },
  { title: "Data", text: "SQL · Mixpanel · Hotjar · Tableau · Power BI · A/B testing · Funnel analysis · FHIR fundamentals" },
  { title: "Engineering", text: "Java · Python · REST APIs · Microservices · OAuth2/OIDC · AWS · Azure · CI/CD · Kubernetes · Postman" },
];
