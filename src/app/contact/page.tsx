import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's talk."
        lead="Have a project in mind or just want to say hi? My inbox is always open."
      />
      <Contact band={false} />
    </>
  );
}
