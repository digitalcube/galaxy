import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { PlanMeta } from './PlanMeta';

export default {
  component: PlanMeta,
  title: `Galaxy/Components/PlanMeta`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <PlanMeta />;
};
