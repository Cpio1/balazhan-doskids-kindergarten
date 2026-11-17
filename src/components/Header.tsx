"use client";

import { useEffect, useState } from "react";
import { useDocumentLang, useLang, type Lang } from "@/lib/i18n";
import { navItems, sections, type SectionId } from "@/lib/nav";
import { site, whatsappLink } from "@/lib/site";
import { LogoMark } from "@/components/decor/Illustrations";
import { CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";

function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLang();
  const options: { value: Lang; label: string }[] = [
    { value: "kk", label: "KZ" },
    { value: "ru", label: "RU" },
  ];
  return (
    <div
      role="group"
      aria-label={t.header.language}
      className={`relative flex rounded-full bg-cream-deep p-1 ring-1 ring-line ${className}`}
    >
      <span
        aria-hidden
        className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-white shadow-soft transition-transform duration-300 ${
          lang === "ru" ? "translate-x-full" : ""
        }`}
      />
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => setLang(o.value)}
          aria-pressed={lang === o.value}
          lang={o.value}
          className={`relative z-10 min-h-9 w-9 rounded-full min-[380px]:w-10 text-[13px] font-extrabold tracking-wide transition-colors ${
            lang === o.value ? "text-ink" : "text-ink-soft hover:text-ink"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  useDocumentLang();
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId | null>(null);
  const items = navItems(t);

  // Тень у шапки после начала прокрутки
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Подсветка текущего раздела
  useEffect(() => {
    const els = sections
      .map((id) => document.querySelector<HTMLElement>(`[data-section="${id}"]`))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.getAttribute("data-section") as SectionId);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Закрытие мобильного меню по Escape и при переходе на десктоп
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 64rem)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          solid ? "bg-cream/92 shadow-[0_8px_24px_-18px_rgb(47_42_61/0.4)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="wrap flex h-16 items-center justify-between gap-2 lg:h-[76px]">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            aria-label={t.header.home}
            className="group flex min-w-0 items-center gap-2 rounded-2xl min-[380px]:gap-2.5"
          >
            <LogoMark className="size-9 shrink-0 transition-transform duration-300 group-hover:-rotate-6 min-[380px]:size-10 lg:size-11" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[17px] font-bold text-ink min-[380px]:text-[20px] lg:text-[22px]">Балажан</span>
              <span className="mt-1 text-[11px] font-bold tracking-wide text-ink-soft">Doskids</span>
            </span>
          </a>

          <nav aria-label={t.header.menuTitle} className="hidden lg:block">
            <ul className="flex items-center gap-0.5 xl:gap-1">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active === item.id ? "location" : undefined}
                    className={`relative block rounded-full px-2.5 py-2 text-[14.5px] font-bold transition-colors xl:px-3 xl:text-[15px] ${
                      active === item.id ? "bg-sun-soft text-ink" : "text-ink-soft hover:bg-white hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 min-[380px]:gap-2">
            <LangSwitch />
            <a
              href={whatsappLink(site.phones[0], t.whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-11 items-center gap-2 rounded-full bg-wa px-4 text-[14.5px] font-bold text-white shadow-soft transition-colors hover:bg-wa-hover xl:inline-flex"
            >
              <WhatsAppIcon className="size-[18px]" />
              {t.header.write}
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.header.closeMenu : t.header.openMenu}
              className="grid size-11 place-items-center rounded-2xl bg-white text-ink shadow-soft ring-1 ring-line transition-colors hover:bg-sun-soft lg:hidden"
            >
              {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-cream shadow-pop lg:hidden"
      >
        <nav aria-label={t.header.menuTitle} className="wrap py-4">
          <ul className="grid grid-cols-2 gap-2">
            {items.map((item, i) => (
              <li key={item.id} className={i === items.length - 1 && items.length % 2 ? "col-span-2" : ""}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? "location" : undefined}
                  className={`flex min-h-12 items-center rounded-2xl px-4 text-[15.5px] font-bold ring-1 transition-colors ${
                    active === item.id ? "bg-sun-soft text-ink ring-sun/60" : "bg-white text-ink ring-line hover:bg-sun-soft"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid gap-2 min-[400px]:grid-cols-2">
            <a
              href={whatsappLink(site.phones[0], t.whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-wa px-4 text-[15px] font-bold text-white"
            >
              <WhatsAppIcon className="size-5" />
              {t.contacts.write}
            </a>
            <a
              href={`tel:${site.phones[0].tel}`}
              className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-sky-soft px-4 text-[15px] font-bold text-sky-deep"
            >
              <PhoneIcon className="size-5" />
              {site.phones[0].display}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
