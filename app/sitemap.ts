import type { MetadataRoute } from "next";
import { getProjects, getPublishedPosts } from "@/db/queries";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, posts] = await Promise.all([getProjects(), getPublishedPosts()]);

  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/projects`, changeFrequency: "monthly", priority: 0.8 },
    ...projects.map((project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...(posts.length > 0
      ? [{ url: `${SITE_URL}/blog`, changeFrequency: "weekly" as const, priority: 0.7 }]
      : []),
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.date,
      priority: 0.6,
    })),
  ];
}
