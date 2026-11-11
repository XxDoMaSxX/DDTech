import type { ReactNode } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

const paths: Record<string, ReactNode> = {
  systems: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M6.5 6.6h.01M9 6.6h.01" />
    </>
  ),
  process: (
    <>
      <path d="M4 7h7M13 17h7" />
      <circle cx="16" cy="7" r="3" />
      <circle cx="8" cy="17" r="3" />
    </>
  ),
  debug: (
    <>
      <rect x="8" y="7" width="8" height="11" rx="4" />
      <path d="M12 7V4M5 9l2 2M19 9l-2 2M4 14h3M17 14h3M6 19l2-2M18 19l-2-2" />
    </>
  ),
  performance: (
    <>
      <path d="M4 16a8 8 0 0 1 16 0" />
      <path d="M12 16l4-4" />
      <path d="M4 16h2M18 16h2M12 8V6" />
    </>
  ),
  security: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  infra: (
    <>
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
      <path d="M6.5 7.5h.01M6.5 16.5h.01M10 7.5h7M10 16.5h7" />
    </>
  ),
  devops: (
    <>
      <path d="M20 11a8 8 0 0 0-14-4L4 9" />
      <path d="M4 13a8 8 0 0 0 14 4l2-2" />
      <path d="M4 5v4h4M20 19v-4h-4" />
    </>
  ),
  plugins: (
    <>
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3" />
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M6 12H3M21 12h-3" />
    </>
  ),
  audit: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M15.5 15.5 20 20" />
      <path d="M9 9.5h4M9 12h4" />
    </>
  ),
};

export function ServiceIcon({ id }: { id: string }) {
  return (
    <svg {...base} xmlns="http://www.w3.org/2000/svg">
      {paths[id] ?? paths.systems}
    </svg>
  );
}

export function ArrowRight() {
  return (
    <svg width="15" height="15" className="arrow" {...base} viewBox="0 0 24 24">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
