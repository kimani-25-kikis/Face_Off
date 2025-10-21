import React from 'react';
import { motion } from 'framer-motion';

// --- START: Inline SVG Icons to replace react-icons ---
// Sourcing icons from Lucide to ensure components are self-contained and compile correctly.

const IconUsers = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const IconContent = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2"/><line x1="9" x2="15" y1="9" y2="9"/><line x1="9" x2="15" y1="13" y2="13"/><line x1="9" x2="15" y1="17" y2="17"/>
  </svg>
);

const IconChartBar = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>
  </svg>
);

const IconPeopleAlt = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
// --- END: Inline SVG Icons ---


const capabilities = [
  // Icon mapping updated to use the new inline SVG components
  { icon: IconPeopleAlt, title: 'Recruiting & Management', description: 'Scouting, contracts, readiness training, and TV/Film/Event casting.' },
  { icon: IconUsers, title: 'Casting & Ambassadors', description: 'TV/Film/Event casting; campus and community squads.' },
  { icon: IconContent, title: 'Content Production & Events', description: 'Creating lookbooks, reels, ads, and organizing activations.' },
  { icon: IconChartBar, title: 'Performance Reporting', description: 'Providing dashboards, KPI reports, and optimization cycles.' },
];

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section 
      id="about" 
      // Massive vertical separation from other sections (py-32)
      className="py-32 bg-gray-50 text-gray-800"
    >
      <div className="container mx-auto px-6">
        {/* --- Main Heading & Description Block --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          // FIX APPLIED: Reintroduced flex properties (flex flex-col items-center) to reliably center child elements (p, h2, p).
          className="flex flex-col items-center max-w-4xl mx-auto text-center mb-32"
        >
          {/* Accent text changed to amber */}
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-500 mb-4">Our Foundation</p>
          {/* Main heading uses serif font */}
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold mb-8 tracking-tight text-gray-900">
            About Face Off
          </h2>
          {/* Description text block: 
            Now relies on the parent's flex (items-center) to center the block itself, 
            and uses text-center to center the lines of text inside.
          */}
          <p className="text-xl font-sans leading-relaxed text-gray-600 border-b border-gray-200 pb-20 max-w-3xl text-center">
            Face Off Model & Cast Management recruits, trains, and manages models, creatives, and performers. We then activate them across social media, content, and live experiences to drive reach, engagement, leads, and sales for brands. Operating across Kenya with a strong Nairobi presence, our mission is to empower talent while delivering measurable results for our clients.
          </p>
        </motion.div>

        {/* --- Core Capabilities Grid --- */}
        {/* Generous margin below this subtitle increased from mb-16 to mb-20 */}
        <h3 className="text-1xl font-serif font-bold text-center mb-20 text-gray-900">Core Capabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              // Increased padding (p-8) and refined border color/shadow for premium look
              className="bg-white p-30 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center border-t-4 border-amber-500"
            >
              {/* Icon color changed to amber and increased bottom margin (mb-6) */}
              <item.icon className="text-5xl text-amber-500 mx-auto mb-8" />
              <h4 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h4>
              <p className="text-base text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
