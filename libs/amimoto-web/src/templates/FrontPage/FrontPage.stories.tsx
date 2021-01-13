import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { FrontPage } from './FrontPage';

export default {
  component: FrontPage,
  title: `Amimoto/Templates/FrontPage`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => <FrontPage 
header={{
  nav: [
    [
      {
        label: `Qui sint`,
        href: `#!`,
      },
    ],
  ],
}} />;
