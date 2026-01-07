"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    "relative px-6 py-3 text-base font-bold",
                    "hover:underline underline-offset-4",
                    active
                      ? "border-2 border-neutral-900 bg-white before:absolute before:inset-0 before:translate-x-[6px] before:translate-y-[6px] before:border-2 before:border-neutral-900 before:-z-10"
                      : "border-2 border-transparent text-neutral-950",
                  ].join(" ")}
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
