import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- SVG Icons (Replacement for react-icons/fa and others) ---

// Instagram Icon
const IconInstagram = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M12.3 3.012c-.516 0-1.745-.008-3.923-.008-2.179 0-3.411.008-3.927.008-1.716 0-3.136 1.42-3.136 3.136 0 .516.008 1.745.008 3.923 0 2.179-.008 3.411-.008 3.927 0 1.716 1.42 3.136 3.136 3.136.516 0 1.745.008 3.923.008 2.179 0 3.411-.008 3.927-.008 1.716 0 3.136-1.42 3.136-3.136 0-.516-.008-1.745-.008-3.923 0-2.179.008-3.411.008-3.927 0-1.716-1.42-3.136-3.136-3.136zm-3.923 16.353c-2.072 0-3.766-1.694-3.766-3.766 0-2.072 1.694-3.766 3.766-3.766 2.072 0 3.766 1.694 3.766 3.766 0 2.072-1.694 3.766-3.766 3.766zm-5.498-13.673a.85.85 0 11-1.7 0 .85.85 0 011.7 0zm10.748 7.37c0 3.23-2.617 5.847-5.847 5.847-3.23 0-5.847-2.617-5.847-5.847 0-3.23 2.617-5.847 5.847-5.847 3.23 0 5.847 2.617 5.847 5.847z" clipRule="evenodd"/>
  </svg>
);

// Menu Bar Icon (FaBars)
const IconBars = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/></svg>
);

// Close Icon (FaTimes)
const IconTimes = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
);

// Navigation Icons (Mapping)
const NavIcons = {
  about: (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/></svg>
  ), // Info/About Icon
  portfolio: (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
  ), // Grid/Portfolio Icon
  services: (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-.21-.83-.34-1.3-.34-1.54 0-3.04.99-3.32 2.37l-1.3 6.13-.19 1.1-.11.55-.13.63a.5.5 0 00.17.65l1.66 1.11c.14.09.3.14.47.14h7.02c.18 0 .34-.05.47-.14l1.66-1.11a.5.5 0 00.17-.65l-.13-.63-.11-.55-.19-1.1-1.3-6.13c-.28-1.38-1.78-2.37-3.32-2.37zM9 14.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM10 5.5a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"/></svg>
  ), // Handshake/Service Icon
  talent: (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg>
  ), // User/Talent Icon
  contact: (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M17.778 12.607A8.001 8.001 0 005.471 4.793l.707.707A7.001 7.001 0 0116.595 13.4l-.707.707zM15.364 8.793a5.001 5.001 0 00-7.072 0l.707.707a4.001 4.001 0 015.657 0l-.707.707zM13.95 6.38a3.001 3.001 0 00-4.243 0l.707.707a2.001 2.001 0 012.828 0l-.707.707zM9.9 15.6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/></svg>
  ), // Globe/Contact Icon
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define Nav Items with their icons
  const navItems = [
    { name: 'About', href: '#about', icon: NavIcons.about },
    { name: 'Portfolio', href: '#portfolio', icon: NavIcons.portfolio },
    { name: 'Services', href: '#services', icon: NavIcons.services },
    { name: 'Talent', href: '#talent', icon: NavIcons.talent },
    { name: 'Contact', href: '#contact', icon: NavIcons.contact },
  ];

  // Define Color Classes
  const headerBg = "bg-gray-900";
  const headerText = "text-white";
  const goldAccent = "text-gold-500";
  const hoverColor = "hover:text-gold-300";

  return (
    <header className={`fixed top-0 left-0 w-full ${headerBg} ${headerText} z-50 shadow-2xl`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center h-20">
        
        {/* Logo/Brand Title */}
        <Link 
          to="/" 
          className={`text-2xl sm:text-3xl font-serif font-extrabold tracking-tight transition-colors duration-200 ${goldAccent}`}
          onClick={() => setIsOpen(false)}
        >
          <motion.span
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ type: "spring", stiffness: 100 }}
          >
            FACE OFF
          </motion.span>
          <span className="block text-xs font-sans font-normal tracking-widest text-white mt-[-4px]">
            Model & Cast Management
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:space-x-8">
          {navItems.map((item) => (
            <motion.li 
              key={item.name} 
              className="group"
              whileHover={{ scale: 1.05 }} // Interaction on hover
            >
              <a
                href={item.href}
                className={`flex items-center space-x-2 text-base font-sans font-medium uppercase ${headerText} ${hoverColor} transition-colors duration-200 border-b-2 border-transparent group-hover:border-gold-500 pb-1`}
              >
                {/* Icon for desktop view */}
                <item.icon className="w-5 h-5 transition-colors duration-200 group-hover:text-gold-500" />
                <span>{item.name}</span>
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
          className="hidden md:block"
          whileHover={{ scale: 1.2, color: '#FCD34D' }} // Gold color on hover
          whileTap={{ scale: 0.9 }}
        >
          <IconInstagram size={24} className={`w-7 h-7 ${goldAccent} transition-colors duration-200`} />
        </motion.a>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <motion.a
              href="https://instagram.com/face_of.modelncastmanagement"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram"
              className="block"
              whileHover={{ scale: 1.1 }}
          >
              <IconInstagram className={`w-6 h-6 ${goldAccent} transition-colors duration-200`} />
          </motion.a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className={`focus:outline-none p-2 rounded ${goldAccent} transition-colors duration-200`}
          >
            <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
            >
              {isOpen 
                ? <IconTimes className="w-6 h-6" /> 
                : <IconBars className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu Content (Dropdown) */}
      <motion.ul
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden ${headerBg} shadow-inner pb-2`}
      >
        {navItems.map((item) => (
          <motion.li 
            key={item.name} 
            className="px-6 py-3 border-b border-gray-800 last:border-b-0"
            variants={{
              open: { opacity: 1, y: 0 },
              closed: { opacity: 0, y: -20 },
            }}
          >
            <a
              href={item.href}
              className={`flex items-center space-x-4 text-lg font-sans font-bold ${headerText} ${hoverColor} transition-colors duration-200 block`}
              onClick={() => setIsOpen(false)}
            >
              {/* Icon for mobile view */}
              <item.icon className={`w-6 h-6 ${goldAccent}`} />
              <span>{item.name}</span>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </header>
  );
};

export default Header;
