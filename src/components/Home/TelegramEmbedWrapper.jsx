import React from "react";
import TelegramEmbed from "react-telegram-embed";
import { FaTelegramPlane } from "react-icons/fa"; // Import the Telegram icon
import { motion } from "framer-motion"; // Import framer-motion for animations

const TelegramEmbedWrapper = () => {
  return (
    <motion.div 
      className="relative bg-gradient-to-r from-black to-gray-800 text-white p-8 rounded-lg shadow-lg overflow-hidden" 
      initial={{ opacity: 0, scale: 0.9 }} // Initial state for animation
      animate={{ opacity: 1, scale: 1 }} // Animate to these properties
      transition={{ duration: 0.5 }} // Duration of the animation
    >
      
      <div className="my-4"> {/* Margin for spacing around the embed */}
        <TelegramEmbed src='https://t.me/cheggnx/219' />
      </div>
      
    </motion.div>
  );
};

export default TelegramEmbedWrapper;
