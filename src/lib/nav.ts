import type { Dictionary } from "@/lib/i18n";

export const sections = ["about", "groups", "nutrition", "clubs", "gallery", "documents", "contacts"] as const;
export type SectionId = (typeof sections)[number];

export function navItems(t: Dictionary) {
  return sections.map((id) => ({ id, label: t.nav[id] }));
}
