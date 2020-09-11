import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Layout, Galaxy } from '../index';

export default {
  component: Layout,
  title: `Templates/Layout`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => <Layout />;
