import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Layout } from './index';

export default {
  component: Layout,
  title: `Galaxy/Templates/Layout`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => <Layout />;
