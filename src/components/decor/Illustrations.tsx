import type { ReactNode } from "react";

/**
 * Детские иллюстрации: логотип, сцена-заглушка для главного фото,
 * продукты для раздела питания и картинки для кружков.
 */
type P = { className?: string };

const base = "pointer-events-none select-none";

export function LogoMark({ className = "" }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <rect x="2" y="2" width="44" height="44" rx="15" fill="#ffd65c" />
      <path d="M11 24 24 13l13 11" fill="none" stroke="#2f2a3d" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 22v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V22" fill="#fffaf1" stroke="#2f2a3d" strokeWidth="3.2" strokeLinejoin="round" />
      <path d="M24 33.5s-5-3-5-6.4c0-1.7 1.3-3 2.9-3 1 0 1.7.5 2.1 1.2.4-.7 1.2-1.2 2.1-1.2 1.6 0 2.9 1.3 2.9 3 0 3.4-5 6.4-5 6.4Z" fill="#f28bb0" />
      <circle cx="37" cy="11" r="3.5" fill="#7cc4f0" />
    </svg>
  );
}

/** Иллюстрация вместо главного фото, пока в public/hero нет файла */
export function HeroScene({ className = "" }: P) {
  return (
    <svg viewBox="0 0 480 400" className={`${base} ${className}`} aria-hidden>
      <rect width="480" height="400" fill="#e4f4fd" />
      <circle cx="390" cy="80" r="38" fill="#ffd65c" />
      <path d="M60 92h70a20 20 0 0 0 0-40 28 28 0 0 0-52-6 17 17 0 0 0-18 46Z" fill="#fff" />
      <path d="M250 70h46a14 14 0 0 0 0-28 20 20 0 0 0-37-4 12 12 0 0 0-9 32Z" fill="#fff" opacity=".9" />
      <path d="M0 300c80-40 160-40 240-10s160 30 240-10v120H0Z" fill="#bfe6c3" />
      <path d="M0 330c90-30 170-20 250 5s150 20 230-5v70H0Z" fill="#8fd09c" />
      {/* дом */}
      <path d="M150 190 240 120l90 70" fill="#ffb08f" />
      <path d="M140 196 240 116l100 80" fill="none" stroke="#c8532c" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="162" y="190" width="156" height="128" rx="10" fill="#fffaf1" />
      <rect x="222" y="250" width="36" height="68" rx="18" fill="#7cc4f0" />
      <circle cx="250" cy="286" r="3" fill="#2f2a3d" />
      <rect x="178" y="214" width="34" height="30" rx="8" fill="#ffd65c" />
      <rect x="268" y="214" width="34" height="30" rx="8" fill="#ffd65c" />
      <path d="M195 214v30M285 214v30" stroke="#fffaf1" strokeWidth="3" />
      <circle cx="240" cy="168" r="14" fill="#fffaf1" />
      <path d="M240 175s-7-4-7-9c0-2.3 1.7-4 4-4 1.3 0 2.4.6 3 1.6.6-1 1.7-1.6 3-1.6 2.3 0 4 1.7 4 4 0 5-7 9-7 9Z" fill="#f28bb0" />
      {/* деревья и цветы */}
      <rect x="86" y="250" width="8" height="50" rx="4" fill="#a7744d" />
      <circle cx="90" cy="236" r="30" fill="#5fb873" />
      <rect x="386" y="252" width="8" height="48" rx="4" fill="#a7744d" />
      <circle cx="390" cy="240" r="26" fill="#5fb873" />
      {[60, 130, 350, 430].map((x, i) => (
        <g key={x} transform={`translate(${x} ${340 + (i % 2) * 14})`}>
          {Array.from({ length: 5 }).map((_, j) => (
            <ellipse key={j} cx="0" cy="-7" rx="4.5" ry="6.5" fill={i % 2 ? "#f28bb0" : "#ffd65c"} transform={`rotate(${j * 72})`} />
          ))}
          <circle r="4" fill={i % 2 ? "#ffd65c" : "#ffb08f"} />
        </g>
      ))}
      {/* воздушные шарики */}
      <path d="M352 196c-4 20 6 30 0 56" stroke="#c9bfae" strokeWidth="2" fill="none" />
      <ellipse cx="352" cy="176" rx="17" ry="21" fill="#f28bb0" />
      <path d="M372 186c4 20-4 34 2 60" stroke="#c9bfae" strokeWidth="2" fill="none" />
      <ellipse cx="374" cy="166" rx="15" ry="19" fill="#7cc4f0" />
    </svg>
  );
}

/* ——— Продукты для раздела «Питание» ——— */

export function Apple({ className = "" }: P) {
  return (
    <svg viewBox="0 0 48 48" className={`${base} ${className}`} aria-hidden>
      <path d="M24 14c-4-3-14-3-15 8-1 9 5 20 10 20 2.4 0 3-1 5-1s2.6 1 5 1c5 0 11-11 10-20-1-11-11-11-15-8Z" fill="#ff7b6b" />
      <path d="M24 14c0-4 1-7 4-9" stroke="#8a5a3b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M26 10c3-4 8-4 10-2-3 3-6 4-10 2Z" fill="#5fb873" />
      <ellipse cx="16" cy="22" rx="2.5" ry="4" fill="#fff" opacity=".5" />
    </svg>
  );
}

