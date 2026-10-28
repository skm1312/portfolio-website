"use client";

export default function PrintResume() {
  return <button type="button" onClick={() => window.print()} className="print:hidden border-2 border-neutral-900 px-4 py-2 font-bold hover:bg-purple-50">Print resume</button>;
}
