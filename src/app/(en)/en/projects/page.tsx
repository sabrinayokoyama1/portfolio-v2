import Site from '@/components/Site';
import { pageMetadata } from '@/content/seo';
export const metadata = pageMetadata('projects', 'en');
export default function Projects() {
  return <Site locale="en" view="projects" />;
}
