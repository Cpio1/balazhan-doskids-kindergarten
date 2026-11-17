"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { site, twoGisRouteUrl, twoGisUrl, whatsappLink } from "@/lib/site";
import { TwoGisMap } from "@/components/sections/TwoGisMap";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckIcon, ClockIcon, CopyIcon, ExternalIcon, InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { Flower, Sun, Wave } from "@/components/decor/Shapes";

export function Contacts() {
  const { t, lang } = useLang();
  const c = t.contacts;
  const [copied, setCopied] = useState(false);
  const address = site.address[lang];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* буфер обмена недоступен — ничего не делаем */
    }
  };

  return (
    <section data-section="contacts" className="relative">
      <Wave fill="#fff4c9" className="h-6 sm:h-10" />
      <div className="relative overflow-hidden bg-sun-soft pt-10 pb-14 sm:pt-14 sm:pb-20 lg:pb-24">
        <Sun className="absolute top-6 right-[5%] hidden size-14 animate-spin-slow md:block" />
        <Flower className="absolute bottom-10 left-[3%] hidden size-9 animate-sway lg:block" />

        <div className="wrap">
          <SectionHeading id="contacts" eyebrow={c.eyebrow} title={c.title} text={c.text} tone="peach" />

          <div className="mt-8 grid gap-5 sm:mt-10 lg:grid-cols-[1fr_1.15fr] lg:gap-6">
            {/* карточки с контактами */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {/* адрес */}
              <div data-reveal className="rounded-[1.75rem] bg-white p-5 shadow-card sm:col-span-2 lg:col-span-1">
                <div className="flex items-start gap-3.5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-peach-soft text-peach-deep">
                    <PinIcon className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13px] font-extrabold text-ink-soft">{c.address}</p>
                    <p className="mt-0.5 text-[16px] leading-snug font-bold text-ink sm:text-[17px]">{address}</p>
                    <button
                      type="button"
                      onClick={copy}
                      className="mt-2.5 inline-flex min-h-10 items-center gap-1.5 rounded-full bg-cream px-3.5 text-[13.5px] font-bold text-ink-soft ring-1 ring-line transition-colors hover:text-ink"
                    >
                      {copied ? <CheckIcon className="size-4 text-leaf-deep" /> : <CopyIcon className="size-4" />}
                      <span aria-live="polite">{copied ? c.copied : c.copy}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* телефоны */}
              <div data-reveal className="rounded-[1.75rem] bg-white p-5 shadow-card">
                <div className="flex items-center gap-3.5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-sky-soft text-sky-deep">
                    <PhoneIcon className="size-5" />
                  </span>
                  <p className="text-[13px] font-extrabold text-ink-soft">{c.phones}</p>
                </div>
                <ul className="mt-3 space-y-2.5">
                  {site.phones.map((p) => (
                    <li key={p.tel} className="flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-cream px-3.5 py-2.5">
                      <a href={`tel:${p.tel}`} className="font-display text-[15px] font-bold whitespace-nowrap text-ink hover:text-sky-deep min-[400px]:text-[16.5px]">
                        {p.display}
                      </a>
                      <span className="ml-auto flex gap-2">
                        <a
                          href={`tel:${p.tel}`}
                          aria-label={`${c.call}: ${p.display}`}
                          className="grid size-11 place-items-center rounded-full bg-sky-soft text-sky-deep transition-colors hover:bg-sky hover:text-white"
                        >
                          <PhoneIcon className="size-5" />
                        </a>
                        <a
                          href={whatsappLink(p, t.whatsappText)}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${c.whatsapp}: ${p.display}`}
                          className="grid size-11 place-items-center rounded-full bg-wa text-white transition-colors hover:bg-wa-hover"
                        >
                          <WhatsAppIcon className="size-5" />
                        </a>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* время + instagram */}
              <div className="grid gap-4 min-[520px]:grid-cols-2 sm:grid-cols-1 xl:grid-cols-2">
                <div data-reveal className="flex items-center gap-3.5 rounded-[1.75rem] bg-white p-5 shadow-card">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-leaf-soft text-leaf-deep">
                    <ClockIcon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-[13px] font-extrabold text-ink-soft">{c.hours}</span>
                    <span className="block font-display text-[17px] font-bold whitespace-nowrap text-ink">{site.hours}</span>
                  </span>
                </div>
                <a
                  data-reveal
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 rounded-[1.75rem] bg-white p-5 shadow-card transition-colors hover:bg-berry-soft"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white">
                    <InstagramIcon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[13px] font-extrabold text-ink-soft">{c.instagram}</span>
                    <span className="block truncate text-[14.5px] font-bold text-ink">{site.instagramHandle}</span>
                  </span>
                </a>
              </div>

              <a
                data-reveal
                href={whatsappLink(site.phones[0], t.whatsappText)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-wa px-6 text-[16px] font-bold text-white shadow-pop transition-colors hover:bg-wa-hover sm:col-span-2 lg:col-span-1"
              >
                <WhatsAppIcon className="size-5" />
                {c.write}
              </a>
            </div>

            {/* карта 2GIS */}
            <div data-reveal className="flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-card ring-1 ring-line">
              <div className="relative isolate h-[19rem] overflow-hidden bg-sky-soft sm:h-[24rem] lg:h-auto lg:min-h-[26rem] lg:flex-1">
                <TwoGisMap address={address} title={c.mapTitle} lang={lang} />
              </div>
              <div className="flex flex-col gap-3 p-4 sm:p-5 xl:flex-row xl:items-center xl:justify-between">
                <p className="text-[14px] leading-snug text-ink-soft">
                  <span className="font-bold text-ink">{c.mapTitle}.</span> {c.mapNote}
                </p>
                <span className="flex shrink-0 flex-wrap gap-2">
                  <a
                    href={twoGisRouteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-sky-soft px-4 text-[14.5px] font-bold text-sky-deep transition-colors hover:bg-sky hover:text-white"
                  >
                    {c.route}
                  </a>
                  <a
                    href={twoGisUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-ink px-4 text-[14.5px] font-bold whitespace-nowrap text-white transition-colors hover:bg-sky-deep"
                  >
                    {c.openMap}
                    <ExternalIcon className="size-4" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
