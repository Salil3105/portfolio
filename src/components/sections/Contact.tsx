"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";
import { MailIcon, LinkedinIcon, GithubIcon, PinIcon, Send } from "@/lib/icons";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact({ band = true, showHeading = true }: { band?: boolean; showHeading?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [note, setNote] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setNote("Please fill in every field first.");
      return;
    }

    setStatus("sending");
    setNote("Sending…");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setNote(result.error ?? "Couldn't send that. Please try again.");
        return;
      }

      setStatus("sent");
      setNote("Thanks — your message is on its way. I'll get back to you soon.");
      form.reset();
    } catch {
      setStatus("error");
      setNote(`Network error. You can email me directly at ${profile.email}.`);
    }
  }

  return (
    <section className={`section${band ? " band" : ""}`} id="contact">
      <div className="wrap contact-grid">
        <Reveal className="contact-copy">
          {showHeading && (
            <>
              <span className="eyebrow">Get in touch</span>
              <h2>Let&apos;s build something amazing.</h2>
              <p className="lead">
                I&apos;m always open to discussing new opportunities, interesting projects, or just
                having a good conversation about backend systems and distributed architecture.
              </p>
            </>
          )}
          <div className="contact-methods">
            <a className="cmethod" href={`mailto:${profile.email}`}>
              <div className="ic"><MailIcon /></div>
              <div><div className="m-l">EMAIL</div><div className="m-v">{profile.email}</div></div>
            </a>
            <a className="cmethod" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <div className="ic"><LinkedinIcon /></div>
              <div><div className="m-l">LINKEDIN</div><div className="m-v">{profile.linkedinHandle}</div></div>
            </a>
            <a className="cmethod" href={profile.github} target="_blank" rel="noopener noreferrer">
              <div className="ic"><GithubIcon /></div>
              <div><div className="m-l">GITHUB</div><div className="m-v">{profile.githubHandle}</div></div>
            </a>
            <div className="cmethod" style={{ cursor: "default" }}>
              <div className="ic"><PinIcon /></div>
              <div><div className="m-l">LOCATION</div><div className="m-v">{profile.location}</div></div>
            </div>
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
            <button type="submit" className="btn primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send Message"} <Send />
            </button>
            <div className={`form-note${status === "error" ? " err" : ""}${status === "sent" ? " ok" : ""}`} role="status" aria-live="polite">
              {note}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
