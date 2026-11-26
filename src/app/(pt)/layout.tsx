import type { Metadata } from 'next';
import { origin } from '@/content/seo';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  icons: { icon: '/favicon.svg' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sabrina Yokoyama',
    jobTitle: 'Data Analyst',
    url: origin,
    sameAs: [
      'https://github.com/sabrinayokoyama1',
      'https://www.linkedin.com/in/sabrina-yokoyama/',
    ],
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidade de Sorocaba' },
  };
  return (
    <html lang="pt-BR" data-theme="dark">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
        {children}
      </body>
    </html>
  );
}
