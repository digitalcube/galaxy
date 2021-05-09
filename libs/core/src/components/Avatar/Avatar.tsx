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
  variants,
  menu,
  className,
}) => {
  const avatarCss = css({
    variant: variant,
    variants: avatar,
  });

  img = !img ? `https://ui-avatars.com/api/?name=${name}` : img;

  if (menu) {
    return (
      <ButtonMenu menu={menu} {...menu}>
        <Image
          alt={name}
          className={`${avatarCss} ${size ? `h-${size} w-${size}` : ''}`}
          img={img}
          imgDefault={imgDefault}
        />
      </ButtonMenu>
    );
  }

  return (
    <Image
      alt={name}
      className={`${className} ${avatarCss} ${
        size ? `h-${size} w-${size}` : ''
      }`}
      img={img}
      imgDefault={imgDefault}
    />
  );
};

export type AvatarProps = {
  img?: string;
  imgDefault?: string;
  name?: string;
  variants?: any;
  variant?: string;
  size?: number;
  menu?: ButtonMenu[] | boolean;
  className?: string;
};
