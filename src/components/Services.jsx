import React from 'react';
import { motion } from 'framer-motion';

// --- START: Inline SVG Icon Components (Replaces react-icons) ---

// MdModelTraining (Training/Recruitment)
const IconModelTraining = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 2v20"/><path d="M4.93 4.93l14.14 14.14"/><path d="M4.93 19.07l14.14-14.14"/>
    </svg>
);

// MdPeopleOutline (Casting & Ambassadors)
const IconPeopleOutline = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
);

// MdOutlineContentPaste (Content Strategy)
const IconContentPaste = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/><path d="M19 6h-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"/>
    </svg>
);

// MdEvent (Events & Activations)
const IconEvent = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
    </svg>
);

// MdOutlineInsights (Brand Consulting)
const IconInsights = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
    </svg>
);

// MdHandshake (Partnerships & CSR)
const IconHandshake = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 15v-2a1 1 0 0 1 1-1h5a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-5a2 2 0 0 1-2-2V1"/><path d="M11 23v-2a1 1 0 0 1 1-1h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-5a2 2 0 0 1-2-2v-2"/>
    </svg>
);
// --- END: Inline SVG Icon Components ---


// Define services with specific icons and descriptions for better context
const servicesData = [
  { 
    title: 'Recruitment & Training', 
    description: 'Scouting, contracts, readiness training, and talent CRM management.', 
    icon: IconModelTraining 
  },
  { 
    title: 'Casting & Ambassadors', 
    description: 'TV/Film/Event casting, campus squads, and community ambassador programs.', 
    icon: IconPeopleOutline 
  },
  { 
    title: 'Content & Social Strategy', 
    description: 'Creator programs, UGC pipelines, lookbooks, and paid amplification.', 
    icon: IconContentPaste 
  },
  { 
    title: 'Events & Activations', 
    description: 'Pop-ups, samplings, roadshows, lead capture, and management.', 
    icon: IconEvent 
  },
  { 
    title: 'Brand Development & Consulting', 
    description: 'Visual identity, creative consulting, and rapid sprint content testing.', 
    icon: IconInsights 
  },
  { 
    title: 'Partnerships & CSR', 
    description: 'Integrating CSR into brand activations for measurable goodwill and affinity.', 
    icon: IconHandshake 
  },
];

// Define a gold color utility class since Tailwind doesn't have 'gold-600' by default
// We will use 'amber-500' which is visually close and available in Tailwind.
const Services = () => {
  // Animation variants for the service items
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: i * 0.1, // Staggered entry
      },
    }),
  };

  return (
    <section 
      id="services" 
      // Background changed to bg-white
      className="py-24 lg:py-32 bg-white text-gray-800"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          // Heading font size reduced slightly and tracking tightened
          className="text-2xl md:text-3xl font-serif font-extrabold mb-4 text-center tracking-tight text-gray-900"
        >
          Our Full Suite of Services
        </motion.h2>
        <p 
            // Margin reduced for tighter spacing
            className="text-lg text-center text-gray-500 mb-12 max-w-2xl mx-auto"
        >
          From talent sourcing to performance reporting, we cover the full talent lifecycle for your brand.
        </p>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              // Service Card Styling: uses pure white bg, subtle shadow, amber border on hover (replacing 'gold-600')
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-transparent hover:border-amber-500 
                          transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl text-center"
            >
              {/* Icon - Using amber-500 for the gold color substitute */}
              <service.icon className="text-5xl text-amber-500 mx-auto mb-4" />
              
              {/* Title */}
              <h3 className="text-xl font-bold font-sans text-gray-900 mb-3">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
