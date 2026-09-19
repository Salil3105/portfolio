"use client";

import Link from "next/link";
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

        {/* 3D composition */}
        <div className="composition" aria-hidden="true">
          <div className="plinth" />
          <div className="orb" />
          <div className="cube" />
          <div className="ring" />
          <div className="code-window">
            <div className="cw-bar">
              <span className="dot" /><span className="dot" /><span className="dot" />
              <span className="cw-title">inference_service.ts</span>
            </div>
            <div className="cw-body">
              <div><span className="ln">1</span><span className="k">export async function</span> <span className="fn">rank</span><span className="pn">(</span><span className="pn">q</span><span className="pn">:</span> <span className="k">string</span><span className="pn">) {"{"}</span></div>
              <div><span className="ln">2</span>&nbsp;&nbsp;<span className="k">const</span> emb <span className="pn">=</span> <span className="k">await</span> <span className="fn">embed</span><span className="pn">(</span>q<span className="pn">);</span></div>
              <div><span className="ln">3</span>&nbsp;&nbsp;<span className="k">const</span> hits <span className="pn">=</span> <span className="k">await</span> vector<span className="pn">.</span><span className="fn">search</span><span className="pn">(</span>emb<span className="pn">,</span> <span className="nu">8</span><span className="pn">);</span></div>
              <div><span className="ln">4</span>&nbsp;&nbsp;<span className="c">{"// re-rank with the LLM judge"}</span></div>
              <div><span className="ln">5</span>&nbsp;&nbsp;<span className="k">return</span> <span className="fn">rerank</span><span className="pn">(</span>hits<span className="pn">).</span><span className="fn">then</span><span className="pn">(</span>toResults<span className="pn">)</span><span className="caret" /></div>
              <div><span className="ln">6</span><span className="pn">{"}"}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
