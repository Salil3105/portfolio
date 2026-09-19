"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";
import { MailIcon, LinkedinIcon, GithubIcon, Send } from "@/lib/icons";

export default function Contact({ band = true }: { band?: boolean }) {
  const [note, setNote] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) {
      setNote("Please fill in every field first.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setNote("Opening your email app…");
    form.reset();
  }

  return (
    <section className={`section${band ? " band" : ""}`} id="contact">
      <div className="wrap contact-grid">
        <Reveal className="contact-copy">
          <span className="eyebrow">Get in touch</span>
          <h2>Let&apos;s build something amazing.</h2>
          <p className="lead">
            I&apos;m always open to discussing new opportunities, interesting projects, or just
            having a good conversation about backend systems and AI.
          </p>
          <div className="contact-methods">
            <a className="cmethod" href={`mailto:${profile.email}`}>
              <div className="ic"><MailIcon /></div>
              <div><div className="m-l">EMAIL</div><div className="m-v">{profile.email}</div></div>
            </a>
            <a className="cmethod" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <div className="ic"><LinkedinIcon /></div>
              <div><div className="m-l">LINKEDIN</div><div className="m-v">in/salil-chandwadkar</div></div>
            </a>
            <a className="cmethod" href={profile.github} target="_blank" rel="noopener noreferrer">
              <div className="ic"><GithubIcon /></div>
              <div><div className="m-l">GITHUB</div><div className="m-v">github.com/salil</div></div>
            </a>
          </div>
        </Reveal>

        <Reveal className="card contact-form" as="div" delay={0.1}>
          <form onSubmit={onSubmit} noValidate style={{ display: "grid", gap: "var(--s2)" }}>
            <div className="field">
              <label htmlFor="cf-name">Your name</label>
              <input id="cf-name" name="name" type="text" placeholder="Jane Doe" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="cf-email">Your email</label>
              <input id="cf-email" name="email" type="email" placeholder="jane@company.com" autoComplete="email" required />
            </div>
            <div className="field">
              <label htmlFor="cf-msg">Message</label>
              <textarea id="cf-msg" name="message" placeholder="Tell me a little about what you're building…" required />
            </div>
            <button type="submit" className="btn primary">Send Message <Send /></button>
            <div className="form-note" role="status" aria-live="polite">{note}</div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
