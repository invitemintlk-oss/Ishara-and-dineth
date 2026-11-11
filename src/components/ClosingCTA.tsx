import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, List } from 'lucide-react';

export const ClosingCTA: React.FC = () => {
  const scrollToRSVP = () => {
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDetails = () => {
    document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900 via-red-800 to-black"></div>
      </div>
      
      <div className="relative z-10 container px-4 md:px-6 mx-auto text-center">
        <motion.div 
          className="max-w-4xl mx-auto text-white space-y-8 font-sans"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Heart className="h-8 w-8 text-[#D4AF37]" strokeWidth={1.5} />
            <Sparkles className="h-6 w-6 text-[#D4AF37]" strokeWidth={1.5} />
            <Heart className="h-8 w-8 text-[#D4AF37]" strokeWidth={1.5} />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display leading-tight text-white" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Thank you for being part of our story.
          </h2>
          
          <p className="text-xl md:text-2xl leading-relaxed opacity-90 tracking-wide max-w-3xl mx-auto mt-6">
            Your love, blessings, and presence are the greatest gifts we could receive. We look forward to celebrating this special day with you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button 
              onClick={scrollToRSVP}
              className="inline-flex items-center justify-center whitespace-nowrap h-14 bg-black text-[#D4AF37] hover:bg-zinc-900 rounded-full px-10 py-6 text-lg font-medium shadow-2xl transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 tracking-widest uppercase"
            >
              <Heart className="mr-3 h-5 w-5" />
              RSVP with Love
            </button>
            <button 
              onClick={scrollToDetails}
              className="inline-flex items-center justify-center whitespace-nowrap h-14 border-2 border-white text-white hover:bg-white/10 rounded-full px-10 py-6 text-lg font-medium backdrop-blur-sm transform hover:-translate-y-1 transition-all duration-300 tracking-widest uppercase"
            >
              <List className="mr-3 h-5 w-5" />
              Wedding Details
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
