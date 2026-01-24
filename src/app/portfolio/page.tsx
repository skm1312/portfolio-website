import Image from "next/image";
import Link from "next/link";
import { PageShell, PageTitle } from "../components/Page";
import ShadowBox from "../components/ShadowBox";
import { portfolioItems } from "./portfolio-data";

function PortfolioCard({
  tags,
  title,
  blurb,
  href,
  imageSrc,
  imageAlt,
  imageSide = "right",
}: (typeof portfolioItems)[number]) {
  const isExternal = href.startsWith("http") || href.endsWith(".pdf");

  const Text = (
    <div className="min-w-0">
      <div className="text-sm text-neutral-500 font-medium">{tags}</div>

      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-900">
        {title}
      </h2>

      <p className="mt-4 text-base leading-7 text-neutral-700 max-w-xl">
        {blurb}
      </p>

      <div className="mt-6">
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="font-extrabold underline underline-offset-4"
          >
            More Details
          </a>
        ) : (
          <Link
            href={href}
            className="font-extrabold underline underline-offset-4"
          >
            More Details
          </Link>
        )}
      </div>
    </div>
  );

  const Media = (
    <div className="w-full">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain"
          sizes="(min-width: 1024px) 520px, 100vw"
        />
      </div>
    </div>
  );

  return (
    <ShadowBox direction="tl" offset={6}>
      <div className="bg-neutral-100">
        <div className="mx-auto max-w-6xl px-10 py-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            {imageSide === "left" ? (
              <>
                {Media}
                {Text}
              </>
            ) : (
              <>
                {Text}
                {Media}
              </>
            )}
          </div>
        </div>
      </div>
    </ShadowBox>
  );
}

export default function PortfolioPage() {
  return (
    <div className="space-y-10">
      <PageShell>
        <PageTitle>Product Portfolio.</PageTitle>
      </PageShell>

      <div className="space-y-12">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}
