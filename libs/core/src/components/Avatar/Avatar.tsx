import React, { FC } from 'react';
import { Image, css } from '@galaxy/core';
import { avatar } from './galaxy.config';

export const Avatar: FC<Avatar> = ({ img, size, name, imgDefault }: Avatar) => {
  const classNames = css({
    variant: 'light',
    variants: avatar,
  });

  return (
    <Image
      className={`${classNames} ${size ? `h-${size}` : ''}`}
      img={img}
      imgDefault={imgDefault}
      alt={name}
    />
  );
};

export type Avatar = {
  img?: string;
  imgDefault?: string;
  name: string;
  variant?: 'light' | 'dark' | string;
  size?: number;
};
