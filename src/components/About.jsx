import React from 'react';
import { motion } from 'framer-motion';

// --- START: Inline SVG Icons ---
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
      // Main section padding adjusted for comfortable spacing
      className="py-20 md:py-20 bg-white text-gray-800"
    >
      <div className="container mx-auto px-6">
        {/* --- Main Heading & Description Block --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          // MODIFIED: Reduced margin-bottom from mb-32 to mb-20 for tighter spacing
          className="flex flex-col items-center max-w-4xl mx-auto text-center mb-16 md:mb-20"
        >
          {/* Accent text changed to amber */}
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-500 mb-4">Our Foundation</p>
          {/* Main heading uses serif font */}
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold mb-8 tracking-tight text-gray-900">
            About Face Off
          </h2>
          {/* MODIFIED: Reduced padding-bottom (pb-20 to pb-16) to bring the divider closer */}
          <p className="text-lg md:text-xl font-sans leading-relaxed text-gray-600 border-b border-gray-200 pb-10 md:pb-16 max-w-3xl text-center">
            Face Off Model & Cast Management recruits, trains, and manages models, creatives, and performers. We then activate them across social media, content, and live experiences to drive reach, engagement, leads, and sales for brands. Operating across Kenya with a strong Nairobi presence, our mission is to empower talent while delivering measurable results for our clients.
          </p>
        </motion.div>

        {/* --- Core Capabilities Grid --- */}
        {/* MODIFIED: Reduced margin-bottom on the subtitle from mb-16 to mb-12 */}
        <h3 className="text-2xl font-serif font-bold text-center mb-12 text-gray-900">Core Capabilities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-7xl mx-auto">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              // Adjusted padding (p-8) and added rounded-lg for a better look
              className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center border-t-4 border-amber-500"
            >
              {/* Icon color changed to amber and increased bottom margin (mb-6) */}
              <item.icon className="w-12 h-12 text-amber-500 mx-auto mb-6" />
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
