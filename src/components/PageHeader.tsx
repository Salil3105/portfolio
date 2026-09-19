import Reveal from "@/components/Reveal";

export default function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <section className="page-head">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          {lead && <p className="lead" style={{ marginTop: "var(--s3)" }}>{lead}</p>}
        </Reveal>
      </div>
    </section>
  );
}
