import React, { FC } from 'react';
import { ButtonMenu, css, buttonTheme, ButtonMenuItem } from '@galaxy/core';
import { DotsHorizontal } from 'heroicons-react';

export const OptionsMenu: FC<OptionsMenu> = ({
  menu,
  className,
}: OptionsMenu) => {
  const buttonMenuVariants = css({
    variants: buttonTheme.button,
    variant: 'ghost',
  });

  return (
    <ButtonMenu menu={menu} className={`${buttonMenuVariants} ${className}`}>
      <DotsHorizontal />
    </ButtonMenu>
  );
};

export type OptionsMenu = {
  className?: string;
  menu?: ButtonMenuItem[];
};
