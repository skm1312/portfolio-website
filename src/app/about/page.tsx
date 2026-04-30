import Link from "next/link";
import ShadowBox from "../components/ShadowBox";
import { PageShell, PageTitle } from "../components/Page";

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

function Ul({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-4 space-y-1">
      {items.map((item, i) => (
        <li key={i} className="text-sm leading-6 text-neutral-900">{item}</li>
      ))}
    </ul>
  );
}

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <PageShell>
        <PageTitle>About Me.</PageTitle>
      </PageShell>

      <PageShell>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[380px_1fr]">

          {/* ABOUT */}
          <div className="md:sticky md:top-28 self-start">
            <LeftLabel text="About." />
          </div>
          <RightPanel>
            <H3>Who I Am</H3>
            <P>
              I'm Jahnavi — a Technical Product Manager based in Toronto who ships AI-enabled workflows, API-first
              platforms, and internal SaaS experiences. I work across the full product lifecycle — from discovery and
              user research through delivery and go-to-market — pairing product strategy with genuine technical depth
              to make smart trade-offs and move fast without breaking things.
            </P>
            <Spacer />
            <P>
              My background spans software engineering (AWS, NCR) and product management in the public sector,
              which means I'm equally comfortable reading an API spec and running a stakeholder prioritization
              session. I've shipped on platforms processing 10M+ daily requests and on platforms that directly
              impact how organizations access public funding.
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
                href="/resume"
              >
                View Resume
              </a>
            </P>
          </RightPanel>

          {/* EXPERIENCE */}
          <div className="md:sticky md:top-28 self-start">
            <LeftLabel text="Experience." />
          </div>
          <RightPanel>
            <H3>Public Sector Technology Platform — Technical Product Manager</H3>
            <P>Toronto, Canada · Dec 2022 – Present</P>
            <Spacer />
            <Ul items={[
              "Redesigned grant application workflow using automation and user research, cutting turnaround time by 40% and increasing processing capacity 3x year-over-year",
              "Led end-to-end delivery of an AI-powered chatbot — 25% increase in user engagement and 15% uplift in grant and event submission completions",
              "Translated OKRs into user stories and wireframes, improving sprint velocity by 30% and compressing release cycles by 25%",
              "Integrated CRM and workflow tools across business development operations, enabling 20+ leads to manage client pipelines and eliminate manual handoffs",
              "Owned a rolling product roadmap across 3 concurrent workstreams, facilitating quarterly prioritization sessions with engineering, design, and executive stakeholders",
              "Ran continuous user research and funnel analysis using Mixpanel and Hotjar to inform prioritization — directly reducing low-value feature work by 20%",
              "Defined and executed GTM plans for 2 major platform launches, hitting adoption targets within 30 days of release",
            ]} />

            <Spacer /><Spacer />

            <H3>Amazon Web Services — Software Development Engineer</H3>
            <P>Toronto, Canada · Sep 2021 – Dec 2022</P>
            <Spacer />
            <Ul items={[
              "Partnered with PMs, UX, and ML teams to define and ship 12 major releases/year, reducing feature cycle time by 30% on a platform processing 10M+ daily auth requests",
              "Owned delivery of secure identity microservices on an API-first platform enabling high-volume account creation at AWS scale, with zero critical security incidents post-launch",
              "Drove release management, security compliance gates, and QA across cross-functional squads",
              "Defined success metrics and monitored KPIs across 5+ concurrent identity workstreams, enabling data-driven prioritization and executive roadmap visibility",
              "Ran structured discovery interviews with enterprise customers to surface unmet identity needs — directly shaping roadmap priorities across 2 consecutive fiscal quarters",
            ]} />

            <Spacer /><Spacer />

            <H3>NCR Corporation — Software Developer</H3>
            <P>Hyderabad, India · Apr 2018 – Aug 2019</P>
            <Spacer />
            <Ul items={[
              "Scaled transaction infrastructure to support 1.5M+ annual operations through cloud architecture upgrades, sustaining reliability under peak-traffic loads",
              "Developed PCI-compliant API communication layers between ATM fleets and backend systems",
              "Revamped developer onboarding with interactive documentation and self-serve training materials, reducing ramp time by 25%",
            ]} />
          </RightPanel>

          {/* PROJECTS */}
          <div className="md:sticky md:top-28 self-start">
            <LeftLabel text="Projects." />
          </div>
          <RightPanel>
            <H3>Selected Work</H3>
            <P>
              <strong>The Intelligent Agreement Hub</strong> — product proposal for a compliant Create–Sign–Store
              workflow for global employment agreements. Designed a two-layered rules engine combining immutable local
              law with configurable company policy, with a Compliance-as-Code deployment methodology.
            </P>
            <Spacer />
            <P>
              <strong>HCP Brand Portal: API & Integration Strategy</strong> — technical integration proposal
              connecting a pharma brand portal to a healthcare MDM via a 3-tier matching engine, DCR-based ingestion,
              and near-real-time CRM sync. Gap analysis produced a new atomic endpoint pitch that resolves 4 platform
              limitations in a single API call.
            </P>
            <Spacer />
            <P>
              <strong>Grant Platform AI Assistant</strong> — AI chatbot embedded in a grant platform to improve
              navigation, Q&A, and submission completion. Increased user engagement by 25% and drove a 15% uplift in
              grant completions.
            </P>
            <Spacer />
            <P>
              <strong>Grant Workflow Modernization</strong> — redesigned intake and review workflows to reduce cycle
              time by 40% and increase throughput to 1,680+ applications/year.
            </P>
          </RightPanel>

          {/* SKILLS */}
          <div className="md:sticky md:top-28 self-start">
            <LeftLabel text="Skills." />
          </div>
          <RightPanel>
            <H3>Product</H3>
            <P>Discovery · Prioritization · PRDs · Roadmaps · Stakeholder alignment · Experimentation · GTM · Agile / Scrum</P>
            <P>Jira · Asana · Confluence · Figma · Miro · Productboard</P>
            <Spacer />

            <H3>Data & Analytics</H3>
            <P>Mixpanel · Hotjar · SQL · Tableau · Power BI · A/B Testing · Funnel Analysis</P>
            <Spacer />

            <H3>Technical</H3>
            <P>REST APIs · Microservices · OAuth2 / OIDC · Java · Python · AWS · Azure · CI/CD · Kubernetes · Postman</P>
          </RightPanel>

          {/* EDUCATION */}
          <div className="md:sticky md:top-28 self-start">
            <LeftLabel text="Education." />
          </div>
          <RightPanel>
            <H3>University of Regina</H3>
            <P>Master of Science, Computer Science — Regina, Canada · May 2021</P>
            <Spacer />
            <H3>GITAM University</H3>
            <P>Bachelor of Science, Computer Science — Visakhapatnam, India · May 2018</P>
            <Spacer />
            <H3>Certifications</H3>
            <P>Project Management Professional (PMP) — PMI · July 2024</P>
            <P>Product Manager Certification — BrainStation · Oct 2022</P>
            <Spacer />
            <H3>Publication</H3>
            <P>Acoustic Event Detection using Graph Signals — IEEE TENCON · Dec 2017</P>
          </RightPanel>

        </div>

        <div className="mt-6">
          <Link href="/portfolio" className="underline underline-offset-4 font-bold">
            → View Product Portfolio
          </Link>
        </div>
      </PageShell>
    </div>
  );
}
