import React from 'react';
import { motion } from 'framer-motion';

// --- START: Inline SVG Icons ---

// Icon for Instagram
const IconInstagram = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
);

// Icon for YouTube
const IconYouTube = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10C2.5 5 4 3.5 6 3.5c3.25.33 6.5.33 9.75 0 2 0 3.5 1.5 3.5 3.5a24.12 24.12 0 0 1 0 10c0 2-1.5 3.5-3.5 3.5c-3.25-.33-6.5-.33-9.75 0-2 0-3.5-1.5-3.5-3.5z"/><polygon points="10 8 16 12 10 16 10 8"/>
    </svg>
);
// --- END: Inline SVG Icons ---

// --- START: Theme Configuration & Helper Components ---
const HEADING_COLORS = [
    'text-amber-400',   
    'text-yellow-300',   
    'text-stone-300',   
    'text-amber-300', 
    'text-yellow-400', 
    'text-stone-400',
];

// Component to render a single detail line
const DetailLine = ({ label, content, colorClass }) => (
    // Increased vertical padding (py-4) and stronger dashed line (border-gray-700)
    <div className="py-4 border-b border-dashed border-gray-700"> 
        {/* Label uses the unique heading accent color, larger margin (mb-2) */}
        <strong className={`block text-base uppercase tracking-wider ${colorClass} mb-2`}>{label}</strong>
        <p className="text-base text-gray-300 leading-relaxed">{content}</p>
    </div>
);
// --- END: Theme Configuration & Helper Components ---

// --- START: Refactored Data Structure ---
const portfolioData = [
    {
        title: 'Recruiting Agency Program - J. Rodriguez Entertainment Group',
        role: 'Recruiting agency & lead negotiator support',
        scope: 'Sourcing and vetting of models/performers for shows, music videos, events; talent onboarding packs; availability calendar and contract facilitation.',
        approach: 'Structured pipeline (application → screen test → brand-fit interview → terms & usage rights). Weekly slate reviews with J. Rodriguez.',
        outcomes: 'Faster time-to-cast, improved showreel quality, consistent compliance (consent, buyouts, disclosures), and steady creator bench for recurring work.',
        links: [
            { url: 'https://www.instagram.com/jr_en.t_group?igsh=MThhMHF1aWIxbHJ2bg==', text: 'Instagram' },
            { url: 'https://youtube.com/@jrodriguezentertainmentgroup?si=8azxbnHExVt3W1CD', text: 'YouTube Channel' }
        ],
    },
    {
        title: 'Pageant Consultancy - Mr & Miss Face of Embu',
        role: 'Full training and event management advisory',
        scope: 'Confidence training, runway presentation, media coaching, sponsorship deck consultation.',
        approach: 'Focused 8-week training modules covering public speaking, branding, fashion ethics, and stage presence.',
        outcomes: 'Successfully executed event, enhanced contestant quality, generated substantial local media coverage.',
        links: [
            { url: 'https://www.instagram.com/mrandmissfaceofembu?igsh=MWxqZzFwZnJ5YXh5Mg==', text: 'Instagram' },
        ],
    },
    {
        title: 'Education & Campus Programs - University of Embu Modelling Club',
        role: 'Mentor and workshop facilitator',
        scope: 'Workshops on commercial modeling ethics, portfolio building, digital presence, and finance.',
        approach: 'Developed official club structure, ran bi-weekly workshops, and provided one-on-one mentorship for talent entry into commercial sector.',
        outcomes: 'Established an official club structure, 40+ trained students, pathway to commercial work.',
        links: [
            { url: 'https://www.instagram.com/uoem_modelling_club?igsh=MXB1MGJ4cWJvMDc0NA==', text: 'Instagram' },
        ],
    },
    {
        title: 'Brand Development - Omollo Hustle',
        role: 'Visual identity and launch strategy',
        scope: 'Concept and casting for lookbook shoot, social media launch plan (Instagram/TikTok focus).',
        approach: 'Managed casting, styled the shoot, and developed a 4-week launch calendar targeting Nairobi and campus demographics.',
        outcomes: 'Successful product launch with strong visual assets, 150k+ initial reach.',
        links: [
            { url: 'https://www.instagram.com/omollohustle?igsh=N2Jobzlwemlxc3lw', text: 'Instagram' },
        ],
    },
    {
        title: 'NGO Partnership - Dream a Life Foundation',
        role: 'Social Impact Campaign execution',
        scope: 'Talent sourcing and management for awareness videos and charity event hosting.',
        approach: 'Provided high-profile talents and managed their commitment schedule for multi-day charity drive and campaign video production.',
        outcomes: 'High-visibility campaign, 500k+ video views, increased donations.',
        links: [
            { url: 'https://www.instagram.com/dream_life_ke?igsh=MTBxdGljMXJscmxudA==', text: 'Instagram' },
        ],
    },
    {
        title: 'Creative & Growth Consulting - Grandsard KE',
        role: 'Content strategy and growth audit',
        scope: 'Analyzing existing social channels, developing a 30-day content sprint plan to boost engagement.',
        approach: 'Comprehensive audit, followed by implementation of A/B tested content formats focusing on Reels and user-generated content (UGC).',
        outcomes: '45% increase in Instagram engagement, 20% growth in followers over the sprint period.',
        links: [
            { url: 'https://www.instagram.com/grandsard_ke?igsh=MWo4bXp2OGprcjFmOA==', text: 'Instagram' },
        ],
    },
    {
        title: 'Nairobi Market Case - Capitalist City Playbook',
        role: 'In-house market case study (Condensed)',
        scope: 'Creator squads + mall activations + WhatsApp/M-Pesa funnels in high-footfall areas.',
        approach: 'Proprietary plan focused on multi-channel talent deployment across key Nairobi locations (Two Rivers, Sarit, TRM, etc.).',
        outcomes: 'Footfall, UGC, lead capture, and sales loops—all measurable and compliant.',
        cta: 'Ask for the detailed 6-week plan with KPI & budget bands.',
        links: [],
    },
];
// --- END: Refactored Data Structure ---


