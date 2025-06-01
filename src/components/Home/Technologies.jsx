import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiPhp,
} from "react-icons/si";
import { FaBootstrap, FaNodeJs, FaPython } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { motion } from "framer-motion";

// Technology Data
const technologies = [
  { name: "React", icon: <RiReactjsLine className="text-5xl text-cyan-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-5xl text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-5xl text-green-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-700" /> },
  { name: "Python", icon: <FaPython className="text-5xl text-yellow-300" /> },
  { name: "MySQL", icon: <SiMysql className="text-5xl text-blue-400" /> },
  { name: "Firebase", icon: <IoLogoFirebase className="text-5xl text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-5 collectorsxl text-cyan-600" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-5xl text-violet-600" /> },
  { name: "PHP", icon: <SiPhp className="text-5xl text-blue-600" /> },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const iconVariants = (delay) => ({
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay,
    },
  },
});

const Technologies = () => {
  return (
    <section
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden"
      id="technologies"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mb-12"
        >
          Technologies
        </motion.h2>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={iconVariants(index * 0.1)}
              className="relative group flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-700 transition-all duration-300 border border-gray-700"
            >
              {/* Icon */}
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-900 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.name}
              </div>
              {/* Technology Name (Visible on Larger Screens) */}
              <span className="mt-2 text-sm font-medium text-gray-300 hidden sm:block">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
