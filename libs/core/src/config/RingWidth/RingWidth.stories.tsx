import React from 'react';
import { ringWidth } from './tailwind.config.js';
import { swatches } from '../../lib/utils/swatches';
import { Swatch } from '../../components';
import { defaultStorybookConfig } from '../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  title: `Galaxy/Config/Borders/Ring Width`,
};

export const Swatches = () => {
  return swatches({
    data: ringWidth,
    token: `ring`,
    className: `p-10`,
  }).map((swatch) => {
    return <Swatch {...swatch} />;
  });
};
