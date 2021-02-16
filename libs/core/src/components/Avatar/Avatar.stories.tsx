import React from 'react';
import { Avatar } from '@galaxy/core';
import { name } from 'faker';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Avatar,
  title: `Galaxy/Components/Avatar`,
};

export const Default = () => {
  return <Avatar img={`https://picsum.photos/200.webp`} name={`${name.findName()}`} />;
};
