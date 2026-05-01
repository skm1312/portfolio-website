import Link from "next/link";
import { featuredWork } from "./site-data";
import ShadowBox from "./components/ShadowBox";
import { PageShell } from "./components/Page";

export default function HomePage() {
  return (
    <div className="space-y-14">
      {/* Hero */}
      <PageShell>
        <div className="space-y-6">
          <div className="max-w-[560px]">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Hey, I'm Jahnavi — a Product Builder from Toronto.
            </h1>
          </div>
          <p className="max-w-[560px] text-base leading-7 text-neutral-700">
            I build AI-enabled workflows and internal/external SaaS experiences — from discovery and user research
            through delivery and GTM. Here's my{" "}
            <Link className="underline underline-offset-4 text-purple-700 font-bold" href="/resume">
              resume
            </Link>
            .
          </p>
          <a className="inline-block underline underline-offset-4 font-bold" href="mailto:jahnavi.rao0104@gmail.com">
            jahnavi.rao0104@gmail.com
          </a>
        </div>
      </PageShell>

      {/* Featured Work */}
      <PageShell>
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Featured Work.</h2>

          <div className="space-y-6">
            {featuredWork.map((item) => (
              <ShadowBox key={item.slug} direction="tl" offset={6}>
                <div className="bg-neutral-100 p-6">
                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    {item.org}
                  </div>
                  <Link
                    href={`/case-studies/${item.slug}`}
                    className="block text-xl font-extrabold tracking-tight hover:underline underline-offset-4 mt-1"
                  >
                    {item.title}
                  </Link>
                  <p className="mt-2 text-sm leading-6 text-neutral-700">{item.oneLiner}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span key={t} className="border-2 border-neutral-900 px-2 py-0.5 text-xs font-bold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </ShadowBox>
            ))}
          </div>

          <Link href="/portfolio" className="inline-block underline underline-offset-4 font-bold">
            → View full portfolio
          </Link>
        </div>
      </PageShell>
    </div>
  );
}
