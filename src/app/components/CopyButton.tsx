"use client";

export function CopyButton({
  text,
  label = "Copy",
}: {
  text: string;
  label?: string;
}) {
  return (
    <button
      type="button"
      aria-label={`Copy ${text}`}
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
      className="button-secondary ml-3 align-middle"
    >
      {label}
    </button>
  );
}
