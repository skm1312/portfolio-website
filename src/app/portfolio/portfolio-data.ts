import { caseStudies } from "../site-data";

// Keep portfolio summaries aligned with their case studies.
export const portfolioItems = caseStudies.map((study) => ({
  ...study,
  href: `/case-studies/${study.slug}`,
}));
