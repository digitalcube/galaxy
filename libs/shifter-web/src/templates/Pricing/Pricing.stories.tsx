import React from 'react';
import { Pricing, PricingProps } from './Pricing';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Pricing,
  title: `Shifter/Templates/Pricing`,
};

const props: PricingProps = {
  title: 'Title A',
  title2: 'Title B',
  subtitle: 'with subtitle',
  getStarted: {
    title: `Ready to take your site to the next level?`,
    subtitle: `Shifter is the solution for fast, maintenance-free WordPress websites.`,
  },
  plans: {
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
    ],
  },
  plans2: {
    nodes: [
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
  },
};

export const Default = () => <Pricing {...props} />;
