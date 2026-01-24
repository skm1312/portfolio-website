"use client";

import ShadowBox from "./ShadowBox";

export function CopyButton({
  text,
  label = "Copy",
}: {
  text: string;
  label?: string;
}) {
  return (
    <span className="ml-3 inline-block align-middle">
      <ShadowBox direction="tl" offset={4} className="inline-block">
        <button
          type="button"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(text);
            } catch {
              // fallback (rare, but safe)
              const el = document.createElement("textarea");
              el.value = text;
              document.body.appendChild(el);
              el.select();
              document.execCommand("copy");
              document.body.removeChild(el);
            }
          }}
          className="block bg-white px-3 py-1 text-sm font-bold"
        >
          {label}
        </button>
      </ShadowBox>
    </span>
  );
}
