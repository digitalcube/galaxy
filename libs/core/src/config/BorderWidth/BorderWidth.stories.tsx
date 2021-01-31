import React from 'react';
import { borderWidth } from './tailwind.config.js';
import { swatches } from '../../lib/utils/swatches';
import { Swatch } from '../../components';
import { defaultStorybookConfig } from '../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  title: `Galaxy/Config/Border Width`,
};

export const Usage = () => {
  return swatches({
    data: borderWidth,
    token: `border`,
    className: `p-10 my-5 bg-white`,
  }).map((swatch) => {
    return <Swatch {...swatch} />;
  });
};
