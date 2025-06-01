import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaGithub, FaHackerrank, FaBars, FaTimes, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import ThemeToggle from "../Home/ThemeToggle";
import logo from "../../assets/logo.png";

// Constants
const phoneNo = "+917905800532";
const mail = "mustkeem324@gmail.com";
const location = "New Delhi, Delhi 110025";
const twitterUrl = "https://x.com/Mustkeem324";
const linkedinUrl = "https://www.linkedin.com/in/mustkeemahmad324";
const github = "https://github.com/Mustkeem324";
const facebookUrl = "https://facebook.com/";
const instagramUrl = "https://www.instagram.com/mustkeem324/";
const youtubeUrl = "https://www.youtube.com/c/Mustkeem324";
const websiteUrl = "https://mustkeem324.github.io/";
const companyName = "NX Codeworks";
const Name = "Mustkeem Ahmad";
const designation = "Full Stack Developer";

// Animation Variants
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#technologies", label: "Technologies" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { url: linkedinUrl, icon: <FaLinkedin size={24} />, label: "LinkedIn" },
    { url: github, icon: <FaGithub size={24} />, label: "GitHub" },
    { url: "https://leetcode.com/u/Mustkeem324", icon: <SiLeetcode size={24} />, label: "LeetCode" },
    { url: "https://www.hackerrank.com/profile/Mustkeem324", icon: <FaHackerrank size={24} />, label: "HackerRank" },
    { url: facebookUrl, icon: <FaFacebook size={24} />, label: "Facebook" },
    { url: instagramUrl, icon: <FaInstagram size={24} />, label: "Instagram" },
    { url: youtubeUrl, icon: <FaYoutube size={24} />, label: "YouTube" },
  ];

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-black text-white py-4 px-6 md:px-12 lg:px-24 shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div variants={linkVariants} className="flex flex-shrink-0 items-center">
          <a href="/" aria-label="Home">
            <img
              src={logo}
              className="w-12 h-8 object-contain"
              alt={`${companyName} Logo`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/50x33?text=Logo";
              }}
            />
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-lg font-medium">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              variants={linkVariants}
              href={link.href}
              className="relative text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                variants={linkVariants}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              >
                {social.icon}
              </motion.a>
            ))}
            <motion.div variants={linkVariants}>
              <ThemeToggle />
            </motion.div>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <motion.div
          className="md:hidden flex items-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <button onClick={toggleMenu} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
            {isMenuOpen ? (
              <FaTimes className="text-2xl text-gray-300" />
            ) : (
              <FaBars className="text-2xl text-gray-300" />
            )}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-16 right-0 w-64 bg-gray-800 text-white rounded-lg shadow-xl p-6 z-50 border border-gray-700"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  variants={linkVariants}
                  href={link.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex justify-around border-t border-gray-700 pt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    variants={linkVariants}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <motion.div variants={linkVariants} className="mt-4">
                <ThemeToggle />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;
