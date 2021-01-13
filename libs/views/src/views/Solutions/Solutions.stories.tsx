import React from 'react';

import { Solutions } from './index';
import { SolutionsProps } from './Solutions';

import { defaultStorybookConfig } from '../../../.storybook/docs'
export default {
  ...defaultStorybookConfig,
  component: Solutions,
  title: `Galaxy/Views/Solutions`,


};
const props: SolutionsProps = {
  nodes: [
    {
      solution: {
        title: `Education`,
        subtitle: `Cupidatat pariatur ea irure ea laborum.`,
        href: `#!`,
        buttonLabel: `Veniam qui`,
      },
      showcase: {
        title: `Eiusmod laborum`,
        buttonLabel: `Culpa amet`,
        href: `#!`,
        img: `logo-vu.png`,
      },
    },
    {
      solution: {
        title: `Designers`,
        subtitle: `Lorem commodo amet dolor quis aliquip aliqua esse non et Lorem.`,
        href: `#!`,
        buttonLabel: `Veniam qui`,
      },
      showcase: {
        title: `Eiusmod laborum`,
        buttonLabel: `Culpa amet`,
        href: `#!`,
        img: `logo-howtospeakmachine.webp`,
      },
    },
    {
      solution: {
        title: `Designers`,
        subtitle: `Lorem commodo amet dolor quis aliquip aliqua esse non et Lorem.`,
        href: `#!`,
        buttonLabel: `Veniam qui`,
      },
      showcase: {
        title: `Eiusmod laborum`,
        buttonLabel: `Culpa amet`,
        href: `#!`,
        img: `logo-howtospeakmachine.webp`,
      },
    },
    {
      solution: {
        title: `Designers`,
        subtitle: `Lorem commodo amet dolor quis aliquip aliqua esse non et Lorem.`,
        href: `#!`,
        buttonLabel: `Veniam qui`,
      },
      showcase: {
        title: `Eiusmod laborum`,
        buttonLabel: `Culpa amet`,
        href: `#!`,
        img: `logo-howtospeakmachine.webp`,
      },
    },
    {
      solution: {
        title: `Designers`,
        subtitle: `Lorem commodo amet dolor quis aliquip aliqua esse non et Lorem.`,
        href: `#!`,
        buttonLabel: `Veniam qui`,
      },
      showcase: {
        title: `Eiusmod laborum`,
        buttonLabel: `Culpa amet`,
        href: `#!`,
        img: `logo-howtospeakmachine.webp`,
      },
    },
    {
      solution: {
        title: `Designers`,
        subtitle: `Lorem commodo amet dolor quis aliquip aliqua esse non et Lorem.`,
        href: `#!`,
        buttonLabel: `Veniam qui`,
      },
      showcase: {
        title: `Eiusmod laborum`,
        buttonLabel: `Culpa amet`,
        href: `#!`,
        img: `logo-howtospeakmachine.webp`,
      },
    },
    {
      solution: {
        title: `Designers`,
        subtitle: `Lorem commodo amet dolor quis aliquip aliqua esse non et Lorem.`,
        href: `#!`,
        buttonLabel: `Veniam qui`,
      },
      showcase: {
        title: `Eiusmod laborum`,
        buttonLabel: `Culpa amet`,
        href: `#!`,
        img: `logo-howtospeakmachine.webp`,
      },
    },
  ],
};

export const Default = () => {
  return <Solutions {...props} />;
};
