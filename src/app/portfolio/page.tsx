import Link from "next/link";
import { PageShell, PageTitle } from "../components/Page";
import ShadowBox from "../components/ShadowBox";
import { portfolioItems } from "./portfolio-data";

function LeftLabel({ text }: { text: string }) {
  return (
    <ShadowBox direction="tl" offset={6}>
      <div className="h-[180px] flex items-center justify-center">
        <div className="text-2xl font-extrabold tracking-tight text-center px-4 leading-tight">{text}</div>
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

function PortfolioRow({ tags, title, blurb, href }: (typeof portfolioItems)[number]) {
  const isExternal = href.startsWith("http") || href.endsWith(".pdf");

  return (
    <>
      <div className="md:sticky md:top-28 self-start">
        <LeftLabel text={title} />
      </div>
      <RightPanel>
        <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">{tags}</div>
        <p className="text-sm leading-7 text-neutral-800">{blurb}</p>
        <div className="mt-5">
          {isExternal ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="font-extrabold underline underline-offset-4 text-sm"
            >
              Read Case Study →
            </a>
          ) : (
            <Link href={href} className="font-extrabold underline underline-offset-4 text-sm">
              Read Case Study →
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
