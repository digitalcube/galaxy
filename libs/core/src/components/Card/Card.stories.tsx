import React from 'react';
import { Card } from '@galaxy/core';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Card,
  title: `Galaxy/Components/Card`,
};

export const Example = () => {
  return <Card>😀 😎 👍 💯</Card>;
};
