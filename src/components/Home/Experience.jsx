"use client";

import React, { useState } from "react";
import {
  FaBriefcase,
  FaUserGraduate,
  FaCertificate,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { motion } from "framer-motion";

// ---------- DATA ----------

const experienceData = [
  {
    title: "Founder",
    company: "NX Codeworks",
    duration: "Jan 2021 - Present",
    location: "New Delhi, Delhi, India · Remote",
    description:
      "As a freelance developer, I am dedicated to delivering efficient, secure, and dynamic code solutions. I specialize in web development, bot creation, and more. With expertise in Python, PHP, JavaScript, Node.js, React, HTML, and CSS3.",
    skills: ["Python", "Node.js", "React", "PHP", "JavaScript", "HTML", "CSS3"],
  },
  {
    title: "Web Development Intern",
    company: "Zidio Development",
    duration: "Jun 2024 - Oct 2024",
    location: "New Delhi, Delhi, India · Remote",
    description:
      "Responsible for developing a Job Listing Portal and creating a Resume Builder, including UI design and backend integration.",
    skills: ["React.js", "Node.js", "Full-Stack Development"],
  },
  {
    title: "Graduate Engineer Trainee (GET)",
    company: "GAIL (India) Limited",
    duration: "Feb 2023 - Mar 2024",
    location: "New Delhi, Delhi, India · On-site",
    description:
      "Monitoring and maintaining cathodic protection systems, conducting site assessments, and ensuring compliance with safety standards.",
    skills: ["Electrical Engineering", "SCADA", "Cathodic Protection"],
  },
  {
    title: "Subject Matter Expert",
    company: "Chegg India",
    duration: "Apr 2021 - Feb 2023",
    location: "New Delhi, Delhi, India · Remote",
    description: "Provided expertise in Electrical Engineering, solving over 1,000 questions.",
    skills: ["Subject Matter Expert"],
  },
  {
    title: "Subject Matter Expert",
    company: "Unacademy",
    duration: "Apr 2020 - Feb 2023",
    location: "Greater Bengaluru Area · Remote",
    description: "Specialized in Mathematics with more than 20k questions solved.",
    skills: ["Subject Matter Expert", "Mathematics"],
  },
];

const educationData = [
  {
    degree: "Master of Business Administration (MBA)",
    institution: "UPES",
    duration: "Feb 2024 - Jul 2026",
    specialization: "Human Resource Management (HRM)",
  },
  {
    degree: "Bachelor of Technology (BTech) in Electrical and Electronics Engineering",
    institution: "Jamia Millia Islamia, Central University",
    duration: "Jul 2017 - Sep 2021",
    grade: "8.33 CPI (A Grade)",
  },
];

const certificationsData = [
  "Bootcamp | Back End with Node.js | Full Stack Development - Coding Ninjas (Issued Feb 2024, Expired Jul 2024)",
  "Bootcamp | Front End | Full Stack Development - Coding Ninjas (Issued Jan 2024, Expired Apr 2024)",
  "Bootcamp | React | Full Stack Development - Coding Ninjas (Issued Aug 2023, Expired Feb 2024)",
  "Machine Learning Engineer - TEACHNOOK (Issued Jan 2023, Expired Apr 2023)",
];

// ---------- ANIMATION VARIANTS ----------

const sectionTitleVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
  }),
};

const iconVariants = (delay) => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      delay,
    },
  },
});

// ---------- SMALL HELPERS ----------

const TiltCard = ({ children, className, custom }) => (
  <motion.div
    className={className}
    variants={cardVariants}
    custom={custom}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    whileHover={{ rotateX: -5, rotateY: 5, translateY: -6 }}
    transition={{ type: "spring", stiffness: 220, damping: 18 }}
  >
    {children}
  </motion.div>
);

const particles = Array.from({ length: 28 });

// ---------- MAIN COMPONENT ----------

