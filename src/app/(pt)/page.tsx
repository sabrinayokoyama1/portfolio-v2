import Site from '@/components/Site';
import { pageMetadata } from '@/content/seo';
export const metadata = pageMetadata('home', 'pt');
export default function Home() {
  return <Site locale="pt" view="home" />;
}
