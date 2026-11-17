import type { Metadata, Viewport } from "next";
import { Nunito, Unbounded } from "next/font/google";
import { kk } from "@/lib/i18n/kk";
import "./globals.css";

// cyrillic-ext обязателен для казахских букв Ә Ғ Қ Ң Ө Ұ Ү Һ І
const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-head",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: kk.meta.title,
  description: kk.meta.description,
  applicationName: "Балажан",
  keywords: [
    "Балажан",
    "Доскидс",
    "Doskids",
    "бөбекжай-балабақша",
    "балабақша Қараой",
    "детский сад Караой",
    "ясли-сад Илийский район",
    "қазақ тілді балабақша",
  ],
  formatDetection: { telephone: false, address: false, email: false },
  alternates: { canonical: "/" },
  openGraph: {
    title: kk.meta.title,
    description: kk.meta.description,
    siteName: "Балажан",
    locale: "kk_KZ",
    alternateLocale: ["ru_RU"],
    type: "website",
    url: "/",
  },
  twitter: { card: "summary_large_image", title: kk.meta.title, description: kk.meta.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "only light",
  themeColor: "#fff4c9",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="kk" className={`${nunito.variable} ${unbounded.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* Анимации появления включаются только при работающем JS */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
