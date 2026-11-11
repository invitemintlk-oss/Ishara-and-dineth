// Single source of truth for all wedding details.
// Update values here and every section of the invitation + admin page follows.

export const WEDDING = {
  bride: {
    name: 'Ishara',
    family: 'Rupasinghe',
  },
  groom: {
    name: 'Dineth',
    family: 'Jinasekara',
  },
  // Displayed as "Dineth & Ishara" across the invitation
  coupleNames: 'Dineth & Ishara',
  hashtag: '#Dineth&Ishara2026',

  dateISO: '2026-12-10',
  dayName: 'Thursday',
  dateLong: '10th December 2026',
  dateShort: 'December 10, 2026',

  startTime: '9:30 AM',
  endTime: '4:00 PM',
  poruwaTime: '10:00 AM',

  // Sri Lanka time (UTC+05:30)
  countdownTarget: new Date('2026-12-10T09:30:00+05:30'),

  venue: {
    name: 'Lavenro Garden Hotel',
    city: 'Kosgama',
    mapUrl: 'https://maps.app.goo.gl/k5d6aqkz7tqo6WiGA',
  },

  images: {
    intro: '/x.jpeg',
    hero: '/x.jpeg',
    couple: '/y.jpeg',
  },
  song: '/song.mp3',
} as const;

// Google Calendar uses UTC: 9:30 AM – 4:00 PM (+05:30) = 04:00 – 10:30 UTC
export const GOOGLE_CALENDAR_URL =
  'https://www.google.com/calendar/render?action=TEMPLATE' +
  `&text=${encodeURIComponent(`${WEDDING.coupleNames} Wedding`)}` +
  '&dates=20261210T040000Z/20261210T103000Z' +
  `&details=${encodeURIComponent(`Poruwa Ceremony at ${WEDDING.poruwaTime}. We are excited to celebrate with you!`)}` +
  `&location=${encodeURIComponent(`${WEDDING.venue.name}, ${WEDDING.venue.city}`)}` +
  '&sf=true&output=xml';

export const PREFIXES = ['Mr.', 'Mrs.', 'Miss', 'Mr. & Mrs.', 'Family', 'Dear'] as const;
export type Prefix = (typeof PREFIXES)[number];

/**
 * Combines a prefix and guest name into the display name.
 * "Dear" is a greeting style, not a title, so it adds nothing to the name
 * (the greeting itself supplies the single "Dear").
 */
export function getDisplayName(prefix: string, name: string): string {
  const n = name.trim().replace(/\s+/g, ' ');
  if (!n) return '';
  switch (prefix) {
    case 'Mr.':
      return `Mr. ${n}`;
    case 'Mrs.':
      return `Mrs. ${n}`;
    case 'Miss':
      return `Miss ${n}`;
    case 'Mr. & Mrs.':
      return `Mr. & Mrs. ${n}`;
    case 'Family':
      return `${n} and Family`;
    case 'Dear':
    default:
      return n;
  }
}

/** Reads the guest from the URL: /{guestName}?prefix=Mr. */
export function getGuestFromUrl(): { prefix: string; name: string; displayName: string } {
  const params = new URLSearchParams(window.location.search);
  const prefix = params.get('prefix') || '';
  let name = '';
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  if (path && path.toLowerCase() !== 'admin') {
    try {
      name = decodeURIComponent(path);
    } catch {
      name = path;
    }
  } else {
    name = params.get('name') || '';
  }
  return { prefix, name, displayName: getDisplayName(prefix, name) };
}
