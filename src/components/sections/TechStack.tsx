import Reveal from "@/components/Reveal";
import { techStack } from "@/lib/data";
import { techIcons } from "@/lib/techIcons";

export default function TechStack({ band = true }: { band?: boolean }) {
  return (
    <section className={`section${band ? " band" : ""}`} id="tech">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">Toolkit</span>
            <h2 className="section-title">Technologies I work with</h2>
          </div>
          <span className="link-more">Always learning more →</span>
        </Reveal>

        <Reveal className="tech-grid">
          {techStack.map((t) => (
            <div className="tech" key={t.key} title={t.name}>
              {techIcons[t.key]}
              <span>{t.name}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
