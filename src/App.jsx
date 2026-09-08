import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaAws,
  FaGithub,
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
import { HiArrowUpRight } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import ResumePDF from "./assets/mustkeem_ee4.pdf";

const profile = {
  role: "Founder · AI Engineer · Full-Stack Developer · LLM Evaluation",
  email: "mustkeem324@gmail.com",
  github: "https://github.com/Mustkeem324",
  freelance: "https://freelancekar.com",
  location: "India · Remote / Hybrid",
};

const stats = [
  ["Founder", "FreelanceKar.com"],
  ["200+", "Projects delivered"],
  ["3", "Flagship products"],
  ["8.90", "MBA CGPA"],
];

const flagshipProjects = [
  {
    title: "FreelanceKar.com",
    label: "Founder / Product",
    status: "Live product",
    description: "A freelancing and digital-work platform I founded, combining product strategy, marketplace workflows, full-stack engineering and deployment.",
    problem: "Freelancers and clients need a focused workflow for discovering work, posting opportunities and managing digital collaboration without unnecessary friction.",
    solution: "I shaped FreelanceKar as a founder-led product: product direction, experience design, engineering decisions, marketplace flows, APIs and deployment are treated as one connected system.",
    architecture: ["Client", "React / Next.js", "API", "Auth", "Services", "Database", "Realtime", "Cloud"],
    features: ["Marketplace workflows", "Role-aware experiences", "Job/project flows", "Messaging", "Realtime interactions", "Production deployment"],
    stack: ["Founder", "Product", "Full Stack", "APIs", "Realtime"],
    role: "Founder · Product · Architecture · Full-Stack Engineering · Deployment",
    live: "https://freelancekar.com",
    preview: "https://image.thum.io/get/width/1200/crop/700/noanimate/https://freelancekar.com",
  },
  {
    title: "CampusOS / NAVEMORA",
    label: "Flagship Engineering",
    status: "Actively building",
    description: "Enterprise multi-tenant higher-education operating system with campus ERP, LMS, workforce OS, registration, finance, identity, access and realtime institutional workflows.",
    problem: "Higher-education operations are often fragmented across disconnected systems, creating duplicated workflows, weak visibility and inconsistent access control.",
    solution: "CampusOS is designed as a multi-tenant operating layer that brings academic, administrative, workforce and institutional workflows into a consistent platform architecture.",
    architecture: ["Campus user", "Next.js", "Tenant layer", "Auth / RBAC", "Domain services", "Prisma", "PostgreSQL", "Realtime / Cloud"],
    features: ["Multi-tenancy", "ERP workflows", "LMS workflows", "Workforce OS", "Registration", "Finance", "Identity & access", "Realtime"],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Multi-Tenant"],
    role: "Architecture · Full-Stack Engineering · Product Systems · Data Modeling",
    github: "https://github.com/Mustkeem324/campusos",
    preview: "https://opengraph.githubassets.com/1/Mustkeem324/campusos",
  },
  {
    title: "Noor Quran",
    label: "Live Product",
    status: "Live product",
    description: "A comprehensive Islamic companion for Quran reading, learning, memorization, dhikr, hadith, prayer tools, reflection, community and structured learning journeys.",
    problem: "Learning and daily spiritual practice are commonly split across separate tools, making the experience fragmented and difficult to sustain.",
    solution: "Noor Quran brings core learning, reading, reflection and daily-practice tools into one accessible product experience.",
    architecture: ["Reader", "Web app", "Content layer", "Learning flows", "AI features", "User tools", "Community", "Cloud"],
    features: ["Quran reader", "Learning journeys", "Hadith", "Dhikr", "Prayer tools", "Reflection", "Community", "AI-assisted features"],
    stack: ["Quran", "Learning", "AI Features", "Web Product", "Community"],
    role: "Product Engineering · Feature Design · Full-Stack Development",
    live: "https://noorquran.in/",
    preview: "https://image.thum.io/get/width/1200/crop/700/noanimate/https://noorquran.in/",
  },
];

