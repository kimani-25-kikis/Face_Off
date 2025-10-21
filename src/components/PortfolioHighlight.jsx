import React from 'react';
import { motion } from 'framer-motion';

// --- START: Inline SVG Icons to replace react-icons ---
const IconInstagram = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
);

const IconYoutube = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10C2.5 5 4 3.5 6 3.5c3.25.33 6.5.33 9.75 0 2 0 3.5 1.5 3.5 3.5a24.12 24.12 0 0 1 0 10c0 2-1.5 3.5-3.5 3.5c-3.25-.33-6.5-.33-9.75 0-2 0-3.5-1.5-3.5-3.5z"/><polygon points="10 8 16 12 10 16 10 8"/>
    </svg>
);
// --- END: Inline SVG Icons ---


// Define Color Palettes for attractive variation
// Using dark backgrounds with varying border/heading accents
const CARD_BGS = [
    'bg-gray-900',
    'bg-gray-900',
    'bg-gray-900',
    'bg-gray-900',
    'bg-gray-900',
    'bg-gray-900',
];

const HEADING_COLORS = [
    'text-amber-400',   // Primary Gold Accent
    'text-yellow-300',  // Lighter Gold/Yellow
    'text-stone-300',   // Warm Gray
    'text-amber-300', 
    'text-yellow-400', 
    'text-stone-400',
];

// Component to render a single detail line - Enhanced with Dashed Separator
const DetailLine = ({ label, content, colorClass }) => (
    // Increased vertical padding (py-4) and stronger dashed line (border-gray-700)
    <div className="py-4 border-b border-dashed border-gray-700"> 
        {/* Label uses the unique heading accent color, larger margin (mb-2) */}
        <strong className={`block text-base uppercase tracking-wider ${colorClass} mb-2`}>{label}</strong>
        <p className="text-base text-gray-300 leading-relaxed">{content}</p>
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
            delay: index * 0.15 // Increased stagger delay for visual effect
        } 
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      // Increased padding (p-10) and refined border color (amber-500)
      className={`${cardBgClass} p-10 rounded-xl shadow-2xl hover:shadow-4xl transition-all duration-300 transform hover:scale-[1.02] border-t-8 border-amber-500`}
    >
      {/* Title with dynamic color and increased bottom margin (mb-8) */}
      <h3 className={`text-2xl md:text-3xl font-serif font-bold mb-8 pb-4 border-b-2 border-gray-700 leading-snug ${headingColorClass}`}>
        {title}
      </h3>
      
      {/* Content separated by dashed lines, no need for space-y-4 since DetailLine manages its own vertical space */}
      <div className="divide-y divide-dashed divide-gray-700">
        <DetailLine label="Role" content={role} colorClass={headingColorClass} />
        <DetailLine label="Scope" content={scope} colorClass={headingColorClass} />
        <DetailLine label="Approach" content={approach} colorClass={headingColorClass} />
        <DetailLine label="Outcomes" content={outcomes} colorClass={headingColorClass} />
      </div>

      {/* Links Section with Larger Icons and stronger hover animation */}
      {links && links.length > 0 && (
        // Increased top margin/padding for separation
        <div className="mt-8 pt-6 border-t border-gray-700">
          <strong className="block text-sm uppercase tracking-wider text-gray-400 mb-4">View Content</strong>
          <div className="flex flex-wrap gap-6">
            {links.map((link, idx) => {
                const isInstagram = link.text.toLowerCase().includes('instagram');
                const Icon = isInstagram ? IconInstagram : IconYoutube;

                return (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      // Increased icon size (text-4xl) and used theme colors
                      className={`text-4xl transition-transform hover:scale-110 duration-200 
                                  ${isInstagram ? 'text-pink-500 hover:text-amber-400' : 'text-red-600 hover:text-amber-400'} text-gray-300`}
                      aria-label={`View ${link.text}`}
                    >
                      <Icon className="w-10 h-10"/>
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
