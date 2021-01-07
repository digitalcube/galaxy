import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Solutions } from './index';
import { SolutionsProps } from './Solutions';

export default {
  component: Solutions,
  title: `Galaxy/Views/Solutions`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
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
