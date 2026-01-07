import Link from "next/link";
import { ShadowBox } from "../components/ShadowBox";

function LeftLabel({ text }: { text: string }) {
  return (
    <ShadowBox direction="tl" offset={6}>
      <div className="h-[180px] flex items-center justify-center">
        <div className="text-3xl font-extrabold tracking-tight">{text}</div>
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

function H3({ children }: { children: React.ReactNode }) {
  return <div className="mb-2 text-sm font-extrabold">{children}</div>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-sm leading-6 text-neutral-900">{children}</p>;
}

function Spacer() {
  return <div className="h-3" />;
}

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-extrabold tracking-tight">About Me.</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[380px_1fr]">
        {/* ABOUT */}
        <div className="md:sticky md:top-28 self-start">
          <LeftLabel text="About." />
        </div>
        <RightPanel>
          <H3>About Me:</H3>
          <P>
            I’m Jahnavi — a Technical Product Manager who ships workflow automation, AI experiences, and API-first
            systems. I work across discovery → delivery, pairing product strategy with technical depth to make smart
            trade-offs.
          </P>
          <Spacer />
          <P>
            Recently, I optimized a grant application workflow (reduced turnaround time by 40% and scaled throughput to
            1,680 applications/year), and shipped an AI-powered chatbot that improved engagement and submissions.
          </P>
          <Spacer />
          <P>
            Email:{" "}
            <a className="underline underline-offset-4 font-bold" href="mailto:jahnavi.rao0104@gmail.com">
              jahnavi.rao0104@gmail.com
            </a>{" "}
            · Resume:{" "}
            <a
              className="underline underline-offset-4 font-bold text-purple-700"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              resume.pdf
            </a>
          </P>
        </RightPanel>

        {/* PROJECTS */}
        <div className="md:sticky md:top-28 self-start">
          <LeftLabel text="Projects." />
        </div>
        <RightPanel>
          <H3>Selected Work:</H3>

          <P>
            <strong>AccessOCI AI Assistant</strong> — AI chatbot embedded in a grant platform to improve navigation, Q&A,
            and submission completion.
          </P>
          <Spacer />

          <P>
            <strong>Grant Workflow Modernization</strong> — redesigned intake and review workflows to reduce cycle time
            and increase throughput.
          </P>
          <Spacer />

          <P>
            <strong>The Intelligent Agreement Hub</strong> — product proposal for a compliant create–sign–store workflow
            for global employment agreements.
          </P>
        </RightPanel>

        {/* SKILLS */}
        <div className="md:sticky md:top-28 self-start">
          <LeftLabel text="Skills." />
        </div>
        <RightPanel>
          <H3>Product:</H3>
          <P>Discovery, prioritization, PRDs, roadmaps, stakeholder alignment, experimentation, delivery.</P>
          <Spacer />

          <H3>Technical:</H3>
          <P>APIs, integrations, analytics, AI/LLM patterns, CI/CD.</P>
          <Spacer />

          <H3>Certifications:</H3>
          <P>PMP (2024), Product Management training.</P>
        </RightPanel>
      </div>

      <div>
        <Link href="/portfolio" className="underline underline-offset-4 font-bold">
          → View Product Portfolio
        </Link>
      </div>
    </div>
  );
}
