"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";
import type { Photo } from "@/lib/media";
import { site, whatsappLink } from "@/lib/site";
import { delay } from "@/lib/ui";
import { HeroScene } from "@/components/decor/Illustrations";
import { Cloud, Dots, Flower, Rainbow, Sparkle, Squiggle, Star, Sun } from "@/components/decor/Shapes";
import { ArrowRight, ClockIcon, WhatsAppIcon } from "@/components/ui/Icons";

const statTones = [
  "bg-sun-soft ring-sun/50",
  "bg-sky-soft ring-sky/45",
  "bg-peach-soft ring-peach/50",
  "bg-leaf-soft ring-leaf/50",
];

export function Hero({ photo }: { photo: Photo | null }) {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section id="top" className="relative isolate overflow-hidden bg-gradient-to-b from-sun-soft via-[#fff6dc] to-cream pt-16 lg:pt-[76px]">
      {/* фон: мягкие пятна и фигурки (не заходят на текст) */}
      <div aria-hidden className="absolute -top-24 -right-24 -z-10 size-[22rem] rounded-full bg-sky-soft/80 blur-2xl lg:size-[34rem]" />
      <div aria-hidden className="absolute bottom-10 -left-28 -z-10 size-72 rounded-full bg-peach-soft/80 blur-2xl" />
      <Cloud className="absolute top-20 left-[52%] -z-10 hidden w-24 animate-float-slow lg:block" />
      <Cloud className="absolute top-24 right-3 -z-10 w-14 animate-float-slow sm:w-20 lg:hidden" />
      <Sparkle className="absolute top-[38%] left-[46%] -z-10 hidden size-5 animate-twinkle lg:block" />
      <Dots className="absolute bottom-24 left-4 -z-10 hidden w-16 lg:block" />

      <div className="wrap grid items-center gap-8 pt-8 pb-10 sm:pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-10 lg:pb-14 xl:gap-16">
        {/* текст */}
        <div className="relative">
          <p data-reveal className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3.5 py-1.5 text-[13px] font-extrabold text-sky-deep shadow-soft ring-1 ring-sky/30 sm:text-[14px]">
            <Star className="size-4" />
            {h.eyebrow}
          </p>

          <h1 data-reveal style={delay(80)} className="mt-4 sm:mt-5">
            <span className="relative inline-block text-[2.6rem] leading-none font-bold text-ink min-[400px]:text-[3rem] sm:text-[3.8rem] lg:text-[4rem] xl:text-[4.5rem]">
              Балажан
              <Squiggle tone="#f28bb0" className="absolute top-full left-1 mt-1 w-24 sm:mt-1.5 sm:w-36 lg:w-40" />
              <Sun className="absolute -top-6 -right-11 size-10 animate-spin-slow sm:-top-8 sm:-right-14 sm:size-14" />
            </span>
            <span className="mt-8 block max-w-xl text-[1.2rem] leading-[1.25] font-semibold text-ink min-[400px]:text-[1.35rem] sm:mt-10 sm:text-[1.7rem] lg:text-[1.7rem] xl:text-[1.95rem]">
              {h.title}
            </span>
          </h1>

          <p data-reveal style={delay(140)} className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-ink-soft sm:text-[17px]">
            {h.text}
          </p>

          <div data-reveal style={delay(200)} className="mt-6 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <a
              href={whatsappLink(site.phones[0], t.whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-wa px-6 text-[16px] font-bold text-white shadow-pop transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-wa-hover"
            >
              <WhatsAppIcon className="size-5" />
              {h.cta}
            </a>
            <a
              href="#contacts"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-white px-6 text-[16px] font-bold text-ink shadow-soft ring-1 ring-line transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-sky-soft"
            >
              {h.secondary}
              <ArrowRight className="size-[18px]" />
            </a>
          </div>
        </div>

        {/* фото */}
        <div data-reveal style={delay(120)} className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
          <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rotate-2 rounded-[2.2rem] bg-sky sm:translate-x-4 sm:translate-y-4 lg:rounded-[2.75rem]" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.2rem] bg-sky-soft ring-[6px] ring-white sm:ring-8 lg:aspect-[5/4.3] lg:max-h-[30rem] lg:w-full lg:rounded-[2.75rem]">
            {photo ? (
              <Image
                src={photo.src}
                alt={h.photoAlt}
                fill
                priority
                sizes="(min-width: 1024px) 560px, (min-width: 640px) 540px, 94vw"
                quality={80}
                className="object-cover"
              />
            ) : (
              <HeroScene className="size-full object-cover" />
            )}
          </div>

          {/* наклейки вокруг фото */}
          <div className="absolute -bottom-5 -left-1 flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 shadow-pop ring-1 ring-line sm:-left-5 sm:px-4 sm:py-3">
            <span className="grid size-9 place-items-center rounded-xl bg-sun-soft text-sun-deep sm:size-10">
              <ClockIcon className="size-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-[11.5px] font-bold text-ink-soft sm:text-[12.5px]">{h.hours}</span>
              <span className="block font-display text-[16px] font-bold text-ink sm:text-[18px]">{site.hours}</span>
            </span>
          </div>
          <Rainbow className="absolute -top-5 right-4 w-16 sm:-top-7 sm:w-20" />
          <Flower className="absolute -right-2 bottom-12 size-8 animate-sway sm:-right-4 sm:size-10" />
        </div>
      </div>

      {/* ключевые факты */}
      <div className="wrap relative pb-10 sm:pb-12">
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {h.stats.map((s, i) => (
            <li
              key={s.label}
              data-reveal
              style={delay(i * 70)}
              className={`relative flex min-h-[5.5rem] flex-col justify-center overflow-hidden rounded-3xl px-4 py-3 ring-1 sm:px-5 lg:flex-row lg:items-center lg:justify-start lg:gap-3 ${statTones[i]}`}
            >
              <span className={`font-display leading-none font-bold text-ink ${s.value.length > 6 ? "text-[1.3rem] sm:text-[1.6rem]" : "text-[1.75rem] sm:text-[2.1rem]"}`}>
                {s.value}
              </span>
              <span className="mt-1.5 text-[13.5px] leading-snug font-bold text-ink-soft sm:text-[14.5px] lg:mt-0">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
