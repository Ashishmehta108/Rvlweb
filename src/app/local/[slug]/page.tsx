import GeoPageTemplate from "@/components/GeoPageTemplate";
import { generateGeoPageContent } from "@/lib/geo-engine";
import { Metadata } from "next";

type Params = Promise<{ slug: string }>;

interface PageProps {
  params: Params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = generateGeoPageContent("local", slug);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function LocalPage({ params }: PageProps) {
  const { slug } = await params;
  return <GeoPageTemplate type="local" slug={slug} />;
}
