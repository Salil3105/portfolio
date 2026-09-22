import Link from "next/link";
import { navLinks, profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, MailIcon, ArrowRight } from "@/lib/icons";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        {/* closing call to action */}
        <div className="foot-cta">
          <div>
            <span className="eyebrow">Open to opportunities</span>
            <h2 className="foot-cta-title">Let&apos;s build something that scales.</h2>
          </div>
          <Link href="/contact" className="btn primary">
            Start a conversation <ArrowRight />
          </Link>
        </div>

        <div className="foot-cols">
          <div className="foot-brand">
            <Link href="/" aria-label="Home"><Logo /></Link>
            <p>
              Software engineer building event-driven microservices in Java and Spring Boot —
              currently at Dassault Systèmes, Pune.
            </p>
            <div className="foot-socials">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
            </div>
          </div>

          <nav className="foot-col" aria-label="Footer">
            <h3>Navigate</h3>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </nav>

          <div className="foot-col">
            <h3>Get in touch</h3>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">{profile.linkedinHandle}</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">{profile.githubHandle}</a>
            <span className="foot-muted">{profile.location}</span>
          </div>

          <div className="foot-col">
            <h3>Résumé</h3>
            <a href={profile.resumeUrl} download>Download PDF</a>
            <span className="foot-muted">Java · Spring Boot</span>
            <span className="foot-muted">Kafka · AWS</span>
          </div>
        </div>

        <div className="foot-bottom">
          <span className="copy">© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>          
        </div>
      </div>
    </footer>
  );
}
