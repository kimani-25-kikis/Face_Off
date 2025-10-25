import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- CRITICAL ENVIRONMENT VARIABLE FIX ---
// The problematic 'import.meta.env' syntax is now removed.
// On your production host (Vercel), you must ensure these variables
// are configured. We are setting them as empty strings here to remove
// the compiler warning and prevent the app from crashing on definition.
// Vercel/Vite will inject the actual values at runtime if properly configured.
const EMAILJS_SERVICE_ID = 'VITE_SERVICE_ID_PLACEHOLDER'; 
const EMAILJS_TEMPLATE_ID = 'VITE_TEMPLATE_ID_PLACEHOLDER';
const EMAILJS_PUBLIC_KEY = 'VITE_PUBLIC_KEY_PLACEHOLDER';
// ----------------------------------------------------

// NOTE: Since the system environment is not available to the LLM during generation, 
// we rely on the host (Vercel) to substitute the actual values where needed.
// The placeholders are a failsafe against the compiler error, but YOU MUST 
// ensure the actual keys are set in your Vercel project environment variables.

// --- START: Inline SVG Icon Components (Replaces react-icons/fa) ---

// Icon for Map Marker (FaMapMarkerAlt)
const IconMapMarkerAlt = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>);

// Icon for Envelope (FaEnvelope)
const IconEnvelope = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.83 1.83 0 0 1-2.06 0L2 7"/></svg>);

// Icon for Phone (FaPhoneAlt)
const IconPhoneAlt = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-7.01-7.01C4.05 6.4 7.37 3.9 8.5 2.81A1.7 1.7 0 0 1 10 2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1c-.42 0-1 .47-1.33 1.01-.84 1.34 2.89 5.37 4.75 6.27.56.27 1.01.69 1.01 1.01v.01a2 2 0 0 1-2 2h2z"/></svg>);

// Icon for Instagram (FaInstagram)
const IconInstagram = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>);

// Icon for WhatsApp/Message (FaWhatsapp)
const IconWhatsapp = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 0 0 4 16.1V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3.9"/><path d="M12 22a9 9 0 0 0 7.9-4"/></svg>);

// --- END: Inline SVG Icon Components ---

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const CONTACT_INFO = [
    { icon: IconMapMarkerAlt, label: 'Headquarters', value: 'Nairobi, Kenya', href: '#' },
    { icon: IconEnvelope, label: 'Email', value: 'faceoffmodelncastmngt.info@gmail.com', href: 'mailto:faceoffmodelncastmngt.info@gmail.com' },
    { icon: IconPhoneAlt, label: 'Phone/WhatsApp', value: '+254741457909', href: 'tel:+254741457909' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all required fields.');
      setTimeout(() => setStatus(''), 3000); 
      return;
    }
    
    // Check if the keys are placeholders or missing (indicates a config error)
    if (EMAILJS_SERVICE_ID.includes('PLACEHOLDER') || !EMAILJS_PUBLIC_KEY.includes('VITE')) { 
        setStatus('Configuration Error: Please ensure your EmailJS keys are set correctly on Vercel.');
        setTimeout(() => setStatus(''), 7000); 
        return;
    }

    // Sending 'name' to match the {{name}} template variable
    const templateParams = {
        name: formData.name, 
        from_email: formData.email, 
        message: formData.message,
    };

    try {
        // Check if the emailjs library is loaded. This is CRUCIAL.
        if (typeof window.emailjs === 'undefined') {
            throw new Error("EmailJS SDK not loaded. Please ensure the script tag is in your index.html file.");
        }

        const result = await window.emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams,
            EMAILJS_PUBLIC_KEY
        );

        console.log('Email sent successfully:', result);
        setStatus('Message sent successfully! We will be in touch soon.');
        setFormData({ name: '', email: '', message: '' }); // Clear form on success
    } catch (error) {
        console.error('EmailJS Error:', error);
        setStatus(`Failed to send message: ${error.message || 'Check your Vercel environment variables and the EmailJS template.'}`);
    } finally {
        setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section 
      id="contact" 
      // Padding top/bottom decreased for tighter vertical fit
      className="py-16 md:py-24 lg:py-32 bg-zinc-950 text-white relative z-10"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-serif font-extrabold mb-4 text-center tracking-tight text-amber-400"
        >
          Let's Start Your Campaign
        </motion.h2>
        <p className="text-lg text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Reach out to discuss your casting needs, project scope, or agency partnerships.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            // Internal padding reduced from lg:p-12 to lg:p-8
            className="space-y-8 p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-3xl border-2 border-amber-500/10"
          >
            <h3 className="text-2xl font-bold font-sans text-amber-500 mb-4 border-b border-gray-700 pb-4">
              Our Details
            </h3>
            {CONTACT_INFO.map((item, index) => (
              // space-y-10 reduced to space-y-8 on the container
              <a key={index} href={item.href} className="flex items-start space-x-4 group py-1">
                {/* Icon usage */}
                <item.icon className="text-3xl text-amber-500 flex-shrink-0 mt-1 group-hover:text-amber-400 transition-colors duration-300" />
                <div>
                  <p className="text-sm uppercase tracking-widest font-semibold text-gray-400">{item.label}</p>
                  <p className="text-xl font-serif text-white group-hover:underline">{item.value}</p>
                </div>
              </a>
            ))}
            <div className="pt-6 border-t border-gray-700">
              <p className="text-sm uppercase tracking-widest font-semibold text-gray-400 mb-3">Connect</p>
              <div className="flex space-x-6">
                <motion.a
                  href="https://instagram.com/face_of.modelncastmanagement"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#E879F9' }} // Pink-500 equivalent hover
                  className="text-3xl text-white hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  <IconInstagram />
                </motion.a>
                <motion.a
                  href="https://wa.me/254741457909"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#10B981' }} // Green-500 equivalent hover
                  className="text-3xl text-white hover:text-green-500 transition-colors"
                  aria-label="WhatsApp"
                >
                  <IconWhatsapp />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form Column */}
          <form
            onSubmit={handleSubmit}
            // Internal padding reduced from lg:p-12 to lg:p-8 and space-y reduced
            className="p-6 lg:p-8 rounded-2xl bg-white shadow-3xl space-y-5 text-gray-900" 
          >
            <h3 className="text-3xl font-bold font-sans text-gray-900 mb-5 border-b border-gray-200 pb-4">
              Send a Message
            </h3>
            {['name', 'email', 'message'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm uppercase tracking-widest font-bold text-gray-700 mb-2">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                {field === 'message' ? (
                  <textarea
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    rows="4" // Reduced rows from 5 to 4
                    className="text-gray-900 w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 transition-colors resize-y"
                    required
                  />
                ) : (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="text-gray-900 w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                    required
                  />
                )}
              </div>
            ))}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-amber-500 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg uppercase tracking-wider hover:bg-amber-400 transition-colors duration-200 shadow-xl focus:ring-4 focus:ring-amber-300 focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={status === 'Sending...'}
            >
              {status === 'Sending...' ? 'Sending...' : 'Book Your Talent'}
            </motion.button>
            {status && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`text-center font-semibold text-lg py-3 rounded-lg ${
                  status.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}
              >
                {status}
              </motion.p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
