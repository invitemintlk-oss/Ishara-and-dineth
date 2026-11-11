import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { FloatingPetals } from './components/FloatingPetals';
import { Countdown } from './components/Countdown';
import { HappyCouple } from './components/HappyCouple';
import { HomecomingDetails } from './components/HomecomingDetails';
import { NoteFromUs } from './components/NoteFromUs';
import { RSVPForm } from './components/RSVPForm';
import { WishesSection } from './components/WishesSection';
import { Footer } from './components/Footer';
import { IntroOverlay } from './components/IntroOverlay';
import { HeroContent } from './components/HeroContent';
import { WEDDING } from './weddingConfig';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showMain, setShowMain] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startMusic = () => {
    const audio = audioRef.current;
    if (audio && audio.paused) {
      audio.volume = 0.7;
      audio.play().catch((err) => console.log('Audio play blocked: ', err));
    }
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch((err) => console.log('Audio play blocked: ', err));
    } else {
      audio.pause();
    }
  };

  // Browsers block autoplay with sound; start on the first user interaction.
  useEffect(() => {
    const handleFirstInteraction = () => {
      startMusic();
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true });
    window.addEventListener('keydown', handleFirstInteraction);
    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  return (
    <div className="relative min-h-screen font-sans selection:bg-brand-gold selection:text-white overflow-x-hidden bg-[#022c22]">
      <FloatingPetals />

      {/* Background song for the whole invitation */}
      <audio
        ref={audioRef}
        src={WEDDING.song}
        loop
        preload="auto"
        onPlay={() => setIsMusicPlaying(true)}
        onPause={() => setIsMusicPlaying(false)}
      />

      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div key="intro" exit={{ opacity: 0 }} transition={{ duration: 1 }} className="fixed inset-0 z-50">
            <IntroOverlay
              onEnter={() => {
                setShowIntro(false);
                setShowMain(true);
                startMusic();
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {showMain && (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="relative z-10"
          >
            <button
              onClick={toggleMusic}
              aria-label={isMusicPlaying ? 'Mute music' : 'Play music'}
              className="fixed bottom-8 right-8 z-[60] w-14 h-14 glass rounded-full flex items-center justify-center text-brand-gold-deep hover:bg-stone-800 hover:text-brand-champagne transition-all active:scale-90 shadow-2xl group"
            >
              <div className="absolute inset-0 rounded-full border border-brand-gold/20 scale-110 group-hover:scale-125 transition-transform" />
              {isMusicPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
            </button>

            <HeroContent />
            <HappyCouple />
            <Countdown targetDate={WEDDING.countdownTarget} />
            <HomecomingDetails />
            <NoteFromUs />
            <RSVPForm />
            <WishesSection />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
