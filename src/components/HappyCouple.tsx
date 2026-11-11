import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { WEDDING } from '../weddingConfig';

export const HappyCouple: React.FC = () => {
  return (
    <section id="couple" className="w-full py-24 bg-[#022c22] relative overflow-hidden">
      {/* Soft blurred backdrop from photo y */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-2xl opacity-30"
        style={{ backgroundImage: `url('${WEDDING.images.couple}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#022c22] via-[#022c22]/70 to-[#022c22]" />

      <div className="container px-4 md:px-8 mx-auto relative z-10 flex flex-col items-center max-w-5xl">
        <motion.div
          className="flex flex-col items-center space-y-4 text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl text-[#D4AF37] drop-shadow-md" style={{ fontFamily: "'Great Vibes', cursive" }}>
            The Happy Couple
          </h2>
          <div className="flex items-center space-x-4">
            <div className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/70" />
            <Heart className="w-4 h-4 text-[#D4AF37]" strokeWidth={1.5} />
            <div className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/70" />
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 w-full">
          {/* Arched photo y */}
          <motion.div
            className="relative w-full max-w-[340px] md:w-1/2 shrink-0"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="absolute -inset-3 border border-[#D4AF37]/50 rounded-t-[200px] rounded-b-[30px]" />
            <div className="relative overflow-hidden rounded-t-[190px] rounded-b-[24px] shadow-[0_25px_60px_rgba(0,0,0,0.6)] aspect-[2/3]">
              <img
                src={WEDDING.images.couple}
                alt={WEDDING.coupleNames}
                className="w-full h-full object-cover object-[center_60%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>

          {/* Names + parents */}
          <motion.div
            className="w-full md:w-1/2 text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="font-serif italic text-white/80 text-sm md:text-base leading-relaxed px-2">
              Together with their families, joyfully invite you to celebrate their marriage
            </p>

            <div className="space-y-2">
              <h3 className="text-6xl md:text-7xl text-white drop-shadow-lg" style={{ fontFamily: "'Great Vibes', cursive" }}>
                {WEDDING.groom.name}
              </h3>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/60 font-sans">Beloved son of</p>
              <p className="font-serif text-lg md:text-xl text-[#D4AF37] tracking-wide">
                Mr. &amp; Mrs. {WEDDING.groom.family}
              </p>
            </div>

            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#D4AF37]/70" />
              <span className="text-4xl font-serif italic text-[#D4AF37]">&amp;</span>
              <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#D4AF37]/70" />
            </div>

            <div className="space-y-2">
              <h3 className="text-6xl md:text-7xl text-white drop-shadow-lg" style={{ fontFamily: "'Great Vibes', cursive" }}>
                {WEDDING.bride.name}
              </h3>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/60 font-sans">Beloved daughter of</p>
              <p className="font-serif text-lg md:text-xl text-[#D4AF37] tracking-wide">
                Mr. &amp; Mrs. {WEDDING.bride.family}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
