import portfolio from '../assets/portfolio.svg';
import saborComAmor from '../assets/sabor-com-amor.svg';
import movieDb from '../assets/mymoviedb.svg';
import cryptoCorner from '../assets/crypto-corner.svg';
import pomodoro from '../assets/pomodoro.svg';

import ts from '../assets/ts.svg';
import react from '../assets/react.svg';
import next from '../assets/next.svg';
import tailwind from '../assets/tailwind.svg';

import { ToolsProps } from './tools';

export interface ProjectsProps {
  id: number;
  name: string;
  description: string;
  image: string;
  githubRepo: string;
  website: string;
  techs: ToolsProps[];
}

export const projects: ProjectsProps[] = [
  {
    id: 1,
    name: 'Portfolio',
    description:
      'It was built to show people my projects and allow them to get in touch easily! Also, I developed this one to improve my Next.js and Tailwind/ShadcnUI skills, introducing a charming UI.',
    image: portfolio,
    githubRepo: 'https://github.com/jotapemattos/portfolio-jotapemattos',
    website: 'https://jotapemattos-portfolio.vercel.app/',
    techs: [
      { name: 'Next.js', image: next },
      { name: 'TypeScript', image: ts },
      { name: 'Tailwind CSS', image: tailwind }
    ]
  },
  {
    id: 2,
    name: 'Sabor com Amor',
    description:
      "Sabor com Amor is a landing page designed to a friend's mom who sells artisan foods and wanted an easier way to share and showcase her work and products.",
    image: saborComAmor,
    githubRepo: 'https://github.com/jotapemattos/sabor-com-amor',
    website: 'https://saborcomamor.vercel.app/',
    techs: [
      { name: 'Next.js', image: next },
      { name: 'TypeScript', image: ts },
      { name: 'Tailwind CSS', image: tailwind }
    ]
  },
  {
    id: 3,
    name: 'Movie App',
    description:
      'MyMDB is a search application that simulates IMDB. You can find any type of movie or series, searching by name, genre, latest releases, etc. It was developed with the objective of deepening my knowledge in react and API consumption!',
    image: movieDb,
    githubRepo: 'https://github.com/jotapemattos/mymdb',
    website: 'https://mymoviedb.vercel.app/',
    techs: [
      { name: 'React.js', image: react },
      { name: 'TypeScript', image: ts },
      { name: 'Tailwind CSS', image: tailwind }
    ]
  },
  {
    id: 4,
    name: 'Crypto Corner',
    description:
      'Crypto Corner is a platform designed to keep users up to date on the latest news and trends in the world of cryptocurrencies. I designed this one to improve my tailwind skills and some programming logic!',
    image: cryptoCorner,
    githubRepo: 'https://github.com/jotapemattos/crypto-infos',
    website: 'https://crypto-infos.vercel.app/',
    techs: [
      { name: 'React.js', image: react },
      { name: 'TypeScript', image: ts },
      { name: 'Tailwind CSS', image: tailwind }
    ]
  },
  {
    id: 5,
    name: 'Pomodoro',
    description:
      'Project developed for my portfolio. However, it was built with the intention of impacting some student friends, explaining how the method works and bringing a nice interface. I hope it helps in some way!',
    image: pomodoro,
    githubRepo: 'https://github.com/jotapemattos/pomodoro-app',
    website: 'https://pomodoro-app-liart.vercel.app/',
    techs: [
      { name: 'React.js', image: react },
      { name: 'TypeScript', image: ts },
      { name: 'Tailwind CSS', image: tailwind }
    ]
  }
];
