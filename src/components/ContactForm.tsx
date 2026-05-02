'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [status, setStatus] = useState<'' | 'sending' | 'success' | 'error'>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    // Mocking submission
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-20"
      >
        <h2 className="text-2xl font-light uppercase tracking-widest mb-4">Thank You</h2>
        <p className="text-white/50 tracking-widest uppercase text-sm">Your inquiry has been received. We will be in touch shortly.</p>
        <button 
          onClick={() => setStatus('')}
          className="mt-12 text-xs uppercase tracking-[0.3em] border-b border-white/30 pb-1 hover:border-white transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-12 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative group">
          <input
            type="text"
            required
            placeholder="Name"
            className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-white transition-colors placeholder:text-white/20 uppercase text-xs tracking-widest"
          />
        </div>
        <div className="relative group">
          <input
            type="email"
            required
            placeholder="Email"
            className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-white transition-colors placeholder:text-white/20 uppercase text-xs tracking-widest"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative group">
          <select
            required
            className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-white transition-colors appearance-none uppercase text-xs tracking-widest text-white/50 focus:text-white"
          >
            <option value="" className="bg-black">Event Type</option>
            <option value="wedding" className="bg-black">Wedding Photography</option>
            <option value="preshoot" className="bg-black">Preshoot Session</option>
            <option value="bridal" className="bg-black">Bridal / Model Shoot</option>
            <option value="baby" className="bg-black">Baby / Birthday Shoot</option>
            <option value="hotel" className="bg-black">Hotel Promotion</option>
          </select>
          <div className="absolute right-0 bottom-4 pointer-events-none text-white/20">↓</div>
        </div>
        <div className="relative group">
          <input
            type="date"
            required
            className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-white transition-colors uppercase text-xs tracking-widest text-white/50 focus:text-white"
          />
        </div>
      </div>

      <div className="relative group">
        <textarea
          required
          rows={4}
          placeholder="Message"
          className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-white transition-colors placeholder:text-white/20 uppercase text-xs tracking-widest resize-none"
        ></textarea>
      </div>

      <div className="pt-12 flex justify-center">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="group relative px-12 py-4 overflow-hidden border border-white/20 transition-colors hover:border-white"
        >
          <span className="relative z-10 text-xs uppercase tracking-[0.4em]">
            {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
          </span>
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ x: '-101%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
          <style jsx>{`
            button:hover span {
              color: black;
            }
          `}</style>
        </button>
      </div>
    </form>
  );
}
