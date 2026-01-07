export default function ResumePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-extrabold tracking-tight">Resume.</h1>
      <p className="text-neutral-700">
        Add your resume PDF to <code className="px-1 border rounded">/public/resume.pdf</code> and link it here.
      </p>
      <a className="underline underline-offset-4 font-medium" href="/resume.pdf" target="_blank" rel="noreferrer">
        Open resume.pdf
      </a>
    </div>
  );
}
