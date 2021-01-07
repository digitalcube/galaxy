import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Plan , PlanProps} from './Plan';

const props: PlanProps = {
  title: `Free`,
  href: `#!`,
  price: {
    year: `$1`,
    month: `$1`,
  },
}
export default {
  component: Plan,
  title: `Galaxy/Views/Plan`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => <Plan {...props} />;
