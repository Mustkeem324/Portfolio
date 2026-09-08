import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaAws,
  FaGithub,
  FaLinkedinIn,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiDjango,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import { HiArrowUpRight, HiOutlineMail } from "react-icons/hi2";

const profile = {
  name: "Mustkeem Ahmad",
  role: "AI Engineer · Generative AI · LLM Evaluation · Full-Stack Development",
  email: "mustkeem324@gmail.com",
  github: "https://github.com/Mustkeem324",
  linkedin: "https://www.linkedin.com/",
  freelance: "https://freelancekar.com",
};

const stats = [
  ["200+", "Projects delivered"],
  ["5+ yrs", "AI / engineering"],
  ["3", "Active workstreams"],
  ["8.90", "MBA CGPA"],
];

const experience = [
  {
    company: "Handshake · Project Dynamo",
    role: "AI Trainer / LLM Evaluation Contributor",
    period: "Feb 2026 — Present",
    text: "Evaluate model outputs for reasoning, instruction following, relevance and quality, with structured evidence-based feedback in high-quality AI training workflows.",
  },
  {
    company: "FreelanceKar.com",
    role: "Founder & AI / Full-Stack Consultant",
    period: "Mar 2021 — Present",
    text: "Delivered 200+ client and independent projects across AI agents, API engineering, automation, cloud deployment and full-stack products from discovery through launch.",
  },
  {
    company: "Outlier AI",
    role: "Generative AI Engineer & Model Evaluation Consultant",
    period: "Mar 2024 — Present",
    text: "Evaluate and improve LLM outputs for accuracy, safety, reasoning quality and instruction following using prompt engineering, RLHF-style evaluation and multimodal review.",
  },
  {
    company: "Unitechie Solutions Pvt. Ltd.",
    role: "Lead — Full Stack & AI Innovation",
    period: "Oct 2025 — Feb 2026",
    text: "Worked with leadership on architecture and delivery of AI-enabled platforms combining LLMs, automation pipelines, APIs and cloud services across AWS and Azure.",
  },
];

const projects = [
  {
    title: "Django + GraphQL Full-Stack Application",
    category: "Full Stack",
    description: "Full-stack product application with Django backend, GraphQL APIs and a React/Apollo frontend for product listing and detailed product workflows.",
    stack: ["Django", "GraphQL", "React", "Apollo"],
    github: "https://github.com/Mustkeem324/Full-Stack-Application-with-Django-GraphQL-React-and-Apollo-Client",
    featured: true,
  },
  {
    title: "MathAI — AI-powered Math Solver",
    category: "AI & LLM",
    description: "AI-focused math solving project that demonstrates practical experimentation with intelligent problem-solving workflows.",
    stack: ["AI", "Python", "Web"],
    github: "https://github.com/Mustkeem324/MathAI-AI-powered-Math-Solver",
    featured: true,
  },
  {
    title: "Social Media Backend REST API",
    category: "APIs",
    description: "Backend REST API project focused on production-style social application flows and structured API engineering.",
    stack: ["REST API", "Backend", "Node.js"],
    github: "https://github.com/Mustkeem324/Social-Media-Backend-REST-API",
    featured: true,
  },
  {
    title: "User Authentication API",
    category: "APIs",
    description: "Authentication-focused backend service covering reusable identity and access workflows for modern applications.",
    stack: ["Auth", "API", "Backend"],
    github: "https://github.com/Mustkeem324/User-Authentication-API",
  },
  {
    title: "Agriculture Data Analysis",
    category: "Data",
    description: "Analytics project for agriculture datasets, demonstrating data transformation, analysis and engineering-oriented reporting.",
    stack: ["Data", "Analytics", "JavaScript"],
    github: "https://github.com/Mustkeem324/Manufac-Analytics---Agriculture-Data-Analysis",
  },
  {
    title: "Excel Web Scraping + Telegram Bot",
    category: "Automation",
    description: "Automation workflow combining web scraping, structured Excel data processing and Telegram bot integration.",
    stack: ["Scraping", "Telegram", "Automation"],
    github: "https://github.com/Mustkeem324/Excel-Web-Scraping-and-Telegram-Bot-Integration",
  },
  {
    title: "Stock Market Analysis Web App",
    category: "Data",
    description: "Web application project centered on market-data analysis and presenting financial information through an accessible interface.",
    stack: ["Web App", "Analytics", "Data"],
    github: "https://github.com/Mustkeem324/Stock-Market-Analysis-Web-App",
  },
  {
    title: "Zidio Resume Builder",
    category: "Full Stack",
    description: "Resume-building product created as part of full-stack development work, focused on structured user input and polished output.",
    stack: ["Full Stack", "Web", "Product"],
    github: "https://github.com/Mustkeem324/Zidio-Development-Resume-Builder",
  },
  {
    title: "Issue Tracker",
    category: "Full Stack",
    description: "Project and issue management application for creating projects, logging issues and organizing development work.",
    stack: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/Mustkeem324/Issue-Tracker",
  },
];

const skills = [
  ["AI & LLM", "LLM evaluation, AI training, prompt engineering, RLHF, agentic AI, multimodal AI"],
  ["Full Stack", "Python, JavaScript, Django, Node.js, Next.js, React, GraphQL, Apollo Client"],
  ["Cloud & Data", "AWS, Azure, PostgreSQL, MongoDB, REST APIs, Git, CI/CD"],
  ["Real-Time", "Socket.IO, JWT authentication, multi-user workflows, backend services"],
];

