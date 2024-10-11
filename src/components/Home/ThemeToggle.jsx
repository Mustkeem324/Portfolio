import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for the theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.body.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Default to light mode
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      onClick={toggleTheme}
      className={`relative inline-flex items-center cursor-pointer w-16 h-8 rounded-full transition-colors duration-300 ease-in-out ${
        isDarkMode ? "bg-gray-700" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute left-0 w-8 h-8 bg-white rounded-full shadow transition-transform duration-300 ease-in-out transform ${
          isDarkMode ? "translate-x-8" : "translate-x-0"
        }`}
      />
      <span className="absolute inset-0 flex items-center justify-center text-sm text-gray-700 font-medium">
        {isDarkMode ? "🌙" : "☀️"}
      </span>
    </div>
  );
};

export default ThemeToggle;
