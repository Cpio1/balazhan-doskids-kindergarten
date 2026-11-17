"use client";

import { useLang } from "@/lib/i18n";
import { navItems } from "@/lib/nav";
import { site } from "@/lib/site";
import { LogoMark } from "@/components/decor/Illustrations";
import { ArrowUp, InstagramIcon, PhoneIcon } from "@/components/ui/Icons";
import { Star, Wave } from "@/components/decor/Shapes";

export function Footer() {
  const { t, lang } = useLang();
  return (
    <footer className="relative bg-sun-soft text-white">
      <Wave fill="#2f2a3d" className="h-6 sm:h-10" />
      <div className="relative overflow-hidden bg-ink pb-[max(2rem,env(safe-area-inset-bottom))]">
        <Star className="absolute top-8 right-[8%] size-6 opacity-60" />
        <Star tone="#7cc4f0" className="absolute bottom-24 left-[46%] hidden size-4 opacity-60 md:block" />
        <div className="wrap grid gap-8 pt-8 md:grid-cols-[1.3fr_1fr] md:pt-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="size-11" />
              <span className="font-display text-2xl font-bold">Балажан</span>
            </div>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/75">{t.footer.tagline}</p>
            <p className="mt-2 max-w-sm text-[13.5px] leading-relaxed text-white/55">{site.legalName[lang]}</p>
          </div>

          <nav aria-label={t.header.menuTitle} className="hidden lg:block">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-[15px]">
              {navItems(t).map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-white/75 transition-colors hover:text-sun">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-2.5 text-[15px]">
            {site.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-2.5 text-white/85 hover:text-sun">
                <PhoneIcon className="size-4 shrink-0 text-sun" />
                {p.display}
              </a>
            ))}
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 break-all text-white/85 hover:text-sun"
            >
              <InstagramIcon className="size-4 shrink-0 text-sun" />
              {site.instagramHandle}
            </a>
          </div>
        </div>

        <div className="wrap mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 text-[13px] text-white/55">
          <p>© {new Date().getFullYear()} «Балажан» · Doskids</p>
          <a href="#top" className="inline-flex min-h-10 items-center gap-1.5 rounded-full px-3 text-white/75 ring-1 ring-white/15 hover:text-sun">
            <ArrowUp className="size-4" />
            {t.footer.top}
          </a>
        </div>
      </div>
    </footer>
  );
}
