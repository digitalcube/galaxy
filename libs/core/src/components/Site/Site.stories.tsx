import React from 'react';
import { Heading, Site } from '@galaxy/core';
import { schema } from './galaxy.config';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Site,
  title: `Galaxy/Components/Site`,
};

export const Schemas = () => {
  return Object.entries(schema.components.card.variants).map((variant) => {
    return (
      <Site variant={variant[0]}>
        😀 😎 👍 💯
        <Heading>Footer</Heading>
      </Site>
    );
  });
};
