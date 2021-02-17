import React from 'react';
import { schema } from './galaxy.config.js';

import { Input } from './Input';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Input,
  title: `Galaxy/Components/Input`,
};

export const Schemas = () => {
  const inputs = Object.entries(schema.components.input.variants).map(
    (variant) => {
      return (
        <div>
          <Input variant={`${variant[0]}`} />
        </div>
      );
    }
  );
  return (
    <>
      <h2>Schema</h2>
      {inputs}
    </>
  );
};
