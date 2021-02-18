import React from 'react';
import { schema } from './galaxy.config.js';
import { Select } from '@galaxy/core';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Select,
  title: `Galaxy/Components/Select`,
};

export const Schemas = () => {
  const selects = Object.entries(schema.components.select.variants).map(
    (variant) => {
      return <Select variant={`${variant[0]}`}>{`${variant[0]}`}</Select>;
    }
  );
  return (
    <div>
      <h2>Schema</h2>
      {selects}
    </div>
  );
};
