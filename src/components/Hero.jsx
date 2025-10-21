import React from 'react';
import { motion } from 'framer-motion';

// Icon for the live downward-pointing arrow
const IconArrowDown = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down">
    <path d="M12 5v14"/>
    <path d="m19 12-7 7-7-7"/>
  </svg>
);

const Hero = () => {
  // Contact information pulled from the portfolio overview
  const CONTACT_INFO = [
    { label: 'Headquarters', value: 'Nairobi, Kenya' },
    { label: 'Email', value: 'faceoffmodelncastmngt.info@gmail.com', href: 'mailto:faceoffmodelncastmngt.info@gmail.com' },
    { label: 'Phone/WhatsApp', value: '+254741457909', href: 'tel:+254741457909' },
  ];

  return (
    <section
      id="home"
      // Set to min-h-screen to ensure it always fills the viewport height
      className="relative z-0 min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden pointer-events-auto"
    >
      {/* Background Image with Dark Overlay (behind all content) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out pointer-events-none"
        // Note: The image URL should point to your hosted asset location
        style={{ backgroundImage: 'url(/Face_Off/Port3.jpeg)' }}
      >
        {/* Dark overlay with INCREASED opacity (80) for much better text contrast */}
        <div className="absolute inset-0 bg-black opacity-90 z-0"></div>
      </div>

      {/* Foreground Content Container */}
      <motion.div
        // Simple, elegant entrance animation
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center px-4 md:px-10 lg:px-20 max-w-4xl mx-auto py-16"
      >
        {/* Main Title - Vertical spacing adjusted here (mb-6 -> mb-8) */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif font-extrabold mb-8 text-white uppercase tracking-wider leading-tight drop-shadow-lg">
          Face Off
        </h1>

        {/* Sub-Title / Tagline - Vertical spacing adjusted here (mb-6 -> mb-10) */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-light mb-10 text-gray-200 tracking-widest">
          Model & Cast Management
        </h2>

        {/* Key Tagline - Vertical spacing adjusted here (mb-10 -> mb-16) */}
        <p className="text-xl sm:text-2xl font-serif italic mb-16 text-amber-400 drop-shadow">
          Talent that drives brands.
        </p>

        {/* Contact Info Group - Vertical spacing adjusted here (mb-12 -> mb-20) */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-20 text-gray-300">
          {CONTACT_INFO.map((item) => (
            <p key={item.label} className="text-sm sm:text-base font-medium flex items-center">
              <span className="font-bold mr-2 text-amber-500">{item.label}:</span>
              {item.href ? (
                // Hyperlinked contact details
                <a href={item.href} className="hover:text-amber-400 transition-colors">
                  {item.value}
                </a>
              ) : (
                <span>{item.value}</span>
              )}
            </p>
          ))}
        </div>

        {/* Call to Action Button - Enhanced Design */}
        <motion.a
          href="#contact"
          // Framer Motion effects for a premium button feel
          // Added subtle shadow for hover effect
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.8)' }} 
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-4 
                     bg-amber-400 text-gray-900 px-10 py-4 rounded-full font-bold text-xl uppercase tracking-wider
                     transition-all duration-300 shadow-2xl shadow-amber-500/50 hover:bg-amber-300 
                     focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-opacity-70"
        >
          <span>Book Your Talent Now</span>
          {/* Live Arrow Animation */}
          <motion.div
            animate={{ y: [0, 5, 0] }} // Moves down 5px, then back to 0
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <IconArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
