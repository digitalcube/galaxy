import React from 'react';
import { borderWidth } from './tailwind.config.js';
import { swatches } from '../../lib/utils/swatches';
import { Swatch } from '../../components';
import { defaultStorybookConfig } from '../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  title: `Galaxy/Config/Borders/Border Width`,
};

export const Swatches = () => {
  return swatches({
    data: borderWidth,
    token: `border`,
    className: `p-10`,
  }).map((swatch) => {
    return <Swatch {...swatch} />;
  });
};
