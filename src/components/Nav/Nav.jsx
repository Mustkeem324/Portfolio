import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaGithub, FaHackerrank, FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "../Home/ThemeToggle";

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

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
        </a>
      </div>
      <div className="hidden md:flex m-9 items-center justify-center gap-4 text-2xl">
        <a href="#home" className="hover:text-blue-500">Home</a>
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
          className="hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="hover:text-blue-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u//"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Leetcode"
          className="hover:text-blue-500"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://www.hackerrank.com/profile/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hackerrank"
          className="hover:text-blue-500"
        >
          <FaHackerrank />
        </a>
        <ThemeToggle />
      </div>
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-48 bg-white shadow-lg p-4 rounded-md z-10 md:hidden">
          <a href="/" className="block py-2 hover:text-blue-500">Home</a>
          <a href="/about" className="block py-2 hover:text-blue-500">About</a>
          <a href="/projects" className="block py-2 hover:text-blue-500">Projects</a>
          <div className="flex justify-around mt-2">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
            >
              <FaLinkedin />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <FaGithub />
            </a>
            <a
              href="https://leetcode.com/u/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Leetcode"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://www.hackerrank.com/profile/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hackerrank"
            >
              <FaHackerrank />
            </a>
          </div>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
};

export default Nav;
