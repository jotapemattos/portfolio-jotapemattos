import { cn } from '@/@lib/utils';
import NavBar from '@/components/NavBar/NavBar';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

import Gradient from '@/components/Gradient';
import { Toaster } from '@/components/ui/Toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'João Pedro | Home',
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
          'min-w-screen min-h-screen bg-background'
        )}
        suppressHydrationWarning={true}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NavBar />
          <Gradient className="absolute top-0 right-1/2 -translate-y-1/2 translate-x-1/2 bg-secondary h-[188px] w-[350px] rounded-3xl opacity-25 blur-3xl" />
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
