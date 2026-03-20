import type { MetadataRoute } from "next"
import { angelNumbersList } from "@/lib/angel-number-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://angel-number-calculator.vercel.app"

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/angel-numbers`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  // All angel number meaning pages
  const angelNumberPages = angelNumbersList.map((number) => ({
    url: `${baseUrl}/angel-numbers/${number}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...angelNumberPages]
}
