import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Resources, ResourcesProps } from './Resources';

export default {
  component: Resources,
  title: `Galaxy/Views/Resources`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

const props: ResourcesProps = {
  title: `Eu in aliqua do ipsum.`,
  nodes: [
    {
      title: `Duis Adipisicing`,
      href: `#!`,
    },
    {
      title: `Consequat`,
      href: `#!`,
    },
    {
      title: `Et Tempor`,
      href: `#!`,
    },
    {
      title: `Cupidatat`,
      href: `#!`,
    },
  ],
};

export const Default = () => {
  return <Resources {...props} />;
};
