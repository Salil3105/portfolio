// ============================================================
// Central content for the portfolio. Edit here to update the site.
// Sourced from Salil Chandwadkar's résumé.
// ============================================================

export const profile = {
  name: "Salil Chandwadkar",
  initials: "SC",
  role: "Software Engineer · Java · Spring Boot · Kafka · AWS",
  email: "schandwadkar31@gmail.com",
  phone: "+91 96237 43101",
  location: "Pune, Maharashtra, India",
  github: "https://github.com/Salil3105",
  githubHandle: "github.com/Salil3105",
  linkedin: "https://linkedin.com/in/salil-chandwadkar-2491031b0",
  linkedinHandle: "in/salil-chandwadkar",
  resumeUrl: "/salil-chandwadkar-resume.pdf",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
] as const;

export const stats = [
  { n: "3", plus: "+", label: "Years Experience" },
  { n: "20", plus: "+", label: "Technologies" },
  { n: "2", plus: "", label: "Awards Won" },
];

export const features = [
  { icon: "engineer", title: "Engineer", desc: "Scalable microservices & REST APIs." },
  { icon: "builder", title: "Architect", desc: "Event-driven, distributed systems." },
  { icon: "cloud", title: "Cloud Native", desc: "AWS, Docker & Kubernetes." },
  { icon: "solver", title: "Problem Solver", desc: "Clean, testable, maintainable code." },
];

export const techStack = [
  { key: "java", name: "Java 17" },
  { key: "spring", name: "Spring Boot" },
  { key: "kafka", name: "Kafka" },
  { key: "node", name: "Node.js" },
  { key: "react", name: "React" },
  { key: "postgres", name: "PostgreSQL" },
  { key: "mongodb", name: "MongoDB" },
  { key: "redis", name: "Redis" },
  { key: "docker", name: "Docker" },
  { key: "kubernetes", name: "Kubernetes" },
  { key: "aws", name: "AWS" },
  { key: "git", name: "Git" },
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
    desc: "A production web platform for Rasapadma Clinic — a clean, responsive site with structured content and a smooth, booking-ready experience, built and deployed end to end.",
    tech: ["React", "REST APIs", "PostgreSQL"],
    demo: "https://rasapadmaclinic.onrender.com/",
    repo: "",
  },
  {
    name: "Kinetic Labs",
    art: "art-finance",
    desc: "The web platform for Kinetic Labs — a fast, responsive and cleanly designed site with smooth interactions, built and shipped end to end.",
    tech: ["React", "Node.js", "CI/CD"],
    demo: "https://kineticlabs.in/",
    repo: "",
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
    role: "Software Engineer Specialist",
    company: "Dassault Systèmes · Pune, India",
    duration: "July 2023 — Present",
    points: [
      "Designed enterprise-scale microservices in Java 17 and Spring Boot for a large engineering platform, exposing secure REST APIs hardened with Spring Security, JWT and role-based access control.",
      "Architected event-driven services with Apache Kafka in KRaft mode, enabling asynchronous, loosely coupled communication across product modules.",
      "Built an event-streaming and notification platform with guaranteed ordering, event replay, retry policies, dead-letter queues and idempotent consumers for exactly-once processing.",
      "Developed lightweight Kafka consumers in Node.js and Express so dashboards saw live product-lifecycle status without polling the core Java services.",
      "Deployed cloud-native services on AWS (EC2, S3, RDS) with Docker and Kubernetes horizontal autoscaling, improving release reliability and consistency.",
      "Modeled and tuned PostgreSQL and MySQL schemas on AWS RDS, and applied polyglot persistence with MongoDB and Redis for low-latency workloads.",
      "Wrote JUnit and Mockito test suites and automated build, test and deploy workflows with GitHub Actions.",
      "Led code reviews in an Agile team, enforcing SOLID principles, design patterns and clean-code standards.",
    ],
  },
];

export const education = {
  degree: "B.Tech, Information Technology",
  school: "MIT ADT University, Pune",
  duration: "Graduated 2023",
  detail: "CGPA 7.88 / 10",
};

export const achievements = [
  {
    title: "Best MIT Team Award — CodeBreak 3.0",
    detail: "National-level hackathon, recognized for problem-solving and team collaboration.",
  },
  {
    title: "2nd Prize — Ideathon",
    detail: "University-level competition, for a creative and technically feasible product solution.",
  },
];

export const skillGroups = [
  {
    title: "Backend",
    skills: [
      "Java 17", "Spring Boot", "Spring Security", "Spring Data JPA",
      "Hibernate", "REST APIs", "Node.js", "Express.js", "JUnit", "Mockito",
    ],
  },
  {
    title: "Architecture & Messaging",
    skills: [
      "Microservices", "Event-Driven", "Apache Kafka", "RabbitMQ",
      "Distributed Systems", "Design Patterns", "SOLID",
    ],
  },
  {
    title: "Data, Cloud & Frontend",
    skills: [
      "PostgreSQL", "MySQL", "MongoDB", "Redis", "AWS",
      "Docker", "Kubernetes", "CI/CD", "React", "Redux",
    ],
  },
];
