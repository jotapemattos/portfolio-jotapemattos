export type Tech =
  | 'html'
  | 'css'
  | 'javascript'
  | 'typescript'
  | 'react.js'
  | 'next.js'
  | 'tailwind css'
  | 'git';

const possibleColorsClassnames: Record<Tech, string> = {
  html: 'group-hover:bg-[#E44F26]',
  css: 'group-hover:bg-[#33A9DC]',
  javascript: 'group-hover:bg-[#FFCA28]',
  typescript: 'group-hover:bg-[#007ACC]',
  'react.js': 'group-hover:bg-[#61DAFB]',
  'next.js': 'group-hover:bg-[#9B9B9B]',
  'tailwind css': 'group-hover:bg-[#56BEB3]',
  git: 'group-hover:bg-[#F05033]'
};

export const getHoverColor = (name: Tech) => {
  return possibleColorsClassnames[name];
};
