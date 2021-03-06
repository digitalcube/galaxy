import React from 'react';
import { Card } from '@galaxy/core';
import { card } from './galaxy.config';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Card,
  title: `Galaxy/Components/Card`,
};

export const Schemas = () => {
  return Object.entries(card.variants).map((variant) => {
    return (
      <Card variant={variant[0]} variants={card}>
        😀 😎 👍 💯
      </Card>
    );
  });
};
