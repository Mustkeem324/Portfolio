import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const telegramLink = "https://t.me/cheggnx"; // Replace with your actual channel link
const channelName = "NX CodeWork"; // Replace with your actual channel name

const TelegramChannel = () => {
  return (
    <div className="relative bg-gradient-to-r from-black to-gray-800 text-white p-8 rounded-lg shadow-lg overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/path/to/your/image.jpg')] bg-cover bg-center opacity-30"></div>
      
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="relative text-center"
      >
        <motion.h2
          whileInView={{ scale: 1 }}
          initial={{ scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-3xl font-bold mb-4"
        >
          Join Our Telegram Channel!
        </motion.h2>
        
        <p className="mb-6 text-lg">
          Stay updated with the latest news, announcements, and updates by joining our Telegram community.
        </p>

        <motion.a
          whileHover={{ scale: 1.1, backgroundColor: '#e0e0e0' }}
          whileTap={{ scale: 0.9 }}
          href={telegramLink}
          target="_blank"
          className="relative inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-full font-semibold shadow-md hover:bg-blue-100 transition duration-300 ease-in-out overflow-hidden"
        >
          <FaTelegramPlane size={24} className="mr-2" />
          Join {channelName}
          {/* Animated Pulse Effect */}
          <span className="absolute inset-0 bg-blue-500 opacity-20 rounded-full animate-ping"></span>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default TelegramChannel;
