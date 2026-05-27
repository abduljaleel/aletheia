import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#06070a] px-6 text-[#e0e0ec]">
      <div className="mx-auto max-w-md text-center">
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-[#3a3a50]">
          404 · Aletheia
        </p>
        <h1 className="mb-6 font-serif text-6xl font-light tracking-tight">
          Page not found
        </h1>
        <p className="mb-10 text-sm leading-relaxed text-[#7a7a94]">
          The page you&rsquo;re looking for isn&rsquo;t part of the Aletheia atlas.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 border border-[#c5a572] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-[#c5a572] transition-colors hover:bg-[#c5a572] hover:text-[#06070a]"
        >
          ← Back to the atlas
        </Link>
      </div>
    </main>
  );
}
