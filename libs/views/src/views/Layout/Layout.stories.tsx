import React from 'react';

import { Layout } from './index';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Layout,
  title: `Galaxy/Views/Layout`,
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
