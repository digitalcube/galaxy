import React, { FC } from 'react';
import { Image } from '../index';

type CardImage = {
  img?: string;
};

export const CardImage: FC<CardImage> = ({ img }: CardImage) => {
  if (!img) return null;
  return <Image img={img} />;
};
