import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

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

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-6">
      {/* Background Styles */}
      <div className="absolute inset-0 -z-10 overflow-x-hidden">
        <div className="relative h-full w-full">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
          {/* Horizontal Line */}
          <div className="absolute left-0 right-0 bottom-1/2 border-t border-stone-500 opacity-30"></div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Contact Information */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p>Email: <a href={`mailto:${mail}`} className="text-gray-400">{mail}</a></p>
            <p>Phone: <a href={phoneNo} className="text-gray-400">{phoneNo}</a></p>
          </div>

          {/* Quick Links */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="text-gray-400 hover:text-white" />
              </a>
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="text-gray-400 hover:text-white" />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="text-gray-400 hover:text-white" />
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Information */}
        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
