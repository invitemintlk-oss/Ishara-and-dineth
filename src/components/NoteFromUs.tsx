import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { WEDDING } from '../weddingConfig';

export const NoteFromUs: React.FC = () => {
  return (
    <section aria-label="A note from us" id="note" className="relative w-full py-24 overflow-hidden bg-[#022c22]">
      
      {/* Background Image with Faded Edges */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/ChatGPT Image Aug 4, 2026, 02_12_09 AM.png')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#022c22] via-transparent to-[#022c22]"></div>
      
      {/* Subtle Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-3/4 bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10 flex justify-center">
        <motion.div 
          className="w-full max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Elegant Card Container */}
          <div className="relative bg-black/40 backdrop-blur-md p-8 sm:p-14 md:p-20 rounded-t-[120px] rounded-b-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#D4AF37]/40 text-center overflow-hidden">
            
            {/* Decorative Inner Border */}
            <div className="absolute inset-4 sm:inset-6 border-[1px] border-[#D4AF37]/20 rounded-t-[100px] rounded-b-[25px] pointer-events-none"></div>

            {/* Top Accent */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/70"></div>
              <Heart className="w-5 h-5 text-[#D4AF37] opacity-90 fill-transparent" strokeWidth={1} />
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/70"></div>
            </div>
            
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-display text-[#D4AF37] mb-8 leading-tight drop-shadow-md" style={{ fontFamily: "'Great Vibes', cursive" }}>
              Our Hearts Are Full
            </h3>
            
            <div className="relative px-2 sm:px-8">
              <Sparkles className="absolute -top-4 -left-2 text-[#D4AF37] opacity-40 h-5 w-5" />
              <p className="text-white/80 leading-[2.2] text-center text-sm md:text-base lg:text-lg font-serif tracking-wide drop-shadow-sm">
                Our wedding day would not be complete without the people who have been part of our journey. Thank you for celebrating this beautiful beginning with us and for surrounding us with your love and blessings.<br /><br />
                We cannot wait to create memories that we’ll cherish for a lifetime.
              </p>
              <Sparkles className="absolute -bottom-4 -right-2 text-[#D4AF37] opacity-40 h-5 w-5" />
            </div>
            
            <div className="mt-14 space-y-4">
              <p className="text-white/60 font-sans tracking-[0.3em] uppercase text-[10px] md:text-xs">
                With love always
              </p>
              <p className="font-display text-[#D4AF37] text-4xl md:text-5xl drop-shadow-sm" style={{ fontFamily: "'Great Vibes', cursive" }}>
                {WEDDING.coupleNames}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
