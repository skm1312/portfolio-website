import React from "react";

type Direction = "br" | "tl" | "tr" | "bl";
const dirToTranslate: Record<Direction, { x: number; y: number }> = {
  br: { x: 1, y: 1 },
  tl: { x: -1, y: -1 },
  tr: { x: 1, y: -1 },
  bl: { x: -1, y: 1 },
};

export function ShadowBox({
  children,
  className = "",
  offset = 6,
  direction = "tl",
  underlayClassName = "bg-white",
  borderClassName = "border-2 border-neutral-900",
}: {
  children: React.ReactNode;
  className?: string;
  offset?: number;
  direction?: Direction;
  underlayClassName?: string;
  borderClassName?: string;
}) {
  const { x, y } = dirToTranslate[direction];

  return (
    <div className={`relative ${className}`}>
      {/* Underlay plate */}
      <div
        className={`absolute inset-0 ${borderClassName} ${underlayClassName}`}
        style={{ transform: `translate(${x * offset}px, ${y * offset}px)` }}
        aria-hidden="true"
      />
      {/* Front plate */}
      <div className={`relative ${borderClassName} bg-white`}>{children}</div>
    </div>
  );
}
