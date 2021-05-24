import React from 'react';
import { Image, ImageProps } from './image';

export default {
  component: Image,
  title: `Galaxy/Components/Image`,
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ImageProps = {
    img: './post-featured-image.png',
    alt: 'Image Alt',
    caption: 'Image Caption',
    imgDefault: '//placehold.it/1000',
  };

  return <Image {...props} />;
};
