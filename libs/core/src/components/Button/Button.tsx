import React, { ReactNode, FC } from 'react';
import { css, Tag } from '@galaxy/core';
import { button } from './galaxy.config';

export const Button: FC<Button> = ({
  variant,
  children,
  className,
  label,
  as = 'button',
  variants,
}: Button) => {
  const classNames = css({
    variant: variant,
    variants: variants,
  });

  return (
    <Tag className={`${className} ${classNames}`}>
      {label}
      {children}
    </Tag>
  );
};

export type Button = {
  children?: ReactNode;
  className?: string;
  label?: string;
  as?: 'button' | 'a' | 'div' | 'span';
  variants?: typeof button;
  variant?: typeof button.variants;
};

Button.defaultProps = {
  variants: button,
};
