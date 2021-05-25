import React, { FC } from 'react';
import { ButtonMenu, ButtonMenuProps } from '@galaxy/core';
import { DotsHorizontal } from 'heroicons-react';

export const OptionsMenu: FC<OptionsMenu> = ({
  menu,
  className,
  variant,
}: OptionsMenu) => {
  return (
    <ButtonMenu
      variant={variant}
      menu={menu}
      className={`${className}`}
    >
      <DotsHorizontal />
    </ButtonMenu>
  );
};

export type OptionsMenu = {
  variant?: string;
  className?: string;
  menu?: ButtonMenuProps['menu'];
};
