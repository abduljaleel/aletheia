import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/products";

export const dynamic = "force-static";

const ROOT = "https://abduljaleel.xyz/aletheia";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const parent: MetadataRoute.Sitemap[number] = {
    url: ROOT,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1.0,
  };

  // Cross-link to every product as an external URL
  const products: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: p.url,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [parent, ...products];
}
