import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Featured Work"
        title="Things I've built."
        lead="Production platforms I've designed, built and shipped end to end."
        art="projects"
      />
      <Projects showHeading={false} />
      <TechStack band />
      <Contact />
    </>
  );
}
