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
  linkToDocs: string;
}

export const tools: ToolsProps[] = [
  {
    name: 'Html',
    image: html,
    linkToDocs: ''
  },
  {
    name: 'CSS',
    image: css,
    linkToDocs: ''
  },
  {
    name: 'JavaScript',
    image: js,
    linkToDocs: ''
  },
  {
    name: 'TypeScript',
    image: ts,
    linkToDocs: ''
  },
  {
    name: 'React.js',
    image: react,
    linkToDocs: ''
  },
  {
    name: 'Next.js',
    image: next,
    linkToDocs: ''
  },
  {
    name: 'Tailwind CSS',
    image: tailwind,
    linkToDocs: ''
  },
  {
    name: 'Git',
    image: git,
    linkToDocs: ''
  }
];
