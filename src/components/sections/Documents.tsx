"use client";

import { documents } from "@/lib/documents";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";
import { delay } from "@/lib/ui";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalIcon, FileIcon, PhoneIcon } from "@/components/ui/Icons";
import { Dots } from "@/components/decor/Shapes";

const cardTones = ["bg-sun-soft text-sun-deep", "bg-sky-soft text-sky-deep", "bg-peach-soft text-peach-deep", "bg-leaf-soft text-leaf-deep"];

/**
 * Документы детского сада. Список задаётся в src/lib/documents.ts.
 * Пока он пуст — показывается аккуратная заглушка без выдуманных ссылок.
 */
export function Documents() {
  const { t, lang } = useLang();
  const d = t.documents;

  return (
    <section data-section="documents" className="relative py-14 sm:py-20 lg:py-24">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[2rem] bg-white p-5 shadow-card ring-1 ring-line sm:p-8 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12 lg:p-12">
          <Dots className="absolute top-5 right-5 w-14 sm:w-16" />
          <SectionHeading id="documents" eyebrow={d.eyebrow} title={d.title} text={d.text} tone="sun" />

          {documents.length > 0 ? (
            <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:mt-0">
              {documents.map((doc, i) => (
                <li key={doc.url} data-reveal style={delay(i * 60)}>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full min-h-16 items-center gap-3.5 rounded-2xl bg-cream p-4 ring-1 ring-line transition-colors hover:bg-sun-soft"
                  >
                    <span className={`grid size-11 shrink-0 place-items-center rounded-xl ${cardTones[i % cardTones.length]}`}>
                      <FileIcon className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[15.5px] leading-snug font-bold text-ink">{doc.title[lang]}</span>
                      <span className="mt-0.5 block text-[13px] font-semibold text-ink-soft">{d.sources[doc.source]}</span>
                    </span>
                    <ExternalIcon className="size-5 shrink-0 text-ink-soft transition-colors group-hover:text-ink" />
                    <span className="sr-only">{d.open}</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div data-reveal className="mt-7 flex flex-col gap-5 rounded-[1.5rem] border-2 border-dashed border-line bg-cream p-5 sm:flex-row sm:items-center sm:p-6 lg:mt-0">
              {/* стопка «папок» */}
              <div aria-hidden className="relative mx-auto h-20 w-24 shrink-0 sm:mx-0">
                <span className="absolute inset-x-3 top-0 h-16 -rotate-6 rounded-xl bg-sky-soft ring-2 ring-white" />
                <span className="absolute inset-x-1.5 top-2 h-16 rotate-3 rounded-xl bg-peach-soft ring-2 ring-white" />
                <span className="absolute inset-x-0 top-4 grid h-16 place-items-center rounded-xl bg-sun ring-2 ring-white">
                  <FileIcon className="size-7 text-ink" />
                </span>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-[1.15rem] leading-tight font-bold text-ink sm:text-[1.3rem]">{d.emptyTitle}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{d.emptyText}</p>
                <a
                  href={`tel:${site.phones[0].tel}`}
                  className="mt-4 inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-5 text-[15px] font-bold text-white transition-colors hover:bg-sky-deep"
                >
                  <PhoneIcon className="size-[18px]" />
                  {d.emptyCta}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
