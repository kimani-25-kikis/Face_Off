import React from 'react';
import { motion } from 'framer-motion';

// SVG for Instagram icon (replaces external library icon)
const InstagramIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    {/* Outline path */}
    <path fillRule="evenodd" d="M12.3 3.012c-.516 0-1.745-.008-3.923-.008-2.179 0-3.411.008-3.927.008-1.716 0-3.136 1.42-3.136 3.136 0 .516.008 1.745.008 3.923 0 2.179-.008 3.411-.008 3.927 0 1.716 1.42 3.136 3.136 3.136.516 0 1.745.008 3.923.008 2.179 0 3.411-.008 3.927-.008 1.716 0 3.136-1.42 3.136-3.136 0-.516-.008-1.745-.008-3.923 0-2.179.008-3.411.008-3.927 0-1.716-1.42-3.136-3.136-3.136zm-3.923 16.353c-2.072 0-3.766-1.694-3.766-3.766 0-2.072 1.694-3.766 3.766-3.766 2.072 0 3.766 1.694 3.766 3.766 0 2.072-1.694 3.766-3.766 3.766zm-5.498-13.673a.85.85 0 11-1.7 0 .85.85 0 011.7 0zm10.748 7.37c0 3.23-2.617 5.847-5.847 5.847-3.23 0-5.847-2.617-5.847-5.847 0-3.23 2.617-5.847 5.847-5.847 3.23 0 5.847 2.617 5.847 5.847z" clipRule="evenodd"/>
    {/* Center dot path */}
    <path d="M12.3 8.353c2.072 0 3.766 1.694 3.766 3.766 0 2.072-1.694 3.766-3.766 3.766-2.072 0-3.766-1.694-3.766-3.766 0-2.072 1.694-3.766 3.766-3.766z" />
  </svg>
);


const Footer = () => {
  
  // Define Tailwind classes for consistency with the Portfolio section (using amber)
  const footerBg = "bg-gray-900"; // Dark background
  const footerText = "text-gray-300"; // Light gray text for contrast
  const goldText = "text-amber-500"; // Primary accent color (Amber 500)

  const linkStyle = "transition-all duration-300 hover:text-amber-300 hover:underline"; // Accent color on hover (Amber 300)

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`${footerBg} ${footerText} py-12 lg:py-16 border-t border-gray-800 shadow-inner font-['Inter']`}
    >
      <div className="container mx-auto px-6">
        
        {/* --- Top Section: Contact & Social --- */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-gray-700 pb-8 mb-8 space-y-8 md:space-y-0">
          
          {/* Logo/Brand Title */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-serif font-extrabold tracking-wider uppercase text-center md:text-left"
          >
            <span className={goldText}>Face Off</span>
            <span className="text-white block text-sm font-sans tracking-widest font-normal">Model & Cast Management</span>
          </motion.div>

          {/* Contact Links */}
          <div className="text-center md:text-right space-y-2">
            <h4 className="text-xl font-bold mb-2 uppercase tracking-wide text-white">Get in Touch</h4>
            <a href="tel:+254741457909" className={`${footerText} block ${linkStyle}`}>
              +254741457909
            </a>
            <a href="mailto:faceoffmodelncastmngt.info@gmail.com" className={`${footerText} block ${linkStyle}`}>
              faceoffmodelncastmngt.info@gmail.com
            </a>
            <p className="text-sm pt-2 text-gray-500">Nairobi, Kenya</p>
          </div>

          {/* Social Icon */}
          <motion.a
            href="https://instagram.com/face_of.modelncastmanagement"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram"
            className="block"
            whileHover={{ scale: 1.1, rotate: 5 }} // Creative Interaction: Scale up and slight rotation on hover
            whileTap={{ scale: 0.9 }}
          >
            <InstagramIcon 
              className={`w-10 h-10 ${goldText} transition-colors duration-300 hover:text-white hover:bg-amber-500 rounded-full p-1`} 
            />
          </motion.a>
        </div>

        {/* --- Bottom Section: Copyright --- */}
        <div className="text-center">
            <p className="text-sm text-gray-500 font-sans tracking-wider">
                &copy; {new Date().getFullYear()} Face Off Model & Cast Management. All rights reserved.
            </p>
            <p className="text-xs mt-1 text-gray-600">
                Talent that drives brands.
            </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
