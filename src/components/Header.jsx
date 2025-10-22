import React, { useState } from 'react';
import { motion } from 'framer-motion';

// NOTE: Since this Header component is assumed to be part of a larger, 
// single-file React app, we are removing 'react-router-dom' imports as 
// routing is handled via simple anchor tags and state in this single-file environment.
// If this component were stand-alone, 'Link' would be used.
// -------------------------------------------------------------------
// FIREBASE IMPORTS (Necessary for React setup in this environment)
// -------------------------------------------------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, signInWithCustomToken } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
const app = Object.keys(firebaseConfig).length > 0 ? initializeApp(firebaseConfig) : null;
const db = app ? getFirestore(app) : null;
const auth = app ? getAuth(app) : null;

if (auth) {
    if (typeof __initial_auth_token !== 'undefined') {
        signInWithCustomToken(auth, __initial_auth_token).catch(console.error);
    } else {
        signInAnonymously(auth).catch(console.error);
    }
}
// -------------------------------------------------------------------

// -------------------------------------------------------------------
// 1. SVG Icons (Used within this component)
// -------------------------------------------------------------------

// WhatsApp Icon (A more actionable contact point)
const IconWhatsapp = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

// Instagram Icon
const IconInstagram = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

// Menu Bar Icon (Hamburger)
const IconBars = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
    <line x1="4" x2="20" y1="12" y2="12"/>
    <line x1="4" x2="20" y1="6" y2="6"/>
    <line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
);

// Close Icon (X)
const IconTimes = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
);

// Navigation Icons (Mapping)
const NavIcons = {
  about: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-text">
      <path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/>
      <rect width="16" height="20" x="4" y="2" rx="2"/>
    </svg>
  ),
  portfolio: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers">
      <path d="m12 1.8 8 4.5-8 4.5-8-4.5 8-4.5z"/>
      <path d="m20 12.3-8 4.5-8-4.5"/>
      <path d="m20 16.8-8 4.5-8-4.5"/>
    </svg>
  ),
  services: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
      <path d="M16 21V19a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    </svg>
  ),
  talent: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  contact: (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.83 1.83 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
};

