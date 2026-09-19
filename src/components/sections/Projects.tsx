import Reveal from "@/components/Reveal";
import { projects } from "@/lib/data";
import { projectArt, External } from "@/lib/icons";

export default function Projects({ heading = "Things I've built", band = false }: { heading?: string; band?: boolean }) {
  return (
    <section className={`section${band ? " band" : ""}`} id="projects">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <span className="eyebrow">Featured Work</span>
            <h2 className="section-title">{heading}</h2>
          </div>
          <span className="link-more">Built with care →</span>
        </Reveal>

        <div className={`proj-grid${projects.length === 1 ? " single" : ""}`}>
          {projects.map((p, i) => (
            <Reveal as="article" className="card project" key={p.name} delay={i * 0.08}>
              <div className="thumb">
                <div className={`art ${p.art}`}>{projectArt[p.art]}</div>
              </div>
              <div className="p-body">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="pills">
                  {p.tech.map((t) => <span className="pill" key={t}>{t}</span>)}
                </div>
                <div className="p-actions">
                  <a href={p.demo} className="btn sm primary" target="_blank" rel="noopener noreferrer">
                    Live Demo <External />
                  </a>
                  {p.repo ? (
                    <a href={p.repo} className="btn sm ghost" target="_blank" rel="noopener noreferrer">GitHub</a>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
