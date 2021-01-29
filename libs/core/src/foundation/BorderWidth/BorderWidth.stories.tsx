import React from 'react';
import { borderWidth } from './tailwind.config.js';
import { defaultStorybookConfig } from '../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  title: `Galaxy/Foundation/BorderWidth`,
};

const widths = (borderWidth) => {
  return Object.entries(borderWidth).map((weight, key) => {
    const token = weight[0];
    const borderWidth = token === `default` ? `border` : `border-${token}`;
    const value = weight[1];
    return (
      <div className={`p-10 my-5 bg-white ${borderWidth}`} key={key}>
        <div>{borderWidth}</div>
        <div>{value}</div>
      </div>
    );
  });
};

export const Usage = () => {
  return widths(borderWidth);
};
