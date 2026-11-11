import React, { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface CountdownProps {
  targetDate: Date;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const days = Math.max(0, differenceInDays(targetDate, now));
      const hours = Math.max(0, differenceInHours(targetDate, now) % 24);
      const minutes = Math.max(0, differenceInMinutes(targetDate, now) % 60);
      const seconds = Math.max(0, differenceInSeconds(targetDate, now) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section 
      className="w-full py-24 overflow-hidden relative"
      style={{ 
        backgroundImage: 'url("/ChatGPT Image Aug 4, 2026, 01_44_43 AM.png")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="absolute inset-0 bg-[#022c22]/40"></div>
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-12 text-center">
          
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-display text-[#D4AF37] leading-tight" style={{ fontFamily: "'Great Vibes', cursive", textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
              Counting Down to<br/>Forever
            </h2>
            <div className="flex items-center justify-center space-x-3 text-[#D4AF37] mt-4">
              <Heart className="h-4 w-4 md:h-5 md:w-5 text-[#D4AF37]" strokeWidth={1.5} />
              <span className="text-[10px] md:text-sm font-sans text-white font-medium uppercase tracking-[0.2em] md:tracking-[0.3em] drop-shadow-md">
                Our special day is almost here
              </span>
              <Heart className="h-4 w-4 md:h-5 md:w-5 text-[#D4AF37]" strokeWidth={1.5} />
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-4 md:gap-8 max-w-md md:max-w-2xl w-full pt-8 mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, i) => (
              <div key={item.label} className="flex flex-col items-center justify-center p-6 w-full aspect-[3/4] max-h-[280px] bg-[#022c22]/80 backdrop-blur-sm rounded-t-[40%] rounded-b-[40%] shadow-[0_10px_30px_rgba(0,0,0,0.8)] border-[1.5px] border-[#D4AF37]/60 mx-auto transition-transform hover:scale-105 duration-300">
                <div className="text-6xl md:text-8xl font-serif text-[#D4AF37] mb-2 drop-shadow-md" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-[10px] md:text-xs text-white font-medium font-sans uppercase tracking-[0.2em] mt-2 opacity-90">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
