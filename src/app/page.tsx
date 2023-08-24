import { MainContent } from '@/components/HomeContent/MainContent';
import SocialMedia from '@/components/SocialMedia';

export default function Home() {
  return (
    <div className="max-w-full min-h-full h-full overflow-hidden">
      <MainContent />
      <SocialMedia />
    </div>
  );
}
