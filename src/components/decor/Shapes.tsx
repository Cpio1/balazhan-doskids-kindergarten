/**
 * Небольшие декоративные фигурки. Все — aria-hidden и pointer-events-none,
 * размеры задаются снаружи через className.
 */
type P = { className?: string };

const base = "pointer-events-none select-none";

export function Sun({ className = "" }: P) {
  return (
    <svg viewBox="0 0 64 64" className={`${base} ${className}`} aria-hidden>
      <g stroke="#f5b82e" strokeWidth="4" strokeLinecap="round">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1="32" y1="5" x2="32" y2="12" transform={`rotate(${i * 45} 32 32)`} />
        ))}
      </g>
      <circle cx="32" cy="32" r="15" fill="#ffd65c" />
      <circle cx="26.5" cy="30" r="1.8" fill="#2f2a3d" />
      <circle cx="37.5" cy="30" r="1.8" fill="#2f2a3d" />
      <path d="M26 36.5c3.5 3.4 8.5 3.4 12 0" stroke="#2f2a3d" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="23" cy="35" r="2.4" fill="#ffb08f" opacity=".8" />
      <circle cx="41" cy="35" r="2.4" fill="#ffb08f" opacity=".8" />
    </svg>
  );
}

export function Cloud({ className = "", tone = "#ffffff" }: P & { tone?: string }) {
  return (
    <svg viewBox="0 0 96 56" className={`${base} ${className}`} aria-hidden>
      <path
        d="M24 50h50a16 16 0 0 0 1.6-31.9A22 22 0 0 0 34.4 13 15 15 0 0 0 24 50Z"
        fill={tone}
        stroke="#d7ecf8"
        strokeWidth="2"
      />
    </svg>
  );
}

export function Star({ className = "", tone = "#ffd65c" }: P & { tone?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={`${base} ${className}`} aria-hidden>
      <path
        d="M20 3.5c1.3 0 2 .9 2.6 2.2l3.3 7.1 7.7 1c1.5.2 2.4.8 2.7 1.8.3 1-.1 2-1.2 3l-5.6 5.3 1.4 7.6c.3 1.5 0 2.5-.9 3.1-.8.6-1.9.6-3.2-.1L20 31.7l-6.8 3.8c-1.3.7-2.4.7-3.2.1-.9-.6-1.2-1.6-.9-3.1l1.4-7.6-5.6-5.3c-1.1-1-1.5-2-1.2-3 .3-1 1.2-1.6 2.7-1.8l7.7-1 3.3-7.1c.6-1.3 1.3-2.2 2.6-2.2Z"
        fill={tone}
      />
    </svg>
  );
}

export function Sparkle({ className = "", tone = "#7cc4f0" }: P & { tone?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden>
      <path d="M12 1c.8 5.6 4.4 9.2 11 11-6.6 1.8-10.2 5.4-11 11-.8-5.6-4.4-9.2-11-11 6.6-1.8 10.2-5.4 11-11Z" fill={tone} />
    </svg>
  );
}

export function Rainbow({ className = "" }: P) {
  return (
    <svg viewBox="0 0 80 44" className={`${base} ${className}`} aria-hidden>
      <g fill="none" strokeLinecap="round" strokeWidth="7">
        <path d="M6 40a34 34 0 0 1 68 0" stroke="#f28bb0" />
        <path d="M15 40a25 25 0 0 1 50 0" stroke="#ffd65c" />
        <path d="M24 40a16 16 0 0 1 32 0" stroke="#8fd09c" />
        <path d="M33 40a7 7 0 0 1 14 0" stroke="#7cc4f0" />
      </g>
    </svg>
  );
}

export function Flower({ className = "", petal = "#f28bb0" }: P & { petal?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={`${base} ${className}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <ellipse key={i} cx="20" cy="10" rx="6" ry="8.5" fill={petal} transform={`rotate(${i * 72} 20 20)`} />
      ))}
      <circle cx="20" cy="20" r="6" fill="#ffd65c" />
    </svg>
  );
}

export function Heart({ className = "", tone = "#ffb08f" }: P & { tone?: string }) {
  return (
    <svg viewBox="0 0 32 30" className={`${base} ${className}`} aria-hidden>
      <path d="M16 28S2 19.6 2 10.2C2 5.6 5.4 2 9.6 2c2.7 0 5 1.4 6.4 3.6C17.4 3.4 19.7 2 22.4 2 26.6 2 30 5.6 30 10.2 30 19.6 16 28 16 28Z" fill={tone} />
    </svg>
  );
}

export function Squiggle({ className = "", tone = "#7cc4f0" }: P & { tone?: string }) {
  return (
    <svg viewBox="0 0 80 16" className={`${base} ${className}`} aria-hidden>
      <path d="M3 8c6-6 11-6 17 0s11 6 17 0 11-6 17 0 11 6 17 0 6-5 6-5" fill="none" stroke={tone} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function Triangle({ className = "", tone = "#8fd09c" }: P & { tone?: string }) {
  return (
    <svg viewBox="0 0 32 30" className={`${base} ${className}`} aria-hidden>
      <path d="M13.4 3.6a3 3 0 0 1 5.2 0l11 19.4A3 3 0 0 1 27 27.5H5a3 3 0 0 1-2.6-4.5Z" fill={tone} />
    </svg>
  );
}

export function Ring({ className = "", tone = "#ffd65c" }: P & { tone?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={`${base} ${className}`} aria-hidden>
      <circle cx="16" cy="16" r="11" fill="none" stroke={tone} strokeWidth="6" />
    </svg>
  );
}

export function Dots({ className = "", tone = "#f1d9a8" }: P & { tone?: string }) {
  return (
    <svg viewBox="0 0 60 36" className={`${base} ${className}`} aria-hidden>
      {Array.from({ length: 18 }).map((_, i) => (
        <circle key={i} cx={6 + (i % 6) * 9.6} cy={6 + Math.floor(i / 6) * 12} r="2.6" fill={tone} />
      ))}
    </svg>
  );
}

export function Balloon({ className = "", tone = "#f28bb0" }: P & { tone?: string }) {
  return (
    <svg viewBox="0 0 40 72" className={`${base} ${className}`} aria-hidden>
      <path d="M20 46c-1 6 3 9 0 14s1 8 0 11" fill="none" stroke="#c9bfae" strokeWidth="1.6" strokeLinecap="round" />
      <ellipse cx="20" cy="22" rx="16" ry="19" fill={tone} />
      <path d="M17 41h6l-3 5Z" fill={tone} />
      <ellipse cx="13.5" cy="15" rx="3.5" ry="6" fill="#fff" opacity=".45" transform="rotate(20 13.5 15)" />
    </svg>
  );
}

/** Волнистый разделитель между секциями */
export function Wave({ className = "", fill = "#fffaf1", flip = false }: P & { fill?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className={`${base} block w-full ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden
    >
      <path d="M0 32c120-26 240-26 360 0s240 26 360 0 240-26 360 0 240 26 360 0v28H0Z" fill={fill} />
    </svg>
  );
}
