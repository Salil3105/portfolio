import Link from "next/link";
import Reveal from "@/components/Reveal";
import Avatar from "@/components/Avatar";
import { features } from "@/lib/data";
import { featureIcons, ArrowRight } from "@/lib/icons";

export default function About({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="section" id="about">
      <div className="wrap">
        {showHeading && (
          <Reveal className="section-head">
            <div>
              <span className="eyebrow">About</span>
              <h2 className="section-title">A curious builder who turns ideas into impact.</h2>
            </div>
          </Reveal>
        )}

        <div className="about-grid">
          <Reveal className="about-copy">
            <p className="lead">
              I&apos;m a software engineer with 3+ years building production-grade enterprise
              systems — the kind that have to stay up, stay fast, and stay maintainable.
            </p>
            <p>
              At Dassault Systèmes I design microservices in Java 17 and Spring Boot for a large
              engineering platform: secure REST APIs, event-driven communication over Apache Kafka,
              and an event-streaming layer with guaranteed ordering, replay, dead-letter queues and
              idempotent consumers. I care about latency budgets, clean data models, and code that
              the next person can actually read.
            </p>
            <p>
              I ship cloud-native on AWS with Docker and Kubernetes, model data across PostgreSQL,
              MongoDB and Redis, and lead code reviews in an Agile team. Outside work you&apos;ll find
              me writing technical posts, contributing to open source, and doing competitive coding.
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
