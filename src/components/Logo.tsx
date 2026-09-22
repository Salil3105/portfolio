/**
 * Monogram mark: two service nodes with an event arcing between them —
 * the same idea the page backdrop runs on. The arc redraws on hover.
 */
export default function Logo() {
  return (
    <span className="logo">
      <svg className="logo-mark" viewBox="0 0 36 36" aria-hidden="true">
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b6dff" />
            <stop offset="100%" stopColor="#6ea8fe" />
          </linearGradient>
        </defs>
        <rect
          x="1.25" y="1.25" width="33.5" height="33.5" rx="10.5"
          fill="rgba(255,255,255,.045)" stroke="url(#logo-grad)" strokeWidth="1.4"
        />
        <path
          className="logo-stream"
          d="M9.5 24c4.5 0 4.2-12 8.5-12s4 12 8.5 12"
          fill="none" stroke="url(#logo-grad)" strokeWidth="2.1" strokeLinecap="round"
        />
        <circle className="logo-node n1" cx="9.5" cy="24" r="2.3" fill="#8b6dff" />
        <circle className="logo-node n2" cx="26.5" cy="24" r="2.3" fill="#6ea8fe" />
      </svg>
      <span className="logo-word">
        <b>SC</b><i>.</i>
      </span>
    </span>
  );
}
