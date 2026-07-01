
import {
  GEO_PRODUCTS,
  GEO_INDUSTRIES,
  GEO_COMPARISONS,
  GEO_GUIDES,
  GEO_FAQS,
  GEO_GLOSSARY,
  GEO_CASE_STUDIES,
  GEO_LOCAL
} from '@/lib/geo-engine';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rvlpoly.com';
  const currentDate = new Date();

  // Root homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];

  // 1. Add Products (20)
  GEO_PRODUCTS.forEach(p => {
    routes.push({
      url: `${baseUrl}/products/${p.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // 2. Add Industries (20)
  GEO_INDUSTRIES.forEach(i => {
    routes.push({
      url: `${baseUrl}/industries/${i.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // 3. Add Comparisons (30)
  GEO_COMPARISONS.forEach(c => {
    routes.push({
      url: `${baseUrl}/resources/comparisons/${c.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // 4. Add Guides (50)
  GEO_GUIDES.forEach(g => {
    routes.push({
      url: `${baseUrl}/resources/guides/${g.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // 5. Add FAQs (100)
  GEO_FAQS.forEach(f => {
    routes.push({
      url: `${baseUrl}/faq/${f.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    });
  });

  // 6. Add Glossary (100)
  GEO_GLOSSARY.forEach(gl => {
    routes.push({
      url: `${baseUrl}/resources/glossary/${gl.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    });
  });

  // 7. Add Case Studies (25)
  GEO_CASE_STUDIES.forEach(cs => {
    routes.push({
      url: `${baseUrl}/resources/case-studies/${cs.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  // 8. Add Local SEO (50)
  GEO_LOCAL.forEach(l => {
    routes.push({
      url: `${baseUrl}/local/${l.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  return routes;
}
