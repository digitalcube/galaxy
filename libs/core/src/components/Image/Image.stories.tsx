import React from 'react';
import { Image } from './Image';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Image,
  title: `Galaxy/Components/Image`,
};

export const Default = () => {
  return (
    <Image
      img="./post-featured-image.png"
      alt="Image Alt"
      caption="Image Caption"
      imgDefault="//placehold.it/1000"
    />
  );
};