export function Carrot({ className = "" }: P) {
  return (
    <svg viewBox="0 0 48 48" className={`${base} ${className}`} aria-hidden>
      <path d="M14 18c4-4 12-4 15 0s1 10-4 14L8 44c-1 .7-2.4-.6-1.7-1.7Z" fill="#ff9a3d" />
      <path d="M14 26l4 2M11 33l4 1.6M19 21l3 3" stroke="#d9741f" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 16c0-6 4-10 8-11-1 4-3 7-6 9 4-2 9-2 13 0-4 3-9 4-13 3" fill="#5fb873" />
    </svg>
  );
}

export function Milk({ className = "" }: P) {
  return (
    <svg viewBox="0 0 48 48" className={`${base} ${className}`} aria-hidden>
      <path d="M17 4h14v6l5 8v24a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3V18l5-8Z" fill="#fff" stroke="#bcd9ec" strokeWidth="2" />
      <path d="M12 26h24v10H12Z" fill="#7cc4f0" />
      <rect x="17" y="2" width="14" height="5" rx="2" fill="#7cc4f0" />
      <circle cx="21" cy="31" r="1.5" fill="#fff" />
      <circle cx="27" cy="31" r="1.5" fill="#fff" />
    </svg>
  );
}

export function Porridge({ className = "" }: P) {
  return (
    <svg viewBox="0 0 64 48" className={`${base} ${className}`} aria-hidden>
      <path d="M22 10c-2-3 2-5 0-8M32 10c-2-3 2-5 0-8M42 10c-2-3 2-5 0-8" stroke="#c9bfae" strokeWidth="2" strokeLinecap="round" fill="none" />
      <ellipse cx="32" cy="20" rx="26" ry="6" fill="#fff4c9" />
      <circle cx="24" cy="18" r="3" fill="#ff7b6b" />
      <circle cx="31" cy="17" r="2.6" fill="#7c5cbf" />
      <circle cx="38" cy="19" r="3" fill="#ff7b6b" />
      <path d="M6 20h52c0 14-11 24-26 24S6 34 6 20Z" fill="#ffb08f" />
      <path d="M14 30c5 4 11 6 18 6" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" opacity=".6" />
    </svg>
  );
}

