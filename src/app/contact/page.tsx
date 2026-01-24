import ShadowBox from "../components/ShadowBox";
import { PageShell, PageTitle } from "../components/Page";
import { CopyButton } from "../components/CopyButton";

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-[140px_1fr] sm:items-baseline">
      <div className="text-sm font-bold text-neutral-900">{label}</div>
      <div className="text-base text-neutral-800">{children}</div>
    </div>
  );
}

export default function ContactPage() {
  const email = "jahnavi.rao0104@gmail.com";
  const linkedin = "https://www.linkedin.com/in/phany-jahnavi-uppuluri-15459420a/";

  return (
    <div className="space-y-10">
      <PageShell>
        <PageTitle>Contact.</PageTitle>
        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-700">
          The fastest way to reach me is email. I’m also active on LinkedIn.
        </p>
      </PageShell>

      <PageShell>
        <ShadowBox direction="tl" offset={6}>
          <div className="bg-neutral-100 p-8">
            <div className="space-y-6">
              <Row label="Email">
                <a
                  href={`mailto:${email}`}
                  className="font-bold underline underline-offset-4"
                >
                  {email}
                </a>
                <CopyButton text={email} />
              </Row>

              <Row label="LinkedIn">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold underline underline-offset-4"
                >
                  Phany Jahnavi Uppuluri
                </a>
              </Row>

              <div className="pt-4 border-t border-neutral-300">
                <p className="text-sm text-neutral-600">
                  If you’re reaching out about a role, feel free to include the
                  JD and what the team is optimizing for, I’ll reply with how I
                  map my experience to it.
                </p>
              </div>
            </div>
          </div>
        </ShadowBox>
      </PageShell>
    </div>
  );
}
