import type { Metadata } from "next";
import "./globals.css";
import Nav from "./nav";

export const metadata: Metadata = {
  title: "Jahnavi Uppuluri | Product",
  description: "Product portfolio and case studies.",
  metadataBase: new URL("https://jahnaviuppuluri.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        {/* Full-bleed sticky header */}
        <Nav />

        {/* Page content aligned to same grid as header */}
        <main className="mx-auto w-full max-w-6xl px-10 pt-20 pb-20">{children}</main>

        <footer className="border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-10 py-8 text-sm text-neutral-600">
            <span>© {new Date().getFullYear()} Jahnavi Uppuluri</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
