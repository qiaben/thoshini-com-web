import Device from '@site/src/components/Device';

// Drawn "lifestyle" scene: an AI Box on a desk next to a laptop, phone and papers.
export function DeskScene() {
  return (
    <div className="desk-scene" role="img" aria-label="An AI Box on an office desk next to a laptop and a phone">
      <svg className="desk-scene__bg" viewBox="0 0 1200 520" preserveAspectRatio="xMidYMax slice" aria-hidden>
        <defs>
          <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e9e4dc" />
            <stop offset="1" stopColor="#d9d2c7" />
          </linearGradient>
          <linearGradient id="desk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#b8906a" />
            <stop offset="1" stopColor="#8d6a4b" />
          </linearGradient>
          <linearGradient id="screen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1e3a8a" />
            <stop offset="1" stopColor="#6d28d9" />
          </linearGradient>
          <linearGradient id="win" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#cfe6ff" />
            <stop offset="1" stopColor="#f6f9ff" />
          </linearGradient>
        </defs>
        <rect width="1200" height="520" fill="url(#wall)" />
        {/* window */}
        <rect x="820" y="40" width="300" height="250" rx="6" fill="url(#win)" stroke="#c8beb0" strokeWidth="10" />
        <line x1="970" y1="40" x2="970" y2="290" stroke="#c8beb0" strokeWidth="8" />
        {/* plant */}
        <rect x="90" y="300" width="70" height="80" rx="8" fill="#e8e3da" stroke="#cfc6b8" strokeWidth="3" />
        <path d="M125 300c-30-60-70-70-80-120 40 10 70 50 80 120zM125 300c10-70 40-110 80-130-5 50-40 90-80 130zM125 300c-5-60 5-110 0-170 25 40 25 110 0 170z" fill="#4f7a4a" />
        {/* desk */}
        <rect x="0" y="380" width="1200" height="140" fill="url(#desk)" />
        <rect x="0" y="380" width="1200" height="8" fill="#d2ab84" />
        {/* laptop */}
        <path d="M250 250h300v170H250z" fill="#2c2c2e" />
        <rect x="262" y="262" width="276" height="146" rx="3" fill="url(#screen)" />
        <rect x="282" y="285" width="150" height="12" rx="6" fill="#ffffff" opacity="0.85" />
        <rect x="282" y="308" width="220" height="9" rx="4.5" fill="#ffffff" opacity="0.5" />
        <rect x="282" y="325" width="200" height="9" rx="4.5" fill="#ffffff" opacity="0.5" />
        <rect x="282" y="342" width="160" height="9" rx="4.5" fill="#ffffff" opacity="0.5" />
        <rect x="390" y="370" width="130" height="26" rx="13" fill="#ffffff" opacity="0.9" />
        <path d="M220 420h360l-20 14H240z" fill="#bdbdc2" />
        {/* papers */}
        <path d="M620 418l120-22 14 18-120 22z" fill="#ffffff" />
        <path d="M630 428l120-20 10 14-120 20z" fill="#f2f2f2" />
        {/* phone */}
        <rect x="760" y="404" width="80" height="24" rx="6" fill="#1c1c1e" transform="rotate(-6 800 416)" />
        {/* mug */}
        <rect x="1000" y="345" width="54" height="64" rx="8" fill="#ffffff" stroke="#d5d0c7" strokeWidth="3" />
        <path d="M1054 360c22 0 22 34 0 34" fill="none" stroke="#d5d0c7" strokeWidth="6" />
      </svg>
      <div className="desk-scene__device">
        <Device width={300} tone="graphite" />
      </div>
    </div>
  );
}
