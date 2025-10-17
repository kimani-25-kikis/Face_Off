// src/components/About.jsx (Enhanced with new colors and icons)
import React from 'react';
import { motion } from 'framer-motion';
// NEW ICONS imported from react-icons/fa and react-icons/md
import { FaUserPlus, FaUsers, FaVideo, FaChartBar } from 'react-icons/fa';
import { MdModelTraining, MdPeopleAlt, MdOutlineContentPaste, MdOutlineInsights } from 'react-icons/md';

// Array for Core Capabilities (using data from the portfolio)
const capabilities = [
  // Switched to MdPeopleAlt for Casting/Management feel
  { icon: MdPeopleAlt, title: 'Recruiting & Management', description: 'Scouting, contracts, readiness training, and TV/Film/Event casting.' },
  // Switched to FaUsers for Social/Ambassador focus
  { icon: FaUsers, title: 'Casting & Ambassadors', description: 'TV/Film/Event casting; campus and community squads.' },
  // Switched to MdOutlineContentPaste for content focus
  { icon: MdOutlineContentPaste, title: 'Content Production & Events', description: 'Creating lookbooks, reels, ads, and organizing activations.' },
  // Switched to FaChartBar for performance/data focus
  { icon: FaChartBar, title: 'Performance Reporting', description: 'Providing dashboards, KPI reports, and optimization cycles.' },
];

const About = () => {
  // Animation variants for the core capability cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section 
      id="about" 
      className="py-30 mt-20 lg:py-28 bg-gray-50 text-gray-800"
    >
      <div className="container mx-auto px-6">

        {/* --- Main Heading & Description --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-600 mb-2">Our Foundation</p>
          {/* HEADING FONT COLOR CHANGE: Changed to text-gray-900 for a strong, dark contrast */}
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold mb-6 tracking-tight text-blue-900">
            About Face Off
          </h2>
          <p className="text-lg font-sans leading-relaxed text-gray-600 border-b border-gray-200 pb-8">
            Face Off Model & Cast Management recruits, trains, and manages models, creatives, and performers. We then activate them across social media, content, and live experiences to drive reach, engagement, leads, and sales for brands. Operating across Kenya with a strong Nairobi presence, our mission is to empower talent while delivering measurable results for our clients.
          </p>
        </motion.div>

        {/* --- Core Capabilities Grid --- */}
        {/* HEADING FONT COLOR CHANGE: Changed to text-gold-600 to match the sub-heading text */}
        <h3 className="text-3xl font-bold text-center mb-10 text-blue-600">Core Capabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center border-t-4 border-gold-500"
            >
              {/* ICON COLOR: Icons remain text-gold-600 for high visibility */}
              <item.icon className="text-5xl text-purple-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default About;