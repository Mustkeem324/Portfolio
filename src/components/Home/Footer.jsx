import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaYoutube , FaMapMarkerAlt} from "react-icons/fa";
import { motion } from "framer-motion";

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

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState(null);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setFormStatus("Please enter a valid email.");
      return;
    }
    // Simulate newsletter subscription (replace with actual API call)
    console.log("Newsletter subscription:", email);
    setFormStatus("Subscribed successfully!");
    setEmail("");
    setTimeout(() => setFormStatus(null), 3000); // Clear status after 3 seconds
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <a
                  href={`mailto:${mail}`}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {mail}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${phoneNo}`}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {phoneNo}
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <FaMapMarkerAlt size={18} />
                <span>{location}</span>
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#technologies", label: "Technologies" },
                { href: "#contact", label: "Contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { url: facebookUrl, icon: <FaFacebook size={24} />, label: "Facebook" },
                { url: twitterUrl, icon: <FaTwitter size={24} />, label: "Twitter" },
                { url: linkedinUrl, icon: <FaLinkedin size={24} />, label: "LinkedIn" },
                { url: github, icon: <FaGithub size={24} />, label: "GitHub" },
                { url: instagramUrl, icon: <FaInstagram size={24} />, label: "Instagram" },
                { url: youtubeUrl, icon: <FaYoutube size={24} />, label: "YouTube" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Newsletter</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md"
              >
                Subscribe
              </button>
              {formStatus && (
                <p
                  className={`text-sm text-center ${
                    formStatus.includes("successfully") ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {formStatus}
                </p>
              )}
            </form>
          </motion.div>
        </motion.div>

        {/* Copyright Information */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12 text-gray-400 text-sm border-t border-gray-700 pt-6"
        >
          <p>
            © {new Date().getFullYear()} {companyName}. All rights reserved. |{" "}
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              Visit Website
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
