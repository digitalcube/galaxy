/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC } from 'react';
import { Image as ThemeUIImage } from 'theme-ui';

type Image = {
  img?: string;
  alt?: string;
  sx?: object;
  kind?: string;
};

export const Image: FC<Image> = ({ img, sx, kind }: Image) => {
  if (!img) return null;
  return (
    <ThemeUIImage
      variant={kind}
      src={img}
      sx={{
        ...sx,
      }}
    />
  );
};
