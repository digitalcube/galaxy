import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Avatar } from './Avatar';

export default {
  component: Avatar,
  title: `Components/Avatar`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Avatar />;
};

export const Sizes = () => {
  return (
    <>
      <Avatar size="0" />
      <Avatar size="1" />
      <Avatar size="2" />
    </>
  );
};
