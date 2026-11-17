"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Photo } from "@/lib/media";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbox } from "@/components/sections/Lightbox";
import { ChevronDown, ChevronLeft, ChevronRight, ExpandIcon, InstagramIcon } from "@/components/ui/Icons";
import { Cloud, Rainbow, Sparkle, Star } from "@/components/decor/Shapes";

const DESKTOP_LIMIT = 9;

export function Gallery({ photos }: { photos: Photo[] }) {
  const { t } = useLang();
  const g = t.gallery;
  const [open, setOpen] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  return (
    <section data-section="gallery" className="relative py-14 sm:py-20 lg:py-24">
      <Sparkle className="absolute top-14 right-[8%] hidden size-6 animate-twinkle md:block" />
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading id="gallery" eyebrow={g.eyebrow} title={g.title} text={g.text} tone="leaf" />
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            className="hidden min-h-12 items-center gap-2 rounded-full bg-white px-5 text-[15px] font-bold text-ink shadow-soft ring-1 ring-line transition-colors hover:bg-berry-soft md:inline-flex"
          >
            <InstagramIcon className="size-5 text-[#c13584]" />
            {site.instagramHandle}
          </a>
        </div>

        {photos.length === 0 ? (
          <EmptyGallery />
        ) : (
          <>
            {/* Телефон: горизонтальная лента с прокруткой */}
            <MobileStrip photos={photos} onOpen={setOpen} />

            {/* Планшет и компьютер: «кирпичная» раскладка с сохранением пропорций */}
            <ul className="mt-10 hidden columns-2 gap-4 sm:block lg:columns-3 lg:gap-5">
              {photos.map((p, i) => (
                <li
                  key={p.src}
                  className={`mb-4 break-inside-avoid lg:mb-5 ${!expanded && i >= DESKTOP_LIMIT ? "hidden" : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(i)}
                    aria-label={`${g.open}: ${i + 1}`}
                    className="group relative block w-full overflow-hidden rounded-[1.5rem] bg-cream-deep shadow-card"
                  >
                    <Image
                      src={p.src}
                      alt={`${g.photo} ${i + 1}`}
                      width={p.width}
                      height={p.height}
                      sizes="(min-width: 1024px) 380px, 50vw"
                      quality={70}
                      loading="lazy"
                      className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <span className="absolute right-3 bottom-3 grid size-10 place-items-center rounded-full bg-white/90 text-ink opacity-0 shadow-soft transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                      <ExpandIcon className="size-[18px]" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            {photos.length > DESKTOP_LIMIT ? (
              <div className="mt-4 hidden justify-center sm:flex">
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  aria-expanded={expanded}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-leaf-soft px-6 text-[15px] font-bold text-leaf-deep transition-colors hover:bg-leaf/40"
                >
                  {expanded ? g.less : `${g.more} (${photos.length - DESKTOP_LIMIT})`}
                  <ChevronDown className={`size-5 transition-transform ${expanded ? "rotate-180" : ""}`} />
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>

      {open !== null ? (
        <Lightbox photos={photos} index={open} onChange={setOpen} onClose={() => setOpen(null)} />
      ) : null}
    </section>
  );
}

function MobileStrip({ photos, onOpen }: { photos: Photo[]; onOpen: (i: number) => void }) {
  const { t } = useLang();
  const g = t.gallery;
  const ref = useRef<HTMLUListElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const list = ref.current;
    if (!list) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setCurrent(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { root: list, threshold: 0.6 },
    );
    list.querySelectorAll("li").forEach((li) => io.observe(li));
    return () => io.disconnect();
  }, [photos]);

  const scrollTo = (i: number) => {
    const li = ref.current?.children[i] as HTMLElement | undefined;
    li?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <div className="mt-8 sm:hidden">
      <ul
        ref={ref}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory items-center gap-3 overflow-x-auto overscroll-x-contain px-4 pb-2"
      >
        {photos.map((p, i) => (
          <li
            key={p.src}
            data-index={i}
            className="shrink-0 snap-center"
            // одинаковая высота ленты (до 300px), ширина — строго по пропорции фото
            style={{ height: `min(300px, calc(84vw * ${p.height} / ${p.width}))`, aspectRatio: `${p.width} / ${p.height}` }}
          >
            <button
              type="button"
              onClick={() => onOpen(i)}
              aria-label={`${g.open}: ${i + 1}`}
              className="relative block size-full overflow-hidden rounded-[1.25rem] bg-cream-deep shadow-card"
            >
              <Image
                src={p.src}
                alt={`${g.photo} ${i + 1}`}
                fill
                sizes="82vw"
                quality={70}
                loading="lazy"
                className="object-cover"
              />
            </button>
          </li>
        ))}
      </ul>
      {photos.length > 1 ? (
        <div className="mt-3 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => scrollTo(Math.max(0, current - 1))}
            disabled={current === 0}
            aria-label={g.prev}
            className="grid size-11 place-items-center rounded-full bg-white text-ink shadow-soft ring-1 ring-line disabled:opacity-40"
          >
            <ChevronLeft className="size-5" />
          </button>
          <p className="text-[14px] font-bold text-ink-soft tabular-nums" aria-live="polite">
            {current + 1} / {photos.length}
          </p>
          <button
            type="button"
            onClick={() => scrollTo(Math.min(photos.length - 1, current + 1))}
            disabled={current === photos.length - 1}
            aria-label={g.next}
            className="grid size-11 place-items-center rounded-full bg-white text-ink shadow-soft ring-1 ring-line disabled:opacity-40"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      ) : null}
    </div>
  );
}

function EmptyGallery() {
  const { t } = useLang();
  const g = t.gallery;
  return (
    <div data-reveal className="relative mt-9 overflow-hidden rounded-[2rem] bg-leaf-soft px-5 py-9 sm:mt-12 sm:px-10 sm:py-12">
      <Cloud className="absolute top-5 right-5 w-16 sm:w-24" />
      <Star className="absolute bottom-6 left-6 hidden size-7 sm:block" />
      {/* «рамки» будущих фото */}
      <div aria-hidden className="mx-auto mb-7 flex max-w-xs items-end justify-center gap-3 sm:max-w-sm">
        <span className="h-20 w-16 -rotate-6 rounded-2xl bg-white shadow-card ring-4 ring-white sm:h-24 sm:w-20">
          <span className="block size-full rounded-xl bg-sun-soft" />
        </span>
        <span className="grid h-28 w-24 place-items-center rounded-2xl bg-white shadow-pop ring-4 ring-white sm:h-32 sm:w-28">
          <Rainbow className="w-14 sm:w-16" />
        </span>
        <span className="h-20 w-16 rotate-6 rounded-2xl bg-white shadow-card ring-4 ring-white sm:h-24 sm:w-20">
          <span className="block size-full rounded-xl bg-sky-soft" />
        </span>
      </div>
      <div className="relative mx-auto max-w-md text-center">
        <h3 className="text-[1.3rem] leading-tight font-bold text-ink sm:text-[1.5rem]">{g.emptyTitle}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink-soft sm:text-[16px]">{g.emptyText}</p>
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-[15px] font-bold text-ink shadow-soft ring-1 ring-line transition-colors hover:bg-berry-soft"
        >
          <InstagramIcon className="size-5 text-[#c13584]" />
          {g.emptyCta}
        </a>
      </div>
    </div>
  );
}
