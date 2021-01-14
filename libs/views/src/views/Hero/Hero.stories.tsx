import React from 'react';

import { Animation } from '@digitalcube/galaxy-core';
import { Hero } from './index';
import { HeroProps } from './Hero';
import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Hero,
  title: `Galaxy/Views/Hero`,
};

const props: HeroProps = {
  img: <Animation animation="dashboard" />,
  title: `In commodo id minim fugiat ex qui anim cupidatat reprehenderit.`,
  subtitle: `Laborum elit fugiat esse nisi eu magna est anim nisi officia deserunt eiusmod consequat voluptate eiusmod aliquip labore, id duis duis aliquip eiusmod.`,
  href: `#!`,
  buttonLabel: `Dolor aute exercitation`,
};

export const Default = () => {
  return <Hero {...props} />;
};
