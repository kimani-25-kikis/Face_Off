import React from 'react';
import { motion } from 'framer-motion';

// Icon for general project (MdOutlineWorkspacePremium)
const IconProject = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M10 13l2 2 4-4" />
  </svg>
);

// Icon for Instagram (FaInstagram)
const IconInstagram = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>);

// Icon for YouTube
const IconYouTube = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17.9v-2.2c0-.9.7-1.7 1.7-1.7h15.6c.9 0 1.7.8 1.7 1.7v2.2c0 .9-.7 1.7-1.7 1.7H4.2c-.9 0-1.7-.8-1.7-1.7z"/><path d="m10 10 5 2.5-5 2.5v-5Z"/></svg>);


const portfolioData = [
  {
    title: 'Recruiting Agency Program - J. Rodriguez Entertainment Group',
    role: 'Recruiting agency & lead negotiator support',
    scope: 'Sourcing and vetting of models/performers for shows, music videos, events; contract facilitation.',
    outcomes: 'Faster time-to-cast, improved showreel quality, consistent compliance, and steady creator bench.',
    icon: IconProject,
    tag: 'Agency Support',
    // Card 1: Instagram and YouTube links
    instaLink: 'https://www.instagram.com/jr_en.t_group?igsh=MThhMHF1aWIxbHJ2bg==',
    youtubeLink: 'https://youtube.com/@jrodriguezentertainmentgroup?si=8azxbnHExVt3W1CD',
  },
  {
    title: 'Pageant Consultancy - Mr & Miss Face of Embu',
    role: 'Full training and event management advisory',
    scope: 'Confidence training, runway presentation, media coaching, sponsorship deck consultation.',
    outcomes: 'Successfully executed event, enhanced contestant quality, media coverage.',
    icon: IconProject,
    tag: 'Consultancy',
    // Card 2: Instagram link only
    instaLink: 'https://www.instagram.com/mrandmissfaceofembu?igsh=MWxqZzFwZnJ5YXh5Mg==',
    youtubeLink: null,
  },
  {
    title: 'Education & Campus Programs - University of Embu Modelling Club',
    role: 'Mentor and workshop facilitator',
    scope: 'Workshops on commercial modeling ethics, portfolio building, digital presence, and finance.',
    outcomes: 'Established an official club structure, 40+ trained students, pathway to commercial work.',
    icon: IconProject,
    tag: 'Training & Ed',
    // Card 3: Instagram link only
    instaLink: 'https://www.instagram.com/uoem_modelling_club?igsh=MXB1MGJ4cWJvMDc0NA==',
    youtubeLink: null,
  },
  {
    title: 'Brand Development - Omollo Hustle',
    role: 'Visual identity and launch strategy',
    scope: 'Concept and casting for lookbook shoot, social media launch plan (Instagram/TikTok focus).',
    outcomes: 'Successful product launch with strong visual assets, 150k+ initial reach.',
    icon: IconProject,
    tag: 'Brand Launch',
    // Card 4: Instagram link only
    instaLink: 'https://www.instagram.com/omollohustle?igsh=N2Jobzlwemxxc3lw',
    youtubeLink: null,
  },
  {
    title: 'NGO Partnership - Dream a Life Foundation',
    role: 'Social Impact Campaign execution',
    scope: 'Talent sourcing and management for awareness videos and charity event hosting.',
    outcomes: 'High-visibility campaign, 500k+ video views, increased donations.',
    icon: IconProject,
    tag: 'CSR / NGO',
    // Card 5: Instagram link only
    instaLink: 'https://www.instagram.com/dream_life_ke?igsh=MTBxdGljMXJscmxudA==',
    youtubeLink: null,
  },
  {
    title: 'Creative & Growth Consulting - Grandsard KE',
    role: 'Content strategy and growth audit',
    scope: 'Analyzing existing social channels, developing a 30-day content sprint plan to boost engagement.',
    outcomes: '45% increase in Instagram engagement, 20% growth in followers over the sprint period.',
    icon: IconProject,
    tag: 'Growth Strategy',
    // Card 6: Instagram link only
    instaLink: 'https://www.instagram.com/grandsard_ke?igsh=MWo4bXp2OGprcjFmOA==',
    youtubeLink: null,
  },
  {
    title: 'Nairobi Market Case - Capitalist City Playbook',
    role: 'In-house market case study (Condensed)',
    scope: 'Creator squads + mall activations + WhatsApp/M-Pesa funnels in high-footfall areas.',
    outcomes: 'Footfall, UGC, lead capture, and sales loops—all measurable and compliant.',
    cta: 'Ask for the detailed 6-week plan with KPI & budget bands.',
    icon: IconProject,
    tag: 'Market Strategy',
    // Card 7: No links
    instaLink: null,
    youtubeLink: null,
  },
];

const Portfolio = () => {
  // Removed WHATSAPP_URL and INSTAGRAM_URL as links are now specific to each project
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section 
      id="portfolio" 
      className="py-24 md:py-32 lg:py-40 bg-gray-900 text-white font-['Inter']"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-3xl font-serif font-extrabold mb-4 text-center tracking-tight text-amber-400"
        >
          Portfolio Highlights
        </motion.h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Select engagements and collaborations. Detailed metrics are available upon brief.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-zinc-800 p-6 rounded-xl shadow-xl hover:shadow-amber-500/30 transition-shadow duration-300 flex flex-col h-full border-t-4 border-amber-500/20"
            >
              <div className="flex items-center space-x-3 mb-4">
                <project.icon className="text-2xl text-amber-500 flex-shrink-0" />
                <span className="bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {project.tag}
                </span>
              </div>
              
              {/* TARGETED FONT SIZE: text-xl for project title */}
              <h3 className="text-xl font-bold font-sans text-white mb-4 leading-snug">
                {project.title}
              </h3>

              {/* Flex-grow ensures content fills space and pushes social links to bottom */}
              <div className="space-y-3 text-sm text-gray-300 flex-grow">
                <p>
                  <strong className="text-amber-300/90 font-semibold">Role:</strong> {project.role}
                </p>
                <p>
                  <strong className="text-amber-300/90 font-semibold">Scope:</strong> {project.scope}
                </p>
                
                {/* Outcomes / CTA Section */}
                <div className="pt-4 border-t border-gray-700/50">
                  {project.cta ? (
                    <p className="font-semibold text-base text-amber-300">
                      <strong className="text-amber-400">Next Step:</strong> {project.cta}
                    </p>
                  ) : (
                    <p className="font-semibold text-base text-green-400">
                      <strong className="text-amber-400">Outcomes:</strong> {project.outcomes}
                    </p>
                  )}
                </div>
              </div>

              {/* Individual Social Links Section (Per Card) */}
              {/* Only show the container if at least one link exists for the card */}
              {(project.instaLink || project.youtubeLink) && (
                <div className="mt-4 pt-4 border-t border-gray-700/50 flex justify-end space-x-3">
                  
                  {/* Show Instagram link if available */}
                  {project.instaLink && (
                    <motion.a
                      href={project.instaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-400 hover:text-pink-500 transition-transform duration-300"
                      aria-label={`Instagram for ${project.tag}`}
                    >
                      <IconInstagram className="w-5 h-5" />
                    </motion.a>
                  )}
                  
                  {/* Show YouTube link if available */}
                  {project.youtubeLink && (
                    <motion.a
                      href={project.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-400 hover:text-red-600 transition-transform duration-300"
                      aria-label={`YouTube Channel for ${project.tag}`}
                    >
                      <IconYouTube className="w-5 h-5" />
                    </motion.a>
                  )}

                  {/* WhatsApp link was removed as requested */}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
