import React from "react";
import { FaWhatsapp, FaTwitter, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { motion } from "framer-motion";

// const phoneNo = import.meta.env.VITE_API_PHONE_NO;
// const mail = import.meta.env.VITE_API_EMAIL;
const phoneNo = "+917905800532";
const mail = "mustkeem324@gmail.com";
const location = 'New Delhi , Delhi 110025';
const twitterUrl = "https://x.com/Mustkeem324";
const linkedinUrl = "https://www.linkedin.com/in/mustkeemahmad324";

const Contact = () => {
  const motionProps = {
    whileInView: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: -50 },
    transition: { duration: 1 },
  };

  return (
    <div className="border-t border-stone-900 pb-20" id="contact">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 1, y: -100 }} 
        transition={{ duration: 0.5 }} 
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>

      <div className="text-center tracking-tighter flex flex-col items-center justify-center space-y-6">
        {/* Contact Links */}
        <div className="flex items-center space-x-6">
          <motion.a
            {...motionProps}
            href={`https://wa.me/${phoneNo}`}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <FaWhatsapp size={24} className="md:text-2xl text-xl" />
            <span>WhatsApp</span>
          </motion.a>

          <motion.a
            whileInView={{ opacity: 1, x: 0 }} 
            initial={{ opacity: 0, x: 50 }} 
            transition={{ duration: 1 }}
            href={`mailto:${mail}`}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <IoIosMail size={24} className="md:text-2xl text-xl" />
            <span>Email</span>
          </motion.a>

          <motion.a
            {...motionProps}
            href={twitterUrl}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <FaTwitter size={24} className="md:text-2xl text-xl" />
            <span>Twitter</span>
          </motion.a>

          <motion.a
            whileInView={{ opacity: 1, x: 0 }} 
            initial={{ opacity: 0, x: 50 }} 
            transition={{ duration: 1 }}
            href={linkedinUrl}
            target="_blank"
            className="flex items-center space-x-2"
          >
            <FaLinkedin size={24} className="md:text-2xl text-xl" />
            <span>LinkedIn</span>
          </motion.a>
        </div>

        {/* Location */}
        <motion.div
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 1 }}
          className="flex items-center space-x-2"
        >
          <FaMapMarkerAlt size={24} />
          <span>{location}</span>
        </motion.div>

        {/* Google Maps Embed */}
        <motion.div
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 1 }}
          className="w-full md:w-2/3 h-80 mt-8"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224312.35609927126!2d77.10249017474312!3d28.704059200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcf69b4aa43f%3A0x5ef25b73dc1db01e!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1697034863186!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border-2 border-stone-900"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
