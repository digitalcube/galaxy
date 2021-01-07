import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Page } from './Page';

export default {
  component: Page,
  title: `Galaxy/Views/Page`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => <Page />;
