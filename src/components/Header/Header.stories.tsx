import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Header } from './Header';
import { Brand } from '../index';

export default {
  component: Header,
  title: `Components/Header`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const navItems = [
  {
    label: `Features`,
  },
  {
    label: `Blog`,
  },
  {
    label: `Solutions`,
  },
  {
    label: `Pricing`,
  },
  {
    label: `Showcase`,
  },
];

export const Primary = () => {
  return <Header navItems={navItems} logo={<Brand size={`35`} />} />;
};
