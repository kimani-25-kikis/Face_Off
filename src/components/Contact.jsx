// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp, FaPhoneAlt, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const CONTACT_INFO = [
    { icon: FaMapMarkerAlt, label: 'Headquarters', value: 'Nairobi, Kenya', href: '#' },
    { icon: FaEnvelope, label: 'Email', value: 'faceoffmodelncastmngt.info@gmail.com', href: 'mailto:faceoffmodelncastmngt.info@gmail.com' },
    { icon: FaPhoneAlt, label: 'Phone/WhatsApp', value: '+254741457909', href: 'tel:+254741457909' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      console.log('Form Submitted:', formData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('Message sent successfully! We will be in touch soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please check your network and try again.');
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-serif font-extrabold mb-4 text-center tracking-tight text-white"
        >
          Let's Start Your Campaign
        </motion.h2>
        <p className="text-lg text-gold-400 text-center mb-16 max-w-2xl mx-auto">
          Reach out to discuss your casting needs, project scope, or agency partnerships.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-10 p-8 lg:p-12 rounded-xl bg-gray-800 shadow-xl"
          >
            <h3 className="text-3xl font-bold font-sans text-gold-500 mb-6 border-b border-gray-700 pb-4">
              Our Details
            </h3>
            {CONTACT_INFO.map((item, index) => (
              <a key={index} href={item.href} className="flex items-start space-x-4 group">
                <item.icon className="text-3xl text-gold-600 flex-shrink-0 mt-1 group-hover:text-gold-400 transition-colors duration-300" />
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
                  whileHover={{ scale: 1.2 }}
                  className="text-3xl text-white hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  href="https://wa.me/254741457909"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-3xl text-white hover:text-green-500 transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </motion.a>
              </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
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
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gold-500 transition-colors resize-y"
                    required
                    autoComplete="off"
                  ></textarea>
                ) : (
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gold-500 transition-colors"
                    required
                    autoComplete="off"
                  />
                )}
              </div>
            ))}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gold-600 text-gray-900 px-6 py-4 rounded-lg font-bold text-lg uppercase tracking-wider hover:bg-gold-500 transition-colors duration-200 shadow-xl focus:ring-4 focus:ring-gold-300 focus:ring-opacity-50"
              disabled={status === 'Sending...'}
            >
              {status === 'Sending...' ? 'Sending...' : 'Book Your Talent'}
            </motion.button>
            {status && status !== 'Sending...' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`text-center font-semibold text-lg py-2 rounded ${
                  status.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}
              >
                {status}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;