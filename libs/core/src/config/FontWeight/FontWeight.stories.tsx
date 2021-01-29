import React from 'react';
import { fontWeight } from './tailwind.config.js';
import { defaultStorybookConfig } from '../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  title: `Galaxy/Config/Font Weight`,
};

const weights = (fontWeight) => {
  return Object.entries(fontWeight).map((weight, key) => {
    const token = weight[0];
    const fontWeight = `font-${token}`;
    const value = weight[1];
    return (
      <div className={`p-10 my-5 rounded bg-white ${fontWeight}`} key={key}>
        <div>{fontWeight}</div>
        <div>{value}</div>
      </div>
    );
  });
};

export const Usage = () => {
  return weights(fontWeight);
};
