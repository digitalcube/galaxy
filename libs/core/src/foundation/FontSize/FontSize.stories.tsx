import React from 'react';
import { fontSize } from './tailwind.config.js';
import { defaultStorybookConfig } from '../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  title: `Galaxy/Foundation/Font Size`,
};

// todo: move to utils
const getTokens = (tokens) => Object.keys(tokens).map((token) => token);

// todo: move to utils
const getValues = (tokens) => Object.values(tokens).map((token) => token);

export const Usage = () => {
  return getTokens(fontSize).map((token, key) => {
    return (
      <div key={key} className={`text-${token}`}>
        {token}
      </div>
    );
  });
};
