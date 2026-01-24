import React from "react";

export function PageShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`w-full ${className}`}>{children}</section>;
}

export function PageTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-5xl font-extrabold tracking-tight">{children}</h1>;
}
