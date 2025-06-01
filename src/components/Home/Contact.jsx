import React, { useState } from "react";
import { FaWhatsapp, FaTwitter, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { motion } from "framer-motion";

// Constants
const phoneNo = "+917905800532";
const mail = "mustkeem324@gmail.com";
const location = "New Delhi, Delhi 110025";
const twitterUrl = "https://x.com/Mustkeem324";
const linkedinUrl = "https://www.linkedin.com/in/mustkeemahmad324";

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
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill out all fields.");
      return;
    }
    // Simulate form submission (replace with actual API call)
    console.log("Form submitted:", formData);
    setFormStatus("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFormStatus(null), 3000); // Clear status after 3 seconds
  };

  return (
    <section
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden"
      id="contact"
    >
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
          Get In Touch
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-12"
        >
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-1/2 bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="mt-1 w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md"
              >
                Send Message
              </button>
              {formStatus && (
                <p
                  className={`mt-4 text-center text-sm ${
                    formStatus.includes("successfully") ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {formStatus}
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Info and Map */}
          <motion.div variants={itemVariants} className="w-full lg:w-1/2 space-y-8">
            {/* Contact Links */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <motion.a
                  variants={itemVariants}
                  href={`https://wa.me/${phoneNo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <FaWhatsapp size={24} />
                  <span>{phoneNo}</span>
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href={`mailto:${mail}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <IoIosMail size={24} />
                  <span>{mail}</span>
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href={twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <FaTwitter size={24} />
                  <span>Twitter</span>
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  <FaLinkedin size={24} />
                  <span>LinkedIn</span>
                </motion.a>
                <motion.div
                  variants={itemVariants}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <FaMapMarkerAlt size={24} />
                  <span>{location}</span>
                </motion.div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <motion.div
              variants={itemVariants}
              className="w-full h-80 rounded-lg overflow-hidden shadow-lg border border-gray-700"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224312.35609927126!2d77.10249017474312!3d28.704059200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcf69b4aa43f%3A0x5ef25b73dc1db01e!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1697034863186!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
                title="New Delhi Location"
              ></iframe>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
