import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { ButtonGroup } from '../index';

export default {
  component: ButtonGroup,
  title: `Components/Button Group`,
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
  return <ButtonGroup sm="2" buttons={buttons} />;
};
