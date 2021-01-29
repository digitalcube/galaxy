import React from 'react';
import { schema } from './galaxy.config.js';

import Button from './Button';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Button,
  title: `Galaxy/Components/Button`,
};

export const Schemas = () => {
  return Object.entries(schema.components.button.variants).map((variant) => {
    return <Button variant={`${variant[0]}`}>{`${variant[0]}`}</Button>;
  });
};
