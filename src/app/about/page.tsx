import Link from "next/link";
import { PageShell, PageTitle } from "../components/Page";
import { ProfileRow, Experience, Skills, Education, Certifications } from "../components/ProfileSections";
import { profile } from "../profile-data";

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <PageShell><PageTitle>About me.</PageTitle><p className="mt-5 max-w-2xl leading-7 text-neutral-700">{profile.summary}</p></PageShell>
      <ProfileRow title="My approach.">
        <p>I’m Jahnavi, an AI Product Manager based in Toronto. I started in software engineering at NCR and AWS before moving into product management. That background helps me work through API designs, delivery constraints, and AI quality questions with the people building the product.</p>
        <p>At Scotiabank, I focus on AI evaluation, prompt and RAG experimentation, and automation. Previously, at Ontario Centre of Innovation, I led AI chatbot delivery, grant workflow improvements, and enterprise integrations.</p>
        <p>I like product work where the outcome is tangible: someone completes a task more reliably, a team spends less time on manual handoffs, or a quality issue becomes easier to understand and fix.</p>
        <p>I’m also interested in healthcare technology and have been learning about interoperability concepts such as FHIR.</p>
      </ProfileRow>
      <ProfileRow title="Experience."><Experience /></ProfileRow>
      <ProfileRow title="Selected projects.">
        <div>
          <h3 className="font-extrabold">Healthcare Professional Portal</h3>
          <p>An independent case study on registration, identity matching, and profile updates across a professional portal and a master data platform.</p>
          <Link href="/case-studies/hcp-brand-portal" className="inline-block font-bold underline underline-offset-4">Read the case study →</Link>
        </div>
        <div>
          <h3 className="font-extrabold">The Intelligent Agreement Hub</h3>
          <p>A product proposal for bringing agreement creation, signature, and storage into one workflow, with clear ownership of legal rules and company policy.</p>
          <Link href="/case-studies/intelligent-agreement-hub" className="inline-block font-bold underline underline-offset-4">Read the proposal →</Link>
        </div>
      </ProfileRow>
      <ProfileRow title="Skills."><Skills /></ProfileRow>
      <ProfileRow title="Education."><Education /></ProfileRow>
      <ProfileRow title="Credentials."><Certifications /></ProfileRow>
      <Link href="/portfolio" className="inline-block underline underline-offset-4 font-bold">Explore the portfolio →</Link>
    </div>
  );
}
