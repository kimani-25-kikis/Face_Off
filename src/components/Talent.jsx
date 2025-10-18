// src/components/Talent.jsx 
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaTheaterMasks, FaMicrophone } from 'react-icons/fa'; // Icons for categories

// Define the comprehensive talent data structure
const talentCategories = [
  {
    category: 'Fashion & Editorial',
    icon: FaGraduationCap,
    data: [
      { name: 'Model 1', role: 'Fashion Model', image: '/Face_Off/p1.jpeg' },
      { name: 'Model 3', role: 'Runway Specialist', image: '/Face_Off/p2.jpeg' },
      { name: 'Model 5', role: 'Commercial Lead', image: '/Face_Off/Port2.jpeg' }, // Added placeholder
    ],
  },
  {
    category: 'Acting & Performance',
    icon: FaTheaterMasks,
    data: [
      { name: 'Model 2', role: 'Actor (TV/Film)', image: '/Face_Off/p3.jpeg' },
      { name: 'Model 4', role: 'Voice Over Artist', image: '/Face_Off/Port1.jpeg' }, // Added placeholder
      { name: 'Model 6', role: 'Stunt Performer', image: '/Face_Off/Port3.jpeg' }, // Added placeholder
    ],
  },
  {
    // NEW CATEGORY: Event Performers (Ready for your new images!)
    category: 'Event Performers & Hosts',
    icon: FaMicrophone,
    data: [
      { name: 'Performer 7', role: 'Event Host/MC', image: '/Face_Off/Port1.jpeg' }, // Placeholder for your first Event Performer photo
      { name: 'Performer 8', role: 'Dancer/Choreographer', image: '/Face_Off/Port2.jpeg' }, // Placeholder for your second Event Performer photo
      { name: 'Performer 9', role: 'Spoken Word Artist', image: '/Face_Off/Port3.jpeg' }, // Placeholder for your third Event Performer photo
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
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      id="talent" 
      // Background: Subtle, professional light gray. Text: Dark for contrast.
      className="py-24 lg:py-32 bg-gray-50 text-gray-800"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-serif font-extrabold mb-4 text-center tracking-tight text-gray-900"
        >
          Featured Talent Roster
        </motion.h2>
        <p className="text-lg text-center text-gray-500 mb-16 max-w-3xl mx-auto">
            Discover our diverse range of professionals, categorized for easy casting and booking.
        </p>

        {talentCategories.map((category, catIdx) => (
          <motion.div
            key={category.category}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-20"
          >
            {/* Category Header with Icon */}
            <h3 className="flex items-center justify-center text-3xl font-bold font-sans text-gold-600 mb-10 pb-2 border-b-2 border-gold-300/50 max-w-xl mx-auto">
              <category.icon className="text-3xl mr-3" />
              {category.category}
            </h3>

            {/* Talent Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.data.map((talent, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  // Card styling: White background, subtle shadow, scale on hover
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {/* Image Container: Key to making photos "fit well" */}
                  <div className="w-full aspect-square overflow-hidden">
                    <img
                      src={talent.image}
                      alt={talent.name}
                      // Ensure images fill the space, cover it, and scale slightly on hover
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Text Overlay/Bottom Section */}
                  <div className="p-5 text-center">
                    <h4 className="text-xl font-serif font-extrabold text-gray-900">{talent.name}</h4>
                    <p className="text-sm font-sans text-gold-600 uppercase tracking-widest mt-1">{talent.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
        
        {/* Call to Action for Full Roster */}
        <div className="text-center pt-10">
            <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full font-bold text-lg 
                            hover:bg-gold-600 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
                Request Full Roster & Briefing
            </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Talent;