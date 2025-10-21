// src/components/Services.jsx 
import React from 'react';
import { motion } from 'framer-motion';
// Icons imported from react-icons/md and react-icons/fa
import { 
  MdModelTraining, 
  MdPeopleOutline, 
  MdOutlineInsights, 
  MdOutlineContentPaste, 
  MdEvent, 
  MdHandshake 
} from 'react-icons/md';

// Define services with specific icons and descriptions for better context
const servicesData = [
  { 
    title: 'Recruitment & Training', 
    description: 'Scouting, contracts, readiness training, and talent CRM management.', 
    icon: MdModelTraining 
  },
  { 
    title: 'Casting & Ambassadors', 
    description: 'TV/Film/Event casting, campus squads, and community ambassador programs.', 
    icon: MdPeopleOutline 
  },
  { 
    title: 'Content & Social Strategy', 
    description: 'Creator programs, UGC pipelines, lookbooks, and paid amplification.', 
    icon: MdOutlineContentPaste 
  },
  { 
    title: 'Events & Activations', 
    description: 'Pop-ups, samplings, roadshows, lead capture, and management.', 
    icon: MdEvent 
  },
  { 
    title: 'Brand Development & Consulting', 
    description: 'Visual identity, creative consulting, and rapid sprint content testing.', 
    icon: MdOutlineInsights 
  },
  { 
    title: 'Partnerships & CSR', 
    description: 'Integrating CSR into brand activations for measurable goodwill and affinity.', 
    icon: MdHandshake 
  },
];

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
      // Background: Use the professional, subtle off-white from the About section
      className="py-24 lg:py-32 bg-gray-50 text-gray-800"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-3xl font-serif font-extrabold mb-4 text-center tracking-tight text-gray-900"
        >
          Our Full Suite of Services
        </motion.h2>
        <p className="text-lg text-center text-gray-500 mb-16 max-w-2xl mx-auto">
            From talent sourcing to performance reporting, we cover the full talent lifecycle for your brand.
        </p>

        {/* Changed to a 3-column grid for a denser, more professional look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              // Service Card Styling: White background, subtle shadow, gold border on hover
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-transparent hover:border-gold-600 
                         transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl text-center"
            >
              {/* Icon */}
              <service.icon className="text-5xl text-gold-600 mx-auto mb-4" />
              
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