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
            <p className="text-sm tracking-widest uppercase text-white/50">
              Timeless Elegance in Every Frame
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white mb-2">Connect</h4>
            <div className="flex items-center space-x-6 text-sm tracking-widest uppercase">
              <Link 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
              >
                FB
              </Link>
              <Link 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
              >
                IG
              </Link>
              <a 
                href="mailto:contact@example.com" 
                className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
              >
                MAIL
              </a>
            </div>
          </div>

          <div className="flex flex-col md:items-end space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white mb-2">Inquiries</h4>
            <Link 
              href="#contact" 
              className="text-sm tracking-widest uppercase hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
            >
              Book a Session
            </Link>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/5 flex flex-col items-center space-y-4">
          <p className="text-xs tracking-[0.15em] uppercase text-white/40">
            &copy; 2026 Dilshan Jayawardhana Photography & Cinematography. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
