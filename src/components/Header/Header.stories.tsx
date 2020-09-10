import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Header, Brand } from '../index';

export default {
  component: Header,
  title: `Components/Header`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

const navItems = [
  {
    label: `Features`,
    href: `https://google.com/`,
  },
  {
    label: `Blog`,
    href: `/blog`,
  },
  {
    label: `Solutions`,
    href: `/solutions`,
  },
  {
    label: `Pricing`,
  },
  {
    label: `Showcase`,
  },
];

export const Primary = () => {
  return (
    <Header
      navItems={navItems}
      logo={<Brand asset="shifter-mark" size={`45`} />}
    />
  );
};
