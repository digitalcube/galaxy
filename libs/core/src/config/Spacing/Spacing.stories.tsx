import React from 'react';
import { spacing } from './tailwind.config.js';
import { swatches } from '../../lib/utils/swatches';
import { Swatch } from '../../components';
import { defaultStorybookConfig } from '../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  title: `Galaxy/Config/Spacing`,
};

export const Scale = () => {
  return swatches({
    data: spacing,
    token: `w`,
    className: `bg-white mb-10 h-9 border`,
  }).map((swatch) => {
    return <Swatch {...swatch} />;
  });
};
