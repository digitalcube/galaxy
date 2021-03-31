import React, { FC } from 'react';
import { Image, css, ButtonMenu } from '@galaxy/core';
import { avatarTheme } from './Avatar.galaxy';
const { avatar } = avatarTheme;

export const Avatar: FC<AvatarProps> = ({
  img,
  size = 8,
  name,
  imgDefault,
  variant,
  variants = avatar,
  menu,
}) => {
  const classNames = css({
    variant: `${variant}`,
    variants: variants,
  });

  img = !img ? `https://ui-avatars.com/api/?name=${name}` : img;

  if (menu) {
    return (
      <ButtonMenu {...menu}>
        <Image
          alt={name}
          className={`${classNames} ${size ? `h-${size} w-${size}` : ''}`}
          img={img}
          imgDefault={imgDefault}
        />
      </ButtonMenu>
    );
  }

  return (
    <Image
      alt={name}
      className={`${classNames} ${size ? `h-${size} w-${size}` : ''}`}
      img={img}
      imgDefault={imgDefault}
    />
  );
};

export type AvatarProps = {
  img?: string;
  imgDefault?: string;
  name?: string;
  variant?: typeof avatar;
  variants?: typeof avatar;
  size?: number;
  menu?: boolean | ButtonMenu;
};
