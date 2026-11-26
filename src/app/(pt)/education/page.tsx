import Site from '@/components/Site';
import { pageMetadata } from '@/content/seo';
export const metadata = pageMetadata('education', 'pt');
export default function Education() {
  return <Site locale="pt" view="education" />;
}
