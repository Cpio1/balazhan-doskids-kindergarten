# «Балажан» — лендинг ясли-сада (ТОО «Доскидс»)

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4. Языки: казахский (по умолчанию) и русский.
Только светлая тема.

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production-сборка
```

## Фотографии

Фото подключаются автоматически: перед `dev`/`build` скрипт `scripts/media-manifest.mjs`
сканирует папки и сохраняет список с реальными размерами в `src/generated/media.json`.

- **Главное фото** — `public/hero/main-page.jpg` (или первый файл в `public/hero/`).
  Пока файла нет, на первом экране показывается иллюстрация.
- **Галерея** — любые `.jpg/.jpeg/.png/.webp/.avif` в `public/gallery/`
  (сортировка по имени: `01.jpg`, `02.jpg`, …). Пока папка пуста — аккуратная заглушка со ссылкой на Instagram.

## Документы

Добавьте ссылки в `src/lib/documents.ts` (PDF — в `public/documents/`). Пока список пуст — показывается заглушка.

## Контакты и карта 2GIS

Все контакты — в `src/lib/site.ts`.

- Дома «Балауса, 10» в 2GIS пока нет, поэтому ссылки «Открыть в 2GIS» и «Маршрут» ведут на
  улицу Балауса в с. Караой (geo-id `70030076311623581`, координаты 43.52089, 76.83115).
- Если у сада появится карточка в 2GIS — впишите её id в `twoGisFirmId`.
- Интерактивная карта 2GIS MapGL включается ключом (бесплатно на https://dev.2gis.com):
  переменная окружения `NEXT_PUBLIC_2GIS_KEY` (локально в `.env.local`, на Vercel — в Settings → Environment Variables).
  Без ключа показывается схема с меткой и адресом.

## Деплой на Vercel

Импортируйте папку как проект Next.js — настройки по умолчанию. По желанию задайте
`NEXT_PUBLIC_SITE_URL` (для canonical/OG) и `NEXT_PUBLIC_2GIS_KEY`.
