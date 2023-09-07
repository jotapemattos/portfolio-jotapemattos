import About from '@/components/HomeContent/About';
import Contact from '@/components/HomeContent/Contact';
import Footer from '@/components/HomeContent/Footer';
import { MainContent } from '@/components/HomeContent/MainContent';

export default function Home() {
  return (
    <main className="max-w-full min-h-full overflow-hidden">
      <MainContent />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
