"use client";

import { useLang } from "@/lib/i18n";
import { delay } from "@/lib/ui";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Apple, Bread, Carrot, Milk, Pear, Plate, Porridge } from "@/components/decor/Illustrations";
import { Flower, Sparkle } from "@/components/decor/Shapes";
import { CheckIcon } from "@/components/ui/Icons";

/** Иллюстрации — только для настроения, это не меню. */
const plates = [
  { bg: "bg-sun-soft", food: <Porridge className="w-[62%]" /> },
  {
    bg: "bg-leaf-soft",
    food: (
      <span className="flex items-end gap-0.5">
        <Apple className="w-[2.6rem] sm:w-14" />
        <Pear className="w-8 sm:w-11" />
      </span>
    ),
  },
  {
    bg: "bg-sky-soft",
    food: (
      <span className="flex items-end gap-1">
        <Bread className="w-11 sm:w-16" />
        <Milk className="w-7 sm:w-10" />
      </span>
    ),
  },
  { bg: "bg-peach-soft", food: <Carrot className="w-[48%] -rotate-12" /> },
];

export function Nutrition() {
  const { t } = useLang();
  const n = t.nutrition;

  return (
    <section data-section="nutrition" className="relative py-14 sm:py-20 lg:py-24">
      <Flower petal="#ffb08f" className="absolute top-12 left-[4%] hidden size-8 animate-sway lg:block" />
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* тарелки */}
        <div data-reveal className="relative order-2 mx-auto w-full max-w-[26rem] lg:order-1 lg:max-w-[30rem]">
          <div aria-hidden className="absolute inset-[-4%] rounded-[2.5rem] bg-[radial-gradient(circle,#ffd9c7_1.6px,transparent_1.8px)] [background-size:18px_18px] opacity-70" />
          <ul aria-label={n.mealsLabel} className="relative grid grid-cols-2 gap-5 p-2 sm:gap-7 sm:p-4">
            {plates.map((p, i) => (
              <li key={i} data-reveal style={delay(i * 90)} className="relative">
                <Plate className="aspect-square w-full">
                  <span className={`absolute inset-[18%] rounded-full ${p.bg}`} aria-hidden />
                  <span className="relative grid w-full place-items-center">{p.food}</span>
                </Plate>
                <span
                  className={`absolute grid size-9 place-items-center rounded-full bg-ink font-display text-[15px] font-bold text-white shadow-soft sm:size-11 sm:text-[18px] ${
                    ["-top-1 -left-1", "-top-1 -right-1", "-bottom-1 -left-1", "-right-1 -bottom-1"][i]
                  }`}
                >
                  {i + 1}
                  <span className="sr-only"> {n.meal}</span>
                </span>
              </li>
            ))}
          </ul>
          {/* центр */}
          <div aria-hidden className="absolute top-1/2 left-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-sun text-center shadow-pop ring-[6px] ring-cream sm:size-28">
            <span className="font-display text-[1.6rem] leading-none font-bold text-ink sm:text-[2.8rem]">
              4<span className="text-[1rem] sm:text-[1.7rem]">×</span>
            </span>
          </div>
          <Sparkle tone="#ffd65c" className="absolute -top-3 right-6 size-6 animate-twinkle" />
        </div>

        {/* текст */}
        <div className="order-1 lg:order-2">
          <SectionHeading id="nutrition" eyebrow={n.eyebrow} title={n.title} text={n.text} tone="peach" />
          <ul className="mt-6 space-y-3">
            {n.points.map((p, i) => (
              <li key={p} data-reveal style={delay(i * 80)} className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-card ring-1 ring-line/70">
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-peach-soft text-peach-deep">
                  <CheckIcon className="size-4" strokeWidth={3} />
                </span>
                <span className="text-[15px] leading-relaxed font-semibold text-ink sm:text-[16px]">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
