import Link from "next/link";
import { PageShell, PageTitle } from "../components/Page";
import ShadowBox from "../components/ShadowBox";
import { portfolioItems } from "./portfolio-data";

export default function PortfolioPage() {
  return (
    <div className="space-y-10">
      <PageShell>
        <PageTitle>Product portfolio.</PageTitle>
        <p className="mt-5 max-w-2xl text-neutral-700 leading-7">A selection of AI workflows, platform improvements, and integration projects. These include professional experience and independent product case studies.</p>
      </PageShell>
      <PageShell>
        <div className="space-y-8">
          {portfolioItems.map((item) => (
            <ShadowBox key={item.slug} direction="tl">
              <article className="grid gap-6 md:grid-cols-[230px_1fr] p-6 sm:p-8 bg-neutral-100">
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-600">{item.org}</p>
                  <p className="text-xs font-bold text-purple-800">{item.status}</p>
                  <h2 className="text-xl font-extrabold tracking-tight"><Link href={item.href} className="hover:underline underline-offset-4">{item.title}</Link></h2>
                </div>
                <div className="space-y-4">
                  <p className="text-sm leading-7">{item.oneLiner}</p>
                  <div className="grid sm:grid-cols-2 gap-4 text-xs border-t border-neutral-300 pt-4">
                    <div><h3 className="font-extrabold mb-1">Product</h3><p>{item.productType}</p></div>
                    <div><h3 className="font-extrabold mb-1">Users</h3><p>{item.userBase}</p></div>
                  </div>
                  <div className="flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="border border-neutral-900 px-2 py-1 text-xs font-bold">{tag}</span>)}</div>
                  <Link href={item.href} className="inline-block font-bold underline underline-offset-4 text-sm">View work →</Link>
                </div>
              </article>
            </ShadowBox>
          ))}
        </div>
      </PageShell>
    </div>
  );
}
