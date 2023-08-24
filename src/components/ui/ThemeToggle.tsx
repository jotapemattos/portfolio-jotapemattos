'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import { Moon, Sun } from 'lucide-react';
import { Button } from './Button';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="h-fit w-fit p-2"
    >
      <Moon
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        size={16}
        color="#fff"
      />
      <Sun
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        size={16}
        color="#000"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
