"use client";

import { useEffect, useState } from "react";

/** Shows /public/avatar.png once it loads; otherwise the CSS "SC" orb. */
export default function Avatar() {
  const [img, setImg] = useState(false);
  useEffect(() => {
    const im = new window.Image();
    im.onload = () => setImg(true);
    im.src = "/avatar.png";
  }, []);

  // Real photo: show it naturally (no window/card frame), blending into the page.
  if (img) {
    return (
      <div className="avatar-photo">
        <img className="avatar-illus" src="/avatar.png" alt="Salil Chandwadkar" />
      </div>
    );
  }

  return (
    <div className="avatar">
      <svg className="avatar-art" viewBox="0 0 300 255" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Stylized avatar">
          <defs>
            <radialGradient id="avbg" cx="50%" cy="34%" r="62%">
              <stop offset="0%" stopColor="#7c5cff" stopOpacity=".28" />
              <stop offset="70%" stopColor="#7c5cff" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="face" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#79797f" /><stop offset="100%" stopColor="#54545c" />
            </linearGradient>
            <linearGradient id="hoodie" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1b1b22" /><stop offset="100%" stopColor="#0c0c11" />
            </linearGradient>
            <linearGradient id="hair" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#16161c" /><stop offset="100%" stopColor="#0a0a0e" />
            </linearGradient>
          </defs>

          <rect x="0" y="0" width="300" height="255" fill="url(#avbg)" />

          {/* hoodie / shoulders */}
          <path d="M26 255 C26 188 78 162 150 162 C222 162 274 188 274 255 Z" fill="url(#hoodie)" stroke="rgba(255,255,255,.06)" />
          {/* hood collar */}
          <path d="M110 176 C118 200 132 210 150 210 C168 210 182 200 190 176 C176 188 164 192 150 192 C136 192 124 188 110 176 Z" fill="#101015" />
          <line x1="150" y1="196" x2="150" y2="255" stroke="rgba(255,255,255,.06)" strokeWidth="2" />
          <line x1="140" y1="196" x2="136" y2="230" stroke="rgba(255,255,255,.10)" strokeWidth="3" strokeLinecap="round" />
          <line x1="160" y1="196" x2="164" y2="230" stroke="rgba(255,255,255,.10)" strokeWidth="3" strokeLinecap="round" />

          {/* neck */}
          <path d="M132 150 h36 v14 q-18 12 -36 0 Z" fill="#48484f" />

          {/* ears */}
          <ellipse cx="100" cy="100" rx="8" ry="13" fill="url(#face)" />
          <ellipse cx="200" cy="100" rx="8" ry="13" fill="url(#face)" />

          {/* head */}
          <ellipse cx="150" cy="98" rx="52" ry="60" fill="url(#face)" />
          {/* violet rim light on the left */}
          <path d="M104 66 A52 60 0 0 0 104 130" fill="none" stroke="rgba(124,92,255,.55)" strokeWidth="3" strokeLinecap="round" />

          {/* stubble / beard shading */}
          <path d="M108 112 C114 150 134 160 150 160 C166 160 186 150 192 112 C186 140 170 150 150 150 C130 150 114 140 108 112 Z" fill="rgba(8,8,12,.28)" />

          {/* hair */}
          <path d="M100 96 C96 50 122 32 150 32 C178 32 204 50 200 96 C200 72 184 58 150 58 C116 58 100 72 100 96 Z" fill="url(#hair)" />
          <path d="M100 96 C99 82 104 72 112 66 C106 78 105 88 106 100 Z" fill="url(#hair)" />

          {/* eyebrows */}
          <path d="M120 86 q13 -6 26 -1" fill="none" stroke="#141419" strokeWidth="5" strokeLinecap="round" />
          <path d="M154 85 q13 -5 26 1" fill="none" stroke="#141419" strokeWidth="5" strokeLinecap="round" />
          {/* eyes */}
          <ellipse cx="132" cy="100" rx="6.5" ry="5" fill="#131318" />
          <ellipse cx="168" cy="100" rx="6.5" ry="5" fill="#131318" />
          <circle cx="134" cy="98" r="1.6" fill="rgba(255,255,255,.75)" />
          <circle cx="170" cy="98" r="1.6" fill="rgba(255,255,255,.75)" />
          {/* nose */}
          <path d="M150 104 l-5 16 q5 4 10 0" fill="none" stroke="rgba(0,0,0,.22)" strokeWidth="2.5" strokeLinecap="round" />
          {/* mouth */}
          <path d="M134 132 q16 11 32 0" fill="none" stroke="#141419" strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      <span className="tag">{"// building, learning, shipping"}</span>
    </div>
  );
}
