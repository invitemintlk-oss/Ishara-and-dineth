import React from 'react';
import { motion } from 'motion/react';
import { MapPin, CalendarHeart } from 'lucide-react';
import { WEDDING } from '../weddingConfig';

export const HomecomingDetails: React.FC = () => {
  const rows = [
    { label: 'Celebration', value: `${WEDDING.startTime} – ${WEDDING.endTime}` },
    { label: 'Poruwa Ceremony', value: WEDDING.poruwaTime },
  ];

  return (
    <section id="details" className="w-full py-24 relative overflow-hidden bg-[#022c22]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/ChatGPT Image Aug 4, 2026, 02_12_09 AM.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#022c22] via-transparent to-[#022c22]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1/2 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10 flex flex-col items-center">
        <motion.div
          className="flex flex-col items-center space-y-4 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl text-[#D4AF37] drop-shadow-md" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Celebration
          </h2>
          <div className="flex items-center space-x-4">
            <div className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/70" />
            <p className="text-[10px] md:text-xs text-white/90 font-sans tracking-[0.4em] uppercase">Join us in celebration</p>
            <div className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/70" />
          </div>
        </motion.div>

        <motion.div
          className="relative w-full max-w-lg bg-black/40 backdrop-blur-md rounded-t-[140px] rounded-b-[40px] border border-[#D4AF37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 md:p-14 flex flex-col items-center text-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="absolute inset-4 border-[1px] border-[#D4AF37]/20 rounded-t-[125px] rounded-b-[25px] pointer-events-none" />

          <h3 className="text-3xl md:text-4xl text-[#D4AF37] mb-8 mt-4" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Wedding Ceremony
          </h3>

          <CalendarHeart className="w-8 h-8 md:w-10 md:h-10 text-[#D4AF37] mb-4 opacity-90 drop-shadow-md" strokeWidth={1} />

          <div className="space-y-2 mb-10">
            <p className="text-[11px] md:text-xs text-white/70 tracking-[0.3em] uppercase">{WEDDING.dayName}</p>
            <p className="text-lg md:text-2xl font-serif text-[#D4AF37] tracking-widest uppercase">{WEDDING.dateLong}</p>
          </div>

          <div className="w-full max-w-sm mx-auto space-y-6 mb-12">
            {rows.map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-4 text-white border-b border-[#D4AF37]/20 pb-4">
                <span className="font-sans text-xs md:text-sm tracking-widest uppercase opacity-90 text-left">{row.label}</span>
                <span className="font-serif text-[#D4AF37] text-base md:text-xl text-right whitespace-nowrap">{row.value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center space-y-3">
            <MapPin className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37] mb-2 opacity-90" strokeWidth={1} />
            <p className="text-lg md:text-xl font-serif text-white tracking-wide">{WEDDING.venue.name}</p>
            <p className="text-[11px] md:text-sm text-white/60 tracking-widest uppercase mb-2">{WEDDING.venue.city}</p>
            <a
              href={WEDDING.venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-2.5 mt-2 border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] rounded-full text-[#D4AF37] transition-all duration-300"
            >
              <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase">Live Location</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
