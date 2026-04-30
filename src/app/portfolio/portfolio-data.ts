export type PortfolioItem = {
  slug: string;
  tags: string; // the small grey line at top
  title: string;
  blurb: string;
  // either internal case-study page OR external/pdf
  href: string;
  imageSrc: string; // put in /public/images/...
  imageAlt: string;
  // optional: invert layout for variety
  imageSide?: "right" | "left";
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "intelligent-agreement-hub",
    tags: "Product proposal · Compliance workflow · B2B SaaS",
    title: "The Intelligent Agreement Hub",
    blurb:
      "Proposed a unified Create–Sign–Store agreement platform for global employment agreements — eliminating external legal counsel dependency, cutting contract generation from 5 days to under 15 minutes, and turning a cost center into a strategic asset.",
    href: "/case-studies/intelligent-agreement-hub",
    imageSrc: "/images/agreement-hub.png",
    imageAlt: "Agreement Hub preview",
    imageSide: "right",
  },
  {
    slug: "hcp-brand-portal",
    tags: "API strategy · Healthcare MDM · Integration architecture",
    title: "HCP Brand Portal: API & Integration Strategy",
    blurb:
      "Designed the integration layer connecting a pharma brand portal to a healthcare MDM — 3-tier identity matching, controlled data ingestion via Data Change Requests, near-real-time CRM sync for high-value events, and a gap analysis that produced a new atomic endpoint proposal.",
    href: "/case-studies/hcp-brand-portal",
    imageSrc: "/images/hcp-brand-portal.png",
    imageAlt: "HCP Brand Portal integration architecture",
    imageSide: "right",
  },
  {
    slug: "accessoci-ai-assistant",
    tags: "AI assistant · Workflow automation",
    title: "Grant Platform AI Assistant",
    blurb:
      "Embedded an AI assistant in a grant platform to improve navigation, Q&A, and submission completion — increasing user engagement by 25% and driving a 15% uplift in grant submissions.",
    href: "/case-studies/accessoci-ai-assistant",
    imageSrc: "/images/accessoci-ai.png",
    imageAlt: "Grant Platform AI Assistant preview",
    imageSide: "right",
  },
  {
    slug: "grant-workflow-modernization",
    tags: "Product lifecycle · Platform modernization",
    title: "Grant Workflow Modernization",
    blurb:
      "Modernized intake + review workflows to cut turnaround time by 40% and scale processing capacity 3x year-over-year — from discovery through delivery.",
    href: "/case-studies/grant-workflow-modernization",
    imageSrc: "/images/grant-workflow.png",
    imageAlt: "Grant workflow modernization preview",
    imageSide: "right",
  },
];
