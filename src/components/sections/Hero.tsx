"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { profile, stats } from "@/lib/data";
import { ArrowRight, Download, GithubIcon, LinkedinIcon, MailIcon } from "@/lib/icons";
import Greeter from "@/components/Greeter";
import HeroArt from "@/components/HeroArt";

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
            I design and ship production-grade backend systems — event-driven microservices in Java
            and Spring Boot, streaming on Kafka, running cloud-native on AWS.
          </motion.p>

          <motion.div className="hero-cta" {...iv}>
            <Link href="/projects" className="btn primary">View Projects <ArrowRight /></Link>
            <a href={profile.resumeUrl} className="btn" download>Download Résumé <Download /></a>
          </motion.div>

          <motion.div className="socials" {...iv}>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
          </motion.div>

          <Greeter />

          <motion.div className="stats" {...iv}>
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="n">{s.n}<span className="plus">{s.plus}</span></div>
                <div className="l">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* workspace illustration — themed CSS vars, no light/dark stage needed */}
        <div className="composition" aria-hidden="true">
          <HeroArt />
        </div>
      </div>
    </section>
  );
}
