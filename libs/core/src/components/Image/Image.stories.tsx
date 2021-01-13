import React from 'react';

import { Image } from './Image';

export default {
  component: Image,
  title: `Galaxy/Components/Image`,


};

export const Default = () => {
  return <Image img="./post-featured-image.png" alt="Image" />;
};
