import React from 'react';
import { Swatch } from '../../components';
import { swatches } from '../../lib/utils';
import { lorem } from 'faker';
import { fontFamily } from './tailwind.config.js';
import { defaultStorybookConfig } from '../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  title: `Galaxy/Config/Font Family`,
};

export const Usage = () => {
  return swatches({
    data: fontFamily,
    token: `font`,
    className: `rounded overflow-hidden bg-white p-10 mb-5 w-full prose`,
  }).map((swatch) => {
    return (
      <Swatch {...swatch}>
        <h1>{lorem.sentence()}</h1>
        <p>{lorem.paragraph()}</p>
        <p>{lorem.paragraph()}</p>
      </Swatch>
    );
  });
};
