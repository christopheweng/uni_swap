// app/sitemap.ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://uni-swap-sigma.vercel.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}

