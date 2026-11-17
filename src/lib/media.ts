import manifest from "@/generated/media.json";

/**
 * Фотографии берутся автоматически из папок public/hero и public/gallery
 * (список формирует scripts/media-manifest.mjs перед dev/build).
 * Главное фото: public/hero/main-page.jpg (или первый файл в public/hero).
 */
export type Photo = { name: string; src: string; width: number; height: number };

export const heroPhoto = manifest.hero as Photo | null;
export const galleryPhotos = manifest.gallery as Photo[];
