"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#06070a] px-6 text-[#e0e0ec]">
      <div className="mx-auto max-w-md text-center">
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-[#3a3a50]">
          ERROR · Aletheia
        </p>
        <h1 className="mb-6 font-serif text-5xl font-light tracking-tight">
          Something broke
        </h1>
        <p className="mb-10 text-sm leading-relaxed text-[#7a7a94]">
          An unexpected error occurred. Try again, or head back to the atlas.
        </p>
        {error.digest && (
          <p className="mb-6 break-all font-mono text-[10px] text-[#3f3f46]">
            ref: {error.digest}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="border border-[#c5a572] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.15em] text-[#c5a572] transition-colors hover:bg-[#c5a572] hover:text-[#06070a]"
          >
            try again
          </button>
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#7a7a94] transition-colors hover:text-[#e0e0ec]"
          >
            back to the atlas →
          </Link>
        </div>
      </div>
    </main>
  );
}
