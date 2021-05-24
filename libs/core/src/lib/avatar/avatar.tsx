import React from 'react';
import { Image, css, ButtonMenu } from '@galaxy/core';
import { avatarTheme } from './avatar.galaxy';
const { avatar } = avatarTheme;

/* eslint-disable-next-line */
export interface AvatarProps {
  img?: string;
  imgDefault?: string;
  name?: string;
  variants?: any;
  variant?: string;
  size?: number;
  menu?: ButtonMenu['menu'];
  className?: string;
  avatar?: any;
}

export function Avatar(props: AvatarProps) {
  const { variant, menu, name, imgDefault, size, className } = props;
  let { img } = props;

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
}

export default Avatar;

Avatar.defaultProps = {
  variants: avatar,
  size: 6,
};
