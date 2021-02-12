import React from 'react';
import { borderRadius } from './tailwind.config.js';
import { defaultStorybookConfig } from '../../.storybook/docs';
import { Swatch } from '../../components';
import { swatches } from '.././../lib/utils';

export default {
  ...defaultStorybookConfig,
  title: `Galaxy/Config/Borders/Border Radius`,
};

export const Swatches = () => {
  return swatches({
    data: borderRadius,
    token: `rounded`,
    className: `p-10 my-5 bg-white`,
  }).map((swatch) => {
    return <Swatch {...swatch} />;
  });
};
