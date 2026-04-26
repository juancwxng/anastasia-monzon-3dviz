/* src/app/error.tsx */
'use client';

import { useEffect } from 'react';

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
    <div className="fixed inset-0 bg-[#2b2a27] flex items-center justify-center">
      <div className="text-center flex flex-col items-center gap-8 px-6">
        <p className="font-serif italic font-light text-[rgba(247,243,238,0.4)] text-[1.25rem]">
          A. Monzon
        </p>
        <div>
          <h2 className="font-serif italic font-light text-[#f7f3ee] text-[2rem] mb-3 leading-[1.2]">
            Something went wrong
          </h2>
          <p className="text-[0.875rem] text-[rgba(247,243,238,0.4)] font-light max-w-[360px]">
            An unexpected error occurred. Please try again.
          </p>
        </div>
        <button
          onClick={reset}
          className="inline-flex items-center gap-[0.625rem] bg-[#a8b89a] text-[#2b2a27] text-[0.625rem] tracking-[0.18em] uppercase font-medium px-7 py-[0.8rem] rounded-full transition-[background,color] duration-[250ms] hover:bg-[#4a5e3e] hover:text-[#f7f3ee]"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
