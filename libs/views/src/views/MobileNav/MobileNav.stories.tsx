import React from 'react';

import { Brand } from '@digitalcube/galaxy-core';
import { MobileNav, MobileNavProps } from './MobileNav';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: MobileNav,
  title: `Galaxy/Views/MobileNav`,
};

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
    },
  ],
};

export const Default = () => {
  return <MobileNav {...props} />;
};
