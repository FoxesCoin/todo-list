export const COLORS = <const>{
  transparent: 'transparent',

  white: '#fff',
  cultured: '#fcfafa',

  black: '#282828',
  background: '#0d0c12',

  onyx: '#3b3c3c',
  onyxOpacity: 'rgba(59, 59, 60, 0.7)',

  lightGray: '#c8d3d5',
  spanishGray: '#999',
  dimGray: '#656C6E',

  lightCoral: '#ff8585',
  lightRed: '#ff1d18',
  red: '#f00',
  darkRed: '#850a0a',

  lightGreen: '#1fd655',
};

export type Color = keyof typeof COLORS;
