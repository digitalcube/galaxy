import chroma from 'chroma-js';

export const fakerColorScale = chroma.scale(['#F9F4F9', '#431441']).colors(4);

export const fakerColorPalette = {
  title: 'Primary Colors',
  token: 'primary',
  colors: fakerColorScale,
};
