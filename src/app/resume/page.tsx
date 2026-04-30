import ShadowBox from "../components/ShadowBox";
import { PageShell, PageTitle } from "../components/Page";

function LeftLabel({ text }: { text: string }) {
  return (
    <ShadowBox direction="tl" offset={6}>
      <div className="h-[180px] flex items-center justify-center">
        <div className="text-3xl font-extrabold tracking-tight text-center px-4">{text}</div>
      </div>
    </ShadowBox>
  );
}

function RightPanel({ children }: { children: React.ReactNode }) {
  return (
    <ShadowBox direction="tl" offset={6}>
      <div className="bg-neutral-100 p-6 space-y-2 text-sm leading-6 text-neutral-800">{children}</div>
    </ShadowBox>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <div className="font-extrabold text-neutral-900 mt-4 first:mt-0">{children}</div>;
}

function Meta({ children }: { children: React.ReactNode }) {
  return <div className="text-xs text-neutral-500 mb-1">{children}</div>;
}

export default function ResumePage() {
  return (
    <div className="space-y-10">
      <PageShell>
        <PageTitle>Resume.</PageTitle>
        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-700">
          Technical Product Manager with a software engineering foundation — shipping AI workflows, API platforms, and SaaS
          experiences across the full product lifecycle.
        </p>
      </PageShell>

      <PageShell>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[380px_1fr]">

          {/* Experience */}
          <div className="md:sticky md:top-28 self-start">
            <LeftLabel text="Experience." />
          </div>
          <RightPanel>
            <H3>Ontario Centre of Innovation — Technical Product Manager</H3>
            <Meta>Toronto, Canada · Dec 2022 – Present</Meta>
            <ul className="list-disc pl-4 space-y-1">
              <li>Redesigned grant workflow using automation & user research — 40% faster turnaround, 3× processing capacity YoY</li>
              <li>Led AI chatbot delivery — 25% engagement lift, 15% uplift in grant submission completions</li>
              <li>Owned rolling product roadmap across 3 concurrent workstreams with quarterly exec alignment</li>
              <li>Ran continuous funnel analysis (Mixpanel, Hotjar) — reduced low-value feature work by 20%</li>
              <li>Executed GTM for 2 major platform launches, hitting adoption targets within 30 days</li>
            </ul>

            <H3>Amazon Web Services — Software Development Engineer</H3>
            <Meta>Toronto, Canada · Sep 2021 – Dec 2022</Meta>
            <ul className="list-disc pl-4 space-y-1">
              <li>Shipped 12 major releases/year on identity platform — 10M+ daily auth requests, 30% cycle time reduction</li>
              <li>Delivered secure identity microservices at AWS scale — zero critical security incidents post-launch</li>
              <li>Monitored KPIs across 5+ concurrent workstreams; ran enterprise discovery interviews to shape roadmap</li>
            </ul>

            <H3>NCR Corporation — Software Developer</H3>
            <Meta>Hyderabad, India · Apr 2018 – Aug 2019</Meta>
            <ul className="list-disc pl-4 space-y-1">
              <li>Scaled transaction infrastructure for 1.5M+ annual operations via cloud architecture upgrades</li>
              <li>Developed PCI-compliant API layers between ATM fleets and backend systems</li>
              <li>Revamped developer onboarding — 25% reduction in ramp time</li>
            </ul>
          </RightPanel>

          {/* Education */}
          <div className="md:sticky md:top-28 self-start">
            <LeftLabel text="Education." />
          </div>
          <RightPanel>
            <H3>University of Regina</H3>
            <Meta>Regina, Canada · May 2021</Meta>
            <p>Master of Science, Computer Science</p>

            <H3>GITAM University</H3>
            <Meta>Visakhapatnam, India · May 2018</Meta>
            <p>Bachelor of Science, Computer Science</p>
          </RightPanel>

          {/* Certifications */}
          <div className="md:sticky md:top-28 self-start">
            <LeftLabel text="Certifications." />
          </div>
          <RightPanel>
            <H3>Project Management Professional (PMP)</H3>
            <Meta>PMI · July 2024</Meta>

            <H3>Product Manager Certification</H3>
            <Meta>BrainStation · Oct 2022</Meta>

            <H3>Acoustic Event Detection using Graph Signals</H3>
            <Meta>IEEE TENCON Publication · Dec 2017</Meta>
          </RightPanel>

          {/* Skills */}
          <div className="md:sticky md:top-28 self-start">
            <LeftLabel text="Skills." />
          </div>
          <RightPanel>
            <H3>Product</H3>
            <p>Jira · Asana · Confluence · Figma · Miro · Mixpanel · Hotjar · Productboard · Agile · Scrum</p>

            <H3>Data & Analytics</H3>
            <p>SQL · Tableau · Power BI · A/B Testing · Funnel Analysis</p>

            <H3>Technical</H3>
            <p>REST APIs · Microservices · OAuth2/OIDC · Java · Python · AWS · Azure · CI/CD · Kubernetes · Postman</p>

            <div className="pt-4 border-t border-neutral-300 mt-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="font-extrabold underline underline-offset-4 text-purple-700"
              >
                Download PDF ↗
              </a>
            </div>
          </RightPanel>

        </div>
      </PageShell>
    </div>
  );
}
