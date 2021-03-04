import React from 'react';
import { Avatar } from '@galaxy/core';
import { name } from 'faker';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Avatar,
  title: `Galaxy/Components/Avatar`,
};

export const Image = () => {
  return <Avatar img={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`} name={`${name.findName()}`}  size={8} />;
};

export const Initials = () => {
  return <Avatar name={`${name.findName()}`} />;
};
