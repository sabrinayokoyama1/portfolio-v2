import Site from '@/components/Site';
import { pageMetadata } from '@/content/seo';
export const metadata = pageMetadata('projects', 'pt');
export default function Projects() {
  return <Site locale="pt" view="projects" />;
}