// -------------------------------------------------------------------
// 2. Header Component (Refined)
// -------------------------------------------------------------------

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define Nav Items with their icons
  const navItems = [
    { name: 'About', href: '#about', icon: NavIcons.about },
    { name: 'Portfolio', href: '#portfolio', icon: NavIcons.portfolio },
    { name: 'Services', href: '#services', icon: NavIcons.services },
    { name: 'Talent Roster', href: '#talent', icon: NavIcons.talent }, // Renamed from 'Talent' for formality
    { name: 'Contact', href: '#contact', icon: NavIcons.contact },
  ];

  // Define Classic Color Classes: Deep Charcoal + Rich Gold
  const headerBg = "bg-gray-950"; // Deeper background
  const headerText = "text-white";
  const goldAccent = "text-amber-300"; // Richer gold/bronze
  const hoverColor = "hover:text-amber-300";

  /**
   * Unified navigation handler for both desktop and mobile.
   * Ensures smooth scrolling to the target section ID.
   */
  const handleNavigation = (e, href) => {
    // 1. Close the mobile menu first
    setIsOpen(false);
    
    // 2. Prevent default anchor behavior
    e.preventDefault(); 
    
    // 3. Smooth scroll to the section
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback for environments where smooth scroll isn't supported
      window.location.hash = href;
    }
  };


  return (
    <header className={`fixed top-0 left-0 w-full ${headerBg} ${headerText} z-50 shadow-2xl border-b border-amber-900/50 font-sans`}>
      {/* Increased vertical padding (py-4) for better spacing/height */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center transition-all duration-300">
        
        {/* Logo/Brand Title: Uses font-serif for authority, better spacing */}
        <a 
          href="#top" 
          className="group focus:outline-none"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            // Manually scroll to top of page on logo click (home)
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <motion.span
            // Larger text and bold serif font for a classic look
            className={`text-3xl font-serif font-bold tracking-tight transition-colors duration-300 ${goldAccent}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            FACE OFF
          </motion.span>
          {/* Tagline is font-sans, uppercase, and widely tracked for elegance */}
          <span className="block text-xs font-sans font-medium tracking-[0.2em] text-gray-400 uppercase mt-[-2px] group-hover:text-amber-300 transition-colors duration-300">
            Model & Cast Management
          </span>
        </a>
        
        {/* Desktop Navigation: REDUCED SPACING HERE */}
        <ul className="hidden md:flex md:space-x-6 lg:space-x-8"> 
          {navItems.map((item) => (
            <motion.li 
              key={item.name} 
              className="group"
              whileHover={{ scale: 1.05 }} // Subtle interaction on hover
            >
              <a
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                className={`flex items-center space-x-2 text-sm lg:text-base font-semibold uppercase tracking-wider ${headerText} transition-all duration-300 px-3 py-2 rounded-full 
                            relative overflow-hidden group-hover:bg-amber-800/20 group-hover:text-amber-300`}
              >
                <item.icon className={`w-5 h-5 ${goldAccent} flex-shrink-0 transition-colors duration-200 group-hover:text-amber-300`} />
                <span>{item.name}</span>
                {/* Elegant Pill-shaped underline effect on hover */}
                <span className="absolute inset-0 bg-amber-400/10 transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-full z-[-1]"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Action Button (Desktop Only): WhatsApp/Book Now */}
        <motion.a
          href="https://wa.me/254741457909"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book a consultation via WhatsApp"
          // Styled as a prominent, gold-filled button
          className="hidden md:flex items-center space-x-2 text-sm uppercase font-bold transition-all duration-300 rounded-full py-3 px-6 bg-amber-400 text-gray-900 shadow-lg hover:bg-amber-300 hover:shadow-xl transform hover:scale-[1.02]"
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          <IconWhatsapp className="w-5 h-5" strokeWidth={3} />
          <span>Book Now</span>
        </motion.a>
        
        {/* Mobile Menu Button & Instagram */}
        <div className="md:hidden flex items-center space-x-4">
          <motion.a
            href="https://instagram.com/face_of.modelncastmanagement"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram"
            className="p-1 rounded-full border border-transparent hover:border-amber-400 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
          >
            <IconInstagram className={`w-7 h-7 ${goldAccent} transition-colors duration-200`} />
          </motion.a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className={`focus:outline-none p-2 rounded-full ${goldAccent} transition-colors duration-200 hover:bg-amber-400/10`}
          >
            <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
            >
              {isOpen 
                ? <IconTimes className="w-7 h-7" /> 
                : <IconBars className="w-7 h-7" />}
            </motion.div>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu Content (Dropdown) */}
      <motion.ul
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          // Added small padding to open/closed variants for smoother transition
          open: { height: "auto", opacity: 1, paddingTop: "8px", paddingBottom: "8px" },
          closed: { height: 0, opacity: 0, paddingTop: "0px", paddingBottom: "0px" },
        }}
        transition={{ duration: 0.3, ease: [0.17, 0.67, 0.83, 0.67] }} 
        className={`md:hidden overflow-hidden ${headerBg} shadow-inner border-t border-gray-800/80`}
      >
        {navItems.map((item, index) => (
          <motion.li 
            key={item.name} 
            className="px-6 py-2"
            variants={{
              open: { opacity: 1, y: 0, transition: { delay: index * 0.05 + 0.1 } },
              closed: { opacity: 0, y: -20, transition: { duration: 0.1 } },
            }}
          >
            <a
              href={item.href}
              onClick={(e) => handleNavigation(e, item.href)}
              // Text-xl and ample space-x-5 for large, touch-friendly targets (Mobile)
              className={`flex items-center space-x-5 text-lg font-semibold ${headerText} hover:text-amber-400 transition-colors duration-200 block p-3 rounded-lg hover:bg-gray-800`}
            >
              <item.icon className={`w-6 h-6 ${goldAccent} flex-shrink-0`} />
              <span>{item.name}</span>
            </a>
          </motion.li>
        ))}
        {/* Mobile Call to Action */}
        <motion.li 
            className="px-6 py-4 border-t border-gray-800"
            variants={{
                open: { opacity: 1, y: 0, transition: { delay: navItems.length * 0.05 + 0.1 } },
                closed: { opacity: 0, y: -20, transition: { duration: 0.1 } },
            }}
        >
            <a
                href="https://wa.me/254741457909"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 text-base font-bold transition-all duration-300 rounded-full py-3 bg-amber-400 text-gray-900 shadow-md hover:bg-amber-300"
                onClick={() => setIsOpen(false)}
            >
                <IconWhatsapp className="w-5 h-5" strokeWidth={3} />
                <span>WhatsApp Consultation</span>
            </a>
        </motion.li>
      </motion.ul>
    </header>
  );
};

export default Header;
