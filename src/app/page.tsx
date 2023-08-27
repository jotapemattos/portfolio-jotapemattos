import About from '@/components/HomeContent/About';
import { MainContent } from '@/components/HomeContent/MainContent';

export default function Home() {
  return (
    <main className="max-w-full min-h-full overflow-hidden">
      <MainContent />
      <About />
    </main>
  );
}
