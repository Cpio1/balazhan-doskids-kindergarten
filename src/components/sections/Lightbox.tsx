"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { Photo } from "@/lib/media";
import { useLang } from "@/lib/i18n";
import { ChevronLeft, ChevronRight, CloseIcon } from "@/components/ui/Icons";

/** Полноэкранный просмотр фото: клавиши ←/→/Esc, свайпы, фокус внутри окна. */
export function Lightbox({
  photos,
  index,
  onClose,
  onChange,
}: {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  const { t } = useLang();
  const g = t.gallery;
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const total = photos.length;
  const photo = photos[index];

  const go = useCallback((dir: 1 | -1) => onChange((index + dir + total) % total), [index, total, onChange]);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus({ preventScroll: true });
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "Tab" && dialogRef.current) {
        // удерживаем фокус внутри окна
        const els = dialogRef.current.querySelectorAll<HTMLElement>("button");
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  if (!photo) return null;

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={g.viewer}
      className="fixed inset-0 z-[100] flex flex-col bg-[#1d1a26]/95 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="flex items-center justify-between px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-2 sm:px-6 sm:pt-4">
        <p className="rounded-full bg-white/10 px-3 py-1.5 text-[14px] font-bold text-white tabular-nums" aria-live="polite">
          {index + 1} / {total}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={g.close}
          className="grid size-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <CloseIcon className="size-6" />
        </button>
      </div>

      <div
        className="relative flex-1"
        onClick={(e) => e.target === e.currentTarget && onClose()}
        onTouchStart={(e) => (touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY })}
        onTouchEnd={(e) => {
          if (!touch.current) return;
          const dx = e.changedTouches[0].clientX - touch.current.x;
          const dy = e.changedTouches[0].clientY - touch.current.y;
          touch.current = null;
          if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
          else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) onClose();
        }}
      >
        <div className="pointer-events-none absolute inset-x-2 inset-y-2 sm:inset-x-20 sm:inset-y-4">
          <Image
            key={photo.src}
            src={photo.src}
            alt={`${g.photo} ${index + 1}`}
            fill
            sizes="100vw"
            quality={80}
            className="object-contain"
          />
        </div>

        {total > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={g.prev}
              className="absolute top-1/2 left-2 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/12 text-white transition-colors hover:bg-white/25 sm:left-5 sm:grid"
            >
              <ChevronLeft className="size-7" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={g.next}
              className="absolute top-1/2 right-2 hidden size-12 -translate-y-1/2 place-items-center rounded-full bg-white/12 text-white transition-colors hover:bg-white/25 sm:right-5 sm:grid"
            >
              <ChevronRight className="size-7" />
            </button>
          </>
        ) : null}
      </div>

      {/* нижняя панель на телефоне */}
      {total > 1 ? (
        <div className="flex items-center justify-center gap-4 px-4 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))] sm:hidden">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={g.prev}
            className="grid size-13 place-items-center rounded-full bg-white/12 text-white active:bg-white/25"
          >
            <ChevronLeft className="size-7" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={g.next}
            className="grid size-13 place-items-center rounded-full bg-white/12 text-white active:bg-white/25"
          >
            <ChevronRight className="size-7" />
          </button>
        </div>
      ) : null}
    </div>,
    document.body,
  );
}
