import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { MobileNav } from './MobileNav';

export default {
  component: MobileNav,
  title: `Galaxy/Components/MobileNav`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <MobileNav />;
};
