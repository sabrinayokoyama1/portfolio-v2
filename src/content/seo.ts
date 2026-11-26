import type { Metadata } from 'next';
import { cases, tr, type Locale } from './data';

export const origin = 'https://sabrina-yokoyama.vercel.app';
const summaries = {
  home: {
    pt: 'Portfólio profissional de Sabrina Yokoyama, Analista de Dados com experiência em Business Intelligence, engenharia de dados, automação e inteligência artificial.',
    en: 'Professional portfolio of Sabrina Yokoyama, Data Analyst with experience in business intelligence, data engineering, automation and artificial intelligence.',
  },
  experience: {
    pt: 'Trajetória profissional e cases de Sabrina Yokoyama em análise de dados, engenharia de dados e inteligência de negócios.',
    en: 'Sabrina Yokoyama’s career and case studies in data analytics, data engineering and business intelligence.',
  },
  education: {
    pt: 'Formação acadêmica, cursos e certificações de Sabrina Yokoyama em Ciência de Dados e Inteligência Artificial.',
    en: 'Sabrina Yokoyama’s education, courses and certifications in Data Science and Artificial Intelligence.',
  },
  projects: {
    pt: 'Projetos acadêmicos e pessoais de Sabrina Yokoyama em inteligência artificial e análise financeira.',
    en: 'Sabrina Yokoyama’s academic and personal projects in artificial intelligence and financial analytics.',
  },
};
const names = {
  home: {
    pt: 'Sabrina Yokoyama | Analista de Dados & Business Intelligence',
    en: 'Sabrina Yokoyama | Data Analyst & Business Intelligence',
  },
  experience: { pt: 'Experiências | Sabrina Yokoyama', en: 'Experience | Sabrina Yokoyama' },
  education: { pt: 'Formação | Sabrina Yokoyama', en: 'Education | Sabrina Yokoyama' },
  projects: { pt: 'Projetos | Sabrina Yokoyama', en: 'Projects | Sabrina Yokoyama' },
};
export type SeoView = keyof typeof summaries;
export function pageMetadata(view: SeoView, locale: Locale): Metadata {
  const path = view === 'home' ? '' : `/${view}`;
  const canonical = `${origin}${locale === 'en' ? '/en' : ''}${path || (locale === 'en' ? '' : '/')}`;
  const title = tr(names[view], locale);
  const description = tr(summaries[view], locale);
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { 'pt-BR': `${origin}${path || '/'}`, en: `${origin}/en${path}` },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Sabrina Yokoyama',
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      type: 'website',
      images: [
        {
          url: `${origin}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'Sabrina Yokoyama — Data Analyst & Business Intelligence',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${origin}/og-image.png`],
    },
  };
}
export function caseMetadata(slug: string, locale: Locale): Metadata {
  const item = cases.find((value) => value.slug === slug);
  if (!item) return {};
  const path = `/experience/cases/${slug}`;
  const canonical = `${origin}${locale === 'en' ? '/en' : ''}${path}`;
  const title = `${tr(item.title, locale)} | Sabrina Yokoyama`;
  const description = tr(item.summary, locale);
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { 'pt-BR': `${origin}${path}`, en: `${origin}/en${path}` },
    },
    openGraph: { title, description, url: canonical, images: [`${origin}/og-image.png`] },
  };
}
