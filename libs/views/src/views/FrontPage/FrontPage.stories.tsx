import React from 'react';

import { FrontPage } from './FrontPage';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: FrontPage,
  title: `Galaxy/Views/FrontPage`,
};

export const Default = () => (
  <FrontPage
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
