import React from 'react';
import { Avatar, AvatarProps } from './avatar';
import { fakerAvatar } from '@galaxy/faker';

const { avatar } = fakerAvatar;

export default {
  component: Avatar,
  title: `Galaxy/Components/Avatar`,
};

export const Image = () => {
  /* eslint-disable-next-line */
  const props: AvatarProps = {};
  return <Avatar {...avatar} menu={false} />;
};

export const Initials = () => {
  /* eslint-disable-next-line */
  const props: AvatarProps = {};
  return <Avatar {...avatar} menu={false} />;
};

export const Menu = () => {
  /* eslint-disable-next-line */
  const props: AvatarProps = {};
  return <Avatar {...avatar} />;
};
