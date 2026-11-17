"use client";

import { useLang } from "@/lib/i18n";
import { site, whatsappLink } from "@/lib/site";
import { delay } from "@/lib/ui";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Balloon, Cloud, Star, Wave } from "@/components/decor/Shapes";
import { ChatIcon } from "@/components/ui/Icons";

/** Пять шариков — пять групп (без выдуманных названий и возрастов групп). */
const balloons = ["#f28bb0", "#ffd65c", "#7cc4f0", "#8fd09c", "#ffb08f"];

export function Groups() {
  const { t } = useLang();
  const g = t.groups;

  return (
    <section data-section="groups" className="relative">
      <Wave fill="#e4f4fd" className="h-6 sm:h-10" />
      <div className="relative overflow-hidden bg-sky-soft py-12 sm:py-16 lg:py-20">
        <Cloud className="absolute top-8 right-[5%] w-20 animate-float-slow sm:w-28" />
        <Cloud className="absolute bottom-10 left-[2%] hidden w-24 animate-float lg:block" />

        <div className="wrap">
          <SectionHeading id="groups" eyebrow={g.eyebrow} title={g.title} text={g.text} tone="sky" align="center" />

          {/* шарики-группы */}
          <ul data-reveal className="mx-auto mt-9 flex max-w-xl items-end justify-center gap-2 sm:mt-12 sm:gap-5" aria-label={`5 ${g.groupLabel}`}>
            {balloons.map((color, i) => (
              <li key={color} className="flex flex-col items-center" style={{ transform: `translateY(${[8, -6, -14, -4, 10][i]}px)` }}>
                <span className="relative">
                  <Balloon
                    tone={color}
                    className="h-[4.6rem] w-10 animate-float min-[400px]:h-24 min-[400px]:w-[3.3rem] sm:h-28 sm:w-16"
                  />
                  <span className="absolute inset-x-0 top-[22%] text-center font-display text-[17px] font-bold text-white min-[400px]:text-[20px] sm:text-[24px]" aria-hidden>
                    {i + 1}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          {/* шкала возраста */}
          <div data-reveal className="mx-auto mt-6 max-w-3xl rounded-[1.75rem] bg-white p-5 shadow-card sm:mt-8 sm:p-7">
            <p className="text-center text-[13.5px] font-bold text-ink-soft sm:text-[14.5px]">{g.scale}</p>
            <div className="mt-4 grid grid-cols-2 items-center gap-3 sm:flex sm:gap-4">
              <span className="justify-self-start shrink-0 rounded-full bg-sun-soft px-3 py-1.5 font-display text-[14px] font-bold text-ink sm:px-4 sm:text-[17px]">
                {g.from}
              </span>
              <div className="relative order-first col-span-2 mx-2 h-3 flex-1 rounded-full sm:order-none sm:mx-0 bg-gradient-to-r from-sun via-sky to-leaf" aria-hidden>
                {[0, 25, 50, 75, 100].map((p) => (
                  <span
                    key={p}
                    className="absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-ink/80"
                    style={{ left: `${p}%` }}
                  />
                ))}
              </div>
              <span className="justify-self-end shrink-0 rounded-full bg-leaf-soft px-3 py-1.5 font-display text-[14px] font-bold text-ink sm:px-4 sm:text-[17px]">
                {g.to}
              </span>
            </div>
          </div>

          {/* факты + вопрос */}
          <div className="mx-auto mt-4 grid max-w-3xl gap-3 sm:mt-5 sm:grid-cols-3 sm:gap-4">
            {g.facts.map((f, i) => (
              <div key={f.label} data-reveal style={delay(i * 70)} className="flex items-center gap-3 rounded-3xl bg-white/80 px-4 py-3.5 ring-1 ring-white sm:flex-col sm:items-start sm:gap-1 sm:px-5 sm:py-4">
                <span className="min-w-12 font-display text-[1.6rem] leading-none font-bold text-sky-deep sm:text-[2rem]">{f.value}</span>
                <span className="text-[14.5px] leading-snug font-bold text-ink-soft">{f.label}</span>
              </div>
            ))}
          </div>

          <div data-reveal className="relative mx-auto mt-6 flex max-w-3xl flex-col items-start gap-4 rounded-[1.75rem] bg-ink px-5 py-5 text-white sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <Star className="absolute -top-3 right-8 size-7" />
            <p className="max-w-md text-[15px] leading-relaxed text-white/85 sm:text-[16px]">{g.note}</p>
            <a
              href={whatsappLink(site.phones[0], t.whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-sun px-5 text-[15px] font-bold text-ink transition-colors hover:bg-white sm:w-auto"
            >
              <ChatIcon className="size-5" />
              {g.cta}
            </a>
          </div>
        </div>
      </div>
      <Wave fill="#e4f4fd" flip className="h-6 sm:h-10" />
    </section>
  );
}
