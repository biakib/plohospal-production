import type { Metadata, Viewport } from "next";
import ScrollReveal from "./ScrollReveal";
import { YandexMetrika } from "./YandexMetrika";
import "./globals.css";

// Explicitly declare the mobile viewport. Some in-app browsers otherwise render
// the page against a desktop-width canvas, which creates a blank area on the right.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

export const dynamic = "force-static";

const title = "PLOHOSPAL PRODUCTION — медиа-агентство нового поколения";
const description = "Стратегия, контент, продвижение и AI-продакшн для брендов, которые невозможно игнорировать.";

export const metadata: Metadata = {
  metadataBase: new URL("https://plohospal.ru"),
  title,
  description,
  verification: {
    yandex: "dea59a3d5e9021bc",
    google: "EynpbqkIKudyrG_AH_Dd8zioNU8gUQi-NstX2nzQpCc",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: { title, description, type: "website", locale: "ru_RU", images: [{ url: "/og.png", width: 1600, height: 837, alt: "PLOHOSPAL PRODUCTION" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PLOHOSPAL PRODUCTION",
  url: "https://plohospal.ru",
  logo: "https://plohospal.ru/icon-512.png",
  description: "Медиа-агентство полного цикла: упаковка бренда, стратегия и маркетинг, SMM, продакшн, AI-контент, внедрение и обучение ИИ.",
  email: "Bimperv@yandex.ru",
  telephone: "+7 902 639-98-15",
  founder: { "@type": "Person", name: "Илья Бушманов", jobTitle: "Основатель, медиапродюсер" },
  sameAs: [
    "https://t.me/bimperv",
    "https://vk.com/bimperv",
    "https://www.instagram.com/bimperv",
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Упаковка бренда" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Стратегия и маркетинг" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "SMM и контент" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Продакшн: съёмка и сценарии" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-контент" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Внедрение и обучение ИИ" } },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <link rel="preload" href="/fonts/manrope-variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/unbounded-variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
        <ScrollReveal/><YandexMetrika/>{children}
      </body>
    </html>
  );
}
