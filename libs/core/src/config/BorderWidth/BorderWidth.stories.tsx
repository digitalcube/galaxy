import React from 'react';
import { borderWidth } from './tailwind.config.js';
import { defaultStorybookConfig } from '../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  title: `Galaxy/Config/Border Width`,
};

const widths = (borderWidth) => {
  return Object.entries(borderWidth).map((width, key) => {
    const token = width[0];
    const borderWidth = token === `DEFAULT` ? `border` : `border-${token}`;
    const value = width[1];
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
