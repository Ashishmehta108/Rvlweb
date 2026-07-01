import GeoPageTemplate from "@/components/GeoPageTemplate";
import { generateGeoPageContent } from "@/lib/geo-engine";
import { Metadata } from "next";

type Params = Promise<{ slug: string }>;

interface PageProps {
  params: Params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = generateGeoPageContent("guides", slug);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
  };
}

export default async function ManufacturingPage({ params }: PageProps) {
  const { slug } = await params;
  return <GeoPageTemplate type="guides" slug={slug} />;
}
