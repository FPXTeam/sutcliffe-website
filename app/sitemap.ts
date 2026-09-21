import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.sutcliffetrading.com";
  const updated = new Date("2026-09-21T00:00:00+12:00");
  return [
    { url: `${base}/`, lastModified: updated },
    { url: `${base}/timber`, lastModified: updated },
    { url: `${base}/timber/manufacturing`, lastModified: updated },
    { url: `${base}/timber/building-construction`, lastModified: updated },
    { url: `${base}/timber/outdoor-landscaping`, lastModified: updated },
    { url: `${base}/timber/dunnage`, lastModified: updated },
    { url: `${base}/about`, lastModified: updated },
    { url: `${base}/sustainability`, lastModified: updated },
    { url: `${base}/contact`, lastModified: updated },
    { url: `${base}/terms-of-trade` },
    { url: `${base}/privacy` },
    { url: `${base}/cookies` },
  ];
}