const techIcons = [FaPython, FaReact, SiNextdotjs, FaNodeJs, SiDjango, SiGraphql, SiPostgresql, SiMongodb, FaAws, SiTailwindcss];

function SectionTitle({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

export default function App() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "AI & LLM", "Full Stack", "APIs", "Automation", "Data"];
  const visibleProjects = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [filter]
  );

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="nav-wrap">
        <a href="#top" className="brand" aria-label="Mustkeem Ahmad home">
          <span className="brand-mark">MA</span>
          <span>Mustkeem Ahmad</span>
        </a>
        <nav>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href={profile.github} target="_blank" rel="noreferrer">
          GitHub <HiArrowUpRight />
        </a>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="hero-copy">
            <div className="availability"><span /> Available for AI & full-stack opportunities</div>
            <p className="kicker">{profile.role}</p>
            <h1>I build <span>AI-powered products</span>, scalable systems and intelligent automation.</h1>
            <p className="hero-text">AI engineer and full-stack developer working across LLM evaluation, AI training, prompt engineering, automation, APIs, cloud systems and production web applications.</p>
            <div className="hero-actions">
              <a className="primary-btn" href="#work">Explore selected work <FaArrowRight /></a>
              <a className="secondary-btn" href={`mailto:${profile.email}`}>Let’s talk <HiOutlineMail /></a>
            </div>
            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
              <a href={profile.freelance} target="_blank" rel="noreferrer">FreelanceKar <HiArrowUpRight /></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="hero-panel">
            <div className="panel-top"><span>Engineering profile</span><span className="live-dot">LIVE</span></div>
            <div className="monogram">MA</div>
            <h3>Building from architecture to deployment.</h3>
            <p>Generative AI · LLM evaluation · Full-stack systems · API engineering · Automation · Cloud</p>
            <div className="tech-orbit">
              {techIcons.map((Icon, index) => <span key={index}><Icon /></span>)}
            </div>
          </motion.div>
        </section>

        <section className="stats-strip">
          {stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </section>

        <section className="section-pad" id="work">
          <SectionTitle eyebrow="Selected engineering work" title="Projects that show range, not just volume." copy="A curated set from a much larger GitHub portfolio across AI, full-stack products, backend APIs, automation and data tooling." />
          <div className="filters">
            {categories.map((category) => <button key={category} className={filter === category ? "active" : ""} onClick={() => setFilter(category)}>{category}</button>)}
          </div>
          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <motion.article layout key={project.title} className={`project-card ${project.featured ? "featured" : ""}`} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}>
                <div className="project-meta"><span>{String(index + 1).padStart(2, "0")}</span><span>{project.category}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a href={project.github} target="_blank" rel="noreferrer">View source <FaGithub /><HiArrowUpRight /></a>
              </motion.article>
            ))}
          </div>
          <a className="all-projects" href={profile.github} target="_blank" rel="noreferrer">Explore the full GitHub portfolio <HiArrowUpRight /></a>
        </section>

        <section className="section-pad split-section" id="experience">
          <SectionTitle eyebrow="Experience" title="AI evaluation meets production engineering." copy="My work spans model-quality workflows and end-to-end product delivery." />
          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.company}-${item.role}`}>
                <div className="timeline-marker" />
                <div className="timeline-head"><div><span>{item.company}</span><h3>{item.role}</h3></div><time>{item.period}</time></div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad" id="skills">
          <SectionTitle eyebrow="Capabilities" title="A stack designed for shipping." copy="From model evaluation and intelligent agents to real-time applications, backend APIs and cloud delivery." />
          <div className="skills-grid">
            {skills.map(([title, text]) => <article key={title}><span>↗</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className="tech-marquee">{techIcons.map((Icon, index) => <span key={index}><Icon /></span>)}</div>
        </section>

        <section className="education section-pad">
          <SectionTitle eyebrow="Education" title="Engineering foundation. Business perspective." />
          <div className="education-grid">
            <article><span>2024 — 2026</span><h3>MBA — Strategy & Operations</h3><p>UPES, Dehradun · CGPA 8.90</p></article>
            <article><span>2017 — 2021</span><h3>B.E. — Electrical Engineering</h3><p>Jamia Millia Islamia · First Class · 83.30%</p></article>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div>
            <span className="eyebrow">Start a conversation</span>
            <h2>Have an AI, automation or full-stack problem worth solving?</h2>
            <p>I'm open to engineering roles, AI evaluation work, consulting and product collaborations.</p>
          </div>
          <div className="contact-actions">
            <a className="primary-btn" href={`mailto:${profile.email}`}>Email me <HiOutlineMail /></a>
            <a className="secondary-btn" href={profile.freelance} target="_blank" rel="noreferrer">FreelanceKar <HiArrowUpRight /></a>
          </div>
        </section>
      </main>

      <footer>
        <div><span className="brand-mark">MA</span><span>Mustkeem Ahmad</span></div>
        <p>AI Engineer · Full-Stack Developer · LLM Evaluation</p>
        <div><a href={profile.github} target="_blank" rel="noreferrer"><FaGithub /></a><a href={`mailto:${profile.email}`}><HiOutlineMail /></a></div>
      </footer>
    </div>
  );
}
