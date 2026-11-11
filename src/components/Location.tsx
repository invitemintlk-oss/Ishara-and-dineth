import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Compass, Map } from 'lucide-react';

export const Location: React.FC = () => {
   const venueAddress = "Katupitiya Road, Dambokka, Kurunegala";
  const mapUrl = `https://maps.google.com/maps?q=Asliya%20Golden%20Cassandra,%20Kurunegala&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const liveLocationUrl = "https://maps.app.goo.gl/nc952KAvT9H34fgw9";

  return (
    <div className="max-w-[85rem] mx-auto px-6 relative py-12">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-brand-primary/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="mt-10 flex justify-center">
        {/* Right Stunning Map Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-5xl h-[500px] sm:h-[600px] lg:h-[700px] relative z-10"
        >
          <div className="absolute -inset-4 sm:-inset-6 border-[2px] border-brand-gold/30 rounded-[3rem] -z-10 translate-x-2 sm:translate-x-4 translate-y-2 sm:translate-y-4" />

          <div className="w-full h-full rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[8px] sm:border-[12px] border-white relative group/map">
            {/* Map Placeholder Masking for premium feel */}
            <div className="absolute inset-0 bg-brand-gold/10 mix-blend-multiply pointer-events-none z-20 group-hover/map:opacity-0 transition-opacity duration-1000" />

            <iframe
              title="Marino Beach Location"
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.1) saturate(1.2)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover/map:grayscale-0 transition-all duration-1000 ease-in-out"
            />

            {/* Decorative Location Pin Overlay */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-brand-gold/30 shadow-lg flex items-center gap-2 pointer-events-none z-30">
              <Map className="w-4 h-4 text-brand-gold-deep animate-pulse" />
              <span className="text-[9px] uppercase tracking-widest font-bold text-stone-600">Live Map</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
