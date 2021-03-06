import React, { FC } from 'react';
import { Image, css, ButtonMenu } from '@galaxy/core';
import { avatar } from './galaxy.config';

export const Avatar: FC<Avatar> = ({
  img,
  size,
  name,
  imgDefault,
  variant,
  variants,
  menuItems,
}: Avatar) => {
  const classNames = css({
    variant: variant,
    variants: variants,
  });

  if (menuItems)
    return (
      <ButtonMenu items={menuItems}>
        <Image
          alt={name}
          className={`${classNames} ${size ? `h-${size}` : ''}`}
          img={img}
          imgDefault={imgDefault}
        />
      </ButtonMenu>
    );

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
  size?: number;
  menuItems?: ButtonMenu[];
};

Avatar.defaultProps = {
  variants: avatar,
  size: 8,
  imgDefault: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`,
};
