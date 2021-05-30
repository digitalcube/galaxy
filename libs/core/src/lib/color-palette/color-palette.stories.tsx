import React from 'react';
import { ColorPalette, ColorPaletteProps } from './color-palette';
import { defaultStorybookConfig } from '../../.storybook/docs';
import { fakerColorPalette } from '@galaxy/faker';

export default {
  ...defaultStorybookConfig,
  component: ColorPalette,
  title: 'Color Palette',
};

export const Primary = () => {
  /* eslint-disable-next-line */
  const props: ColorPaletteProps = fakerColorPalette;

  return <ColorPalette {...props} />;
};
