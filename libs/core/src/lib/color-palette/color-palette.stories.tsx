import React from 'react';
import { ColorPalette, ColorPaletteProps } from './color-palette';
import { defaultStorybookConfig } from '../../.storybook/docs';
import { colorPaletteGenerator } from '@galaxy/core';

export default {
  ...defaultStorybookConfig,
  component: ColorPalette,
  title: 'Color Palette',
};

export const Primary = () => {
  /* eslint-disable-next-line */
  const props: ColorPaletteProps = {
    token: 'primary',
    namespace: 'shifter',
  };

  return <ColorPalette {...props} />;
};