export function Bread({ className = "" }: P) {
  return (
    <svg viewBox="0 0 56 44" className={`${base} ${className}`} aria-hidden>
      <path d="M8 18C3 18 2 8 12 6c8-2 24-2 32 0 10 2 9 12 4 12v18a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4Z" fill="#f2b766" />
      <path d="M12 18v16a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V18" fill="#ffe2a8" />
      <path d="M20 24l3 3M30 23l3 3M25 30l3 3" stroke="#e0a14c" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Pear({ className = "" }: P) {
  return (
    <svg viewBox="0 0 40 48" className={`${base} ${className}`} aria-hidden>
      <path d="M20 10c-5 0-6 6-7 10-1 3-6 6-6 13 0 7 6 11 13 11s13-4 13-11c0-7-5-10-6-13-1-4-2-10-7-10Z" fill="#b6dc6a" />
      <path d="M20 10V4" stroke="#8a5a3b" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M21 7c2-3 6-3 8-2-2 3-5 3-8 2Z" fill="#5fb873" />
      <ellipse cx="14" cy="32" rx="2.5" ry="4" fill="#fff" opacity=".45" />
    </svg>
  );
}

export function Plate({ className = "", children }: P & { children?: ReactNode }) {
  return (
    <div className={`relative grid place-items-center rounded-full bg-white shadow-card ring-8 ring-white/70 ${className}`}>
      <div className="absolute inset-[12%] rounded-full border-2 border-dashed border-line" aria-hidden />
      {children}
    </div>
  );
}

/* ——— Иллюстрации кружков ——— */

export function DanceArt({ className = "" }: P) {
  return (
    <svg viewBox="0 0 200 150" className={`${base} ${className}`} aria-hidden>
      <circle cx="100" cy="80" r="58" fill="#fde7ef" />
      {/* ноты */}
      <g fill="#f28bb0">
        <path d="M38 40v22a6 6 0 1 1-3-5V36l14-4v5Z" />
        <path d="M160 28v20a5.5 5.5 0 1 1-3-5V24l12-3v5Z" opacity=".75" />
      </g>
      {/* танцующий ребёнок */}
      <circle cx="100" cy="40" r="13" fill="#ffcfb3" />
      <path d="M87 36c0-10 7-14 14-14s14 5 13 13c-4-4-10-6-14-6s-9 3-13 7Z" fill="#4a3426" />
      <circle cx="113" cy="28" r="5" fill="#f28bb0" />
      <circle cx="96" cy="41" r="1.4" fill="#2f2a3d" />
      <circle cx="104" cy="41" r="1.4" fill="#2f2a3d" />
      <path d="M96.5 46c2 1.6 5 1.6 7 0" stroke="#2f2a3d" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M92 56 66 40M108 56l26-18" stroke="#ffcfb3" strokeWidth="6" strokeLinecap="round" />
      <path d="M90 54h20l18 46H72Z" fill="#f28bb0" />
      <path d="M72 100h56" stroke="#e46f98" strokeWidth="4" strokeLinecap="round" />
      <path d="M92 100l-6 26M108 100l12 22" stroke="#ffcfb3" strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="84" cy="128" rx="8" ry="4" fill="#e46f98" />
      <ellipse cx="123" cy="124" rx="8" ry="4" fill="#e46f98" transform="rotate(-25 123 124)" />
      <path d="M40 120c10-6 20-6 30 0M132 132c10-6 20-6 30 0" stroke="#ffd65c" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function EnglishArt({ className = "" }: P) {
  return (
    <svg viewBox="0 0 200 150" className={`${base} ${className}`} aria-hidden>
      <circle cx="100" cy="82" r="58" fill="#e4f4fd" />
      {/* облачко речи */}
      <path d="M104 14h66a12 12 0 0 1 12 12v20a12 12 0 0 1-12 12h-44l-12 12v-12h-10a12 12 0 0 1-12-12V26a12 12 0 0 1 12-12Z" fill="#fff" stroke="#7cc4f0" strokeWidth="3" />
      <text x="137" y="43" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="17" fill="#1f6ea6">Hello!</text>
      {/* кубики ABC */}
      <g fontFamily="Arial, sans-serif" fontWeight="800" fontSize="26" textAnchor="middle">
        <rect x="34" y="96" width="40" height="40" rx="8" fill="#ffd65c" />
        <text x="54" y="125" fill="#2f2a3d">A</text>
        <rect x="80" y="96" width="40" height="40" rx="8" fill="#8fd09c" />
        <text x="100" y="125" fill="#2f2a3d">B</text>
        <rect x="126" y="96" width="40" height="40" rx="8" fill="#ffb08f" />
        <text x="146" y="125" fill="#2f2a3d">C</text>
        <rect x="57" y="54" width="40" height="40" rx="8" fill="#7cc4f0" transform="rotate(-8 77 74)" />
        <text x="77" y="83" fill="#fff" transform="rotate(-8 77 74)">a</text>
      </g>
      <circle cx="30" cy="40" r="5" fill="#ffd65c" />
      <circle cx="176" cy="96" r="4" fill="#f28bb0" />
    </svg>
  );
}

export function TaekwondoArt({ className = "" }: P) {
  return (
    <svg viewBox="0 0 200 150" className={`${base} ${className}`} aria-hidden>
      <circle cx="100" cy="82" r="58" fill="#e5f6e4" />
      {/* ребёнок в добоке, удар ногой */}
      <circle cx="84" cy="38" r="13" fill="#ffcfb3" />
      <path d="M71 35c0-9 6-13 13-13s13 4 13 12c-3-3-8-5-13-5s-9 2-13 6Z" fill="#2f2a3d" />
      <path d="M72 33h24" stroke="#ff7b6b" strokeWidth="4" strokeLinecap="round" />
      <path d="M96 33l8-4M96 34l8 3" stroke="#ff7b6b" strokeWidth="3" strokeLinecap="round" />
      <circle cx="80" cy="39" r="1.4" fill="#2f2a3d" />
      <circle cx="88" cy="39" r="1.4" fill="#2f2a3d" />
      <path d="M81 45c2 1.2 4 1.2 6 0" stroke="#2f2a3d" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M72 54h24l4 34H68Z" fill="#fff" stroke="#cfe3d2" strokeWidth="2" />
      <path d="M84 54v34" stroke="#cfe3d2" strokeWidth="2" />
      <path d="M66 74h38" stroke="#2f2a3d" strokeWidth="6" strokeLinecap="round" />
      <path d="M86 77l-6 12M88 77l6 11" stroke="#2f2a3d" strokeWidth="3" strokeLinecap="round" />
      <path d="M74 58 54 70M94 58l16-12" stroke="#fff" strokeWidth="9" strokeLinecap="round" />
      <path d="M74 58 54 70M94 58l16-12" stroke="#cfe3d2" strokeWidth="1.5" strokeLinecap="round" opacity=".7" />
      <circle cx="51" cy="72" r="5" fill="#ffcfb3" />
      <circle cx="112" cy="44" r="5" fill="#ffcfb3" />
      <path d="M76 88l-6 38" stroke="#fff" strokeWidth="11" strokeLinecap="round" />
      <path d="M92 86l50-8" stroke="#fff" strokeWidth="11" strokeLinecap="round" />
      <ellipse cx="68" cy="130" rx="9" ry="4.5" fill="#ffcfb3" />
      <ellipse cx="150" cy="77" rx="5" ry="8" fill="#ffcfb3" transform="rotate(-80 150 77)" />
      {/* линии движения */}
      <path d="M150 58c8 2 14 8 16 16M156 92c6-1 12 0 16 4" stroke="#8fd09c" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M30 120h40M130 132h44" stroke="#8fd09c" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}
