import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center bg-sun-soft px-4 text-center">
      <div>
        <p className="font-display text-6xl font-bold text-ink">404</p>
        <p className="mt-3 text-lg text-ink-soft">Бет табылмады · Страница не найдена</p>
        <Link href="/" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-ink px-6 font-bold text-white">
          Балажан
        </Link>
      </div>
    </main>
  );
}
