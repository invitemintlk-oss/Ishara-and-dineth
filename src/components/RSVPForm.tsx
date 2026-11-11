import React, { useState } from 'react';
import { submitToGoogleSheet } from '../googleSheets';
import { Calendar, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { GOOGLE_CALENDAR_URL, getGuestFromUrl } from '../weddingConfig';

export const RSVPForm: React.FC = () => {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState('');
  const [guestCount, setGuestCount] = useState('1');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRSVP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!attending) {
      setError('Please let us know if you can attend');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    try {
      const status = attending === 'yes' ? 'Attending' : 'Not Attending';
      await submitToGoogleSheet('rsvp', {
        name: name.trim(),
        status,
        guestCount: attending === 'yes' ? guestCount : '0',
        message: message.trim(),
        invitedAs: getGuestFromUrl().displayName,
        submittedAt: new Date().toISOString(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Failed to submit RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="w-full py-24 relative overflow-hidden bg-[#022c22]">
      {/* Background Image with Faded Edges */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/ChatGPT Image Aug 4, 2026, 02_12_09 AM.png')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#022c22] via-transparent to-[#022c22]"></div>
      
      {/* Subtle Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-3/4 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div 
          className="flex flex-col items-center space-y-4 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl font-display text-[#D4AF37] drop-shadow-md" style={{ fontFamily: "'Great Vibes', cursive" }}>
            RSVP
          </h2>
          <div className="flex items-center space-x-4">
            <div className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/70"></div>
            <Sparkles className="w-4 h-4 text-[#D4AF37] opacity-80" />
            <div className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/70"></div>
          </div>
          <p className="text-[11px] md:text-sm text-white/70 font-sans tracking-[0.2em] uppercase mt-6 max-w-2xl px-4 leading-relaxed">
            Where forever begins, and we’d love for you to be there.<br className="hidden sm:block" /> Please let us know if you'll be joining us on our special day.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative bg-black/40 backdrop-blur-md p-8 sm:p-12 md:p-16 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#D4AF37]/30 overflow-hidden">
            
            {/* Decorative Inner Border */}
            <div className="absolute inset-3 sm:inset-4 border-[1px] border-[#D4AF37]/10 rounded-[30px] pointer-events-none"></div>

            {submitted ? (
              <div className="text-center py-10">
                <p className="text-5xl font-display text-[#D4AF37] mb-6 drop-shadow-md" style={{ fontFamily: "'Great Vibes', cursive" }}>Thank you!</p>
                <p className="text-sm md:text-base font-sans text-white/80 tracking-widest uppercase">Your response has been lovingly recorded.</p>
              </div>
            ) : (
              <form onSubmit={handleRSVP} className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Eg: Namal Perera" 
                      className="w-full bg-black/60 text-white border border-[#D4AF37]/40 rounded-xl px-5 py-4 font-sans focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition-all placeholder:text-white/30"
                      name="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Will you attend?</label>
                    <div className="relative">
                      <select 
                        name="attending" 
                        required 
                        value={attending}
                        onChange={(e) => setAttending(e.target.value)}
                        className="w-full bg-black/60 text-white border border-[#D4AF37]/40 rounded-xl px-5 py-4 font-sans appearance-none pr-10 focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition-all"
                        disabled={isSubmitting}
                      >
                        <option value="" disabled className="bg-[#064e3b] text-white/50">Select an option</option>
                        <option value="yes" className="bg-[#064e3b] text-white">Yes, I'll be there</option>
                        <option value="no" className="bg-[#064e3b] text-white">Sorry, I can't make it</option>
                      </select>
                      <svg className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-[#D4AF37] pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {attending === 'yes' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <label className="block text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Number of Guests (including yourself)</label>
                    <div className="relative">
                      <select 
                        required={attending === 'yes'}
                        className="w-full bg-black/60 text-white border border-[#D4AF37]/40 rounded-xl px-5 py-4 font-sans appearance-none pr-10 focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition-all"
                        name="guestCount" 
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        disabled={isSubmitting}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num} className="bg-[#064e3b] text-white">
                            {num} {num === 1 ? 'Guest (Just me)' : 'Guests'}
                          </option>
                        ))}
                      </select>
                      <svg className="w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-[#D4AF37] pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </motion.div>
                )}

                <div>
                  <label className="block text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Message (Optional)</label>
                  <textarea 
                    name="message" 
                    maxLength={250} 
                    rows={4} 
                    className="w-full bg-black/60 text-white border border-[#D4AF37]/40 rounded-xl px-5 py-4 font-sans focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none transition-all placeholder:text-white/30 resize-none" 
                    placeholder="Leave the couple a beautiful note!"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                {error && <p className="text-red-400 text-sm font-sans text-center tracking-wide">{error}</p>}

                <div className="pt-6 space-y-4">
                  <button 
                    type="submit" 
                    className="w-full group relative flex items-center justify-center overflow-hidden rounded-full border border-[#D4AF37] bg-transparent transition-all duration-300 hover:bg-[#D4AF37] py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    <span className="absolute inset-0 w-full h-full bg-[#D4AF37] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                    <span className="text-xs sm:text-sm font-sans text-[#D4AF37] group-hover:text-black font-semibold uppercase tracking-[0.3em] transition-colors duration-300">
                      {isSubmitting ? 'Sending...' : 'Send RSVP with Love'}
                    </span>
                  </button>
                  
                  <a 
                    href={GOOGLE_CALENDAR_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full group relative flex items-center justify-center overflow-hidden rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 transition-all duration-300 hover:bg-[#D4AF37] py-4 hover:border-[#D4AF37]"
                  >
                    <Calendar className="mr-3 h-4 w-4 text-[#D4AF37] group-hover:text-black transition-colors duration-300" />
                    <span className="text-xs sm:text-sm font-sans text-[#D4AF37] group-hover:text-black font-semibold uppercase tracking-[0.2em] transition-colors duration-300">
                      Add to Google Calendar
                    </span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
