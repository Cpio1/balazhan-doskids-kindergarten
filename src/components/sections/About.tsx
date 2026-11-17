"use client";

import { useLang } from "@/lib/i18n";
import { delay } from "@/lib/ui";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookIcon, BowlIcon, ClockIcon, SparkIcon } from "@/components/ui/Icons";
import { Heart, Ring, Sparkle, Triangle } from "@/components/decor/Shapes";

const featureStyles = [
  { icon: BookIcon, card: "bg-sky-soft", badge: "bg-white text-sky-deep" },
  { icon: SparkIcon, card: "bg-berry-soft", badge: "bg-white text-[#b23d6b]" },
  { icon: BowlIcon, card: "bg-peach-soft", badge: "bg-white text-peach-deep" },
  { icon: ClockIcon, card: "bg-leaf-soft", badge: "bg-white text-leaf-deep" },
];

export function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section data-section="about" className="relative py-14 sm:py-20 lg:py-24">
      <Ring className="absolute top-10 right-[6%] hidden size-8 lg:block" />
      <Triangle className="absolute bottom-16 left-[3%] hidden size-7 rotate-12 animate-float lg:block" />

      <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14">
        <div>
          <SectionHeading id="about" eyebrow={a.eyebrow} title={a.title} tone="sky" />
          <p data-reveal className="mt-4 text-[15.5px] leading-relaxed text-ink sm:text-[17px]">
            {a.lead}
          </p>
          <p data-reveal className="mt-3 text-[15.5px] leading-relaxed text-ink-soft sm:text-[17px]">
            {a.text}
          </p>

          <figure data-reveal className="relative mt-7 rounded-[1.75rem] bg-sun-soft px-5 py-5 sm:px-7 sm:py-6">
            <Heart className="absolute -top-3 left-6 size-7" />
            <Sparkle tone="#ffd65c" className="absolute -right-2 -bottom-2 size-7" />
            <blockquote className="font-display text-[16.5px] leading-snug font-bold text-ink sm:text-[19px]">
              {a.quote}
            </blockquote>
          </figure>
        </div>

        <ul className="grid gap-3 min-[460px]:grid-cols-2 sm:gap-4">
          {a.features.map((f, i) => {
            const s = featureStyles[i];
            const Icon = s.icon;
            return (
              <li
                key={f.title}
                data-reveal
                style={delay(i * 80)}
                className={`flex gap-4 rounded-[1.75rem] p-5 min-[460px]:flex-col sm:p-6 ${s.card} ${i % 2 ? "min-[460px]:translate-y-6" : ""}`}
              >
                <span className={`grid size-12 shrink-0 place-items-center rounded-2xl shadow-soft ${s.badge}`}>
                  <Icon className="size-6" />
                </span>
                <span>
                  <span className="block font-display text-[17px] leading-tight font-bold text-ink sm:text-[19px]">{f.title}</span>
                  <span className="mt-1.5 block text-[14.5px] leading-relaxed text-ink-soft sm:text-[15.5px]">{f.text}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
