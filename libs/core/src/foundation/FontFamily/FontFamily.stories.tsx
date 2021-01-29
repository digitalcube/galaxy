import React from 'react';
import faker from 'faker';
import { fontFamily } from './tailwind.config.js';
import { defaultStorybookConfig } from '../../.storybook/docs';

console.log(faker.lorem.lines());

export default {
  ...defaultStorybookConfig,
  title: `Galaxy/Foundation/Font Family`,
};

// todo: move to utils
const getTokens = (tokens) => Object.keys(tokens).map((token) => token);

// todo: move to utils
const getValues = (tokens) => Object.values(tokens).map((token) => token);

export const Usage = () => {
  return getTokens(fontFamily).map((token, key) => {
    return (
      <div
        key={key}
        className={`rounded overflow-hidden bg-white p-10 prose font-${token}`}
      >
        <h1>{faker.lorem.sentence()}</h1>
        <p>{faker.lorem.paragraph()}</p>
        <p>{faker.lorem.paragraph()}</p>
      </div>
    );
  });
};