const projects = [
  { title: "Django + GraphQL Full-Stack Application", category: "Full Stack", description: "Django backend, GraphQL APIs and React/Apollo frontend for structured product workflows.", stack: ["Django", "GraphQL", "React", "Apollo"], github: "https://github.com/Mustkeem324/Full-Stack-Application-with-Django-GraphQL-React-and-Apollo-Client", featured: true },
  { title: "MathAI — AI-powered Math Solver", category: "AI & LLM", description: "AI-focused math solving project demonstrating intelligent problem-solving workflows.", stack: ["AI", "Python", "Web"], github: "https://github.com/Mustkeem324/MathAI-AI-powered-Math-Solver", featured: true },
  { title: "Social Media Backend REST API", category: "APIs", description: "Backend REST API focused on production-style social application flows and reusable API engineering.", stack: ["REST API", "Backend", "Node.js"], github: "https://github.com/Mustkeem324/Social-Media-Backend-REST-API", featured: true },
  { title: "User Authentication API", category: "APIs", description: "Authentication-focused backend service covering reusable identity and access workflows.", stack: ["Auth", "API", "Backend"], github: "https://github.com/Mustkeem324/User-Authentication-API" },
  { title: "Agriculture Data Analysis", category: "Data", description: "Analytics project demonstrating data transformation, analysis and engineering-oriented reporting.", stack: ["Data", "Analytics", "JavaScript"], github: "https://github.com/Mustkeem324/Manufac-Analytics---Agriculture-Data-Analysis" },
  { title: "Excel Web Scraping + Telegram Bot", category: "Automation", description: "Automation combining web scraping, structured Excel processing and Telegram bot integration.", stack: ["Scraping", "Telegram", "Automation"], github: "https://github.com/Mustkeem324/Excel-Web-Scraping-and-Telegram-Bot-Integration" },
  { title: "Stock Market Analysis Web App", category: "Data", description: "Web application centered on market-data analysis and accessible presentation of financial information.", stack: ["Web App", "Analytics", "Data"], github: "https://github.com/Mustkeem324/Stock-Market-Analysis-Web-App" },
  { title: "Zidio Resume Builder", category: "Full Stack", description: "Resume-building product focused on structured user input and polished output.", stack: ["Full Stack", "Web", "Product"], github: "https://github.com/Mustkeem324/Zidio-Development-Resume-Builder" },
  { title: "Issue Tracker", category: "Full Stack", description: "Project and issue management application for creating projects, logging issues and organizing work.", stack: ["Node.js", "Express", "MongoDB"], github: "https://github.com/Mustkeem324/Issue-Tracker" },
];

const experience = [
  { company: "FreelanceKar.com", role: "Founder & AI / Full-Stack Consultant", period: "Mar 2021 — Present", text: "Founded and built FreelanceKar.com while delivering 200+ client and independent projects across AI agents, APIs, automation, cloud deployment and full-stack products.", highlight: true },
  { company: "Handshake · Project Dynamo", role: "AI Trainer / LLM Evaluation Contributor", period: "Feb 2026 — Present", text: "Evaluate model outputs for reasoning, instruction following, relevance and quality with structured evidence-based feedback." },
  { company: "Outlier AI", role: "Generative AI Engineer & Model Evaluation Consultant", period: "Mar 2024 — Present", text: "Evaluate and improve LLM outputs for accuracy, safety, reasoning quality and instruction following using prompt engineering and structured model evaluation." },
  { company: "Unitechie Solutions Pvt. Ltd.", role: "Lead — Full Stack & AI Innovation", period: "Oct 2025 — Feb 2026", text: "Worked on architecture and delivery of AI-enabled platforms combining LLMs, automation pipelines, APIs and cloud services." },
];

