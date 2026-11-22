// Simple line icons drawn as SVG, used on feature and "why buy" cards.
type P = {size?: number; color?: string};

function Svg({size = 56, color = 'currentColor', children}: P & {children: React.ReactNode}) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {children}
    </svg>
  );
}

export const icons = {
  lock: (p: P) => <Svg {...p}><rect x="11" y="21" width="26" height="19" rx="4" /><path d="M16 21v-6a8 8 0 0 1 16 0v6" /><circle cx="24" cy="30" r="2.2" /></Svg>,
  doc: (p: P) => <Svg {...p}><path d="M14 6h14l8 8v28H14z" /><path d="M28 6v8h8" /><path d="M19 23h12M19 29h12M19 35h8" /></Svg>,
  chat: (p: P) => <Svg {...p}><path d="M8 12h32v20H22l-8 7v-7H8z" /><path d="M15 21h18M15 26h11" /></Svg>,
  mic: (p: P) => <Svg {...p}><rect x="18" y="6" width="12" height="22" rx="6" /><path d="M11 22a13 13 0 0 0 26 0M24 35v7M17 42h14" /></Svg>,
  users: (p: P) => <Svg {...p}><circle cx="18" cy="17" r="6" /><path d="M7 38c0-7 5-11 11-11s11 4 11 11" /><circle cx="33" cy="15" r="5" /><path d="M31 25c6 0 10 4 10 10" /></Svg>,
  offline: (p: P) => <Svg {...p}><path d="M6 18a26 26 0 0 1 36 0M12 25a17 17 0 0 1 24 0M18 31a8 8 0 0 1 12 0" /><circle cx="24" cy="37" r="1.8" /><path d="M8 8l32 32" /></Svg>,
  wrench: (p: P) => <Svg {...p}><path d="M30 8a9 9 0 0 0-8 12L8 34l6 6 14-14a9 9 0 0 0 12-8l-6 4-5-1-1-5z" /></Svg>,
  truck: (p: P) => <Svg {...p}><path d="M4 12h24v20H4zM28 19h8l6 7v6H28z" /><circle cx="12" cy="35" r="3.5" /><circle cx="35" cy="35" r="3.5" /></Svg>,
  calendar: (p: P) => <Svg {...p}><rect x="7" y="10" width="34" height="30" rx="4" /><path d="M7 18h34M16 6v8M32 6v8" /><path d="M17 28l5 5 9-9" /></Svg>,
  tag: (p: P) => <Svg {...p}><path d="M6 24V8h16l20 20-14 14z" /><circle cx="15" cy="17" r="3" /></Svg>,
  help: (p: P) => <Svg {...p}><circle cx="24" cy="24" r="17" /><path d="M19 19a5 5 0 1 1 7 4.6c-1.3.6-2 1.6-2 3V28" /><circle cx="24" cy="34" r="1.6" /></Svg>,
  refresh: (p: P) => <Svg {...p}><path d="M39 22a15 15 0 0 0-27-7M9 26a15 15 0 0 0 27 7" /><path d="M12 7v8h8M36 41v-8h-8" /></Svg>,
  shield: (p: P) => <Svg {...p}><path d="M24 5l15 6v11c0 10-6.5 17-15 21-8.5-4-15-11-15-21V11z" /><path d="M17 24l5 5 9-10" /></Svg>,
  laptop: (p: P) => <Svg {...p}><rect x="9" y="10" width="30" height="20" rx="2.5" /><path d="M4 36h40l-3 4H7z" /></Svg>,
  phone: (p: P) => <Svg {...p}><rect x="15" y="5" width="18" height="38" rx="4" /><path d="M22 38h4" /></Svg>,
  folder: (p: P) => <Svg {...p}><path d="M5 13h14l4 5h20v20H5z" /></Svg>,
  bolt: (p: P) => <Svg {...p}><path d="M27 4L10 27h12l-3 17 19-25H26z" /></Svg>,
  compare: (p: P) => <Svg {...p}><rect x="6" y="10" width="15" height="28" rx="3" /><rect x="27" y="10" width="15" height="28" rx="3" /><path d="M10 18h7M10 24h7M31 18h7M31 24h7" /></Svg>,
  bag: (p: P) => <Svg {...p}><path d="M9 16h30l-2 26H11z" /><path d="M17 16v-3a7 7 0 0 1 14 0v3" /></Svg>,
};

export type IconName = keyof typeof icons;

export function Icon({name, size, color}: {name: IconName} & P) {
  const C = icons[name];
  return <C size={size} color={color} />;
}
