import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Nav, NavProps } from '../index';

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
}
export default {
  component: Nav,
  title: `Galaxy/Components/Nav`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Nav {...props} />;
};

export const Vertical = () => {
  return <Nav  {...props} kind="column" />;
};
