import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Brand } from '@galaxy/core';
import { Header, HeaderProps } from './index';

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
        kind: `primary`,
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
        kind: `primary`,
      },
    ],
  ],
}
export default {
  component: Header,
  title: `Galaxy/Views/Header`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Header {...props} href="/ja/" />;
};
