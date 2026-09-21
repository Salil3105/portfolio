import Reveal from "@/components/Reveal";
import { experience, education, achievements } from "@/lib/data";

export default function Experience({ band = true, showHeading = true }: { band?: boolean; showHeading?: boolean }) {
  return (
    <section className={`section${band ? " band" : ""}`} id="experience">
      <div className="wrap">
        {showHeading && (
          <Reveal className="section-head">
            <div>
              <span className="eyebrow">Experience</span>
              <h2 className="section-title">My journey</h2>
            </div>
          </Reveal>
        )}

        <div className="timeline">
          {experience.map((e, i) => (
            <Reveal className="tl-item" key={e.role + e.company} delay={i * 0.08}>
              <div className="tl-role">{e.role}</div>
              <div className="tl-meta">
                <span>{e.company}</span>
                <span className="dur">{e.duration}</span>
              </div>
              <ul className="tl-list">
                {e.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="edu-grid">
          <Reveal className="card edu-card">
            <span className="eyebrow">Education</span>
            <div className="tl-role" style={{ marginTop: "var(--s2)" }}>{education.degree}</div>
            <div className="tl-meta">
              <span>{education.school}</span>
              <span className="dur">{education.duration}</span>
            </div>
            <p style={{ color: "var(--muted)", fontSize: 15, marginTop: 10 }}>{education.detail}</p>
          </Reveal>

          <Reveal className="card edu-card" delay={0.08}>
            <span className="eyebrow">Achievements</span>
            <ul className="tl-list" style={{ marginTop: "var(--s2)" }}>
              {achievements.map((a) => (
                <li key={a.title}>
                  <strong style={{ color: "var(--text)", fontWeight: 500 }}>{a.title}</strong>
                  <br />{a.detail}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
