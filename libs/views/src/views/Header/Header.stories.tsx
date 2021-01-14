import React from 'react';

import { Brand } from '@digitalcube/galaxy-core';
import { Header, HeaderProps } from './index';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Header,
  title: `Galaxy/Views/Header`,
};
const props: HeaderProps = {
  brand: <Brand asset="shifter-mark" size="45" />,
  href: `/`,
  nav: [
    [
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
    ],
    [
      {
        label: `Login`,
        href: `#!`,
      },
      {
        label: `Sign Up`,
        href: `#!`,
      },
    ],
    [
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
  ],
};

export const Default = () => {
  return <Header {...props} href="/ja/" />;
};
