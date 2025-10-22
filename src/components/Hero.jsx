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
  
  // Helper function for smooth scrolling
  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section
      id="home"
      // Added pt-20 to ensure content clears the fixed header
      className="relative z-0 min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden pt-20"
    >
      {/* Background Image with Dark Overlay (behind all content) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out pointer-events-none"
        // Using a placeholder image for reliable loading
        style={{ 
            backgroundImage: 'url(/Face_Off/Port3.jpeg)', 
            backgroundColor: '#111827', 
        }}
      >
        {/* Dark overlay with INCREASED opacity (90) for much better text contrast */}
        <div className="absolute inset-0 bg-black opacity-92 z-0"></div>
      </div>

      {/* Foreground Content Container */}
      <motion.div
        // Simple, elegant entrance animation
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        className="relative z-10 text-center px-4 md:px-10 lg:px-20 max-w-4xl mx-auto py-16"
      >
        {/* Main Title: "FACE OFF"
          Appealing Font Style: Strong, modern font-sans, increased size, tight tracking, and heavy font weight.
        */}
        <h1 className="text-6xl sm:text-7xl lg:text-[7rem] font-sans font-black mb-4 text-white uppercase tracking-tighter sm:tracking-normal leading-none drop-shadow-2xl">
          FACE OFF
        </h1>

        {/* Sub-Title / Tagline: Tighter spacing after H1 (mb-4) */}
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-sans font-light mb-8 text-gray-200 tracking-widest">
          Model & Cast Management
        </h2>

        {/* Key Tagline: Medium spacing for flow (mb-12) */}
        <p className="text-xl sm:text-2xl font-serif italic mb-12 text-amber-400 drop-shadow">
          Talent that drives brands.
        </p>

        {/* Contact Info Group: Enhanced with a container and increased separation (mb-16) */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-16 text-gray-300 p-4 sm:p-6 rounded-xl bg-black/50 backdrop-blur-sm border border-amber-800/50 shadow-inner">
          {CONTACT_INFO.map((item) => (
            <p key={item.label} className="text-sm sm:text-base font-medium flex items-center">
              <span className="font-bold mr-2 text-amber-500/90">{item.label}:</span>
              {item.href ? (
                // Hyperlinked contact details
                <a href={item.href} className="hover:text-amber-300 transition-colors">
                  {item.value}
                </a>
              ) : (
                <span>{item.value}</span>
              )}
            </p>
          ))}
        </div>

        {/* Call to Action Button - Final element, no bottom margin needed */}
        <motion.a
          href="#contact"
          onClick={handleScroll}
          // Framer Motion effects for a premium button feel
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212, 175, 55, 0.8)' }} 
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-4 
                      bg-amber-400 text-gray-900 px-10 py-4 rounded-full font-bold text-lg sm:text-xl uppercase tracking-wider
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
