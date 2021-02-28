import React from 'react';
import { Heading, Card } from '@galaxy/core';
import { schema } from './galaxy.config';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Card,
  title: `Galaxy/Components/Card`,
};

export const Schemas = () => {
  return Object.entries(schema.components.card.variants).map((variant) => {
    return (
      <Card variant={variant[0]}>
        😀 😎 👍 💯
      </Card>
    );
  });
};
