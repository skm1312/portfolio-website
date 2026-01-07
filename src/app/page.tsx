import Link from "next/link";
import { featuredWork } from "./site-data";

export default function HomePage() {
  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="space-y-6">
        <div className="max-w-[520px]">
          <h1 className="text-[46px] leading-[1.1] font-extrabold tracking-tight">
            Hey, I’m Jahnavi - A Product Builder from Toronto.
          </h1>
        </div>

        <p className="max-w-[560px] text-base text-neutral-900">
          I build AI-enabled workflows and internal/external SaaS experiences. Here’s my{" "}
          <Link className="underline underline-offset-4 text-purple-700" href="/resume">
            resume
          </Link>
          .
        </p>

        <a className="inline-block underline underline-offset-4 font-semibold" href="mailto:jahnavi@example.com">
          jahnavi.rao0104@gmail.com
        </a>
      </section>

      {/* Featured Work */}
      <section className="space-y-8 pt-2">
        <h2 className="text-4xl font-extrabold tracking-tight">Featured Work.</h2>

        <div className="space-y-6">
          {featuredWork.map((item) => (
            <div key={item.slug} className="border-l-2 border-neutral-200 pl-5">
              <div className="text-sm text-neutral-600">{item.org}</div>
              <Link
                href={`/case-studies/${item.slug}`}
                className="block text-xl font-bold hover:underline underline-offset-4"
              >
                {item.title}
              </Link>
              <p className="mt-1 text-neutral-800">{item.oneLiner}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
