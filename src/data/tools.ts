import html from '../assets/html.svg';
import css from '../assets/css.svg';
import js from '../assets/js.svg';
import ts from '../assets/ts.svg';
import react from '../assets/react.svg';
import next from '../assets/next.svg';
import tailwind from '../assets/tailwind.svg';
import git from '../assets/git.svg';

export interface ToolsProps {
  name: string;
  image: string;
}

export const tools: ToolsProps[] = [
  {
    name: 'Html',
    image: html
  },
  {
    name: 'CSS',
    image: css
  },
  {
    name: 'JavaScript',
    image: js
  },
  {
    name: 'TypeScript',
    image: ts
  },
  {
    name: 'React.js',
    image: react
  },
  {
    name: 'Next.js',
    image: next
  },
  {
    name: 'Tailwind',
    image: tailwind
  },
  {
    name: 'Git',
    image: git
  }
];
