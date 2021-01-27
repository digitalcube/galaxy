import React from 'react';

import { Nav, NavProps } from '../index';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Nav,
  title: `Galaxy/Components/Nav`,
};

const props: NavProps = {
  navItems: [
    {
      label: `Proident`,
      href: `#!`,
    },
    {
      label: `Labore`,
      href: `#!`,
    },
    {
      label: `Ipsum`,
      href: `#!`,
    },
    {
      label: `Eiusmod`,
      href: `#!`,
    },
    {
      label: `Esse anim`,
      href: `#!`,
    },
  ],
};

export const Default = () => {
  return <Nav {...props} />;
};

export const Vertical = () => {
  return <Nav {...props} kind="column" />;
};
