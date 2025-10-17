// src/components/PortfolioHighlight.jsx (Enhanced Card)
import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

// Define Color Palettes for attractive variation
const CARD_BGS = [
    'bg-gray-900',      // Near Black
    'bg-gray-900',   // Deep Blue (Translucent)
    'bg-gray-900',   // Deep Teal (Translucent)
    'bg-gray-900',      // Deep Gray
    'bg-gray-900', // Deep Purple (Translucent)
    'bg-gray-900',    // Deep Red (Translucent)
];

const HEADING_COLORS = [
    'text-gold-400',   
    'text-blue-300',   
    'text-green-300',  
    'text-yellow-400', 
    'text-indigo-300', 
    'text-pink-300',
];

// Component to render a single detail line - Enhanced with Dashed Separator
const DetailLine = ({ label, content, colorClass }) => (
    // Use a dashed border for a cleaner, modern look for line separation
    <div className="mb-4 border-b border-dashed border-gray-600 pb-3"> 
        {/* Label uses the unique heading accent color */}
        <strong className={`block text-sm uppercase tracking-wider ${colorClass} mb-1`}>{label}</strong>
        <p className="text-sm text-gray-300 leading-relaxed">{content}</p>
    </div>
);

const PortfolioHighlight = ({ title, role, scope, approach, outcomes, links, index }) => {
  // Cycle through the color arrays based on the item's index
  const cardBgClass = CARD_BGS[index % CARD_BGS.length];
  const headingColorClass = HEADING_COLORS[index % HEADING_COLORS.length];
  
  // Animation: Staggered spring effect for better entry
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        transition: { 
            type: 'spring', // Spring for a lively pop
            stiffness: 120,
            damping: 12,
            delay: index * 0.1 // Stagger the cards
        } 
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      // Dynamic Background and a stronger hover effect
      className={`${cardBgClass} p-8 rounded-xl shadow-2xl hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.03] border-t-4 border-gold-500`}
    >
      {/* Title with dynamic color */}
      <h3 className={`text-xl md:text-2xl font-serif font-bold mb-6 pb-3 border-b-2 border-gray-600 leading-snug ${headingColorClass}`}>
        {title}
      </h3>
      
      {/* Content separated by dashed lines */}
      <div className="space-y-4">
        <DetailLine label="Role" content={role} colorClass={headingColorClass} />
        <DetailLine label="Scope" content={scope} colorClass={headingColorClass} />
        <DetailLine label="Approach" content={approach} colorClass={headingColorClass} />
        <DetailLine label="Outcomes" content={outcomes} colorClass={headingColorClass} />
      </div>

      {/* Links Section with Larger Icons and stronger hover animation */}
      {links.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-700">
          <strong className="block text-sm uppercase tracking-wider text-gray-400 mb-3">View Content</strong>
          <div className="flex flex-wrap gap-4">
            {links.map((link, idx) => {
                const isInstagram = link.text.toLowerCase().includes('instagram');
                const Icon = isInstagram ? FaInstagram : FaYoutube;

                return (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      // Increased icon size (text-3xl) and added hover scale for better UX
                      className={`text-3xl transition-transform hover:scale-110 duration-200 
                                ${isInstagram ? 'text-pink-500 hover:text-pink-400' : 'text-red-500 hover:text-red-400'}`}
                      aria-label={`View ${link.text}`}
                    >
                      <Icon />
                    </a>
                );
            })}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default PortfolioHighlight;