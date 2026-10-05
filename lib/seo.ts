import type { Metadata } from "next";

export const siteMetadataBase = new URL(
  process.env.SITE_URL || "https://rock-experience-ten.vercel.app",
);

export const openGraphImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "ROCK EXPERIENCE. Vive algo diferente. Marcas, tecnología y personas.",
};

// Cada página combina estos campos con su propio título, descripción y URL.
export const sharedOpenGraph = {
  type: "website",
  siteName: "ROCK EXPERIENCE",
  locale: "es_MX",
  images: [openGraphImage],
} satisfies Metadata["openGraph"];
