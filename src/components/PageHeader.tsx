import Reveal from "@/components/Reveal";
import PageArt, { type ArtKind } from "@/components/PageArt";

export default function PageHeader({
  eyebrow,
  title,
  lead,
  art,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  art?: ArtKind;
}) {
  return (
    <section className="page-head">
      <div className={`wrap${art ? " page-head-grid" : ""}`}>
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          {lead && <p className="lead" style={{ marginTop: "var(--s3)" }}>{lead}</p>}
        </Reveal>
        {art && <PageArt kind={art} />}
      </div>
    </section>
  );
}
