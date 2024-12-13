import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageCircle } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value.trimStart() }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const { VITE_APP_EMAILJS_SERVICE_ID, VITE_APP_EMAILJS_TEMPLATE_ID, VITE_APP_EMAILJS_PUBLIC_KEY } = import.meta.env;

    if (!VITE_APP_EMAILJS_SERVICE_ID || !VITE_APP_EMAILJS_TEMPLATE_ID || !VITE_APP_EMAILJS_PUBLIC_KEY) {
      toast.error('Service is not properly configured.');
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        VITE_APP_EMAILJS_SERVICE_ID,
        VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          to_name: 'Vasini Singh',
          from_email: form.email.trim(),
          to_email: 'tovasinisingh@gmail.com',
          message: form.message.trim(),
        },
        VITE_APP_EMAILJS_PUBLIC_KEY
      );
      
      toast.success('Message sent successfully! 🎉', {
        duration: 4000,
        position: 'top-right',
      });
      
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error("Couldn't send message. Please try again.", {
        duration: 4000,
        position: 'top-right',
      });
      console.error('Failed to send message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center py-20 px-5" 
      id="contact"
    >
      <Toaster />
      <motion.div 
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        className="w-full max-w-md bg-gray-900 text-white rounded-2xl shadow-2xl p-8"
      >
        <h3 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-3">
          <Send className="text-indigo-500" />
          Let's Talk
        </h3>
        <p className="text-lg text-gray-400 mb-8 text-center">
          Got a project in mind? Reach out and let's make it happen!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.label 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="block"
          >
            <span className="block text-sm font-medium text-gray-300 flex items-center gap-2">
              <User className="w-4 h-4 text-indigo-500" /> Full Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              placeholder="Ex: Shardendu Mishra"
            />
          </motion.label>

          <motion.label 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="block"
          >
            <span className="block text-sm font-medium text-gray-300 flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-500" /> Email address
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              placeholder="Ex: shardendumishra01@gmail.com"
            />
          </motion.label>

          <motion.label 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="block"
          >
            <span className="block text-sm font-medium text-gray-300 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-indigo-500" /> Your message
            </span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="mt-1 block w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              placeholder="Write your thoughts here..."
            />
          </motion.label>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md bg-indigo-600 text-white font-medium flex items-center justify-center gap-2 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'} transition-all`}
          >
            {loading ? (
              <>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;