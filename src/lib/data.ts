// ============================================================
// Central content for the portfolio. Edit here to update the site.
// ============================================================

export const profile = {
  name: "Salil Chandwadkar",
  initials: "SC",
  role: "Software Engineer · Backend · AI · Full-Stack",
  email: "schandwadkar31@gmail.com",
  // TODO: swap these placeholders for your real links + résumé URL
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  twitter: "https://twitter.com/",
  resumeUrl: "#", // e.g. "/salil-resume.pdf"
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
] as const;

export const stats = [
  { n: "2", plus: "+", label: "Years Experience" },
  { n: "20", plus: "+", label: "Projects Shipped" },
  { n: "500", plus: "+", label: "GitHub Contributions" },
];

export const features = [
  { icon: "engineer", title: "Engineer", desc: "Scalable backends & clean APIs." },
  { icon: "learner", title: "Learner", desc: "Always exploring new tech." },
  { icon: "builder", title: "Builder", desc: "Ideas turned into products." },
  { icon: "solver", title: "Problem Solver", desc: "Focused on real impact." },
];

export const techStack = [
  { key: "react", name: "React" },
  { key: "fastapi", name: "FastAPI" },
  { key: "python", name: "Python" },
  { key: "java", name: "Java" },
  { key: "spring", name: "Spring Boot" },
  { key: "postgres", name: "PostgreSQL" },
  { key: "docker", name: "Docker" },
  { key: "kubernetes", name: "Kubernetes" },
  { key: "aws", name: "AWS" },
  { key: "redis", name: "Redis" },
  { key: "git", name: "Git" },
  { key: "github", name: "GitHub" },
] as const;

export type Project = {
  name: string;
  art: "art-rasa" | "art-resume" | "art-finance";
  desc: string;
  tech: string[];
  demo: string;
  repo: string;
};

export const projects: Project[] = [
  {
    name: "Rasapadma",
    art: "art-rasa",
    desc: "A full-stack platform with a FastAPI backend and a React front end — structured content, search and a clean, responsive experience end to end.",
    tech: ["React", "FastAPI", "PostgreSQL"],
    demo: "#",
    repo: "https://github.com/",
  },
  {
    name: "Resume Analyzer",
    art: "art-resume",
    desc: "AI-powered résumé analysis that extracts skills, scores fit against a role and returns actionable recommendations — powered by LLMs and a Python pipeline.",
    tech: ["Python", "OpenAI", "Streamlit"],
    demo: "#",
    repo: "https://github.com/",
  },
  {
    name: "AI Finance Tracker",
    art: "art-finance",
    desc: "Track spending with AI insights and smart budget recommendations — categorization, forecasts and gentle nudges, on a FastAPI & PostgreSQL backend.",
    tech: ["FastAPI", "React", "PostgreSQL"],
    demo: "#",
    repo: "https://github.com/",
  },
];

export type Experience = {
  role: string;
  company: string;
  duration: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "ABC Tech Pvt. Ltd.",
    duration: "2023 — Present",
    points: [
      "Design and ship scalable backend services with FastAPI and PostgreSQL.",
      "Build AI-powered features — retrieval, ranking and LLM integrations.",
      "Own React front ends and deployment on AWS with Docker.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "XYZ Solutions",
    duration: "2022 — 2023",
    points: [
      "Built internal tools and automation scripts in Python.",
      "Worked across PostgreSQL data models and REST APIs.",
      "Collaborated in an Agile team shipping weekly.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Backend",
    skills: ["FastAPI", "Spring Boot", "Node.js", "REST APIs", "PostgreSQL", "Redis", "Microservices"],
  },
  {
    title: "AI Engineering",
    skills: ["LLMs", "RAG", "Vector Search", "Prompt Design", "Embeddings", "PyTorch"],
  },
  {
    title: "Full-Stack & Cloud",
    skills: ["React", "Next.js", "TypeScript", "Docker", "Kubernetes", "AWS", "CI/CD"],
  },
];
