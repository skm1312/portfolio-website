import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">About Me.</h1>
        <div className="space-y-3 text-neutral-700 leading-relaxed">
          <p>
            I’m Jahnavi — a product builder who enjoys taking messy, manual workflows and turning them into clean,
            measurable systems people actually use.
          </p>
          <p>
            I work across discovery → scope → delivery, and I like pairing product strategy with enough technical depth
            to make smart trade-offs (APIs, data, integrations, AI/LLM patterns).
          </p>
          <p className="text-neutral-500 text-sm">
            Replace this with your real bio (2–4 short paragraphs max).
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Projects.</h2>

        <div className="space-y-4 text-neutral-700">
          <div>
            <div className="font-medium">AI + Automation</div>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>AccessOCI AI Assistant (LLM-powered navigation + Q&amp;A)</li>
              <li>Workflow automation proposals for compliance-heavy processes</li>
            </ul>
          </div>

          <div>
            <div className="font-medium">Other</div>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Portfolio site (this) — simple, fast, and readable</li>
              <li>
                Resume PDF link:{" "}
                <Link className="underline underline-offset-4" href="/resume.pdf">
                  /resume.pdf
                </Link>{" "}
                <span className="text-neutral-500">(add later)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">Skills.</h2>
        <p className="text-neutral-700">
          Product discovery, roadmap + prioritization, stakeholder alignment, experimentation, analytics, PRDs,
          integrations, and AI product delivery.
        </p>
      </section>
    </div>
  );
}
