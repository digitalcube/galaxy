import React from 'react';
import { spacing } from './tailwind.config.js';
import { defaultStorybookConfig } from '../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  title: `Galaxy/Foundation/Spacing`,
};

const spaces = (spacing) => {
  return Object.entries(spacing).map((space, key) => {
    const token = space[0];
    const value = space[1];
    const size = `w-${token}`;
    return (
      <div className="p-5 mb-2 bg-white">
        <div className={`rounded bg-black h-2 ${size}`} key={key} />
        <div>
          <div>{token}</div>
          <div>{value}</div>
        </div>
      </div>
    );
  });
};

export const Scale = () => {
  return spaces(spacing);
  // return spacing.map((space) => {
  //   return <div className="text-size-9">{space}</div>;
  // });
};
