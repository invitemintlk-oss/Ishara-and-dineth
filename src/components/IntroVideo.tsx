import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroVideoProps {
  onComplete: () => void;
}

const images = [
  '/2026.07.16-20260612T100209Z-3-001/my/RWP00532.jpg',
  '/2026.07.16-20260612T100209Z-3-001/my/RWP00717.jpg',
  '/2026.07.16-20260612T100209Z-3-001/my/RWP00916.jpg',
  '/2026.07.16-20260612T100209Z-3-001/my/DSC01583.jpg',
  '/2026.07.16-20260612T100209Z-3-001/my/RWP01402.jpg',
  '/2026.07.16-20260612T100209Z-3-001/my/RWP01348.jpg',
];

export const IntroVideo: React.FC<IntroVideoProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'enter' | 'exit'>('enter');

  useEffect(() => {
    // Images fall one by one. Hold them for a bit.
    const exitTimer = setTimeout(() => {
      setPhase('exit');
    }, 4500);

    // Call onComplete after exit animation finishes
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[200] bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {images.map((src, index) => {
          const rotations = [-12, 8, -6, 10, -8, 4];
          const xOffsets = [-50, 40, -20, 30, -30, 10];
          
          return (
            <motion.div
              key={src}
              initial={{ y: "-120vh", rotate: rotations[index], x: xOffsets[index], opacity: 1 }}
              animate={{ 
                y: phase === 'enter' ? 0 : "120vh", 
                rotate: rotations[index], 
                x: xOffsets[index] 
              }}
              transition={{
                y: phase === 'enter' 
                  ? { delay: index * 0.4, duration: 1.2, type: "spring", bounce: 0.3 }
                  : { duration: 1, ease: "easeInOut" } // Exit simultaneously
              }}
              className="absolute w-64 h-80 sm:w-[28rem] sm:h-[36rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-white p-3 sm:p-5 pb-8 sm:pb-12 rounded-sm"
              style={{ zIndex: index + 10 }}
            >
              <div className="w-full h-full relative overflow-hidden rounded-sm">
                <img src={src} alt={`Intro ${index}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-80" />
      </div>


    </div>
  );
};

