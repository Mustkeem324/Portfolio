"use client";

import React from "react";
import profilePic from "../../assets/filenameBQJN02.png";
import ResumePDF from "../../assets/mustkeem_ee4.pdf";
import { HERO_CONTENT } from "../../constants";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";

// Constants
const phoneNo = "+917905800532";
const mail = "mustkeem324@gmail.com";
const location = "New Delhi, Delhi 110025";
const twitterUrl = "https://x.com/Mustkeem324";
const linkedinUrl = "https://www.linkedin.com/in/mustkeemahmad324";
const github = "https://github.com/Mustkeem324";
const instagramUrl = "https://www.instagram.com/mustkeem324/";
const websiteUrl = "https://mustkeem324.github.io/";
const companyName = "NX Codeworks";
const Name = "Mustkeem Ahmad";
const designation = "Full Stack Developer";
const fallbackDescription =
  "I am a Full Stack Developer with a passion for creating innovative and user-friendly applications.";

const skills = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  const particles = Array.from({ length: 28 });

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white py-16 px-4 md:px-10 lg:px-20 overflow-hidden"
    >
      {/* Particle Background */}
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
                duration: 16 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          );
        })}
      </div>

      {/* Neon Orbs */}
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

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <motion.div
            whileHover={{ rotateX: -6, rotateY: 8, translateY: -8 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="relative group rounded-[2rem] bg-gradient-to-br from-cyan-500/30 via-fuchsia-500/20 to-purple-500/20 p-[2px] shadow-[0_0_40px_rgba(34,211,238,0.45)]"
          >
            <div className="relative rounded-[1.9rem] bg-black/70 backdrop-blur-xl overflow-hidden">
              <img
                src={profilePic}
                alt={`${Name} - ${designation}`}
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-[1.9rem]"
              />

              {/* Hologram overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-[1.9rem] bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Floating ring */}
              <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border border-cyan-400/40 blur-xl group-hover:blur-2xl transition-all duration-500" />
            </div>

            {/* Status Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/80 border border-cyan-400/50 px-4 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.7)]">
              Open to Remote & Freelance
            </div>
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <motion.p
            variants={childVariants}
            className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-300/80"
          >
            Full Stack Developer · {companyName}
          </motion.p>

          <motion.h1
            variants={childVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white to-fuchsia-400"
          >
            {Name}
          </motion.h1>

          <motion.h2
            variants={childVariants}
            className="text-xl md:text-2xl font-semibold text-cyan-300 mb-6"
          >
            {designation} · Building scalable & modern web experiences
          </motion.h2>

          <motion.p
            variants={childVariants}
            className="text-sm md:text-base leading-relaxed text-slate-300 mb-8 max-w-md mx-auto lg:mx-0"
            id="about"
          >
            {HERO_CONTENT || fallbackDescription}
          </motion.p>

          {/* Skills Section */}
          <motion.div variants={childVariants} className="mb-8">
            <h3 className="text-sm md:text-base font-semibold mb-3 text-slate-100 flex items-center justify-center lg:justify-start gap-2">
              <span className="h-1 w-8 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
              <span>Core Tech Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 text-[11px] md:text-xs font-medium rounded-full text-slate-100 shadow-[0_0_20px_rgba(148,163,184,0.35)] hover:border-cyan-400 hover:text-cyan-100 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={childVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 mb-8"
          >
            <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-slate-400">
              Connect
            </p>
            <div className="flex gap-4 md:gap-5">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 p-2.5 hover:border-cyan-400 hover:text-cyan-300 transition-all shadow-[0_0_15px_rgba(148,163,184,0.4)]"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 p-2.5 hover:border-cyan-400 hover:text-cyan-300 transition-all"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 p-2.5 hover:border-cyan-400 hover:text-cyan-300 transition-all"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 p-2.5 hover:border-cyan-400 hover:text-cyan-300 transition-all"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 p-2.5 hover:border-cyan-400 hover:text-cyan-300 transition-all"
              >
                <FaGlobe size={18} />
              </a>
            </div>
          </motion.div>

          {/* Contact Info + Resume */}
          <motion.div
            variants={childVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-stretch"
          >
            {/* Resume Button */}
            <a
              href={ResumePDF}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-600 px-6 md:px-8 py-3 text-xs md:text-sm font-semibold shadow-[0_0_30px_rgba(34,211,238,0.7)] hover:shadow-[0_0_45px_rgba(236,72,153,0.9)] transition-all"
            >
              <FaDownload className="mr-2 text-sm md:text-base" />
              <span>Download Resume</span>
            </a>

            {/* Contact Card */}
            <div className="flex-1 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-left text-[11px] md:text-xs text-slate-200 backdrop-blur-2xl shadow-[0_0_25px_rgba(15,23,42,0.8)]">
              <p className="font-semibold text-slate-100 mb-1">Contact</p>
              <p>
                <span className="font-medium text-slate-300">Email:</span> {" "}
                <a
                  href={`mailto:${mail}`}
                  className="hover:text-cyan-300 underline underline-offset-2"
                >
                  {mail}
                </a>
              </p>
              <p>
                <span className="font-medium text-slate-300">Phone:</span> {" "}
                <a
                  href={`tel:${phoneNo}`}
                  className="hover:text-cyan-300"
                >
                  {phoneNo}
                </a>
              </p>
              <p>
                <span className="font-medium text-slate-300">Location:</span> {" "}
                {location}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
