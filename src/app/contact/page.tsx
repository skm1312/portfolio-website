export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Contact.</h1>
      <div className="space-y-2 text-neutral-700">
        <p>
          Email:{" "}
          <a className="underline underline-offset-4" href="mailto:jahnavi@example.com">
            jahnavi@example.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a className="underline underline-offset-4" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            linkedin.com/in/your-handle
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a className="underline underline-offset-4" href="https://github.com/" target="_blank" rel="noreferrer">
            github.com/your-handle
          </a>
        </p>
        <p className="text-sm text-neutral-500">Replace these links with your real profiles.</p>
      </div>
    </div>
  );
}
