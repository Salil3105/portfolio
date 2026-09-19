import Reveal from "@/components/Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills({ band = false }: { band?: boolean }) {
  return (
    <section className={`section${band ? " band" : ""}`} id="skills">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">Skills</span>
            <h2 className="section-title">What I bring to the table</h2>
          </div>
        </Reveal>

        <Reveal className="skill-groups">
          {skillGroups.map((g) => (
            <div key={g.title}>
              <h3>{g.title}</h3>
              <div className="skill-pills">
                {g.skills.map((s) => <span className="spill" key={s}>{s}</span>)}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
