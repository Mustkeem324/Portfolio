import React from "react";
import profilePic from "../../assets/filenameBQJN02.png";
import ResumePDF from "../../assets/mustkeem_ee4.pdf";
import { HERO_CONTENT } from "../../constants";
import { motion } from "framer-motion";
import { FaDownload, FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaGlobe } from "react-icons/fa";

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
const description = "I am a Full Stack Developer with a passion for creating innovative and user-friendly applications";
const skills = ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "TypeScript", "Tailwind CSS"];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
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
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative group">
            <img
              src={profilePic}
              alt={`${Name} - ${designation}`}
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 text-center lg:text-left"
          id="home"
        >
          <motion.h1
            variants={childVariants}
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          >
            {Name}
          </motion.h1>
          <motion.h2
            variants={childVariants}
            className="text-2xl md:text-3xl font-semibold text-blue-400 mb-6"
          >
            {designation} at {companyName}
          </motion.h2>
          <motion.p
            variants={childVariants}
            className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8 max-w-md mx-auto lg:mx-0"
            id="about"
          >
            {HERO_CONTENT || description}
          </motion.p>

          {/* Skills Section */}
          <motion.div variants={childVariants} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-700 text-sm font-medium rounded-full text-white shadow-md hover:bg-blue-600 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={childVariants} className="flex justify-center lg:justify-start gap-6 mb-8">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              <FaLinkedin size={28} />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              <FaGithub size={28} />
            </a>
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              <FaTwitter size={28} />
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              <FaInstagram size={28} />
            </a>
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
              <FaGlobe size={28} />
            </a>
          </motion.div>

          {/* Contact Info and Resume Button */}
          <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href={ResumePDF}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300"
            >
              <FaDownload className="mr-2" /> Download Resume
            </a>
            <div className="text-gray-300 text-sm">
              <p><span className="font-semibold">Email:</span> {mail}</p>
              <p><span className="font-semibold">Phone:</span> {phoneNo}</p>
              <p><span className="font-semibold">Location:</span> {location}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
