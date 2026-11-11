import React from 'react';
import { motion } from 'motion/react';

export const Celebration: React.FC = () => {
  return (
    <section aria-label="Celebration details" id="celebration" className="relative pt-20 pb-4 sm:pt-28 sm:pb-8 px-6 overflow-hidden bg-[#FFFFF0]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40" style={{ background: "linear-gradient(180deg, rgba(212,175,55,0.07) 0%, transparent 100%)" }} aria-hidden="true" />
      
      <div className="relative mx-auto max-w-4xl">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl" style={{ color: "#AA8000", textShadow: "rgba(212, 175, 55, 0.15) 0px 2px 10px" }}>
            The Celebration
          </h2>
          <div className="flex items-center justify-center mt-4" aria-hidden="true">
            <svg className="w-full max-w-[220px] sm:max-w-sm md:max-w-md" viewBox="0 0 220 24" preserveAspectRatio="xMidYMid meet" fill="none">
              <line x1="0" y1="12" x2="86" y2="12" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.55" />
              <polygon points="89,12 92.5,8.5 96,12 92.5,15.5" fill="#D4AF37" fillOpacity="0.65" />
              <ellipse cx="110" cy="12" rx="2.5" ry="8.5" fill="#D4AF37" fillOpacity="0.3" />
              <ellipse cx="110" cy="12" rx="8.5" ry="2.5" fill="#D4AF37" fillOpacity="0.3" />
              <circle cx="110" cy="12" r="3" fill="#D4AF37" fillOpacity="0.9" />
              <circle cx="110" cy="12" r="6" fill="none" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.45" />
              <polygon points="124,12 127.5,8.5 131,12 127.5,15.5" fill="#D4AF37" fillOpacity="0.65" />
              <line x1="134" y1="12" x2="220" y2="12" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.55" />
            </svg>
          </div>
        </motion.div>

        <motion.div 
          className="mb-14 sm:mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative overflow-hidden mx-auto max-w-2xl" style={{ border: "1.5px solid rgba(212,175,55,0.38)", boxShadow: "0 0 0 5px rgba(212,175,55,0.05), 0 24px 48px -16px rgba(0,0,0,0.65)" }}>
            <div className="aspect-[2.15/1] min-h-[10rem] sm:min-h-[13rem] max-h-[20rem] w-full">
              <img src="/1234.jpg" alt="Wedding venue" className="h-full w-full object-cover" loading="lazy" decoding="async" style={{ filter: "brightness(0.84) contrast(1.04)" }} />
            </div>
            {/* Corner accents */}
            <div className="absolute" style={{ width: "18px", height: "18px", top: "7px", bottom: "auto", left: "7px", right: "auto", borderTop: "1.5px solid #E8C547", borderLeft: "1.5px solid #E8C547" }} aria-hidden="true" />
            <div className="absolute" style={{ width: "18px", height: "18px", top: "7px", bottom: "auto", left: "auto", right: "7px", borderTop: "1.5px solid #E8C547", borderRight: "1.5px solid #E8C547" }} aria-hidden="true" />
            <div className="absolute" style={{ width: "18px", height: "18px", top: "auto", bottom: "7px", left: "7px", right: "auto", borderBottom: "1.5px solid #E8C547", borderLeft: "1.5px solid #E8C547" }} aria-hidden="true" />
            <div className="absolute" style={{ width: "18px", height: "18px", top: "auto", bottom: "7px", left: "auto", right: "7px", borderBottom: "1.5px solid #E8C547", borderRight: "1.5px solid #E8C547" }} aria-hidden="true" />
          </div>
          <p className="mt-4 text-center text-[9px] font-medium uppercase tracking-[0.45em] font-sans" style={{ color: "#AA8000" }}>Where it unfolds</p>
        </motion.div>

        <div className="max-w-xl mx-auto mt-8">
          <motion.div 
            className="relative p-7 sm:p-9 text-center" 
            style={{ background: "rgba(212,175,55,0.05)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", border: "1px solid rgba(212, 175, 55, 0.4)", boxShadow: "rgba(232, 197, 71, 0.1) 0px 1px 0px inset, rgba(255, 255, 255, 0.5) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.05) 0px 8px 32px -8px" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute" style={{ width: "14px", height: "14px", top: "-1px", left: "-1px", borderTop: "1.5px solid #D4AF37", borderLeft: "1.5px solid #D4AF37" }} aria-hidden="true" />
            <div className="absolute" style={{ width: "14px", height: "14px", top: "-1px", right: "-1px", borderTop: "1.5px solid #D4AF37", borderRight: "1.5px solid #D4AF37" }} aria-hidden="true" />
            <div className="absolute" style={{ width: "14px", height: "14px", bottom: "-1px", left: "-1px", borderBottom: "1.5px solid #D4AF37", borderLeft: "1.5px solid #D4AF37" }} aria-hidden="true" />
            <div className="absolute" style={{ width: "14px", height: "14px", bottom: "-1px", right: "-1px", borderBottom: "1.5px solid #D4AF37", borderRight: "1.5px solid #D4AF37" }} aria-hidden="true" />
            
            <h3 className="font-display text-2xl sm:text-3xl font-light italic mb-2" style={{ color: "#AA8000" }}>The Celebration</h3>
            <div className="h-px w-10 mx-auto mb-5" style={{ background: "linear-gradient(90deg, transparent, #D4AF3788, transparent)" }} />
            <div className="space-y-2.5 text-sm font-light leading-relaxed font-serif tracking-wide" style={{ color: "#444444" }}>
              <p>Wednesday, 12<sup>th</sup> of August 2026</p>
              <p>From 9.00 a.m. to 4.15 p.m.</p>
              <p className="text-xs text-[#AA8000]">(Poruwa Ceremony at 9.07 a.m.)</p>
              <p className="mt-2">Lotus Ballroom - Asliya Golden Cassandra</p>
              <p className="text-xs opacity-80">Katupitiya Road, Dambokka, Kurunegala.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
