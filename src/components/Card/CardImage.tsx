import React, { FC } from 'react';
import { AspectRatio as ThemeUIAspectRatio } from 'theme-ui';
import { Image } from '../index';

type CardImage = {
  img?: string;
};

export const CardImage: FC<CardImage> = ({ img }: CardImage) => {
  if (!img) return null;
  return (
    <ThemeUIAspectRatio ratio={16 / 9}>
      <Image
        img={img}
        sx={{
          objectFit: 'cover',
        }}
      />
    </ThemeUIAspectRatio>
  );
};
