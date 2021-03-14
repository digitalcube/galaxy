import React, { FC } from 'react';
import { Image, css, ButtonMenu } from '@galaxy/core';
import { avatarTheme } from './Avatar.galaxy';
const { avatar } = avatarTheme;

export const Avatar: FC<Avatar> = ({
  img,
  size,
  name,
  imgDefault,
  variant,
  variants,
  menu,
}: Avatar) => {
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
          className={`${classNames} ${size ? `h-${size}` : ''}`}
          img={img}
          imgDefault={imgDefault}
        />
      </ButtonMenu>
    );
  }

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
  variant?: typeof avatar;
  variants?: typeof avatar;
  size?: number;
  menu?: boolean | ButtonMenu;
};

Avatar.defaultProps = {
  variants: avatar,
  size: 8,
};
