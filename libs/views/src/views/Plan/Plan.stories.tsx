import React from 'react';

import { Plan, PlanProps } from './Plan';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Plan,
  title: `Galaxy/Views/Plan`,
};
const props: PlanProps = {
  title: `Free`,
  href: `#!`,
  price: {
    year: `$1`,
    month: `$1`,
  },
};

export const Default = () => <Plan {...props} />;
