import React, { useState } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

const SupportMessage = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null; // Don't render if not visible

  return (
    <div className="fixed bottom-5 right-5 w-80 bg-gray-900 text-white rounded-lg shadow-lg p-4 flex flex-col items-start">
      <div className="flex justify-between w-full">
        <span className="font-semibold text-lg">Need Support?</span>
        <button
          onClick={handleDismiss}
          className="bg-red-600 hover:bg-red-700 text-white rounded-full p-1 transition-colors duration-300"
          title="Close"
        >
          ✖
        </button>
      </div>
      <p className="mt-1 text-sm">Our team is here to help you!</p>
      <a
        href="https://t.me/nxprodevbot" // Replace with your Telegram handle or bot link
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 flex items-center bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors duration-300 w-full justify-center"
      >
        <FaTelegramPlane className="mr-1" /> Contact Us
      </a>
    </div>
  );
};

export default SupportMessage;
