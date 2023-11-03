type Theme = 'dark' | 'light';

const possibleColors: Record<Theme, string> = {
  light: '#08080C',
  dark: '#D8D8D9'
};

export const getIconColors = (theme: Theme) => {
  return possibleColors[theme];
};
