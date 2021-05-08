import React from 'react';
import { Avatar } from '@galaxy/core';
import { name } from 'faker';
import { defaultStorybookConfig } from '../../.storybook/docs';
import { fakerAvatar } from '@galaxy/faker';

const { avatar } = fakerAvatar;

export default {
  ...defaultStorybookConfig,
  component: Avatar,
  title: `Galaxy/Components/Avatar`,
};

export const Image = () => {
  return <Avatar {...avatar} menu={false} />;
};

export const Initials = () => {
  return <Avatar {...avatar} menu={false} />;
};

export const Menu = () => {
  return <Avatar {...avatar} />;
};
