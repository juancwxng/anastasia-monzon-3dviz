/* src/app/loading.tsx */

export default function Loading() {
  return (
    <div
      className="fixed inset-0 bg-[#2b2a27] flex items-center justify-center z-[999]"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-6">
        <p className="font-serif italic font-light text-[rgba(247,243,238,0.4)] text-[1.25rem] tracking-[0.02em]">
          A. Monzon
        </p>
        <div className="w-16 h-px bg-[rgba(247,243,238,0.08)] relative overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 bg-[#a8b89a] opacity-60"
            style={{ animation: 'loading-bar 1.4s ease-in-out infinite' }}
          />
        </div>
      </div>
      <style>{`
        @keyframes loading-bar {
          0% { width: 0%; left: 0; }
          50% { width: 100%; left: 0; }
          100% { width: 0%; left: 100%; }
        }
      `}</style>
    </div>
  );
}
