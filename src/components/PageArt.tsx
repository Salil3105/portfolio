"use client";

import { useEffect, useState } from "react";

export type ArtKind = "projects" | "experience" | "contact" | "about";

/**
 * Per-page illustration. Drops in `public/art-<kind>.png` when that file
 * exists (same trick as the hero render); otherwise draws a matching SVG
 * so every page ships with artwork either way.
 */
export default function PageArt({ kind }: { kind: ArtKind }) {
  const [img, setImg] = useState(false);
  const src = `/art-${kind}.png`;

  useEffect(() => {
    const im = new window.Image();
    im.onload = () => setImg(true);
    im.src = src;
  }, [src]);

  return (
    <div className="page-art" aria-hidden="true">
      {img ? <img className="hero-illus" src={src} alt="" /> : ART[kind]}
    </div>
  );
}

const defs = (
  <defs>
    <radialGradient id="pa-glow" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stopColor="#7c5cff" stopOpacity=".34" />
      <stop offset="60%" stopColor="#6ea8fe" stopOpacity=".08" />
      <stop offset="100%" stopColor="#7c5cff" stopOpacity="0" />
    </radialGradient>
    <linearGradient id="pa-card" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="var(--pa-card-a)" />
      <stop offset="100%" stopColor="var(--pa-card-b)" />
    </linearGradient>
    <linearGradient id="pa-glass" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="var(--text)" stopOpacity=".12" />
      <stop offset="100%" stopColor="var(--text)" stopOpacity=".02" />
    </linearGradient>
  </defs>
);