const aiLab = [
  ["LLM Evaluation", "Reasoning, instruction following, factuality, relevance, safety and evidence-backed quality review."],
  ["RAG & Knowledge", "Retrieval-aware product patterns, contextual grounding and knowledge-backed assistant workflows."],
  ["AI Agents", "Task decomposition, tool use, workflow automation, stateful systems and human-in-the-loop patterns."],
  ["Prompt Engineering", "System prompts, evaluation prompts, structured outputs, guardrails and iterative prompt optimization."],
  ["Multimodal", "Evaluation and product thinking across text, image and mixed-input AI workflows."],
  ["AI System Design", "Model layer, orchestration, memory, APIs, observability, evaluation and production deployment."],
];

const services = [
  ["AI Product Development", "AI assistants, evaluation workflows, RAG systems, agents and intelligent product features."],
  ["Full-Stack Platforms", "Modern frontend, backend APIs, authentication, databases and production-ready application flows."],
  ["Automation & Integrations", "Workflow automation, bots, scraping, external APIs and operational tooling."],
  ["Architecture & Consulting", "Product architecture, backend design, multi-tenant systems and technical delivery planning."],
];

const hiringRoles = ["AI Engineer", "Generative AI Engineer", "Full-Stack Engineer", "LLM Evaluation / AI Trainer"];
const currentBuilds = [
  ["CampusOS / NAVEMORA", "Multi-tenant higher-education operating system", "Building"],
  ["FreelanceKar.com", "Founder-led freelancing and digital-work platform", "Shipping"],
  ["AI / LLM systems", "Evaluation, agents, automation and intelligent workflows", "Active"],
];
const techIcons = [FaPython, FaReact, SiNextdotjs, FaNodeJs, SiDjango, SiGraphql, SiPostgresql, SiMongodb, FaAws, SiTailwindcss];

