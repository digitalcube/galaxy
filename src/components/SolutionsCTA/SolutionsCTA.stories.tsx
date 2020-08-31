import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { SolutionsCTA } from '../index';

export default {
  component: SolutionsCTA,
  title: `Containers/SolutionsCTA`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

const buttons = [
  {
    children: `hello world`,
    href: '/hello-world',
  },
  {
    children: `hola mundo`,
    href: '/hola-mundo',
  },
];

export const Default = () => {
  return <SolutionsCTA buttons={buttons} />;
};
