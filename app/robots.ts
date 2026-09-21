import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
    sitemap: "https://www.sutcliffetrading.com/sitemap.xml",
    host: "https://www.sutcliffetrading.com",
  };
}
