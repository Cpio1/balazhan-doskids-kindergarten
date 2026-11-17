import { galleryPhotos, heroPhoto } from "@/lib/media";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { RevealObserver } from "@/components/RevealObserver";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Groups } from "@/components/sections/Groups";
import { Nutrition } from "@/components/sections/Nutrition";
import { Clubs } from "@/components/sections/Clubs";
import { Gallery } from "@/components/sections/Gallery";
import { Documents } from "@/components/sections/Documents";
import { Contacts } from "@/components/sections/Contacts";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ChildCare",
  name: "Балажан",
  legalName: site.legalName.kk,
  telephone: site.phones.map((p) => p.tel),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Балауса көшесі, 10",
    addressLocality: "Қараой",
    addressRegion: "Алматы облысы, Іле ауданы",
    addressCountry: "KZ",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lon },
  openingHours: "07:30-18:00",
  sameAs: [site.instagramUrl],
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero photo={heroPhoto} />
        <About />
        <Groups />
        <Nutrition />
        <Clubs />
        <Gallery photos={galleryPhotos} />
        <Documents />
        <Contacts />
      </main>
      <Footer />
      <WhatsAppFloat />
      <RevealObserver />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
