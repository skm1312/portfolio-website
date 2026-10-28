import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "../../site-data";
import ShadowBox from "../../components/ShadowBox";
import { PageShell, PageTitle } from "../../components/Page";
import { ProfileRow } from "../../components/ProfileSections";

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  return { title: study ? `${study.title} | Jahnavi Uppuluri` : "Project not found", description: study?.oneLiner };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();

  return (
    <div className="space-y-10">
      <PageShell>
        <p className="text-xs font-extrabold text-purple-800 uppercase tracking-widest mb-4">{study.status} · {study.org}</p>
        <PageTitle>{study.title}</PageTitle>
        <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-700">{study.oneLiner}</p>
      </PageShell>
      <PageShell>
        <ShadowBox direction="tl"><div className="grid sm:grid-cols-2 gap-5 bg-neutral-100 p-6">
          <div><h2 className="text-xs uppercase font-extrabold text-neutral-600 mb-2">Product</h2><p className="text-sm font-bold">{study.productType}</p></div>
          <div><h2 className="text-xs uppercase font-extrabold text-neutral-600 mb-2">Users</h2><p className="text-sm font-bold">{study.userBase}</p></div>
        </div></ShadowBox>
      </PageShell>
      {study.metrics && (
        <PageShell><div className="grid sm:grid-cols-3 gap-4">{study.metrics.map((metric) => (
          <div key={metric.label} className="border-2 border-neutral-900 p-5"><p className="text-3xl font-extrabold">{metric.value}</p><p className="mt-2 text-sm text-neutral-600">{metric.label}</p></div>
        ))}</div></PageShell>
      )}
      {study.sections.map((section) => (
        <ProfileRow key={section.title} title={section.title}>
          {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.points && <ul className="list-disc pl-5 space-y-3">{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
        </ProfileRow>
      ))}
      <Link className="inline-block underline underline-offset-4 font-bold" href="/portfolio">← Back to portfolio</Link>
    </div>
  );
}
