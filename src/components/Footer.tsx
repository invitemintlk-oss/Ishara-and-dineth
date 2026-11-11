import React from 'react';
import { Heart } from 'lucide-react';
import { WEDDING } from '../weddingConfig';

export const Footer: React.FC = () => {
  const dateText = WEDDING.dateLong;
  const locationText = `${WEDDING.venue.name}, ${WEDDING.venue.city}`;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-16 bg-[#0a040b] text-white border-t border-[#D4AF37]/20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1/2 bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Heart className="h-8 w-8 text-[#D4AF37] opacity-90 fill-transparent" strokeWidth={1} />
              <span className="text-4xl lg:text-5xl font-display text-[#D4AF37] drop-shadow-sm" style={{ fontFamily: "'Great Vibes', cursive" }}>{WEDDING.groom.name[0]} &amp; {WEDDING.bride.name[0]}</span>
            </div>
            <p className="text-white/70 leading-[1.8] font-serif text-justify tracking-wide text-sm md:text-base pr-4">
              Thank you for visiting our wedding website and being part of our love story. The honor of your presence would mean the world to us.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-sans font-semibold text-[#D4AF37] uppercase tracking-[0.2em]">Quick Links</h3>
            <div className="w-8 h-[1px] bg-[#D4AF37]/40 mb-4"></div>
            <ul className="space-y-4">
              <li>
                <button onClick={() => scrollToSection('details')} className="text-white/70 hover:text-[#D4AF37] transition-colors font-sans tracking-[0.1em] text-sm uppercase">
                  Details
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('rsvp')} className="text-white/70 hover:text-[#D4AF37] transition-colors font-sans tracking-[0.1em] text-sm uppercase">
                  RSVP
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('wishes')} className="text-white/70 hover:text-[#D4AF37] transition-colors font-sans tracking-[0.1em] text-sm uppercase">
                  Wishes
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-sans font-semibold text-[#D4AF37] uppercase tracking-[0.2em]">Wedding Details</h3>
            <div className="w-8 h-[1px] bg-[#D4AF37]/40 mb-4"></div>
            <div className="space-y-3 text-white/70 font-sans tracking-[0.1em] text-sm">
              <p>{dateText}</p>
              <p>{locationText}</p>
              <p className="text-[#D4AF37] italic mt-4 font-serif tracking-widest text-xs opacity-80">{WEDDING.hashtag}</p>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-[#D4AF37]/20 text-center flex flex-col items-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/50"></div>
            <span className="text-white/50 font-sans tracking-[0.3em] uppercase text-[10px]">Made with love</span>
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/50"></div>
          </div>
          <p className="text-[#D4AF37]/70 text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase">
            © 2026 {WEDDING.coupleNames}'s Wedding
          </p>
          <p className="text-white/40 text-[10px] mt-4 font-sans tracking-[0.1em]">
            Want a beautiful wedding website like this? Create yours with <a target="_blank" rel="noreferrer" className="text-[#D4AF37] hover:text-white transition-colors underline underline-offset-2" href="https://wa.me/94707819074">invitemint</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
