import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Salil Chandwadkar — Software Engineer",
    template: "%s · Salil Chandwadkar",
  },
  description:
    "Portfolio of Salil Chandwadkar — a software engineer building scalable backend systems, AI-powered applications and modern full-stack products.",
  keywords: ["Software Engineer", "Backend", "AI Engineering", "Full Stack", "FastAPI", "React", "Next.js"],
  authors: [{ name: "Salil Chandwadkar" }],
  openGraph: {
    title: "Salil Chandwadkar — Software Engineer",
    description: "Backend · AI · Full-Stack engineer. Building intelligent systems.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
