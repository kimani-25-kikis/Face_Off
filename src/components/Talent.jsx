import React from 'react';
import { motion } from 'framer-motion';

// --- START: Inline SVG Icon Components (Replaces lucide-react) ---

// Icon for Fashion & Editorial Models
const IconFeather = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.24 12.24a6 6 0 0 0-8.48-8.48L5.76 9.52a6 6 0 0 0 8.48 8.48l5.92-5.92z"/>
        <path d="M14.7 9.3l-5.4 5.4"/>
        <path d="M14.5 12.5l-3 3"/>
        <path d="M9.3 14.7l-3 3"/>
    </svg>
);

// Icon for Actors & Performers
const IconUsers = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
);

// Icon for Event Hosts & MCs
const IconMic = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>
    </svg>
);
// --- END: Inline SVG Icon Components ---


// Define the comprehensive talent data structure
const talentCategories = [
  {
    category: 'Fashion & Editorial Models',
    // Updated icon reference to use the local SVG component
    icon: IconFeather, 
    data: [
      { name: 'Model 1', role: 'Fashion Model', image: '/Face_Off/p1.jpeg' },
      { name: 'Model 3', role: 'Runway Specialist', image: '/Face_Off/p2.jpeg' },
      { name: 'Model 5', role: 'Commercial Lead', image: '/Face_Off/Port2.jpeg' }, 
    ],
  },
  {
    category: 'Actors & Performers',
    // Updated icon reference to use the local SVG component
    icon: IconUsers, 
    data: [
      { name: 'Model 2', role: 'Actor (TV/Film)', image: '/Face_Off/p3.jpeg' },
      { name: 'Model 4', role: 'Designer', image: '/Face_Off/p6.jpeg' }, 
      { name: 'Model 6', role: 'Pagent Judge', image: '/Face_Off/p7.jpeg' }, 
    ],
  },
  {
    category: 'Event Hosts & MCs',
    // Updated icon reference to use the local SVG component
    icon: IconMic, 
    data: [
      { name: 'Performer 7', role: 'Coopearate MC', image: '/Face_Off/p4.jpeg' }, 
      { name: 'Performer 8', role: 'Song Writer', image: '/Face_Off/p5.jpeg' }, 
      { name: 'Performer 9', role: 'Spoken Word Artist', image: '/Face_Off/Port3.jpeg' }, 
    ],
  },
];

const Talent = () => {
  // Animation for the entire section (to show categories)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Animation for individual talent cards
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            type: 'spring', 
            stiffness: 100, 
            damping: 10 
        } 
    },
  };

  return (
    <section 
      id="talent" 
      // Background remains bg-zinc-950
      className="py-32 lg:py-40 bg-zinc-950 text-white"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          // Reduced font size for main heading: md:text-5xl (was md:text-6xl)
          className="text-3xl md:text-xl font-serif font-extrabold mb-10 text-center tracking-tight text-amber-400"
        >
          Featured Talent Roster
        </motion.h2>
        <p className="text-sm text-center text-gray-400 mb-24 max-w-6xl mx-auto">
            Discover our curated, diverse range of creative professionals, categorized for easy casting and booking across high-profile projects.
        </p>

        {talentCategories.map((category, catIdx) => (
          <motion.div
            key={category.category}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            // Category block spacing confirmed (mb-32)
            className="mb-32" 
          >
            {/* Category Header with Icon - Centered and stylized */}
            <h3 className="flex items-center justify-center text-3xl font-bold font-sans text-stone-300 mb-16 pb-4 border-b-2 border-amber-500/50 max-w-2xl mx-auto">
              {/* Reduced font size for category titles: text-3xl (was md:text-4xl) */}
              <category.icon className="w-8 h-8 text-amber-500 mr-3 shrink-0" /> 
              {category.category}
            </h3>

            {/* Talent Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {category.data.map((talent, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  // Card styling: Dark gray background, gold border top, better hover effect
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02] border-t-8 border-amber-500/80"
                >
                  {/* Image Container: Key to making photos "fit well" */}
                  <div className="w-full aspect-square overflow-hidden">
                    <img
                      src={talent.image}
                      alt={talent.name}
                      // Ensure images fill the space, cover it, and scale slightly on hover
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                      // Placeholder/error fallback if image URLs fail to load
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x600/1f2937/d1d5db?text=Image+Unavailable"; }}
                    />
                  </div>
                  
                  {/* Text Overlay/Bottom Section */}
                  <div className="p-6 text-center">
                    {/* Reduced font size for talent names: text-xl (was text-2xl) */}
                    <h4 className="text-xl font-serif font-extrabold text-white">{talent.name}</h4>
                    {/* Reduced font size for roles: text-xs (was text-sm) */}
                    <p className="text-xs font-sans text-amber-400 uppercase tracking-widest mt-2">{talent.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
        
        {/* Call to Action for Full Roster */}
        <div className="text-center pt-20">
            <p className="text-gray-500 mb-10 max-w-xl mx-auto italic">
                Ready to find the perfect fit? Contact us for access to our complete, vetted talent pool.
            </p>
            <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(245, 158, 11, 0.5), 0 4px 6px -2px rgba(245, 158, 11, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                // CTA button font size adjusted (text-lg was text-xl)
                className="inline-block bg-amber-500 text-gray-900 px-10 py-4 rounded-full font-extrabold text-lg 
                          hover:bg-amber-400 transition-all duration-300 shadow-xl"
            >
                Request Full Roster & Briefing
            </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Talent;
