"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/Icons";

/** Плавающая кнопка WhatsApp — появляется после первого экрана. */
export function WhatsAppFloat() {
  const { t } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink(site.phones[0], t.whatsappText)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.contacts.write}
      tabIndex={show ? 0 : -1}
      aria-hidden={!show}
      className={`fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 grid size-14 place-items-center rounded-full bg-wa text-white shadow-pop ring-4 ring-white transition-all duration-300 hover:bg-wa-hover sm:right-6 sm:bottom-6 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
