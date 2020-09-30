/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC } from 'react';
import { AspectRatio as ThemeUIAspectRatio } from 'theme-ui';
import { Image } from '../../components/Image';

type CardImage = {
  img?: string;
};

export const CardImage: FC<CardImage> = ({ img }: CardImage) => {
  if (!img) return null;
  return (
    <ThemeUIAspectRatio
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
      ratio={16 / 9}
    >
      <Image
        sx={{
          minWidth: '25%',
        }}
        img={img}
      />
    </ThemeUIAspectRatio>
  );
};
