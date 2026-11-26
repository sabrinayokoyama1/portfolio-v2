import Site from '@/components/Site';
import { pageMetadata } from '@/content/seo';
export const metadata = pageMetadata('education', 'en');
export default function Education() {
  return <Site locale="en" view="education" />;
}
