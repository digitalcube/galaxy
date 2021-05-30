import React from 'react';
import { ColorSwatch, ColorSwatchProps } from './color-swatch';

export default {
  component: ColorSwatch,
  title: 'ColorSwatch',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ColorSwatchProps = {};

  return <ColorSwatch />;
};
