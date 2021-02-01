import React from 'react';
import { lorem } from 'faker';
import { fontWeight } from './tailwind.config.js';
import { swatches } from '../../lib/utils/swatches';
import { Swatch } from '../../components';
import { defaultStorybookConfig } from '../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  title: `Galaxy/Config/Font Weight`,
};

export const Usage = () => {
  return swatches({
    data: fontWeight,
    token: `font`,
    className: `p-10 my-5 bg-white`,
  }).map((swatch) => {
    return <Swatch {...swatch}>{lorem.sentence()}</Swatch>;
  });
};
