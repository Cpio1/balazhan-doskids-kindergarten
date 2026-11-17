/**
 * Официальные документы детского сада.
 *
 * Пока список пуст — на сайте показывается аккуратная заглушка.
 * Чтобы добавить документ, допишите объект в массив `documents`:
 *
 *   {
 *     title: { kk: "Жарғы", ru: "Устав" },
 *     url: "/documents/ustav.pdf",       // файл из public/documents/
 *     source: "pdf",
 *   },
 *
 * source: "pdf" | "google-drive" | "link".
 */
export type DocumentSource = "pdf" | "google-drive" | "link";

export type DocumentLink = {
  title: { kk: string; ru: string };
  url: string;
  source: DocumentSource;
};

export const documents: DocumentLink[] = [];
