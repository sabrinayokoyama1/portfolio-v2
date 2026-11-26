import Site from '@/components/Site';
import { pageMetadata } from '@/content/seo';
export const metadata = pageMetadata('home', 'en');
export default function Home() {
  return <Site locale="en" view="home" />;
}
