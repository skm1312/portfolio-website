import React from "react";

type Dir = "tl" | "tr" | "bl" | "br";

export default function ShadowBox({
  children,
  className = "",
  offset = 6,
  direction = "tl",
}: {
  children: React.ReactNode;
  className?: string;
  offset?: number;
  direction?: Dir;
}) {
  const dx = direction.includes("l") ? -offset : offset;
  const dy = direction.includes("t") ? -offset : offset;

  return (
    <div className={`relative ${className}`}>
      {/* underlay */}
      <div
        className="absolute inset-0 border-2 border-neutral-900 bg-white"
        style={{ transform: `translate(${dx}px, ${dy}px)` }}
      />
      {/* top box */}
      <div className="relative border-2 border-neutral-900 bg-white">
        {children}
      </div>
    </div>
  );
}