const Experience = () => {
  const [darkMode, setDarkMode] = useState(true);

  const bgClass = darkMode
    ? "from-slate-950 via-slate-900 to-black"
    : "from-slate-50 via-white to-slate-100";

  const textMain = darkMode ? "text-white" : "text-slate-900";
  const textSub = darkMode ? "text-slate-300" : "text-slate-600";
  const cardBg = darkMode ? "bg-white/5" : "bg-white/70";
  const borderClr = darkMode ? "border-white/10" : "border-slate-200";

  return (
    <section
      id="experience"
      className={`relative bg-gradient-to-br ${bgClass} ${textMain} py-20 px-4 md:px-10 lg:px-20 overflow-hidden`}
    >
      {/* PARTICLE BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((_, i) => {
          const size = (i % 3) + 2;
          return (
            <motion.span
              key={i}
              className="absolute rounded-full bg-cyan-400/40"
              style={{
                width: size,
                height: size,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: ["0%", "-40%", "0%"],
                opacity: [0.1, 0.7, 0.1],
              }}
              transition={{
                duration: 14 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          );
        })}
      </div>

      {/* NEON ORBS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -top-40 -left-10 w-80 h-80 rounded-full bg-cyan-500/40 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="pointer-events-none absolute -bottom-40 right-0 w-[26rem] h-[26rem] rounded-full bg-fuchsia-500/40 blur-3xl"
      />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {/* HEADER + THEME TOGGLE */}
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={sectionTitleVariants}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-500">
              Experience & Education
            </h2>
            <p className={`mt-3 max-w-xl text-sm md:text-base ${textSub}`}>
              A blend of engineering, product thinking, and full-stack development —
              backed by real-world projects, leadership, and industry experience.
            </p>
          </motion.div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode((v) => !v)}
            className="flex items-center gap-2 rounded-full border border-cyan-400/60 px-4 py-2 text-xs md:text-sm font-medium bg-black/30 backdrop-blur-xl shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:bg-cyan-400/10 transition-colors"
          >
            {darkMode ? (
              <>
                <FaSun className="text-amber-300" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <FaMoon className="text-indigo-500" />
                <span>Dark / Neon Mode</span>
              </>
            )}
          </motion.button>
        </div>

        {/* DIVIDER */}
        <div className="relative">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
          <div className="absolute inset-0 flex justify-center -top-[7px]">
            <span className="px-3 rounded-full text-[10px] uppercase tracking-[0.2em] bg-black/60 backdrop-blur-xl border border-white/10">
              Journey
            </span>
          </div>
        </div>

        {/* TIMELINES */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* EXPERIENCE TIMELINE */}
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[10px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-cyan-400 via-fuchsia-500 to-violet-500" />

            <h3 className="mb-6 flex items-center gap-3 text-lg md:text-xl font-semibold uppercase tracking-[0.25em] text-cyan-400">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                <FaBriefcase className="text-cyan-300" />
              </span>
              Experience
            </h3>

            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <TiltCard
                  key={index}
                  custom={index}
                  className={`relative pl-10 ${cardBg} ${borderClr} border rounded-2xl shadow-xl backdrop-blur-2xl overflow-hidden`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[3px] top-7 flex items-center justify-center">
                    <div className="relative">
                      <span className="absolute inset-0 rounded-full bg-cyan-400/40 blur-sm" />
                      <span className="relative h-3 w-3 rounded-full bg-cyan-300 border border-white" />
                    </div>
                  </div>

                  {/* Neon overlay on hover */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.35),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(244,63,94,0.4),_transparent_60%)]" />

                  <div className="relative z-10 flex flex-col gap-3">
                    <div className="flex items-start gap-3">
                      <motion.div
                        variants={iconVariants(index * 0.25)}
                        initial="initial"
                        animate="animate"
                        className="mt-1"
                      >
                        <FaBriefcase className="text-xl md:text-2xl text-cyan-300" />
                      </motion.div>
                      <div>
                        <h4 className="text-base md:text-lg font-semibold">
                          {exp.title}
                        </h4>
                        <p className={`text-xs md:text-sm ${textSub}`}>
                          {exp.company}
                        </p>
                        <p className={`text-[11px] md:text-xs ${textSub} mt-1`}>
                          {exp.duration} · {exp.location}
                        </p>
                      </div>
                    </div>

                    <p className={`text-xs md:text-sm leading-relaxed ${textSub}`}>
                      {exp.description}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-[11px] rounded-full border border-cyan-400/40 bg-cyan-400/10 px-2 py-1 uppercase tracking-[0.15em] text-cyan-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* EDUCATION TIMELINE */}
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[10px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-emerald-400 via-sky-400 to-cyan-500" />

            <h3 className="mb-6 flex items-center gap-3 text-lg md:text-xl font-semibold uppercase tracking-[0.25em] text-emerald-400">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-400/60 shadow-[0_0_20px_rgba(52,211,153,0.4)]">
                <FaUserGraduate className="text-emerald-300" />
              </span>
              Education
            </h3>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <TiltCard
                  key={index}
                  custom={index}
                  className={`relative pl-10 ${cardBg} ${borderClr} border rounded-2xl shadow-xl backdrop-blur-2xl overflow-hidden`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[3px] top-7 flex items-center justify-center">
                    <div className="relative">
                      <span className="absolute inset-0 rounded-full bg-emerald-400/40 blur-sm" />
                      <span className="relative h-3 w-3 rounded-full bg-emerald-300 border border-white" />
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.35),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(56,189,248,0.4),_transparent_60%)]" />

                  <div className="relative z-10 flex flex-col gap-3">
                    <div className="flex items-start gap-3">
                      <motion.div
                        variants={iconVariants(index * 0.25 + 0.3)}
                        initial="initial"
                        animate="animate"
                        className="mt-1"
                      >
                        <FaUserGraduate className="text-xl md:text-2xl text-emerald-300" />
                      </motion.div>
                      <div>
                        <h4 className="text-base md:text-lg font-semibold">
                          {edu.degree}
                        </h4>
                        <p className={`text-xs md:text-sm ${textSub}`}>
                          {edu.institution}
                        </p>
                        <p className={`text-[11px] md:text-xs ${textSub} mt-1`}>
                          {edu.duration}
                        </p>
                        {edu.specialization && (
                          <p className={`text-[11px] md:text-xs ${textSub}`}>
                            Specialization: {edu.specialization}
                          </p>
                        )}
                        {edu.grade && (
                          <p className={`text-[11px] md:text-xs ${textSub}`}>
                            Grade: {edu.grade}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>

        {/* CERTIFICATIONS SECTION */}
        <div className="space-y-8">
          <motion.h2
            variants={sectionTitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-orange-400 to-pink-500"
          >
            Certifications
          </motion.h2>

          <motion.div
            variants={cardVariants}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`max-w-3xl mx-auto ${cardBg} ${borderClr} border rounded-3xl shadow-2xl backdrop-blur-2xl p-6 md:p-8 relative overflow-hidden`}
          >
            {/* subtle neon border effect */}
            <div className="pointer-events-none absolute inset-[1px] rounded-3xl border border-amber-300/20" />
            <div className="pointer-events-none absolute -top-24 -right-10 h-48 w-48 rounded-full bg-amber-400/20 blur-3xl" />

            <div className="flex flex-col items-center gap-4 mb-6">
              <motion.div
                variants={iconVariants(0.4)}
                initial="initial"
                animate="animate"
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-400/60 shadow-[0_0_25px_rgba(251,191,36,0.55)]"
              >
                <FaCertificate className="text-2xl text-amber-300" />
              </motion.div>
              <p className={`text-xs md:text-sm text-center ${textSub}`}>
                Focused on full-stack development, React, Node.js and Machine Learning —
                combining software engineering with data-driven problem solving.
              </p>
            </div>

            <ul className="space-y-3 text-xs md:text-sm">
              {certificationsData.map((cert, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 group hover:translate-x-1 transition-transform"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.8)] group-hover:scale-125 transition-transform" />
                  <span className={textSub}>{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* FOOTER / SECTION SEPARATOR */}
        <div className="pt-10 border-t border-white/10 mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] md:text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Mustkeem Ahmad · Freelance · All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            <span>Open to freelance & remote opportunities worldwide.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
