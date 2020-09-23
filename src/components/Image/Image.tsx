/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { FC } from 'react';
import { Image as ThemeUIImage } from 'theme-ui';

type Image = {
  img?: string;
  alt?: string;
  sx?: object;
};

export const Image: FC<Image> = ({ img, sx }: Image) => {
  if (!img) return null;
  return (
    <ThemeUIImage
      sx={{
        ...sx,
      }}
      src={img}
    />
  );
};

Image.defaultProps = {
  img: `logo-howtospeakmachine.webp`,
};
