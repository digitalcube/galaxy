import React, { FC } from 'react';
import { Image } from '../../components/Image';

type FeaturedImage = {
  img?: string;
  size?: string;
};

export const FeaturedImage: FC<FeaturedImage> = ({
  img = `post-featured-image.png`,
}: FeaturedImage) => {
  if (!img) return null;
  return <Image kind="responsive" img={img} />;
};
