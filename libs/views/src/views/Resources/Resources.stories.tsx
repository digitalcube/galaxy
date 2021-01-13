import React from 'react';

import { Resources, ResourcesProps } from './Resources';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Resources,
  title: `Galaxy/Views/Resources`,
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
