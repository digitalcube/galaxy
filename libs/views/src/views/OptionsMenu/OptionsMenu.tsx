import React, { FC } from 'react';
import { ButtonMenu, theme, css, buttonTheme } from '@galaxy/core';
import { DotsHorizontal } from 'heroicons-react';

const { button } = theme;

export const OptionsMenu: FC<OptionsMenu> = ({
  variant,
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
  variant?: typeof button.variants;
  variants?: typeof button;
  className?: string;
};

OptionsMenu.defaultProps = {
  variant: 'ghost',
};