function SectionTitle({ eyebrow, title, copy }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function ArchitectureFlow({ items }) {
  return <div className="architecture-flow">{items.map((item, index) => <div className="architecture-step" key={item}><span>{item}</span>{index < items.length - 1 && <b>→</b>}</div>)}</div>;
}

function CaseStudyModal({ project, onClose }) {
  if (!project) return null;
  return (
    <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
      <motion.div className="case-modal" initial={{ opacity: 0, y: 24, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: .98 }} onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close case study">×</button>
        <div className="case-preview"><img src={project.preview} alt={`${project.title} product preview`} loading="lazy" /><span>{project.status}</span></div>
        <div className="case-content">
          <span className="eyebrow">{project.label}</span><h2>{project.title}</h2><p className="case-lead">{project.description}</p>
          <div className="case-columns"><article><small>Problem</small><p>{project.problem}</p></article><article><small>Solution</small><p>{project.solution}</p></article></div>
          <div className="case-block"><small>Architecture</small><ArchitectureFlow items={project.architecture} /></div>
          <div className="case-columns"><article><small>Features</small><div className="tag-row">{project.features.map((feature) => <span key={feature}>{feature}</span>)}</div></article><article><small>My role</small><p>{project.role}</p><div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></article></div>
          <div className="modal-actions">{project.live && <a className="primary-btn" href={project.live} target="_blank" rel="noreferrer">Visit live <HiArrowUpRight /></a>}{project.github && <a className="secondary-btn" href={project.github} target="_blank" rel="noreferrer"><FaGithub /> View code</a>}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CommandPalette({ open, onClose }) {
  const commands = [["Flagship products", "#flagship"], ["AI Engineering Lab", "#ai-lab"], ["GitHub proof", "#github-proof"], ["Experience", "#experience"], ["Services", "#services"], ["Contact", "#contact"]];
  const go = (href) => { onClose(); setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 20); };
  return <AnimatePresence>{open && <motion.div className="command-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}><motion.div className="command-palette" initial={{ opacity: 0, y: -10, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} onMouseDown={(e) => e.stopPropagation()}><div className="command-head"><span>Quick navigation</span><kbd>ESC</kbd></div>{commands.map(([label, href]) => <button key={href} onClick={() => go(href)}><span>{label}</span><b>↵</b></button>)}<a href={profile.github} target="_blank" rel="noreferrer"><span>Open GitHub</span><HiArrowUpRight /></a></motion.div></motion.div>}</AnimatePresence>;
}

export default function App() {
  const [filter, setFilter] = useState("All");
  const [activeCase, setActiveCase] = useState(null);
  const [commandOpen, setCommandOpen] = useState(false);
  const categories = ["All", "AI & LLM", "Full Stack", "APIs", "Automation", "Data"];
  const visibleProjects = useMemo(() => (filter === "All" ? projects : projects.filter((project) => project.category === filter)), [filter]);

  useEffect(() => {
    const handler = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setCommandOpen((value) => !value); }
      if (event.key === "Escape") { setCommandOpen(false); setActiveCase(null); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleContact = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name") || "a visitor"}`);
    const body = encodeURIComponent(`Name: ${data.get("name") || ""}\nEmail: ${data.get("email") || ""}\nCompany: ${data.get("company") || ""}\n\nWhat are you building?\n${data.get("message") || ""}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="nav-wrap">
        <a href="#top" className="brand" aria-label="Mustkeem Ahmad home"><span className="brand-mark">MA</span><span>Mustkeem Ahmad</span></a>
        <nav><a href="#flagship">Flagship</a><a href="#ai-lab">AI Lab</a><a href="#work">Work</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav>
        <div className="nav-actions"><button className="command-trigger" onClick={() => setCommandOpen(true)}>⌘K</button><a className="nav-cta" href={profile.github} target="_blank" rel="noreferrer">GitHub <HiArrowUpRight /></a></div>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="hero-copy">
            <div className="availability"><span /> Available · {profile.location}</div><p className="kicker">{profile.role}</p>
            <h1>I build <span>AI-powered products</span>, scalable systems and real platforms people can use.</h1>
            <p className="hero-text">Founder of FreelanceKar.com and an AI/full-stack engineer working across LLM evaluation, intelligent automation, APIs, realtime systems, cloud architecture and production web applications.</p>
            <div className="hero-actions"><a className="primary-btn" href="#flagship">View flagship work <FaArrowRight /></a><a className="secondary-btn" href={ResumePDF} download="Mustkeem-Ahmad-Resume.pdf">Download resume ↓</a><a className="secondary-btn" href="#contact">Contact me <HiOutlineMail /></a></div>
            <div className="social-row"><a href={profile.github} target="_blank" rel="noreferrer"><FaGithub /> View my code</a><a href={profile.freelance} target="_blank" rel="noreferrer">FreelanceKar <HiArrowUpRight /></a><a href="https://noorquran.in/" target="_blank" rel="noreferrer">Noor Quran <HiArrowUpRight /></a></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="hero-portrait-card"><div className="portrait-status"><span>FOUNDER / ENGINEER</span><span className="live-dot">ACTIVE</span></div><div className="portrait-frame"><img src="https://raw.githubusercontent.com/Mustkeem324/Portfolio/main/mustkeem-ahmad.png" alt="Mustkeem Ahmad" /></div><div className="portrait-copy"><h3>Mustkeem Ahmad</h3><p>Founder, product builder and AI engineer shipping ambitious systems from concept to deployment.</p><div className="tech-orbit">{techIcons.map((Icon, index) => <span key={index}><Icon /></span>)}</div></div></motion.div>
        </section>

        <section className="stats-strip">{stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>

        <section className="section-pad build-section" id="building"><SectionTitle eyebrow="Currently building" title="Active products, not portfolio-only demos." copy="I prefer showing work that is evolving, being shipped and being used as a real product or engineering system." /><div className="build-grid">{currentBuilds.map(([name, text, status]) => <article key={name}><span className="status-pill">{status}</span><h3>{name}</h3><p>{text}</p></article>)}</div></section>

        <section className="section-pad founder-story"><SectionTitle eyebrow="Founder story" title="Why I built FreelanceKar." copy="I wanted to build more than individual client projects: a product where marketplace workflows, software architecture, user experience and deployment come together. As founder, I work across product direction, architecture, full-stack engineering and the operational details needed to keep shipping." /><div className="founder-proof"><div><small>My responsibility</small><strong>Product → Architecture → Engineering → Deployment → Iteration</strong></div><a href={profile.freelance} target="_blank" rel="noreferrer">Visit FreelanceKar <HiArrowUpRight /></a></div></section>

        <section className="section-pad flagship-section" id="flagship"><SectionTitle eyebrow="Interactive case studies" title="Three products that explain how I think and build." copy="Open any case study for the problem, solution, architecture, feature set, technology choices, my role and live/repository links." /><div className="flagship-grid rich">{flagshipProjects.map((project, index) => <motion.article key={project.title} className="flagship-card rich-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}><div className="product-preview"><img src={project.preview} alt={`${project.title} preview`} loading="lazy" /></div><div className="flagship-body"><span className="flagship-label">{project.label} · {project.status}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.stack.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div><button className="case-button" onClick={() => setActiveCase(project)}>Open case study <FaArrowRight /></button></div></motion.article>)}</div></section>

        <section className="section-pad ai-lab" id="ai-lab"><SectionTitle eyebrow="AI Engineering Lab" title="AI work beyond calling a model API." copy="My focus is on model quality, orchestration, retrieval, agent workflows, evaluation and the production systems around AI." /><div className="lab-grid">{aiLab.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="architecture-panel"><small>Reference AI / platform architecture</small><ArchitectureFlow items={["Client", "Next.js / React", "API", "Auth", "Services", "PostgreSQL / MongoDB", "Realtime / AI", "Cloud"]} /></div></section>

        <section className="section-pad proof-section" id="github-proof"><SectionTitle eyebrow="Engineering proof" title="Claims should connect to code." copy="These repositories are direct evidence of the technologies and system types I work with." /><div className="proof-grid">{projects.slice(0, 6).map((project) => <a key={project.title} href={project.github} target="_blank" rel="noreferrer"><div><FaGithub /><span>{project.category}</span></div><h3>{project.title}</h3><p>{project.stack.join(" · ")}</p><b>Open repository <HiArrowUpRight /></b></a>)}</div><div className="github-cta"><div><strong>Want the full picture?</strong><span>Browse my GitHub profile for additional repositories and ongoing work.</span></div><a className="primary-btn" href={profile.github} target="_blank" rel="noreferrer">View GitHub activity <FaGithub /></a></div></section>

        <section className="section-pad recruiter-section"><div className="recruiter-card"><div><span className="eyebrow">Recruiter mode</span><h2>Hiring for AI or full-stack engineering?</h2><p>I’m open to roles where I can combine AI systems, product engineering and production software delivery.</p></div><div className="role-list">{hiringRoles.map((role) => <span key={role}>{role}</span>)}</div><div className="recruiter-actions"><a className="primary-btn" href={ResumePDF} download="Mustkeem-Ahmad-Resume.pdf">Download resume ↓</a><a className="secondary-btn" href={`mailto:${profile.email}`}>Email me</a></div></div></section>

        <section className="section-pad" id="work"><SectionTitle eyebrow="More engineering work" title="Projects that show range, not just volume." copy="A curated set from a broader GitHub portfolio across AI, full-stack products, backend APIs, automation and data tooling." /><div className="filters">{categories.map((category) => <button key={category} className={filter === category ? "active" : ""} onClick={() => setFilter(category)}>{category}</button>)}</div><div className="project-grid">{visibleProjects.map((project, index) => <motion.article layout key={project.title} className={`project-card ${project.featured ? "featured" : ""}`} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}><div className="project-meta"><span>{String(index + 1).padStart(2, "0")}</span><span>{project.category}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={project.github} target="_blank" rel="noreferrer">View my code <FaGithub /><HiArrowUpRight /></a></motion.article>)}</div></section>

        <section className="section-pad services-section" id="services"><SectionTitle eyebrow="Services" title="Ways I can help a team or product." copy="Focused on practical engineering outcomes: building, integrating, automating and getting systems into production." /><div className="services-grid">{services.map(([title, text]) => <article key={title}><span>↗</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

        <section className="section-pad split-section" id="experience"><SectionTitle eyebrow="Experience" title="Founder mindset meets AI evaluation and production engineering." copy="My work spans product ownership, model-quality workflows and end-to-end engineering delivery." /><div className="timeline">{experience.map((item) => <article key={`${item.company}-${item.role}`} className={item.highlight ? "experience-highlight" : ""}><div className="timeline-marker" /><div className="timeline-head"><div><span>{item.company}</span><h3>{item.role}</h3></div><time>{item.period}</time></div><p>{item.text}</p></article>)}</div></section>

        <section className="section-pad impact-section"><SectionTitle eyebrow="Achievements / impact" title="A compact, verifiable snapshot." /><div className="impact-grid"><article><strong>200+</strong><span>Projects delivered across client and independent work</span></article><article><strong>3</strong><span>Flagship products highlighted: FreelanceKar, CampusOS and Noor Quran</span></article><article><strong>8.90</strong><span>MBA — Strategy & Operations, UPES</span></article><article><strong>83.30%</strong><span>B.E. Electrical Engineering — Jamia Millia Islamia</span></article></div></section>

        <section className="section-pad feedback-section"><SectionTitle eyebrow="Verified feedback" title="Testimonials will only be published with permission." copy="I do not use fabricated quotes. This section is intentionally reserved for genuine client, collaborator or recruiter feedback once it can be shared publicly." /></section>

        <section className="education section-pad"><SectionTitle eyebrow="Education" title="Engineering foundation. Business perspective." /><div className="education-grid"><article><span>2024 — 2026</span><h3>MBA — Strategy & Operations</h3><p>UPES, Dehradun · CGPA 8.90</p></article><article><span>2017 — 2021</span><h3>B.E. — Electrical Engineering</h3><p>Jamia Millia Islamia · First Class · 83.30%</p></article></div></section>

        <section className="contact section-pad" id="contact"><div className="contact-intro"><span className="eyebrow">Start a conversation</span><h2>Building something ambitious in AI, platforms or automation?</h2><p>Tell me what you’re working on. The form opens your email client with the details already prepared.</p><div className="availability-card"><span className="live-dot">● Available for opportunities</span><strong>{profile.location}</strong><small>AI engineering · Full stack · LLM evaluation · Consulting</small></div></div><form className="contact-form" onSubmit={handleContact}><div className="form-row"><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@company.com" /></label></div><label>Company<input name="company" placeholder="Company / project" /></label><label>What are you building?<textarea name="message" required rows="5" placeholder="Tell me about the role, product or problem..." /></label><button className="primary-btn" type="submit">Prepare email <HiOutlineMail /></button></form></section>
      </main>

      <footer><div><span className="brand-mark">MA</span><span>Mustkeem Ahmad</span></div><div className="footer-links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.freelance} target="_blank" rel="noreferrer">FreelanceKar</a><a href="https://noorquran.in/" target="_blank" rel="noreferrer">Noor Quran</a><a href={ResumePDF} download="Mustkeem-Ahmad-Resume.pdf">Resume</a><a href={`mailto:${profile.email}`}>Email</a></div><p><span className="live-dot">●</span> Available for opportunities · Founder · AI Engineer · Full-Stack Developer</p></footer>

      <AnimatePresence>{activeCase && <CaseStudyModal project={activeCase} onClose={() => setActiveCase(null)} />}</AnimatePresence><CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />
    </div>
  );
}
