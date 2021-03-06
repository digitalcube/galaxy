import React, { FC } from 'react';
import { Image, css } from '@galaxy/core';
import { avatar } from './galaxy.config';

export const Avatar: FC<Avatar> = ({
  img,
  size,
  name,
  imgDefault,
  variant,
  variants,
}: Avatar) => {
  const classNames = css({
    variant: variant,
    variants: variants,
  });

  return (
    <Image
      alt={name}
      className={`${classNames} ${size ? `h-${size}` : ''}`}
      img={img}
      imgDefault={imgDefault}
    />
  );
};

export type Avatar = {
  img?: string;
  imgDefault?: string;
  name?: string;
  variant?: typeof avatar.variants;
  variants?: typeof avatar;
};

Avatar.defaultProps = {
  variants: avatar,
};
