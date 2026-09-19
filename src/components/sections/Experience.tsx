import Reveal from "@/components/Reveal";
import { experience } from "@/lib/data";

export default function Experience({ band = true }: { band?: boolean }) {
  return (
    <section className={`section${band ? " band" : ""}`} id="experience">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">Experience</span>
            <h2 className="section-title">My journey</h2>
          </div>
        </Reveal>

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
      </div>
    </section>
  );
}
