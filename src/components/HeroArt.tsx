/**
 * The hero's workspace illustration — a laptop, a floating code window and a
 * mug, in the same vocabulary as the render it replaces. Unlike that render
 * (a flattened photo composited for one specific dark backdrop — see the
 * .composition notes in globals.css), every fill here is a CSS custom
 * property, so it reads correctly on whichever theme's page background it
 * actually sits on — no separate dark stage needed underneath it.
 *
 * Fills use var(--text) at a tuned fillOpacity rather than --card/--surface:
 * those tokens are calibrated for small UI chrome (badges, inputs) sitting
 * next to real content, and at that alpha a shape this size all but
 * disappeared into the page in an early pass. --text is near-white in dark
 * mode and near-black in light, so a fixed opacity against it still lands
 * the same *relative* contrast in both directions.
 */
export default function HeroArt() {
  return (
    <svg className="hero-art" viewBox="0 0 620 460" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="ha-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity=".24" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ha-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity=".34" />
          <stop offset="100%" stopColor="var(--accent-2)" stopOpacity=".18" />
        </linearGradient>
        <filter id="ha-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id="ha-shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#000" floodOpacity=".22" />
        </filter>
      </defs>

      {/* ambient light */}
      <circle cx="330" cy="205" r="180" fill="url(#ha-glow)" />

      {/* pedestal shadow */}
      <ellipse cx="300" cy="368" rx="155" ry="14" fill="var(--text)" opacity=".1" filter="url(#ha-blur)" />

      {/* laptop base / keyboard deck */}
      <polygon
        points="168,300 432,300 462,352 138,352"
        fill="var(--text)" fillOpacity=".05" stroke="var(--text)" strokeOpacity=".18" strokeWidth="1.2"
      />
      <polygon points="180,306 420,306 442,342 158,342" fill="var(--text)" fillOpacity=".03" />
      <line x1="205" y1="318" x2="395" y2="318" stroke="var(--text)" strokeOpacity=".15" strokeWidth="1" />
      <line x1="198" y1="330" x2="402" y2="330" stroke="var(--text)" strokeOpacity=".15" strokeWidth="1" />
      <rect x="270" y="322" width="60" height="14" rx="4" fill="var(--text)" fillOpacity=".12" />

      {/* laptop screen */}
      <g transform="rotate(-3 300 165)">
        <rect x="188" y="66" width="224" height="196" rx="16" fill="var(--text)" fillOpacity=".06" stroke="var(--text)" strokeOpacity=".24" strokeWidth="1.4" />
        <rect x="202" y="80" width="196" height="168" rx="8" fill="url(#ha-screen)" />
        {/* the same node-and-arc mark as the wordmark, etched faintly on the lid */}
        <g opacity=".7" stroke="var(--text)" strokeOpacity=".3" strokeWidth="1.6" strokeLinecap="round" fill="none">
          <path d="M258 172c14 0 13-38 27-38s13 38 27 38" />
          <circle cx="258" cy="172" r="3" fill="var(--accent)" stroke="none" />
          <circle cx="312" cy="172" r="3" fill="var(--accent-2)" stroke="none" />
        </g>
      </g>

      {/* mug */}
      <g>
        <path d="M156 322c11 4 22 6 33 6s22-2 33-6" stroke="var(--text)" strokeOpacity=".16" strokeWidth="1.2" fill="none" />
        <rect x="150" y="312" width="66" height="48" rx="9" fill="var(--text)" fillOpacity=".05" stroke="var(--text)" strokeOpacity=".2" strokeWidth="1.2" />
        <ellipse cx="183" cy="312" rx="33" ry="7" fill="var(--text)" fillOpacity=".06" stroke="var(--text)" strokeOpacity=".2" strokeWidth="1.2" />
        <path d="M216 322c17-2 24 8 22 18s-13 15-24 13" stroke="var(--text)" strokeOpacity=".24" strokeWidth="5" fill="none" strokeLinecap="round" />
      </g>

      {/* floating code window */}
      <g transform="rotate(3 470 150)" filter="url(#ha-shadow)">
        <rect x="336" y="58" width="240" height="150" rx="14" fill="var(--text)" fillOpacity=".075" stroke="var(--text)" strokeOpacity=".22" strokeWidth="1.2" />
        <circle cx="354" cy="76" r="4.5" fill="#FF5F57" />
        <circle cx="369" cy="76" r="4.5" fill="#FEBC2E" />
        <circle cx="384" cy="76" r="4.5" fill="#28C840" />
        <line x1="336" y1="90" x2="576" y2="90" stroke="var(--text)" strokeOpacity=".16" strokeWidth="1" />

        <g fontFamily="var(--mono), ui-monospace, monospace" fontSize="13">
          <text x="352" y="112" fill="var(--muted-2)">1</text>
          <text x="368" y="112"><tspan fill="var(--accent)">while</tspan><tspan fill="var(--text)"> (curiosity) {"{"}</tspan></text>

          <text x="352" y="134" fill="var(--muted-2)">2</text>
          <text x="380" y="134"><tspan fill="var(--accent-2)">build</tspan><tspan fill="var(--text)">();</tspan></text>

          <text x="352" y="156" fill="var(--muted-2)">3</text>
          <text x="380" y="156"><tspan fill="var(--accent-2)">learn</tspan><tspan fill="var(--text)">();</tspan></text>

          <text x="352" y="178" fill="var(--muted-2)">4</text>
          <text x="380" y="178"><tspan fill="var(--accent-2)">improve</tspan><tspan fill="var(--text)">();</tspan></text>

          <text x="352" y="196" fill="var(--muted-2)">5</text>
          <text x="368" y="196" fill="var(--text)">{"}"}</text>
        </g>
      </g>

      {/* event-stream accents, echoing the page backdrop's Kafka motif */}
      <g strokeLinecap="round">
        <path d="M498 224 L534 250" stroke="var(--text)" strokeOpacity=".2" strokeWidth="1.2" strokeDasharray="2 5" />
        <circle cx="498" cy="224" r="4" fill="var(--accent)" />
        <circle cx="534" cy="250" r="3.5" fill="var(--accent-2)" />
        <rect x="102" y="150" width="9" height="9" rx="1.5" transform="rotate(45 106.5 154.5)" stroke="var(--text)" strokeOpacity=".3" strokeWidth="1.3" />
      </g>
    </svg>
  );
}
