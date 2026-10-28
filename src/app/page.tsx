import Link from "next/link";
import { featuredWork } from "./site-data";
import ShadowBox from "./components/ShadowBox";
import { PageShell } from "./components/Page";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <PageShell>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="space-y-6">
            <p className="eyebrow">AI product management · Toronto</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.12]">Hi, I’m Jahnavi.<br />I turn complex workflows into useful products.</h1>
            <p className="max-w-xl text-base leading-7 text-neutral-700">I work with engineering teams on RPA, LLM workflows, prompt design, and RAG, using evaluation results to guide delivery. My background spans banking automation, public sector platforms, and identity services at AWS.</p>
            <div className="flex flex-wrap items-center gap-5">
              <Link className="button-primary" href="/portfolio">Explore my work <span aria-hidden="true">↗</span></Link>
              <Link className="text-link" href="/resume">View resume</Link>
            </div>
          </div>
          <ShadowBox direction="tl" offset={6}>
            <div className="bg-neutral-100 p-6 sm:p-8 space-y-6">
              <p className="eyebrow">How I work</p>
              {[
                ["01", "Start with the task", "Understand the people using the product and what gets in their way."],
                ["02", "Choose what matters", "Set clear priorities and measures that connect the work to a useful outcome."],
                ["03", "Close the loop", "Use evaluation results and product analytics to guide the next iteration."],
              ].map(([number, title, detail]) => (
                <div key={number} className="flex gap-4">
                  <span className="font-extrabold text-sm pt-1 text-neutral-900">{number}</span>
                  <div><h2 className="font-extrabold">{title}</h2><p className="text-sm leading-6 text-neutral-600 mt-1">{detail}</p></div>
                </div>
              ))}
            </div>
          </ShadowBox>
        </div>
      </PageShell>
      <PageShell>
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">Selected work.</h2>
          <Link href="/portfolio" className="text-link text-sm">View all work →</Link>
        </div>
        <div className="grid gap-7 md:grid-cols-2">
          {featuredWork.map((item) => (
            <ShadowBox key={item.slug} direction="tl">
              <article className="bg-neutral-100 p-6 h-full flex flex-col">
                <div className="eyebrow">{item.org}</div>
                <p className="mt-3 status-label">{item.status}</p>
                <h3 className="mt-2 text-xl font-extrabold tracking-tight"><Link href={`/case-studies/${item.slug}`} className="hover:underline underline-offset-4">{item.title}</Link></h3>
                <p className="mt-3 text-sm leading-7 text-neutral-700">{item.oneLiner}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => <span key={tag} className="border border-neutral-900 px-2 py-1 text-xs font-bold">{tag}</span>)}
                </div>
              </article>
            </ShadowBox>
          ))}
        </div>
      </PageShell>
    </div>
  );
}
