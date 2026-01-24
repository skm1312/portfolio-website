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
    slug: "accessoci-ai-assistant",
    tags: "AI assistant, Workflow automation",
    title: "AccessOCI AI Assistant",
    blurb:
      "Embedded an AI assistant in a grant platform to improve navigation, Q&A, and submission completion.",
    href: "/case-studies/accessoci-ai-assistant",
    imageSrc: "/images/accessoci-ai.png",
    imageAlt: "AccessOCI AI Assistant preview",
    imageSide: "right",
  },
  {
    slug: "grant-workflow-modernization",
    tags: "Product lifecycle, Platform modernization",
    title: "Grant Workflow Modernization",
    blurb:
      "Modernized intake + review workflows to reduce cycle time and improve throughput across internal teams.",
    href: "/case-studies/grant-workflow-modernization",
    imageSrc: "/images/grant-workflow.png",
    imageAlt: "Grant workflow modernization preview",
    imageSide: "right",
  },
  {
    slug: "intelligent-agreement-hub",
    tags: "Product proposal, Compliance workflow",
    title: "The Intelligent Agreement Hub",
    blurb:
      "Proposed a create–sign–store agreement workflow for global employment agreements with compliant storage and search.",
    href: "/intelligent-agreement-hub.pdf", // put your PDF in /public
    imageSrc: "/images/agreement-hub.png",
    imageAlt: "Agreement Hub preview",
    imageSide: "right",
  },
];
