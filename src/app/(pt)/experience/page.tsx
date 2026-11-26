import Site from '@/components/Site';
import { pageMetadata } from '@/content/seo';
export const metadata = pageMetadata('experience', 'pt');
export default function Experience() {
  return <Site locale="pt" view="experience" />;
}
