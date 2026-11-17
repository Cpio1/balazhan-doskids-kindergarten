import type { CSSProperties } from "react";

/** Задержка для анимации появления элемента с data-reveal. */
export function delay(ms: number): CSSProperties {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties;
}
