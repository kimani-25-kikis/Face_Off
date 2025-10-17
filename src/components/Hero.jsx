// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const CONTACT_INFO = [
    { label: 'Headquarters', value: 'Nairobi, Kenya' },
    { label: 'Email', value: 'faceoffmodelncastmngt.info@gmail.com', href: 'mailto:faceoffmodelncastmngt.info@gmail.com' },
    { label: 'Phone/WhatsApp', value: '+254741457909', href: 'tel:+254741457909' },
  ];

  return (
    <section
      id="home"
      className="relative z-0 min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden pointer-events-auto"
    >
      {/* ✅ Background Image with Overlay (behind all content) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out pointer-events-none"
        style={{ backgroundImage: 'url(/Port3.jpeg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      </div>

      {/* ✅ Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center px-4 md:px-10 lg:px-20 max-w-4xl mx-auto py-16"
      >
        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif font-extrabold mb-4 text-white uppercase tracking-wider leading-tight drop-shadow-lg">
          Face Off
        </h1>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-light mb-6 text-gray-200 tracking-widest">
          Model & Cast Management
        </h2>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl font-script italic mb-10 text-yellow-400 drop-shadow">
          Talent that drives brands.
        </p>

        {/* Contact Info Group */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12 text-gray-300">
          {CONTACT_INFO.map((item) => (
            <p key={item.label} className="text-sm sm:text-base font-medium flex items-center">
              <span className="font-bold mr-2 text-yellow-500">{item.label}:</span>
              {item.href ? (
                <a href={item.href} className="hover:text-yellow-400 transition-colors">
                  {item.value}
                </a>
              ) : (
                <span>{item.value}</span>
              )}
            </p>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)' }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-black text-white px-10 py-4 rounded-full font-bold text-xl uppercase tracking-wider
                     hover:text-yellow-500 transition-all duration-300 shadow-xl 
                     focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-50"
        >
          Book Your Talent Now
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
