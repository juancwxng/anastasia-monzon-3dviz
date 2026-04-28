'use client';

import dynamic from 'next/dynamic';

const ScrollVideoEffect = dynamic(
  () => import('@/components/ui/ScrollVideoEffect'),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden="true"
        style={{
          height: '300svh',
          background: '#1c1a17',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingTop: '40vh',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-dm-sans, sans-serif)',
            fontSize: '9px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(247,243,238,0.15)',
          }}
        >
          Loading
        </span>
      </div>
    ),
  },
);

export default function DynamicScrollVideo() {
  return <ScrollVideoEffect />;
}
