import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Plans, PlansProps } from './Plans';

const props: PlansProps = {
  nodes: [
    {
      img: 'pricing-plan-icon-1.png',
      title: `Free`,
      buttonLabel: `hello world`,
      detailsLabel: `View more`,
      detailsLink: `#!buttonLink`,
      href: `//google.com/`,
      price: {
        month: `$1`,
        year: `$2`,
      },
      planMeta: [{ label: 'hello world' }],
    },
    {
      img: 'pricing-plan-icon-1.png',
      href: `#!`,
      title: `Tier 1`,
      detailsLabel: `View more`,
      detailsLink: `#!buttonLink`,
      price: {
        month: `$1`,
        year: `$2`,
      },
    },
    {
      img: 'pricing-plan-icon-1.png',
      href: `#!`,
      buttonLabel: `hello world`,
      title: `Tier 2`,
      price: {
        month: `$1`,
        year: `$2`,
      },
    },
    {
      img: 'pricing-plan-icon-1.png',
      href: `#!`,
      title: `Tier 3`,
      price: {
        month: `$1`,
        year: `$2`,
      },
    },
  ],
}
export default {
  component: Plans,
  title: `Galaxy/Views/Plans`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Plans {...props} />;
};
