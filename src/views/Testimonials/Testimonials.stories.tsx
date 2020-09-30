import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Testimonials } from './Testimonials';

export default {
  component: Testimonials,
  title: `Galaxy/Views/Testimonials`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Testimonials />;
};
