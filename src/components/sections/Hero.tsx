"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { profile, stats } from "@/lib/data";
import { ArrowRight, Download, GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from "@/lib/icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.7, 0.2, 1] as const } },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const mv = reduce ? {} : { variants: container, initial: "hidden", animate: "show" };
  const iv = reduce ? {} : { variants: item };
  // Default to the CSS scene; swap to /public/hero.png only once it loads.
  const [heroImg, setHeroImg] = useState(false);
  useEffect(() => {
    const im = new window.Image();
    im.onload = () => setHeroImg(true);
    im.src = "/hero.png";
  }, []);

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <motion.div {...mv}>
          <motion.span className="eyebrow" {...iv}>{profile.role}</motion.span>
          <motion.h1 {...iv}>Building <span className="grad">Intelligent Systems</span>.</motion.h1>
          <motion.p className="lead" {...iv}>
            I design scalable backend systems, AI-powered applications and modern software products —
            built for reliability, shipped with taste.
          </motion.p>

          <motion.div className="hero-cta" {...iv}>
            <Link href="/projects" className="btn primary">View Projects <ArrowRight /></Link>
            <a href={profile.resumeUrl} className="btn" download>Download Résumé <Download /></a>
          </motion.div>

          <motion.div className="socials" {...iv}>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href={profile.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter"><TwitterIcon /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
          </motion.div>

          <motion.div className="stats" {...iv}>
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="n">{s.n}<span className="plus">{s.plus}</span></div>
                <div className="l">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* 3D illustration if provided (public/hero.png), else CSS scene */}
        <div className="composition" aria-hidden="true">
          {heroImg && (
            <img className="hero-illus" src="/hero.png" alt="3D workspace illustration" />
          )}
          <div className="scene" hidden={heroImg}>
            <svg className="hero-art" viewBox="0 0 480 400" role="img" aria-label="Laptop, coffee and floating code illustration">
              <defs>
                <radialGradient id="amb" cx="55%" cy="42%" r="60%">
                  <stop offset="0%" stopColor="#7c5cff" stopOpacity=".38" />
                  <stop offset="55%" stopColor="#6ea8fe" stopOpacity=".08" />
                  <stop offset="100%" stopColor="#7c5cff" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="screen" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#8b6dff" /><stop offset="100%" stopColor="#6ea8fe" />
                </linearGradient>
                <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2a2a32" /><stop offset="100%" stopColor="#111116" />
                </linearGradient>
                <linearGradient id="deck" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#26262d" /><stop offset="100%" stopColor="#0d0d11" />
                </linearGradient>
                <linearGradient id="mug" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#20202a" /><stop offset="55%" stopColor="#14141a" /><stop offset="100%" stopColor="#0c0c10" />
                </linearGradient>
                <radialGradient id="mglow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#7c5cff" stopOpacity=".5" /><stop offset="100%" stopColor="#7c5cff" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* ambient + floor */}
              <ellipse cx="248" cy="190" rx="220" ry="150" fill="url(#amb)" />
              <ellipse cx="240" cy="352" rx="180" ry="24" fill="#000" opacity=".55" />

              {/* coffee mug */}
              <ellipse cx="96" cy="300" rx="60" ry="30" fill="url(#mglow)" />
              <path d="M66 250 L66 306 Q66 317 96 317 Q126 317 126 306 L126 250 Z" fill="url(#mug)" stroke="rgba(255,255,255,.14)" />
              <path d="M126 262 q28 3 28 24 q0 21 -28 22" fill="none" stroke="#191920" strokeWidth="9" />
              <path d="M126 262 q28 3 28 24 q0 21 -28 22" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="1.5" />
              <ellipse cx="96" cy="250" rx="30" ry="9" fill="#0a0a0d" stroke="rgba(255,255,255,.16)" />
              <ellipse cx="96" cy="249" rx="23" ry="6" fill="#050507" />
              <rect x="80" y="270" width="34" height="4" rx="2" fill="rgba(255,255,255,.34)" />
              <rect x="84" y="282" width="26" height="4" rx="2" fill="rgba(255,255,255,.20)" />

              {/* laptop */}
              <polygon points="150,262 340,262 394,316 96,316" fill="url(#deck)" stroke="rgba(255,255,255,.10)" />
              <polygon points="150,262 340,262 344,270 146,270" fill="rgba(255,255,255,.05)" />
              <rect x="206" y="286" width="78" height="18" rx="4" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.08)" />
              <g stroke="rgba(255,255,255,.07)">
                <line x1="168" y1="278" x2="322" y2="278" /><line x1="176" y1="286" x2="314" y2="286" />
              </g>
              <rect x="168" y="256" width="154" height="10" rx="3" fill="#0e0e13" />
              <rect x="168" y="118" width="154" height="146" rx="14" fill="url(#body)" stroke="rgba(255,255,255,.14)" />
              <rect x="181" y="131" width="128" height="120" rx="7" fill="#0b0b11" />
              <rect x="181" y="131" width="128" height="120" rx="7" fill="url(#screen)" opacity=".16" />
              <circle cx="245" cy="126" r="1.6" fill="rgba(255,255,255,.4)" />
              <g>
                <rect x="194" y="148" width="66" height="6" rx="3" fill="rgba(196,181,253,.95)" />
                <rect x="194" y="164" width="96" height="6" rx="3" fill="rgba(255,255,255,.22)" />
                <rect x="194" y="180" width="58" height="6" rx="3" fill="rgba(147,197,253,.8)" />
                <rect x="194" y="196" width="84" height="6" rx="3" fill="rgba(134,239,172,.6)" />
                <rect x="194" y="212" width="46" height="6" rx="3" fill="rgba(255,255,255,.16)" />
                <rect x="194" y="228" width="70" height="6" rx="3" fill="rgba(196,181,253,.55)" />
              </g>

              {/* floating glass code chip */}
              <g className="hero-chip" transform="rotate(-6 392 108)">
                <rect x="316" y="60" width="150" height="96" rx="12" fill="rgba(18,18,24,.72)" stroke="rgba(255,255,255,.16)" />
                <circle cx="330" cy="78" r="3" fill="#31313a" /><circle cx="342" cy="78" r="3" fill="#31313a" /><circle cx="354" cy="78" r="3" fill="#31313a" />
                <rect x="330" y="98" width="62" height="6" rx="3" fill="rgba(196,181,253,.95)" />
                <rect x="330" y="112" width="104" height="6" rx="3" fill="rgba(255,255,255,.22)" />
                <rect x="330" y="126" width="80" height="6" rx="3" fill="rgba(147,197,253,.8)" />
                <rect x="330" y="140" width="56" height="6" rx="3" fill="rgba(134,239,172,.55)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
