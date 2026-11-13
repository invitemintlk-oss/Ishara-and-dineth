import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { WEDDING, getGuestFromUrl } from '../weddingConfig';

interface IntroOverlayProps {
  onEnter: () => void;
}

export const IntroOverlay: React.FC<IntroOverlayProps> = ({ onEnter }) => {
  const [opening, setOpening] = useState(false);
  const { displayName } = getGuestFromUrl();

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    // Let the zoom/fade play before revealing the invitation
    setTimeout(onEnter, 900);
  };

  return (
    <div className="fixed inset-0 z-50 w-full h-full overflow-hidden bg-[#022c22]">
      {/* Slow Ken Burns zoom on photo x */}
      <motion.img
        src={WEDDING.images.intro}
        alt={`${WEDDING.coupleNames}`}
        className="absolute inset-0 w-full h-full object-cover object-center"
        initial={{ scale: 1.15, opacity: 0 }}
        animate={opening ? { scale: 1.35, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={opening ? { duration: 0.9, ease: 'easeIn' } : { duration: 6, ease: 'easeOut' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/70 pointer-events-none" />

      {/* Gold frame */}
      <motion.div
        className="absolute inset-4 sm:inset-8 border border-[#D4AF37]/50 rounded-[28px] pointer-events-none"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: opening ? 0 : 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      <motion.div
        className="relative z-10 h-full w-full flex flex-col items-center justify-between text-center px-6 py-16 sm:py-20"
        animate={{ opacity: opening ? 0 : 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="space-y-3"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.45em] text-black/90 font-sans drop-shadow">
            The Wedding Of
          </p>
          <h1
            className="text-6xl sm:text-7xl md:text-8xl text-black drop-shadow-[0_2px_10px_rgba(255,255,255,0.9)] leading-tight"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            {WEDDING.groom.name}
            <span className="block text-4xl sm:text-5xl text-[#D4AF37] my-1">&amp;</span>
            {WEDDING.bride.name}
          </h1>
          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <Heart className="w-4 h-4 text-[#D4AF37]" strokeWidth={1.5} />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-black font-sans drop-shadow">
            {WEDDING.dateShort}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="flex flex-col items-center gap-5"
        >
          {displayName && (
            <div className="space-y-1">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-black font-semibold font-sans">
                Specially for
              </p>
              <p className="font-serif font-bold text-3xl sm:text-4xl text-[#7A1F2B] drop-shadow-[0_2px_8px_rgba(255,255,255,0.95)]">{displayName}</p>
            </div>
          )}
          <button
            onClick={handleOpen}
            className="relative font-sans px-10 py-4 bg-[#064e3b]/70 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/60 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-[#D4AF37] hover:text-black hover:scale-105 transition-all duration-300 uppercase tracking-[0.3em] text-xs sm:text-sm"
          >
            <span className="absolute inset-0 rounded-full border border-[#D4AF37]/40 animate-ping pointer-events-none" />
            Open Invitation
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};
