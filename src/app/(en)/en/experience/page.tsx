import Site from '@/components/Site';
import { pageMetadata } from '@/content/seo';
export const metadata = pageMetadata('experience', 'en');
export default function Experience() {
  return <Site locale="en" view="experience" />;
}
