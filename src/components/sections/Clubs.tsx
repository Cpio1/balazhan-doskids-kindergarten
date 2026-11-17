"use client";

import type { ComponentType } from "react";
import { useLang } from "@/lib/i18n";
import { delay } from "@/lib/ui";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DanceArt, EnglishArt, TaekwondoArt } from "@/components/decor/Illustrations";
import { Squiggle, Star } from "@/components/decor/Shapes";

type Style = {
  Art: ComponentType<{ className?: string }>;
  card: string;
  art: string;
  tag: string;
  chip: string;
  tilt: string;
};

/** У каждого кружка — своя цветовая тема, форма и иллюстрация. */
const styles: Record<string, Style> = {
  dance: {
    Art: DanceArt,
    card: "bg-berry-soft ring-berry/30",
    art: "bg-white/70 rounded-[2rem_2rem_2rem_0.75rem]",
    tag: "bg-berry text-white",
    chip: "bg-white text-[#a8345f]",
    tilt: "lg:-rotate-[1.2deg]",
  },
  english: {
    Art: EnglishArt,
    card: "bg-sky-soft ring-sky/35",
    art: "bg-white/70 blob",
    tag: "bg-sky-deep text-white",
    chip: "bg-white text-sky-deep",
    tilt: "lg:translate-y-6",
  },
  taekwondo: {
    Art: TaekwondoArt,
    card: "bg-leaf-soft ring-leaf/40",
    art: "bg-white/70 rounded-[0.75rem_2rem_2rem_2rem]",
    tag: "bg-leaf-deep text-white",
    chip: "bg-white text-leaf-deep",
    tilt: "lg:rotate-[1.2deg]",
  },
};

export function Clubs() {
  const { t } = useLang();
  const c = t.clubs;

  return (
    <section data-section="clubs" className="relative overflow-hidden bg-cream-deep/60 py-14 sm:py-20 lg:py-24">
      <Star className="absolute top-12 right-[7%] size-7 animate-twinkle" />
      <Squiggle tone="#ffb08f" className="absolute top-24 left-[3%] hidden w-20 lg:block" />

      <div className="wrap">
        <SectionHeading id="clubs" eyebrow={c.eyebrow} title={c.title} text={c.text} tone="berry" align="center" />

        <ul className="mt-9 grid gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:pb-6">
          {c.items.map((item, i) => {
            const s = styles[item.key];
            const Art = s.Art;
            return (
              <li
                key={item.key}
                data-reveal
                style={delay(i * 100)}
                className={`group ${i === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <article
                  className={`flex h-full flex-col rounded-[2rem] p-4 ring-1 transition-transform duration-500 group-hover:rotate-0 sm:p-5 ${s.card} ${s.tilt} ${
                    i === 2 ? "md:grid md:grid-cols-[1fr_1.1fr] md:items-center md:gap-5 lg:flex" : ""
                  }`}
                >
                  <div className={`relative grid place-items-center px-4 pt-9 pb-3 ${s.art}`}>
                    <Art className="h-36 w-auto max-w-full transition-transform duration-500 group-hover:scale-105 sm:h-40" />
                    <span className={`absolute top-3 left-3 rounded-full px-3 py-1 text-[12.5px] font-extrabold ${s.tag}`}>
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col px-1 pt-4 pb-1">
                    <h3 className="text-[1.4rem] leading-tight font-bold text-ink sm:text-[1.55rem]">{item.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-soft sm:text-[15.5px]">{item.text}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.benefits.map((b) => (
                        <li key={b} className={`rounded-full px-3 py-1.5 text-[13px] font-bold ${s.chip}`}>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
