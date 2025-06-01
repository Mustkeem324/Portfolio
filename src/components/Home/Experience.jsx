import React from "react";
import { FaBriefcase, FaUserGraduate, FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation Variants
const iconVariants = (delay) => ({
  initial: { y: 0, opacity: 0 },
  animate: {
    y: [-10, 10, -10],
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      delay,
    },
  },
});

const cardVariants = {
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

// Experience Data
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

// Education Data
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

// Certifications Data
const certificationsData = [
  "Bootcamp | Back End with Node.js | Full Stack Development - Coding Ninjas (Issued Feb 2024, Expired Jul 2024)",
  "Bootcamp | Front End | Full Stack Development - Coding Ninjas (Issued Jan 2024, Expired Apr 2024)",
  "Bootcamp | React | Full Stack Development - Coding Ninjas (Issued Aug 2023, Expired Feb 2024)",
  "Machine Learning Engineer - TEACHNOOK (Issued Jan 2023, Expired Apr 2023)",
];

const Experience = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
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
          Experience & Education
        </motion.h2>

        {/* Experience and Education Sections */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Experience Section */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">Professional Experience</h3>
            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              >
                <div className="flex items-start">
                  <motion.div
                    variants={iconVariants(index * 0.3)}
                    className="flex-shrink-0 mr-4"
                  >
                    <FaBriefcase className="text-3xl text-blue-500" />
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{experience.title}</h4>
                    <p className="text-gray-300">{experience.company}</p>
                    <p className="text-gray-400 text-sm">{experience.duration}</p>
                    <p className="text-gray-400 text-sm">{experience.location}</p>
                    <p className="mt-3 text-gray-300">{experience.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full shadow-sm hover:bg-blue-700 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold text-green-400 mb-6">Education</h3>
            {educationData.map((education, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              >
                <div className="flex items-start">
                  <motion.div
                    variants={iconVariants(index * 0.3 + 0.5)}
                    className="flex-shrink-0 mr-4"
                  >
                    <FaUserGraduate className="text-3xl text-green-500" />
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{education.degree}</h4>
                    <p className="text-gray-300">{education.institution}</p>
                    <p className="text-gray-400 text-sm">{education.duration}</p>
                    {education.specialization && (
                      <p className="text-gray-400 text-sm">Specialization: {education.specialization}</p>
                    )}
                    {education.grade && (
                      <p className="text-gray-400 text-sm">Grade: {education.grade}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 mt-16 mb-12"
        >
          Certifications
        </motion.h2>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
        >
          <div className="flex items-center justify-center mb-4">
            <motion.div variants={iconVariants(0.5)} className="mr-4">
              <FaCertificate className="text-4xl text-yellow-500" />
            </motion.div>
            <h3 className="text-2xl font-semibold text-white">Certifications</h3>
          </div>
          <ul className="list-none space-y-3">
            {certificationsData.map((certification, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <svg
                  className="w-4 h-4 mr-3 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="4" />
                </svg>
                <span>{certification}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
