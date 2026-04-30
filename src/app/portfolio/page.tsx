import Link from "next/link";
import { PageShell, PageTitle } from "../components/Page";
import ShadowBox from "../components/ShadowBox";
import { portfolioItems } from "./portfolio-data";
import { caseStudies } from "../site-data";

function LeftLabel({ text }: { text: string }) {
  return (
    <ShadowBox direction="tl" offset={6}>
      <div className="h-[200px] flex items-center justify-center">
        <div className="text-xl font-extrabold tracking-tight text-center px-4 leading-snug">{text}</div>
      </div>
    </ShadowBox>
  );
}

function RightPanel({ children }: { children: React.ReactNode }) {
  return (
    <ShadowBox direction="tl" offset={6}>
      <div className="bg-neutral-100 p-6">{children}</div>
    </ShadowBox>
  );
}

function PortfolioRow({ slug, tags, title, blurb, href }: (typeof portfolioItems)[number]) {
  const isExternal = href.startsWith("http") || href.endsWith(".pdf");
  // Pull richer meta from caseStudies if available
  const cs = caseStudies.find((c) => c.slug === slug);

  return (
    <>
      <div className="md:sticky md:top-28 self-start">
        <LeftLabel text={title} />
      </div>
      <RightPanel>
        {cs && (
          <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-neutral-300">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-neutral-500 mb-0.5">Product Type</div>
              <div className="text-xs font-bold text-neutral-800">{cs.productType}</div>
            </div>
            <div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-neutral-500 mb-0.5">User Base</div>
              <div className="text-xs font-bold text-neutral-800">{cs.userBase}</div>
            </div>
          </div>
        )}
        <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">{tags}</div>
        <p className="text-sm leading-7 text-neutral-800">{blurb}</p>
        <div className="mt-5">
          {isExternal ? (
            <a href={href} target="_blank" rel="noreferrer" className="font-extrabold underline underline-offset-4 text-sm">
              View Work →
            </a>
          ) : (
            <Link href={href} className="font-extrabold underline underline-offset-4 text-sm">
              View Work →
            </Link>
          )}
        </div>
      </RightPanel>
    </>
  );
}

export default function PortfolioPage() {
  return (
    <div className="space-y-10">
      <PageShell>
        <PageTitle>Product Portfolio.</PageTitle>
      </PageShell>

      <PageShell>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[380px_1fr]">
          {portfolioItems.map((item) => (
            <PortfolioRow key={item.slug} {...item} />
          ))}
        </div>
      </PageShell>
    </div>
  );
}
