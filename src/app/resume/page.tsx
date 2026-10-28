import { PageShell, PageTitle } from "../components/Page";
import { ProfileRow, Experience, Skills, Education, Certifications } from "../components/ProfileSections";
import { profile } from "../profile-data";

export default function ResumePage() {
  return (
    <div className="resume-page space-y-10">
      <PageShell>
        <div className="text-center"><PageTitle>{profile.name}</PageTitle></div>
        <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
          <a className="text-link" href="tel:+16473366219">{profile.phone}</a>
          <a className="text-link" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
        <div className="mt-5 text-center">
          <a href="/resume.pdf" download="Jahnavi-Uppuluri-Resume.pdf" className="button-primary">Download resume <span aria-hidden="true">↓</span></a>
        </div>
      </PageShell>
      <ProfileRow title="Experience."><Experience /></ProfileRow>
      <ProfileRow title="Skills."><Skills /></ProfileRow>
      <ProfileRow title="Education."><Education /></ProfileRow>
      <ProfileRow title="Credentials."><Certifications /></ProfileRow>
    </div>
  );
}
