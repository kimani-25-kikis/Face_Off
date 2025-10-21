import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    // Updated icons to use inline SVG components
    { icon: IconMapMarkerAlt, label: 'Headquarters', value: 'Nairobi, Kenya', href: '#' },
    { icon: IconEnvelope, label: 'Email', value: 'faceoffmodelncastmngt.info@gmail.com', href: 'mailto:faceoffmodelncastmngt.info@gmail.com' },
    { icon: IconPhoneAlt, label: 'Phone/WhatsApp', value: '+254741457909', href: 'tel:+254741457909' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // NOTE: External API calls (like axios) are not supported in this environment. 
    // The submission is simulated to show the success state and UX.

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all required fields.');
      setTimeout(() => setStatus(''), 3000); // Clear status after 3 seconds
      return;
    }

    setTimeout(() => {
      // Simulate successful submission
      console.log('Form submission simulated:', formData);
      setStatus('Message sent successfully! We will be in touch soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500); // 1.5 second simulation delay
  };

  return (
    <section 
      id="contact" 
      // Using bg-zinc-950 for consistency with other dark sections
      className="py-24 md:py-32 lg:py-40 bg-zinc-950 text-white relative z-10"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          // Consistent amber accent color for headings
          className="text-3xl md:text-3xl font-serif font-extrabold mb-4 text-center tracking-tight text-amber-400"
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
            className="space-y-10 p-8 lg:p-12 rounded-xl bg-gray-900 shadow-2xl border-t-4 border-amber-500/20"
          >
            <h3 className="text-2xl font-bold font-sans text-amber-500 mb-6 border-b border-gray-700 pb-4">
              Our Details
            </h3>
            {CONTACT_INFO.map((item, index) => (
              <a key={index} href={item.href} className="flex items-start space-x-4 group">
                {/* Icon usage (now inline SVG component) */}
                <item.icon className="text-3xl text-amber-500 flex-shrink-0 mt-1 group-hover:text-amber-400 transition-colors duration-300" />
                <div>
                  <p className="text-sm uppercase tracking-widest font-semibold text-gray-400">{item.label}</p>
                  <p className="text-xl font-serif text-white group-hover:underline">{item.value}</p>
                </div>
              </a>
            ))}
            <div className="pt-6 border-t border-gray-700">
              <p className="text-sm uppercase tracking-widest font-semibold text-gray-400 mb-4">Connect</p>
              <div className="flex space-x-6">
                <motion.a
                  href="https://instagram.com/face_of.modelncastmanagement"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-3xl text-white hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  {/* Icon usage (now inline SVG component) */}
                  <IconInstagram />
                </motion.a>
                <motion.a
                  href="https://wa.me/254741457909"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-3xl text-white hover:text-green-500 transition-colors"
                  aria-label="WhatsApp"
                >
                  {/* Icon usage (now inline SVG component) */}
                  <IconWhatsapp />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form Column */}
          <form
            onSubmit={handleSubmit}
            className="p-8 lg:p-12 rounded-xl bg-white shadow-2xl space-y-6"
          >
            <h3 className="text-3xl font-bold font-sans text-gray-900 mb-6 border-b border-gray-200 pb-4">
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
                    rows="5"
                    className="text-gray-900 w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 transition-colors resize-y"
                    required
                  />
                ) : (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="text-gray-900 w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                    required
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              // Adjusted to use amber colors for consistency
              className="w-full bg-amber-500 text-gray-900 px-6 py-4 rounded-lg font-bold text-lg uppercase tracking-wider hover:bg-amber-400 transition-colors duration-200 shadow-xl focus:ring-4 focus:ring-amber-300 focus:ring-opacity-50"
              disabled={status === 'Sending...'}
            >
              {status === 'Sending...' ? 'Sending...' : 'Book Your Talent'}
            </button>
            {status && status !== 'Sending...' && (
              <p
                className={`text-center font-semibold text-lg py-2 rounded ${
                  status.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
