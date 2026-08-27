import type { Metadata, Viewport } from "next";
import ScrollReveal from "./ScrollReveal";
import "./globals.css";

// Explicitly declare the mobile viewport. Some in-app browsers otherwise render
// the page against a desktop-width canvas, which creates a blank area on the right.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const dynamic = "force-static";

const title = "PLOHOSPAL PRODUCTION — медиа-агентство нового поколения";
const description = "Стратегия, контент, продвижение и AI-продакшн для брендов, которые невозможно игнорировать.";

export const metadata: Metadata = {
  metadataBase: new URL("https://plohospal.ru"),
  title,
  description,
  icons: { icon: "/favicon.svg" },
  openGraph: { title, description, type: "website", locale: "ru_RU", images: [{ url: "/og.png", width: 1600, height: 837, alt: "PLOHOSPAL PRODUCTION" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <link rel="preload" href="/fonts/manrope-variable.ttf" as="font" type="font/ttf" crossOrigin="anonymous"/>
        <link rel="preload" href="/fonts/unbounded-variable.ttf" as="font" type="font/ttf" crossOrigin="anonymous"/>
        <ScrollReveal/>{children}
      </body>
    </html>
  );
}
