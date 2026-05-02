'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white/70 py-20 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-16">
          <div className="space-y-6">
            <h3 className="text-xl font-light uppercase tracking-[0.2em] text-white">
              Dilshan Jayawardhana
            </h3>
            <p className="text-[10px] tracking-widest uppercase text-white/40 max-w-xs">
              We are Capturing the moments of today that will wow your hearts tomorrow.
            </p>
            <div className="text-[10px] tracking-[0.2em] uppercase text-white/30 space-y-1">
              <p>Dambulla, Sri Lanka</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white">Connect</h4>
            <div className="flex flex-col items-center space-y-3 text-[10px] tracking-[0.3em] uppercase">
              <a href="tel:0762697606" className="hover:text-white transition-colors">076 269 7606</a>
              <a href="tel:0764620385" className="hover:text-white transition-colors">076 462 0385</a>
              <a href="mailto:dilshanjayawardhanaphotography@gmail.com" className="hover:text-white transition-colors">Email Us</a>
            </div>
          </div>

          <div className="flex flex-col md:items-end space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white">Follow</h4>
            <div className="flex items-center space-x-6 text-[10px] tracking-[0.3em] uppercase">
              <Link href="https://facebook.com" target="_blank" className="hover:text-white">FB</Link>
              <Link href="https://instagram.com" target="_blank" className="hover:text-white">IG</Link>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-[9px] tracking-[0.2em] uppercase text-white/20">
            &copy; 2026 Dilshan Jayawardhana Photography & Cinematography. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
