import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="My journey."
        lead="Roles, teams and the things I've shipped along the way."
      />
      <Experience band={false} />
      <Skills band />
      <Contact />
    </>
  );
}
