/**
 * Typographic monogram mark for SS Advisory.
 * Pure SVG — scales cleanly, inherits colour from the parent.
 */
export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} role="img" aria-label="SS Advisory">
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="6"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.28"
      />
      <text
        x="20"
        y="26.5"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="var(--font-display)"
        fontSize="15"
        fontWeight="600"
        letterSpacing="0.5"
      >
        SS
      </text>
      <circle cx="31.5" cy="9.5" r="2" fill="var(--accent)" />
    </svg>
  );
}
