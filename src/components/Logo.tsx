/** DDTech monogram — two "D" letterforms drawn as outlines. */
export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 44 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path pathLength={100} d="M4 4 H13 A8 12 0 0 1 13 28 H4 Z" />
      <path pathLength={100} d="M23 4 H32 A8 12 0 0 1 32 28 H23 Z" />
    </svg>
  );
}
