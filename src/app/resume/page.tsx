import Link from "next/link";
import { PageShell, PageTitle } from "../components/Page";
import { ProfileRow, Experience, Skills, Education, Certifications } from "../components/ProfileSections";
import PrintResume from "../components/PrintResume";
import { profile } from "../profile-data";

export default function ResumePage() {
  return (
    <div className="resume-page space-y-10">
      <PageShell>
        <div className="flex flex-wrap justify-between items-center gap-4"><PageTitle>{profile.name}</PageTitle><PrintResume /></div>
        <p className="mt-4 font-bold text-purple-800">AI Product Manager · Toronto, Canada</p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="underline underline-offset-4" href="tel:+16473366219">{profile.phone}</a>
          <a className="underline underline-offset-4" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
        <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-700">{profile.summary}</p>
      </PageShell>
      <ProfileRow title="Experience."><Experience /></ProfileRow>
      <ProfileRow title="Selected project.">
        <h3 className="font-extrabold">Healthcare Professional Portal · Independent case study</h3>
        <p>Explored data ownership, identity matching, and review workflows for a healthcare professional portal connected to a master data platform.</p>
        <p>Outlined API flows for registration, profile updates, and CRM synchronization, with attention to data quality and exception handling.</p>
        <Link href="/case-studies/hcp-brand-portal" className="inline-block underline underline-offset-4 font-bold">Read the case study →</Link>
      </ProfileRow>
      <ProfileRow title="Skills."><Skills /></ProfileRow>
      <ProfileRow title="Education."><Education /></ProfileRow>
      <ProfileRow title="Credentials."><Certifications /></ProfileRow>
    </div>
  );
}
