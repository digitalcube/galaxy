import React from 'react';

import { Plans, PlansProps } from './Plans';

import { defaultStorybookConfig } from '../../../.storybook/docs'
export default {
  ...defaultStorybookConfig,
  component: Plans,
  title: `Galaxy/Views/Plans`,


};
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
};

export const Default = () => {
  return <Plans {...props} />;
};
