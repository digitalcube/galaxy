import React from 'react';
import faker from 'faker';
import { fontSize } from './tailwind.config.js';
import { defaultStorybookConfig } from '../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  title: `Galaxy/Config/Font Size`,
};

// todo: move to utils
const getTokens = (tokens) => Object.keys(tokens).map((token) => token);

export const Usage = () => {
  const sentence = faker.lorem.sentence();
  return getTokens(fontSize).map((token, key) => {
    const size = `text-${token}`;
    return (
      <div className="p-10 my-5 rounded bg-white">
        <div>{size}</div>
        <div key={key} className={`${size}`}>
          <div>{sentence}</div>
        </div>
      </div>
    );
  });
};
