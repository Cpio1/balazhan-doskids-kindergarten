import type { ReactNode } from "react";

type Tone = "sun" | "sky" | "peach" | "leaf" | "berry";

const tones: Record<Tone, { chip: string; dot: string }> = {
  sun: { chip: "bg-sun-soft text-sun-deep", dot: "bg-sun" },
  sky: { chip: "bg-sky-soft text-sky-deep", dot: "bg-sky" },
  peach: { chip: "bg-peach-soft text-peach-deep", dot: "bg-peach" },
  leaf: { chip: "bg-leaf-soft text-leaf-deep", dot: "bg-leaf" },
  berry: { chip: "bg-berry-soft text-[#b23d6b]", dot: "bg-berry" },
};

/**
 * Заголовок раздела. Якорь (`id`) стоит именно на заголовке, а утилита
 * `anchor` задаёт scroll-margin-top под высоту фиксированной шапки —
 * поэтому меню прокручивает страницу точно к заголовку.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  text,
  tone = "sun",
  align = "left",
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  text?: string;
  tone?: Tone;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  const c = tones[tone];
  return (
    <div
      id={id}
      tabIndex={-1}
      data-reveal
      className={`anchor outline-none ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      <p
        className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-extrabold tracking-wide ${c.chip}`}
      >
        <span className={`size-2 rounded-full ${c.dot}`} aria-hidden />
        {eyebrow}
      </p>
      <h2 className="mt-3 text-[1.45rem] leading-[1.2] font-semibold text-ink min-[400px]:text-[1.6rem] sm:text-[1.9rem] lg:text-[2.2rem]">
        {title}
      </h2>
      {text ? <p className="mt-3 text-[15.5px] leading-relaxed text-ink-soft sm:text-[17px]">{text}</p> : null}
      {children}
    </div>
  );
}
