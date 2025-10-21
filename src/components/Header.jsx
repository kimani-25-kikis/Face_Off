import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// -------------------------------------------------------------------
// 1. SVG Icons (Used within this component)
//    - Using clean, professional icons suitable for a classic portfolio.
// -------------------------------------------------------------------

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

// Navigation Icons (Mapping) - Using professional, clear icons
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
  const headerBg = "bg-gray-800";
  const headerText = "text-white";
  const goldAccent = "text-amber-400"; // Richer gold than default
  const hoverColor = "hover:text-amber-300";

  return (
    <header className={`fixed top-0 left-0 w-full ${headerBg} ${headerText} z-50 shadow-xl border-b border-amber-900/50`}>
      {/* Increased vertical padding (py-5) for better spacing/height */}
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center transition-all duration-300">
        
        {/* Logo/Brand Title: Uses font-serif for authority, better spacing */}
        <Link 
          to="/" 
          className="group focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <motion.span
            // Larger text and bold serif font for a classic look
            className={`text-3xl lg:text-4xl font-serif font-bold tracking-tight transition-colors duration-300 ${goldAccent}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            FACE OFF
          </motion.span>
          {/* Tagline is font-sans, uppercase, and widely tracked for elegance */}
          <span className="block text-xs font-sans font-medium tracking-widest text-gray-400 uppercase mt-[-2px] group-hover:text-amber-400 transition-colors duration-300">
            Model & Cast Management
          </span>
        </Link>
        
        {/* Desktop Navigation: Changed spacing to space-x-12 and text size to base */}
        <ul className="hidden md:flex md:space-x-12">
          {navItems.map((item) => (
            <motion.li 
              key={item.name} 
              className="group"
              whileHover={{ y: -2 }} // Subtle interaction
            >
              <a
                href={item.href}
                // CHANGED: text-lg to text-base to accommodate wider spacing
                className={`flex items-center space-x-2 text-base font-serif font-medium uppercase tracking-wider ${headerText} ${hoverColor} transition-all duration-300 relative`}
              >
                {/* Icon for desktop view */}
                <item.icon className={`w-5 h-5 ${goldAccent} flex-shrink-0 group-hover:text-amber-300 transition-colors duration-200`} />
                <span>{item.name}</span>
                {/* Custom underline effect for a clean, classic accent */}
                <span className="absolute left-0 bottom-[-5px] w-full h-0.5 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Instagram Link (Desktop Only) */}
        <motion.a
          href="https://instagram.com/face_of.modelncastmanagement"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Instagram"
          // Styled as a subtle, bordered button
          className="hidden md:flex items-center space-x-2 text-sm uppercase font-sans font-medium transition-all duration-300 rounded-full p-2 border border-amber-400/50 hover:bg-amber-400 hover:text-gray-800"
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          <IconInstagram className="w-5 h-5" />
          <span className="hidden lg:inline">Instagram</span>
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
            className={`focus:outline-none p-2 rounded ${goldAccent} transition-colors duration-200 hover:bg-amber-400/10`}
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
        className={`md:hidden overflow-hidden ${headerBg} shadow-inner border-t border-amber-900/50`}
      >
        {navItems.map((item, index) => (
          <motion.li 
            key={item.name} 
            className="px-6 py-3"
            variants={{
              open: { opacity: 1, y: 0, transition: { delay: index * 0.05 + 0.1 } },
              closed: { opacity: 0, y: -20, transition: { duration: 0.1 } },
            }}
          >
            <a
              href={item.href}
              // Text-xl and ample space-x-5 for large, touch-friendly targets (Mobile)
              className={`flex items-center space-x-5 text-xl font-sans font-semibold ${headerText} hover:text-amber-400 transition-colors duration-200 block p-2 rounded-lg`}
              onClick={() => setIsOpen(false)}
            >
              <item.icon className={`w-6 h-6 ${goldAccent} flex-shrink-0`} />
              <span>{item.name}</span>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </header>
  );
};

export default Header;
