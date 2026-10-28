import { experience, skillGroups, publication } from "../profile-data";
import ShadowBox from "./ShadowBox";

export function ProfileRow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="profile-row grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="md:sticky md:top-28 self-start">
        <ShadowBox direction="tl">
          <h2 className="px-5 py-6 md:py-12 text-2xl font-extrabold tracking-tight">{title}</h2>
        </ShadowBox>
      </div>
      <ShadowBox direction="tl">
        <div className="bg-neutral-100 p-6 sm:p-8 text-sm leading-7 space-y-5">{children}</div>
      </ShadowBox>
    </div>
  );
}

export function Experience() {
  return (
    <div className="space-y-8">
      {experience.map((job) => (
        <article key={job.company} className="space-y-2">
          <h3 className="font-extrabold text-base">{job.company}</h3>
          <p className="font-bold">{job.role}</p>
          <p className="text-neutral-600 text-xs">{job.location} · {job.dates}</p>
          {job.points.length > 0 && (
            <ul className="list-disc pl-5 space-y-2">
              {job.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

export function Skills() {
  return <>{skillGroups.map((group) => (
    <div key={group.title}>
      <h3 className="font-extrabold">{group.title}</h3>
      <p>{group.text}</p>
    </div>
  ))}</>;
}

export function Education() {
  return (
    <>
      <div><h3 className="font-extrabold">University of Regina</h3><p>Master of Science in Computer Science</p><p className="text-neutral-600">Regina, Canada · May 2021</p></div>
      <div><h3 className="font-extrabold">GITAM University</h3><p>Bachelor of Science in Computer Science</p><p className="text-neutral-600">Visakhapatnam, India · May 2018</p></div>
    </>
  );
}

export function Certifications() {
  return (
    <>
      <p><strong>Professional Scrum Product Owner I (PSPO I)</strong><br />Scrum.org · Sep 2026</p>
      <p><strong>Project Management Professional (PMP)</strong><br />PMI · July 2024</p>
      <p><strong>Product Manager Certification</strong><br />BrainStation · Oct 2022</p>
      <div>
        <p><a className="text-link" href={publication.href} target="_blank" rel="noreferrer">{publication.title}</a><br />{publication.venue} · {publication.date}</p>
        <p className="mt-2 text-neutral-700">{publication.summary}</p>
      </div>
    </>
  );
}
