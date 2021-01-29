import React from 'react';
import { borderRadius } from './tailwind.config.js';
import { defaultStorybookConfig } from '../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  title: `Galaxy/Foundation/BorderRadius`,
};

const weights = (borderRadius) => {
  return Object.entries(borderRadius).map((weight, key) => {
    const token = weight[0];
    const borderRadius = token === `default` ? `rounded` : `rounded-${token}`;
    const value = weight[1];
    return (
      <div className={`p-10 my-5 bg-white ${borderRadius}`} key={key}>
        <div>{borderRadius}</div>
        <div>{value}</div>
      </div>
    );
  });
};

export const Usage = () => {
  return weights(borderRadius);
};
