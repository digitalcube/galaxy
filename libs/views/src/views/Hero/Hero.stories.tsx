import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Animation } from '@galaxy/core';
import { Hero } from './index';
import { HeroProps } from './Hero';

const props: HeroProps = {
  img: <Animation animation="dashboard" />,
  title: `In commodo id minim fugiat ex qui anim cupidatat reprehenderit.`,
  subtitle: `Laborum elit fugiat esse nisi eu magna est anim nisi officia deserunt eiusmod consequat voluptate eiusmod aliquip labore, id duis duis aliquip eiusmod.`,
  href: `#!`,
  buttonLabel: `Dolor aute exercitation`,
};

export default {
  component: Hero,
  title: `Galaxy/Views/Hero`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Hero {...props} />;
};
