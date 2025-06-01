import React from "react";
import { motion } from "framer-motion";
import Contact from "./components/Home/Contact";
import Hero from "./components/Home/Hero";
import Projects from "./components/Home/Projects";
import Technologies from "./components/Home/Technologies";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Home/Footer";
import Experience from "./components/Home/Experience";
import TelegramChannel from "./components/Home/TelegramChannel"; // Placeholder
import TelegramEmbedWrapper from "./components/Home/TelegramEmbedWrapper"; // Placeholder
import SupportMessage from "./components/Home/SupportMessage"; // Placeholder

// Animation Variants
const appVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function App() {
  return (
    <motion.div
      variants={appVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white antialiased"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Nav />
        <motion.section variants={sectionVariants}>
          <Hero />
        </motion.section>
        <motion.section variants={sectionVariants}>
          <Technologies />
        </motion.section>
        <motion.section variants={sectionVariants}>
          <Experience />
        </motion.section>
        <motion.section variants={sectionVariants}>
          <Projects />
        </motion.section>
        <motion.section variants={sectionVariants}>
          <TelegramChannel />
        </motion.section>
        <motion.section variants={sectionVariants}>
          <TelegramEmbedWrapper />
        </motion.section>
        <motion.section variants={sectionVariants}>
          <Contact />
        </motion.section>
        <motion.section variants={sectionVariants}>
          <Footer />
        </motion.section>
        <motion.section variants={sectionVariants}>
          <SupportMessage />
        </motion.section>
      </div>
    </motion.div>
  );
}
