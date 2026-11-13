import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { WEDDING, getGuestFromUrl } from '../weddingConfig';

export const HeroContent: React.FC = () => {
  const { displayName } = getGuestFromUrl();

  return (
    <section aria-label="Hero" className="relative w-full h-[100dvh] overflow-hidden flex items-center justify-center">
      {/* Background photo x */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={WEDDING.images.hero}
          alt={WEDDING.coupleNames}
          className="h-full w-full object-cover object-center"
          loading="eager"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/70" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-4">
        {/* We're Getting Married pill */}
        <motion.div
          className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-[40px] border border-black/30 bg-white/40 backdrop-blur-sm mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-sans text-black font-medium">
            We're Getting Married!
          </span>
        </motion.div>

        {/* Names */}
        <motion.div
          className="flex flex-col items-center gap-1 sm:gap-3 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl text-black drop-shadow-[0_2px_10px_rgba(255,255,255,0.9)] leading-tight" style={{ fontFamily: "'Great Vibes', cursive" }}>
            {WEDDING.groom.name}
          </h1>
          <span className="text-4xl sm:text-5xl font-serif italic text-[#D4AF37] drop-shadow-lg">&amp;</span>
          <h1 className="text-6xl sm:text-7xl md:text-8xl text-black drop-shadow-[0_2px_10px_rgba(255,255,255,0.9)] leading-tight" style={{ fontFamily: "'Great Vibes', cursive" }}>
            {WEDDING.bride.name}
          </h1>

          <p className="text-sm sm:text-lg md:text-xl font-sans tracking-[0.1em] sm:tracking-[0.15em] text-black uppercase mt-8 sm:mt-10 drop-shadow-md">
            {WEDDING.dayName}, {WEDDING.dateShort}
          </p>
          <p className="text-[11px] sm:text-sm font-sans tracking-[0.25em] text-black/80 uppercase drop-shadow-md">
            {WEDDING.venue.name} · {WEDDING.venue.city}
          </p>
        </motion.div>

        {/* Personalized invitation */}
        {displayName && (
          <motion.div
            className="mt-8 sm:mt-10 max-w-md text-center bg-white/50 px-6 sm:px-8 py-4 rounded-2xl backdrop-blur-sm border border-[#D4AF37]/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <p className="font-serif text-sm sm:text-base text-black/90 leading-relaxed">
              We cordially invite{' '}
              <span className="text-[#7A1F2B] font-bold text-xl sm:text-2xl italic whitespace-nowrap">{displayName}</span>{' '}
              to celebrate our special day with us.
            </p>
          </motion.div>
        )}
      </div>

      {/* Swipe up */}
      <motion.div
        className="absolute bottom-8 inset-x-0 z-10 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex flex-col items-center text-center animate-bounce">
          <p className="text-[11px] sm:text-xs font-sans tracking-widest text-black mb-2 opacity-90">Swipe up for more</p>
          <ChevronDown className="h-6 w-6 text-black opacity-90" />
        </div>
      </motion.div>
    </section>
  );
};
