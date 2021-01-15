import React from 'react';
import { FrontPage } from './FrontPage';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: FrontPage,
  title: `Amimoto/Templates/FrontPage`,
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
