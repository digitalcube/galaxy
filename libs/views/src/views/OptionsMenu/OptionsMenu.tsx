import React, { FC } from 'react';
import { ButtonMenu, css, buttonTheme } from '@galaxy/core';
import { DotsHorizontal } from 'heroicons-react';

export const OptionsMenu: FC<OptionsMenu> = ({
  className,
}: OptionsMenu) => {
  const buttonMenuVariants = css({
    variants: buttonTheme.button,
    variant: 'ghost',
  });

  return (
    <ButtonMenu className={`${buttonMenuVariants} ${className}`}>
      <DotsHorizontal />
    </ButtonMenu>
  );
};

export type OptionsMenu = {
  className?: string;
};
