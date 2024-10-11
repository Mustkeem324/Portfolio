import React from "react";
import profilePic from "../../assets/filenameBQJN02.png";
import ResumePDF from "../../assets/mustkeem_ee4.pdf";
import { HERO_CONTENT } from "../../constants";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa"; // Import an icon for the download button


const phoneNo = "+917905800532";
const mail = "mustkeem324@gmail.com";
const location = 'New Delhi , Delhi 110025';
const twitterUrl = "https://x.com/Mustkeem324";
const linkedinUrl = "https://www.linkedin.com/in/mustkeemahmad324";
const github = "https://github.com/Mustkeem324";
const facebookUrl = "https://facebook.com/"
const instagramUrl = "https://www.instagram.com/mustkeem324/";
const youtubeUrl = "https://www.youtube.com/c/Mustkeem324";
const websiteUrl = "https://mustkeem324.github.io/";
const companyName = "NX Codeworks"
const Name = "Mustkeem Ahamd"
const designation = "Full Stack Developer"
const description = "I am a Full Stack Developer with a passion for creating innovative and user-friendly applications"
const skills = ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", ]

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36 bg-gradient-to-r from-gray-800 to-black p-10 rounded-lg shadow-lg">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt={`${Name}-${designation}`}
              className="border border-stone-900 rounded-3xl w-full lg:w-auto h-auto shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2" id="home">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2 variants={childVariants} className="pb-2 text-5xl font-bold text-white tracking-tight">
              {Name}
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-4xl font-semibold text-transparent"
            >
              {designation}
            </motion.span>
            <motion.p variants={childVariants} className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tight text-white" id="about">
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={childVariants}
              href={ResumePDF}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center justify-center bg-white rounded-full p-3 text-sm text-stone-800 mb-10 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <FaDownload className="mr-2" /> Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
