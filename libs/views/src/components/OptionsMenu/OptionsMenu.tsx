import React, { FC } from 'react';
import { ButtonMenu, css, buttonTheme } from '@galaxy/core';
import { DotsHorizontal } from 'heroicons-react';

export const OptionsMenu: FC<OptionsMenu> = ({
  menu,
  className,
  variant,
}: OptionsMenu) => {
  const buttonMenuVariants = css({
    variants: buttonTheme.button,
    variant: 'ghost',
  });

  return (
    <ButtonMenu
      variant={variant}
      menu={menu}
      className={`${buttonMenuVariants} ${className}`}
    >
      <DotsHorizontal />
    </ButtonMenu>
  );
};

export type OptionsMenu = {
  variant?: string;
  className?: string;
  menu?: ButtonMenu['menu'];
};
