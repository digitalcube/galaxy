import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Layout } from './index';

export default {
  component: Layout,
  title: `Galaxy/Views/Layout`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <Layout
    header={{
      nav: [
        [
          {
            label: `Qui sint`,
            href: `#!`,
          },
        ],
      ],
    }}
  />
);
