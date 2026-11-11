import React, { useEffect, useState } from 'react';
import { Check, Link as LinkIcon, FileText, Sparkles } from 'lucide-react';
import { PREFIXES, WEDDING, getDisplayName } from '../weddingConfig';

interface Generated {
  prefix: string;
  name: string;
  displayName: string;
  greeting: string;
  link: string;
  message: string;
}

/** "Dear" is the greeting itself, so it is never duplicated. */
const buildGreeting = (displayName: string) => `Dear ${displayName} ❤️`;

const buildLink = (prefix: string, name: string) => {
  const base = window.location.origin;
  const cleanName = name.trim().replace(/\s+/g, ' ');
  // encodeURIComponent safely handles spaces, &, /, ?, # and unicode (e.g. Sinhala) names
  const path = encodeURIComponent(cleanName);
  const query = prefix && prefix !== 'Dear' ? `?prefix=${encodeURIComponent(prefix)}` : '';
  return `${base}/${path}${query}`;
};

const buildMessage = (greeting: string, link: string) =>
  `${greeting}

With joyful hearts, we warmly invite you to celebrate one of the most special days of our lives as we begin our journey together.

Please view our wedding invitation and all the event details through the link below 🌐:

${link}

Your presence would truly mean the world to us, and we would be honored to celebrate this beautiful moment together.

With love,
❤️ ${WEDDING.groom.name} & ${WEDDING.bride.name}`;

export const Admin: React.FC = () => {
  const [prefix, setPrefix] = useState<string>('Mr.');
  const [guestName, setGuestName] = useState('');
  const [generated, setGenerated] = useState<Generated | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    document.title = `Admin · ${WEDDING.coupleNames}`;
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2000);
    return () => clearTimeout(t);
  }, [toast]);

  const isStale = !!generated && (generated.prefix !== prefix || generated.name !== guestName.trim());

  const handleGenerate = (e?: React.FormEvent) => {
    e?.preventDefault();
    const name = guestName.trim();
    if (!name) {
      setError('Please enter a guest name.');
      return;
    }
    setError(null);
    const displayName = getDisplayName(prefix, name);
    const greeting = buildGreeting(displayName);
    const link = buildLink(prefix, name);
    setGenerated({ prefix, name, displayName, greeting, link, message: buildMessage(greeting, link) });
  };

  const copy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback for older browsers / non-secure contexts
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setToast(label);
  };

  const fieldClass =
    'w-full h-12 px-4 rounded-xl border border-stone-200 bg-stone-50 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all';

  return (
    <div className="min-h-screen bg-[#f7f5ef] text-stone-800 px-4 py-10 md:p-12 font-sans flex items-start md:items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-[#D4AF37]/30">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">{WEDDING.coupleNames}</p>
          <h1 className="text-2xl sm:text-3xl font-serif mt-2 text-stone-800">Invitation Link Generator</h1>
        </div>

        <form onSubmit={handleGenerate} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="space-y-2">
              <label htmlFor="prefix" className="text-xs font-medium text-stone-600 uppercase tracking-widest">
                Select Prefix
              </label>
              <select id="prefix" value={prefix} onChange={(e) => setPrefix(e.target.value)} className={fieldClass}>
                {PREFIXES.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2 space-y-2">
              <label htmlFor="guestName" className="text-xs font-medium text-stone-600 uppercase tracking-widest">
                Guest Name
              </label>
              <input
                id="guestName"
                type="text"
                placeholder="e.g. Sanjaya"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className={fieldClass}
                autoComplete="off"
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full h-12 flex items-center justify-center gap-2 bg-stone-800 hover:bg-black text-[#D4AF37] rounded-xl font-medium transition-all"
          >
            <Sparkles className="w-4 h-4" />
            Generate Link
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-stone-100 space-y-5">
          {isStale && (
            <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
              Inputs changed — click <strong>Generate Link</strong> again to update.
            </p>
          )}

          <div className="space-y-2">
            <span className="text-xs font-medium text-stone-600 uppercase tracking-widest">Preview</span>
            <div className="rounded-xl border border-[#D4AF37]/30 bg-[#fffdf6] px-4 py-3">
              {generated ? (
                <>
                  <p className="font-serif text-lg text-stone-800">{generated.greeting}</p>
                  <p className="text-sm text-stone-500 mt-1">
                    Website shows: “We cordially invite <strong className="text-stone-700">{generated.displayName}</strong> to
                    celebrate our special day with us.”
                  </p>
                </>
              ) : (
                <p className="text-sm text-stone-400">Enter a guest name and click Generate Link.</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-medium text-stone-600 uppercase tracking-widest">Generated Link</span>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                readOnly
                value={generated?.link ?? ''}
                placeholder="Link will appear here"
                onFocus={(e) => e.currentTarget.select()}
                className="w-full h-12 px-4 rounded-xl border border-stone-200 bg-stone-50 text-stone-700 text-sm outline-none"
              />
              <button
                type="button"
                onClick={() => generated && copy(generated.link, 'Link copied!')}
                disabled={!generated}
                className="h-12 px-5 flex items-center justify-center gap-2 border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-[#D4AF37] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-stone-800 rounded-xl font-medium transition-all whitespace-nowrap"
              >
                <LinkIcon className="w-4 h-4" />
                Copy Link Only
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-medium text-stone-600 uppercase tracking-widest">Full Message</span>
            <textarea
              readOnly
              value={generated?.message ?? ''}
              rows={13}
              className="w-full p-4 rounded-xl border border-stone-200 bg-stone-50 text-stone-600 text-sm outline-none resize-none"
            />
            <button
              type="button"
              onClick={() => generated && copy(generated.message, 'Message copied!')}
              disabled={!generated}
              className="w-full h-12 flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#C5A030] disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl font-medium shadow-lg transition-all"
            >
              <FileText className="w-5 h-5" />
              Copy Full Message
            </button>
          </div>
        </div>
      </div>

      {toast && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-stone-900 text-white text-sm px-4 py-2.5 rounded-full shadow-lg"
        >
          <Check className="w-4 h-4 text-[#D4AF37]" />
          {toast}
        </div>
      )}
    </div>
  );
};
