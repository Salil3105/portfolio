import Link from "next/link";
import Reveal from "@/components/Reveal";
import Avatar from "@/components/Avatar";
import { features } from "@/lib/data";
import { featureIcons, ArrowRight } from "@/lib/icons";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">About</span>
            <h2 className="section-title">A curious builder who turns ideas into impact.</h2>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-copy">
            <p className="lead">
              I&apos;m a software engineer who enjoys the whole arc of a product — from a resilient
              backend and a clean data model to the AI layer that makes it feel intelligent.
            </p>
            <p>
              My work sits where reliability meets research: designing APIs and services that hold up
              under load, then layering in retrieval, ranking and language models that actually earn
              their place. I care about latency budgets, readable code, and interfaces that feel calm to use.
            </p>
            <p>
              Right now I&apos;m going deep on LLM systems, vector search and event-driven
              architecture — and shipping side projects that let me learn in public.
            </p>
            <Link href="/contact" className="btn ghost" style={{ marginTop: "var(--s4)" }}>
              More about me <ArrowRight />
            </Link>
          </Reveal>

          <Reveal className="avatar-wrap" delay={0.1}>
            <Avatar />
            <div className="feature-grid">
              {features.map((f) => (
                <div className="feature" key={f.title}>
                  <div className="ic">{featureIcons[f.icon]}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
