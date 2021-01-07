import React, { FC } from 'react';
import { Avatar as ThemeUIAvatar } from 'theme-ui';

type Avatar = {
  img?: string;
  size?: string;
};

export const Avatar: FC<Avatar> = ({
  img = `//placehold.it/100`,
  size,
}: Avatar) => {
  if (!img) return null;
  return <ThemeUIAvatar variant={size} src={img} />;
};
