import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { GetStarted, GetStartedProps } from './GetStarted';

const props: GetStartedProps = {
  title: `Fugiat ut ullamco aute nulla?`,
  subtitle: `Qui ut Lorem ex occaecat ea deserunt eserunt in irure ipsum veniam enim quis consequat cillum.`,
  href: `#!`,
  linkLabel: `Nisi veniam laboris`,
  variant: `0`,
}
export default {
  component: GetStarted,
  title: `Galaxy/Views/GetStarted`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <GetStarted {...props} />;
};

export const Variants = () => {
  return <GetStarted {...props} variant="1" />;
};
