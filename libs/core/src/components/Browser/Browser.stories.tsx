import React from 'react';
import { Browser } from '@galaxy/core';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Browser,
  title: `Galaxy/Components/Browser`,
};

export const Default = () => {
  return (
    <Browser
      img="./post-featured-image.png"
      alt="Image Alt"
      caption="Image Caption"
      imgDefault="//placehold.it/1000"
    />
  );
};