const Portfolio = () => {
    
    // Standard card styling for all non-featured items
    const STANDARD_CARD_CLASSES = "bg-zinc-800 py-10 px-16 rounded-xl shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 transform hover:scale-[1.02] border-t-8 border-amber-500 flex flex-col h-full";
    // Tighter padding for the last card to reduce its height
    const FEATURED_CARD_TIGHT_PADDING = "p-6"; 

    return (
        <section 
            id="portfolio" 
            className="py-20 md:py-20 lg:py-40 bg-gray-900 text-white font-['Inter']"
        >
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-2xl md:text-3xl font-serif font-extrabold mb-4 text-center tracking-tight text-amber-400"
                >
                    Portfolio Highlights
                </motion.h2>
                <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                    Select engagements and collaborations. Detailed metrics are available upon brief.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.map((project, idx) => {
                        const isLastCard = idx === portfolioData.length - 1;
                        const headingColorClass = HEADING_COLORS[idx % HEADING_COLORS.length];
                        
                        let cardClasses = STANDARD_CARD_CLASSES;
                        
                        // Condition to make the last card span 3 columns and minimize height
                        if (isLastCard) {
                            // Apply the 3-column span and override padding for minimal height, but keep base styles
                            cardClasses = `lg:col-span-3 ${STANDARD_CARD_CLASSES.replace('py-10 px-16', FEATURED_CARD_TIGHT_PADDING)}`;
                        }
                        
                        // Animation: Staggered spring effect for better entry
                        const cardVariants = {
                            hidden: { opacity: 0, y: 50, scale: 0.9 },
                            visible: { 
                                opacity: 1, 
                                y: 0, 
                                scale: 1, 
                                transition: { 
                                    type: 'spring', 
                                    stiffness: 120,
                                    damping: 12,
                                    delay: idx * 0.15 
                                } 
                            },
                        };

                        return (
                            <motion.div
                                key={idx}
                                custom={idx}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                className={cardClasses}
                            >
                                
                                {/* Heading title font size reduced to text-xl md:text-2xl */}
                                <h3 className={`text-xl md:text-2xl font-serif font-bold mb-8 pb-4 border-b-2 border-gray-700 leading-snug ${headingColorClass}`}>
                                    {project.title}
                                </h3>
                                
                                {/* Content separated by DetailLine components with dashed separators */}
                                <div className="flex-grow divide-y divide-dashed divide-gray-700">
                                    <DetailLine label="Role" content={project.role} colorClass={headingColorClass} />
                                    <DetailLine label="Scope" content={project.scope} colorClass={headingColorClass} />
                                    <DetailLine label="Approach" content={project.approach} colorClass={headingColorClass} />
                                    <DetailLine label="Outcomes" content={project.outcomes} colorClass={headingColorClass} />
                                </div>
                            
                                {/* Links Section or CTA */}
                                {project.links && project.links.length > 0 && (
                                    <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                                        <strong className="block text-sm uppercase tracking-wider text-gray-400 mb-4">View Content</strong>
                                        <div className="flex flex-wrap gap-6 justify-center">
                                            {project.links.map((link, linkIdx) => {
                                                const isInstagram = link.text.toLowerCase().includes('instagram');
                                                const Icon = isInstagram ? IconInstagram : IconYouTube;

                                                return (
                                                    <a
                                                        key={linkIdx}
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`text-3xl transition-transform hover:scale-110 duration-200 
                                                                    ${isInstagram ? 'text-pink-500 hover:text-amber-400' : 'text-red-600 hover:text-amber-400'} text-gray-300`}
                                                        aria-label={`View ${link.text}`}
                                                    >
                                                        <Icon className="w-8 h-8"/>
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                                
                                {/* CTA for Market Case */}
                                {project.cta && (
                                    <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                                        <p className="font-semibold text-lg text-amber-300">
                                            <strong className="text-amber-400 block mb-2 text-xl">NEXT STEP: STRATEGY SESSION</strong> 
                                            {project.cta}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
