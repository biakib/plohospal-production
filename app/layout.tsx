import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import ScrollReveal from "./ScrollReveal";
import "./globals.css";

// Explicitly declare the mobile viewport. Some in-app browsers otherwise render
// the page against a desktop-width canvas, which creates a blank area on the right.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const ogImage = `${protocol}://${host}/og.png`;
  const title = "PLOHOSPAL PRODUCTION — медиа-агентство нового поколения";
  const description = "Стратегия, контент, продвижение и AI-продакшн для брендов, которые невозможно игнорировать.";
  return {
    title,
    description,
    icons: { icon: "/favicon.svg" },
    openGraph: { title, description, type: "website", locale: "ru_RU", images: [{ url: ogImage, width: 1600, height: 837, alt: "PLOHOSPAL PRODUCTION" }] },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body><ScrollReveal/>{children}</body></html>;
}
