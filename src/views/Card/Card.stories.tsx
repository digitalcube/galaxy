import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Card } from './index';

export default {
  component: Card,
  title: `Galaxy/Components/Card`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => <Card />;
