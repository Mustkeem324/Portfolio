import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

// Animation Variants
const toggleVariants = {
  light: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  dark: {
    x: 32,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for theme preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      setIsDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
      localStorage.setItem("theme", prefersDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="relative group">
      <motion.button
        onClick={toggleTheme}
        className={`relative inline-flex items-center cursor-pointer w-16 h-8 rounded-full transition-all duration-300 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          isDarkMode
            ? "bg-gradient-to-r from-gray-700 to-gray-900"
            : "bg-gradient-to-r from-gray-200 to-gray-300"
        }`}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className="absolute w-6 h-6 bg-white rounded-full shadow-lg border border-gray-300"
          variants={toggleVariants}
          animate={isDarkMode ? "dark" : "light"}
        />
        <AnimatePresence mode="wait">
          <motion.span
            key={isDarkMode ? "moon" : "sun"}
            className="absolute inset-0 flex items-center justify-center text-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {isDarkMode ? (
              <FaMoon className="text-gray-800" />
            ) : (
              <FaSun className="text-yellow-500" />
            )}
          </motion.span>
        </AnimatePresence>
      </motion.button>
      {/* Tooltip */}
      <div className="absolute top-full mt-2 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-900 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </div>
    </div>
  );
};

export default ThemeToggle;
