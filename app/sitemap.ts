import type { MetadataRoute } from "next";
import { getProjects, getPublishedPosts, getStudies } from "@/db/queries";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, posts, studies] = await Promise.all([
    getProjects(),
    getPublishedPosts(),
    getStudies(),
  ]);

  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/projects`, changeFrequency: "monthly", priority: 0.8 },
    ...projects.map((project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...(studies.length > 0
      ? [{ url: `${SITE_URL}/studies`, changeFrequency: "monthly" as const, priority: 0.6 }]
      : []),
    ...studies.map((study) => ({
      url: `${SITE_URL}/studies/${study.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
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
