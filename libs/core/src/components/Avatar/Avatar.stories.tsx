import React from 'react';
import { Avatar } from '@galaxy/core';
import { name, internet } from 'faker';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Avatar,
  title: `Galaxy/Components/Avatar`,
};

export const Default = () => {
  return <Avatar img={`https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940}`} name={`${name.findName()}`} />;
};
