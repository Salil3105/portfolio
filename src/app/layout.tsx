import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Backdrop from "@/components/Backdrop";

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F7F8" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
  width: "device-width",
  initialScale: 1,
};

/** Runs before hydration so the page never flashes the wrong theme, and
 *  before paint so there's no light-to-dark pop either. Kept tiny and
 *  inlined — it can't wait on a script fetch. */
const THEME_INIT = `
(function () {
  try {
    var t = localStorage.getItem("theme");
    if (t !== "light" && t !== "dark") {
      t = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }
    document.documentElement.setAttribute("data-theme", t);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // data-theme="dark": the site's default identity, and what a no-JS
    // visitor gets. suppressHydrationWarning covers two things that change
    // <html> before React hydrates — browser extensions injecting their own
    // attributes, and THEME_INIT below overwriting data-theme itself.
    <html
      lang="en"
      data-theme="dark"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </head>
      <body>
        <Backdrop />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
