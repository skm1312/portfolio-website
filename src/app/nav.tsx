"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ShadowBox from "./components/ShadowBox";

const links = [
  { href: "/about", label: "About & Projects" },
  { href: "/portfolio", label: "Product Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/portfolio" && pathname.startsWith("/case-studies")) return true;
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-neutral-900">
      {/* inner aligns with hero */}
      <div className="mx-auto max-w-6xl px-10 py-3">
        <div className="flex items-center justify-between gap-8">
          <Link href="/" className="text-xl font-extrabold tracking-tight">
            Jahnavi Uppuluri | Product
          </Link>

          <nav className="flex items-center gap-3">
            {links.map((l) => {
              const active = isActive(l.href);

              const linkInner = (
                <span className="px-6 py-3 text-base font-bold inline-block">
                  {l.label}
                </span>
              );

              return active ? (
                <div key={l.href} className="inline-block">
                  <ShadowBox direction="tl" offset={6} className="inline-block">
                    <Link href={l.href} className="block">
                      {linkInner}
                    </Link>
                  </ShadowBox>
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-6 py-3 text-base font-bold border-2 border-transparent hover:underline underline-offset-4"
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
