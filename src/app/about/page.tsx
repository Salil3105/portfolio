import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A curious builder."
        lead="Engineer, learner, problem solver — here's the story behind the work."
        art="about"
      />
      <About showHeading={false} />
      <Skills band />
      <Contact />
    </>
  );
}
