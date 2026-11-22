import {useId} from 'react';

// A drawn (SVG) AI Box in 3/4 view. `tone` changes the finish per model.
export default function Device({
  width = 420,
  tone = 'graphite',
  glow = false,
}: {
  width?: number;
  tone?: 'graphite' | 'silver' | 'midnight' | 'titanium';
  glow?: boolean;
}) {
  const id = useId().replace(/:/g, '');
  const finishes = {
    graphite: ['#5a5a5f', '#2c2c2e', '#1c1c1e', '#0e0e10'],
    silver: ['#f2f2f4', '#d7d7dc', '#b9b9c0', '#9c9ca4'],
    midnight: ['#3b4658', '#222a36', '#161c25', '#0b0f15'],
    titanium: ['#8e8a84', '#6b6862', '#4d4a46', '#2e2c2a'],
  }[tone];
  const light = tone === 'silver';
  return (
    <svg width={width} viewBox="0 0 400 270" role="img" aria-label="Thoshini AI Box" style={{maxWidth: '100%', height: 'auto'}}>
      <defs>
        <linearGradient id={`top${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={finishes[0]} />
          <stop offset="1" stopColor={finishes[1]} />
        </linearGradient>
        <linearGradient id={`left${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={finishes[2]} />
          <stop offset="1" stopColor={finishes[1]} />
        </linearGradient>
        <linearGradient id={`right${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={finishes[3]} />
          <stop offset="1" stopColor={finishes[2]} />
        </linearGradient>
        <radialGradient id={`glow${id}`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#2997ff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#2997ff" stopOpacity="0" />
        </radialGradient>
        <filter id={`blur${id}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>
      {glow && <ellipse cx="200" cy="150" rx="210" ry="120" fill={`url(#glow${id})`} />}
      <ellipse cx="200" cy="245" rx="165" ry="16" fill="#000" opacity={light ? 0.18 : 0.45} filter={`url(#blur${id})`} />
      {/* top */}
      <path d="M200 22 L372 88 Q380 92 372 96 L208 160 Q200 163 192 160 L28 96 Q20 92 28 88 Z" fill={`url(#top${id})`} />
      {/* left face */}
      <path d="M24 94 L196 160 Q200 162 200 166 L200 232 Q200 236 196 234 L28 170 Q24 168 24 164 Z" fill={`url(#left${id})`} />
      {/* right face */}
      <path d="M376 94 L204 160 Q200 162 200 166 L200 232 Q200 236 204 234 L372 170 Q376 168 376 164 Z" fill={`url(#right${id})`} />
      {/* top edge highlight */}
      <path d="M28 92 L200 158 L372 92" fill="none" stroke={light ? '#ffffff' : '#8e8e93'} strokeOpacity="0.55" strokeWidth="1.2" />
      {/* vents on the right face */}
      {Array.from({length: 14}).map((_, i) => {
        const x = 222 + i * 10.5;
        const y = 170 - i * 4.03;
        return <line key={i} x1={x} y1={y} x2={x} y2={y + 38} stroke={light ? '#7c7c84' : '#000'} strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" />;
      })}
      {/* status light and wordmark on the left face */}
      <circle cx="176" cy="208" r="3.6" fill="#30d158" />
      <circle cx="176" cy="208" r="8" fill="#30d158" opacity="0.25" />
      <text x="58" y="146" fill={light ? '#6e6e73' : '#a1a1a6'} fontSize="13" fontWeight="600" letterSpacing="2.5"
        transform="rotate(21 58 146)" fontFamily="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif">THOSHINI</text>
    </svg>
  );
}
