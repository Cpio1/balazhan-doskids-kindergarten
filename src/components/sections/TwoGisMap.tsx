"use client";

import { useEffect, useRef, useState } from "react";
import { site, twoGisKey } from "@/lib/site";
import { PinIcon } from "@/components/ui/Icons";
import { Cloud } from "@/components/decor/Shapes";

/* Минимальные типы 2GIS MapGL */
type MapglMap = { destroy: () => void };
type Mapgl = {
  Map: new (el: HTMLElement, opts: Record<string, unknown>) => MapglMap;
  Marker: new (map: MapglMap, opts: Record<string, unknown>) => unknown;
};

declare global {
  interface Window {
    mapgl?: Mapgl;
  }
}

let loading: Promise<Mapgl> | null = null;

function loadMapgl() {
  if (window.mapgl) return Promise.resolve(window.mapgl);
  if (!loading) {
    loading = new Promise<Mapgl>((resolve, reject) => {
      const s = document.createElement("script");
      s.src = "https://mapgl.2gis.com/api/js/v1";
      s.async = true;
      s.onload = () => (window.mapgl ? resolve(window.mapgl) : reject(new Error("mapgl missing")));
      s.onerror = () => {
        loading = null;
        reject(new Error("mapgl failed"));
      };
      document.head.appendChild(s);
    });
  }
  return loading;
}

/**
 * Карта 2GIS с меткой по адресу сада.
 * — Если задан NEXT_PUBLIC_2GIS_KEY: интерактивная карта 2GIS MapGL
 *   (скрипт грузится, только когда карта появляется на экране).
 * — Иначе (или при ошибке): оформленная карточка-схема с адресом;
 *   кнопки «Открыть в 2GIS» и «Маршрут» находятся рядом.
 */
export function TwoGisMap({ address, title, lang }: { address: string; title: string; lang: "kk" | "ru" }) {
  const box = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!twoGisKey || !el) return;
    let map: MapglMap | null = null;
    let cancelled = false;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        loadMapgl()
          .then((mapgl) => {
            if (cancelled || !box.current) return;
            const center = [site.geo.lon, site.geo.lat];
            map = new mapgl.Map(box.current, { center, zoom: 16, key: twoGisKey, lang: lang === "kk" ? "kk" : "ru" });
            new mapgl.Marker(map, { coordinates: center });
            setReady(true);
          })
          .catch(() => undefined);
      },
      { rootMargin: "300px" },
    );
    io.observe(el);

    return () => {
      cancelled = true;
      io.disconnect();
      map?.destroy();
    };
  }, [lang]);

  return (
    <div className="absolute inset-0">
      <div ref={box} role="region" aria-label={`${title}: ${address}`} className="absolute inset-0" />
      {!ready ? <MapSketch address={address} /> : null}
    </div>
  );
}

/** Схематичная карта-иллюстрация (без выдуманных объектов) с меткой и адресом. */
function MapSketch({ address }: { address: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#f6efdf]">
      <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full" aria-hidden>
        <rect width="600" height="400" fill="#f6efdf" />
        {/* кварталы */}
        {[
          [30, 30, 150, 110],
          [210, 30, 170, 110],
          [410, 30, 170, 110],
          [30, 250, 150, 120],
          [410, 250, 170, 120],
        ].map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} rx="16" fill="#ebe2cc" />
        ))}
        <rect x="210" y="250" width="170" height="120" rx="16" fill="#d9eed6" />
        {/* улицы */}
        <path d="M0 190 C150 175 260 205 360 190 S520 170 600 182" stroke="#fff" strokeWidth="26" fill="none" strokeLinecap="round" />
        <path d="M0 190 C150 175 260 205 360 190 S520 170 600 182" stroke="#ffb08f" strokeWidth="6" fill="none" strokeLinecap="round" strokeDasharray="2 0" />
        <path d="M195 0V400M395 0V400" stroke="#fff" strokeWidth="16" />
      </svg>
      <Cloud className="absolute top-4 left-5 w-16 opacity-90" />
      <div className="absolute top-[47%] left-1/2 -translate-x-1/2 -translate-y-full">
        <span className="relative grid size-14 place-items-center rounded-full rounded-br-none bg-peach-deep text-white shadow-pop [transform:rotate(45deg)]">
          <PinIcon className="size-7 [transform:rotate(-45deg)]" />
        </span>
      </div>
      <div className="absolute inset-x-4 bottom-4 mx-auto max-w-sm rounded-2xl bg-white/95 px-4 py-3 text-center shadow-soft">
        <p className="font-display text-[15px] font-semibold text-ink">Балажан</p>
        <p className="mt-0.5 text-[13.5px] leading-snug text-ink-soft">{address}</p>
      </div>
    </div>
  );
}