const ART: Record<ArtKind, React.ReactNode> = {
  /* stacked, floating project cards */
  projects: (
    <svg className="art-svg" viewBox="0 0 420 320" role="img" aria-label="Floating project cards">
      {defs}
      <ellipse cx="210" cy="165" rx="185" ry="130" fill="url(#pa-glow)" />
      <ellipse cx="212" cy="288" rx="130" ry="16" fill="#000" style={{ opacity: "var(--pa-shadow)" }} />
      <g transform="rotate(-8 150 150)">
        <rect x="58" y="96" width="150" height="112" rx="12" fill="url(#pa-card)" stroke="var(--text)" strokeOpacity=".12" />
        <rect x="70" y="112" width="60" height="6" rx="3" fill="var(--text)" fillOpacity=".18" />
        <rect x="70" y="126" width="92" height="6" rx="3" fill="var(--text)" fillOpacity=".10" />
      </g>
      <g transform="rotate(6 300 150)">
        <rect x="226" y="88" width="150" height="112" rx="12" fill="url(#pa-card)" stroke="var(--text)" strokeOpacity=".12" />
        <rect x="238" y="104" width="54" height="6" rx="3" fill="var(--pa-code-2)" fillOpacity=".75" />
        <rect x="238" y="118" width="88" height="6" rx="3" fill="var(--text)" fillOpacity=".10" />
      </g>
      <g>
        <rect x="130" y="130" width="170" height="126" rx="14" fill="var(--pa-card-b)" fillOpacity=".92" stroke="var(--text)" strokeOpacity=".2" />
        <circle cx="146" cy="148" r="3.4" fill="var(--pa-dot)" />
        <circle cx="158" cy="148" r="3.4" fill="var(--pa-dot)" />
        <circle cx="170" cy="148" r="3.4" fill="var(--pa-dot)" />
        <rect x="146" y="166" width="74" height="7" rx="3.5" fill="var(--pa-code-1)" fillOpacity=".95" />
        <rect x="146" y="182" width="120" height="7" rx="3.5" fill="var(--text)" fillOpacity=".2" />
        <rect x="146" y="198" width="92" height="7" rx="3.5" fill="var(--pa-code-2)" fillOpacity=".75" />
        <rect x="146" y="214" width="60" height="7" rx="3.5" fill="rgba(134,239,172,.55)" />
      </g>
    </svg>
  ),

  /* rising glass staircase — growth over time */
  experience: (
    <svg className="art-svg" viewBox="0 0 420 320" role="img" aria-label="Rising steps">
      {defs}
      <ellipse cx="210" cy="160" rx="185" ry="128" fill="url(#pa-glow)" />
      <ellipse cx="215" cy="290" rx="150" ry="16" fill="#000" style={{ opacity: "var(--pa-shadow)" }} />
      {[0, 1, 2, 3].map((i) => {
        const w = 74, h = 30 + i * 34, x = 58 + i * 78, y = 262 - h;
        return (
          <g key={i}>
            <polygon points={`${x},${y} ${x + w},${y - 16} ${x + w},${y + h - 16} ${x},${y + h}`} fill="url(#pa-glass)" stroke="var(--text)" strokeOpacity=".16" />
            <polygon points={`${x},${y} ${x + w},${y - 16} ${x + w - 14},${y - 22} ${x - 14},${y - 6}`} fill="var(--text)" fillOpacity=".10" stroke="var(--text)" strokeOpacity=".16" />
          </g>
        );
      })}
      <path d="M86 214 C150 200 250 150 344 72" fill="none" stroke="rgba(124,92,255,.85)" strokeWidth="3" strokeLinecap="round" />
      <path d="M326 68 L348 66 L344 88" fill="none" stroke="rgba(124,92,255,.95)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  /* floating message card + paper plane */
  contact: (
    <svg className="art-svg" viewBox="0 0 420 320" role="img" aria-label="Message and paper plane">
      {defs}
      <ellipse cx="210" cy="160" rx="180" ry="126" fill="url(#pa-glow)" />
      <ellipse cx="200" cy="286" rx="126" ry="15" fill="#000" style={{ opacity: "var(--pa-shadow)" }} />
      <g transform="rotate(-5 200 175)">
        <rect x="92" y="118" width="216" height="130" rx="16" fill="url(#pa-card)" stroke="var(--text)" strokeOpacity=".16" />
        <path d="M92 136 L200 200 L308 136" fill="none" stroke="var(--pa-code-1)" strokeOpacity=".8" strokeWidth="3" strokeLinejoin="round" />
        <rect x="112" y="214" width="78" height="7" rx="3.5" fill="var(--text)" fillOpacity=".14" />
      </g>
      <g transform="rotate(12 318 92)">
        <path d="M282 92 L358 62 L330 128 L318 100 Z" fill="rgba(124,92,255,.9)" />
        <path d="M318 100 L358 62" fill="none" stroke="var(--text)" strokeOpacity=".5" strokeWidth="2" />
      </g>
      <circle cx="96" cy="78" r="5" fill="rgba(110,168,254,.8)" />
      <circle cx="356" cy="214" r="4" fill="rgba(124,92,255,.75)" />
    </svg>
  ),

  /* layered service blocks — the systems being built */
  about: (
    <svg className="art-svg" viewBox="0 0 420 320" role="img" aria-label="Stacked service layers">
      {defs}
      <ellipse cx="210" cy="160" rx="180" ry="126" fill="url(#pa-glow)" />
      <ellipse cx="210" cy="286" rx="136" ry="15" fill="#000" style={{ opacity: "var(--pa-shadow)" }} />
      {[0, 1, 2].map((i) => {
        const y = 210 - i * 56;
        return (
          <g key={i}>
            <polygon points={`210,${y - 34} 330,${y} 210,${y + 34} 90,${y}`} fill="url(#pa-glass)" stroke="var(--text)" strokeOpacity=".18" />
            <polygon points={`90,${y} 210,${y + 34} 210,${y + 48} 90,${y + 14}`} fill="rgba(0,0,0,.35)" />
            <polygon points={`330,${y} 210,${y + 34} 210,${y + 48} 330,${y + 14}`} fill="rgba(0,0,0,.2)" />
          </g>
        );
      })}
      <path d="M210 176 L210 132 M210 120 L210 104" stroke="rgba(124,92,255,.9)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="210" cy="92" r="9" fill="none" stroke="rgba(124,92,255,.9)" strokeWidth="3" />
    </svg>
  ),
};
