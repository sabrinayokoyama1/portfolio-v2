import { notFound } from 'next/navigation';
import Site from '@/components/Site';
import { cases } from '@/content/data';
import { caseMetadata } from '@/content/seo';
export function generateStaticParams() {
  return cases.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return caseMetadata(slug, 'pt');
}
export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!cases.some((item) => item.slug === slug)) notFound();
  return <Site locale="pt" view="case" slug={slug} />;
}
