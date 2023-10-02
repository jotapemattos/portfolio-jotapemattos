export type Tech =
  | 'html'
  | 'css'
  | 'javascript'
  | 'typescript'
  | 'react.js'
  | 'next.js'
  | 'tailwind'
  | 'git';

const possibleColorsClassnames: Record<Tech, string> = {
  html: 'group-hover:bg-[#E44F26] transistion-all duration-300',
  css: 'group-hover:bg-[#33A9DC] transistion-all duration-300',
  javascript: 'group-hover:bg-[#FFCA28] transistion-all duration-300',
  typescript: 'group-hover:bg-[#007ACC] transistion-all duration-300',
  'react.js': 'group-hover:bg-[#61DAFB] transistion-all duration-300',
  'next.js': 'group-hover:bg-[#9B9B9B] transistion-all duration-300',
  tailwind: 'group-hover:bg-[#56BEB3] transistion-all duration-300',
  git: 'group-hover:bg-[#F05033] transistion-all duration-300'
};

export const getHoverColor = (name: Tech) => {
  return possibleColorsClassnames[name];
};
