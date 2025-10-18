// src/components/Portfolio.jsx 
import React from 'react';
import PortfolioHighlight from './PortfolioHighlight.jsx';


const portfolioData = [
   
    {
        title: 'Recruiting Agency Program - J. Rodriguez Entertainment Group',
        role: 'Recruiting agency & lead negotiator support',
        scope: 'Sourcing and vetting of models/performers for shows, music videos, events; talent onboarding packs; availability calendar and contract facilitation.',
        approach: 'Structured pipeline (application → screen test → brand-fit interview → terms & usage rights). Weekly slate reviews with J. Rodriguez.',
        outcomes: 'Faster time-to-cast, improved showreel quality, consistent compliance (consent, buyouts, disclosures), and steady creator bench for recurring productions.',
        links: [{ text: 'Instagram', url: 'https://instagram.com/jrodriguezgroup' }, { text: 'YouTube', url: 'https://youtube.com/jrodriguezgroup' }], // Corrected links to be placeholders
    },
   
    {
        title: 'Pageant Consultancy - Mr & Miss Face of Embu',
        role: 'Pageant consultant; training curriculum developer',
        scope: 'Runway coaching, presentation, brand storytelling, stage direction; grooming sponsor integrations and media prep.',
        approach: '6-module accelerator (Poise • Walks • Camera • Voice • Brand • Digital).',
        outcomes: 'Polished stage performances, cohesive pageant identity, stronger sponsor value propositions, and increased local audience engagement.',
        links: [{ text: 'Instagram', url: 'https://instagram.com/faceofembu' }], // [cite: 22, 23, 24, 25, 26, 27]
    },

    {
        title: 'Education & Campus Programs - University of Embu Modelling Club',
        role: 'Patron; pageant consultant; modeling curricular developer',
        scope: 'Club structure, practice schedules, mentorship, event casting, collaboration with campus partners.',
        approach: 'Creator-lab model—students produce UGC tied to events and brand briefs; safety and consent framework for campus shoots.',
        outcomes: 'Sustainable club pipeline, improved student portfolios, and reliable campus ambassador teams for partner activations.',
        links: [{ text: 'Instagram', url: 'https://instagram.com/uembumodellingclub' }],
    },
  
    {
        title: 'Brand Development - Omollo Hustle',
        role: 'Concept developer & brand development partner',
        scope: 'Visual identity refresh, product styling, content pillars, and social shop setup.',
        approach: 'Nairobi street-style storytelling + micro-creator collabs; lookbooks, reels, and drop calendars.',
        outcomes: 'Clearer brand voice, consistent content cadence, product trial through pop-ups, and warm-lead flow via WhatsApp catalogs.',
        links: [{ text: 'Instagram', url: 'https://instagram.com/omollohustle' }],
    },
    
    {
        title: 'NGO Partnership - Dream a Life Foundation',
        role: 'Impact partner integrating CSR into brand activations',
        scope: 'Co-branded drives (e.g., Feed-a-Child), mentorship sessions, and volunteer talent rosters for community events.',
        approach: '“Cause-with-conversion” model portion of campaign engagement triggers donations; event content fuels awareness.',
        outcomes: 'Measurable goodwill, youth engagement, and brand affinity alongside campaign KPIs.',
        links: [{ text: 'Instagram', url: 'https://instagram.com/dreamalifefoundation' }],
    },
   
    {
        title: 'Creative & Growth Consulting - Grandsard KE',
        role: 'Creative and growth consultant',
        scope: 'Audience mapping, content strategy, and partner collaborations.',
        approach: 'Rapid sprints to test narratives and formats; iterate on performing posts and partnerships.',
        outcomes: 'Sharper positioning and a repeatable system for collaboration-led growth.',
        links: [{ text: 'Instagram', url: 'https://instagram.com/grandsardke' }],
    },
  
    {
        title: 'Nairobi Market Case - Capitalist City Playbook',
        role: 'Convert Nairobi’s status-aware audiences',
        scope: 'Creator squads + mall activations + WhatsApp/M-Pesa funnels.',
        approach: 'Micro-influencers (5k–50k), matatu culture hooks, time-boxed promo codes, Spark Ads/IG Reels optimized to ATC/Leads.',
        outcomes: 'Footfall, UGC, lead capture, and sales loops—all measurable and compliant (usage rights, minor consent, data privacy).',
        links: [],
    },
];


const Portfolio = () => {
  return (
    <section 
      id="portfolio" 
      // Background remains dark to provide a professional canvas for the colorful cards
      className="py-40 lg:py-40 bg-gray-800 text-white"
    >
      <div className="container mx-auto px-6">
        {/* Updated Heading: Text is "Portfolio Highlights" and color is blue-400 */}
        <h2 className="text-4xl md:text-4xl font-serif font-extrabold mb-4 text-center tracking-tight text-blue-300">
          Portfolio Highlights
        </h2>
        <p className="text-lg text-gold-400 text-center mb-16 max-w-2xl mx-auto">
          
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioData.map((item, idx) => (
            // Pass 'index' prop to the highlight component to cycle colors
            <PortfolioHighlight key={idx} index={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;