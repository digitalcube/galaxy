import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import {Brand} from '@galaxy/core'
import { MobileNav, MobileNavProps} from './MobileNav';

const props: MobileNavProps = {
  brand: <Brand asset="shifter-mark" size="45" />,
  nodes: [
    {
      label: `Qui sint`,
      href: `#!`,
    },
    {
      label: `Cupidatat`,
      href: `#!`,
    },
    {
      label: `Excepteur`,
      href: `#!`,
    },
    {
      label: `Laborum`,
      href: `#!`,
    },
    {
      label: `Pariatur`,
      href: `#!`,
    },
    {
      label: `Login`,
      href: `#!`,
    },
    {
      label: `Sign Up`,
      href: `#!`,
      kind: `primary`,
    },
  ],
};

export default {
  component: MobileNav,
  title: `Galaxy/Views/MobileNav`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <MobileNav {...props} />;
};
