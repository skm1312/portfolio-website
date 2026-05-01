"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ShadowBox from "./components/ShadowBox";

const links = [
  { href: "/about", label: "About & Projects" },
  { href: "/portfolio", label: "Product Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/portfolio" && pathname.startsWith("/case-studies")) return true;
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-neutral-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-base sm:text-xl font-extrabold tracking-tight shrink-0">
            Jahnavi Uppuluri | Product
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-3">
            {links.map((l) => {
              const active = isActive(l.href);

              const linkInner = (
                <span className="px-4 lg:px-6 py-3 text-base font-bold inline-block">
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
                  className="px-4 lg:px-6 py-3 text-base font-bold border-2 border-transparent hover:underline underline-offset-4"
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-neutral-900 transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-neutral-900 transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-neutral-900 transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden border-t-2 border-neutral-900 bg-white">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-4 text-base font-bold border-b border-neutral-200 last:border-b-0 ${
                  active ? "bg-neutral-100" : "hover:bg-neutral-50"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
