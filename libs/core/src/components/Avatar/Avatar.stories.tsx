import React from 'react';

import { Avatar } from './Avatar';

export default {
  component: Avatar,
  title: `Galaxy/Components/Avatar`,


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
