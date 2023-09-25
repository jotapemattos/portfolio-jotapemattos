import portfolioThumbnail from '../assets/portfolio.svg';
import saborComAmorThumbnail from '../assets/sabor-com-amor.svg';
import movieDbThumbnail from '../assets/mymoviedb.svg';
import cryptoCornerThumbnail from '../assets/crypto-corner.svg';
import pomodoroThumbnail from '../assets/pomodoro.svg';

import winter from '../assets/pomodoro/winter.svg';
import summer from '../assets/pomodoro/summer.svg';
import fall from '../assets/pomodoro/fall.svg';
import spring from '../assets/pomodoro/spring.svg';

import home from '../assets/portfolio/home.svg';
import homeLight from '../assets/portfolio/homelight.svg';
import projectsSession from '../assets/portfolio/projects.svg';
import projectsLight from '../assets/portfolio/projectslight.svg';
import aboutContact from '../assets/portfolio/about&contact.svg';
import aboutContactLight from '../assets/portfolio/about&contactlight.svg';

import homeSaborComAmor from '../assets/saborComAmor/home.svg';
import delivery from '../assets/saborComAmor/delivery.svg';
import products from '../assets/saborComAmor/products.svg';

import genres from '../assets/myMovieDb/genres.svg';
import homeMyMovie from '../assets/myMovieDb/home.svg';
import moviepage from '../assets/myMovieDb/moviepage.svg';
import search from '../assets/myMovieDb/search.svg';
import top100 from '../assets/myMovieDb/top100movies.svg';
import tvshows from '../assets/myMovieDb/tvshows.svg';

import homeCoin from '../assets/cryptoCorner/home.svg';
import coinpage from '../assets/cryptoCorner/coinpage.svg';
import coins from '../assets/cryptoCorner/coins.svg';
import exchanges from '../assets/cryptoCorner/exchanges.svg';

import ts from '../assets/ts.svg';
import react from '../assets/react.svg';
import next from '../assets/next.svg';
import tailwind from '../assets/tailwind.svg';

import { ToolsProps } from './tools';

export interface ProjectsProps {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  images: string[];
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
    images: [
      home,
      homeLight,
      projectsSession,
      projectsLight,
      aboutContact,
      aboutContactLight
    ],
    thumbnail: portfolioThumbnail,
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
    images: [homeSaborComAmor, delivery, products],
    thumbnail: saborComAmorThumbnail,
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
    images: [homeMyMovie, genres, moviepage, search, top100, tvshows],
    thumbnail: movieDbThumbnail,
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
    images: [homeCoin, coins, coinpage, exchanges],
    thumbnail: cryptoCornerThumbnail,
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
    images: [spring, winter, fall, summer],
    thumbnail: pomodoroThumbnail,
    githubRepo: 'https://github.com/jotapemattos/pomodoro-app',
    website: 'https://pomodoro-app-liart.vercel.app/',
    techs: [
      { name: 'React.js', image: react },
      { name: 'TypeScript', image: ts },
      { name: 'Tailwind CSS', image: tailwind }
    ]
  }
];
