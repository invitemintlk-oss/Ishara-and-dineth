import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const ColorPalette: React.FC = () => {
  return (
    <section id="color-palette" className="w-full py-24 relative overflow-hidden bg-[#022c22]">
      {/* Background Image with Faded Edges */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/ChatGPT Image Aug 4, 2026, 02_12_09 AM.png')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#022c22] via-transparent to-[#022c22]"></div>
      
      {/* Subtle Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-3/4 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div 
          className="flex flex-col items-center space-y-4 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl font-display text-[#D4AF37] drop-shadow-md" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Color Palette
          </h2>
          <div className="flex items-center space-x-4">
            <div className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/70"></div>
            <Sparkles className="w-4 h-4 text-[#D4AF37] opacity-80" />
            <div className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/70"></div>
          </div>
          <p className="text-[11px] md:text-sm text-white/70 font-sans tracking-[0.2em] uppercase mt-6 max-w-2xl px-4 leading-relaxed">
            We kindly request our guests to dress in our chosen colors<br className="hidden sm:block" /> to create a beautiful aesthetic for our special day
          </p>
        </motion.div>

        {/* Elegant Image Container */}
        <div className="flex justify-center w-full max-w-5xl mx-auto px-4">
          <motion.div 
            className="w-full relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[40px] overflow-hidden bg-black/40 backdrop-blur-md p-4 md:p-6"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Elegant Border Wrapper */}
            <div className="absolute inset-0 border border-[#D4AF37]/30 rounded-[40px] pointer-events-none m-2"></div>
            
            <div className="relative z-10 w-full overflow-hidden rounded-[28px] border border-[#D4AF37]/20 shadow-inner">
              <img 
                src="/colorpalette_new.jpeg" 
                alt="Wedding Color Palette" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
