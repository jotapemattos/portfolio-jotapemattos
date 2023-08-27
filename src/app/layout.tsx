import { cn } from '@/@lib/utils';
import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import NavBar from '@/components/NavBar/NavBar';
import Texture from '@/components/Texture';
import Gradient from '@/components/Gradient';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'João Pedro | Portfolio',
  description: 'Welcome to my place on the web'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          'min-w-screen min-h-screen bg-background bg-[url(../assets/grid.svg)] bg-center'
        )}
        suppressHydrationWarning={true}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NavBar />
          <Gradient />
          <Texture />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
