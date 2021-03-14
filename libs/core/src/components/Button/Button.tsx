import React, { ReactNode, FC } from 'react';
import { css, Tag } from '@galaxy/core';
import { buttonTheme } from './Button.galaxy';
import Link from '../../lib/link/link';
const { button } = buttonTheme;

export const Button: FC<Button> = ({
  variant,
  children,
  className,
  label,
  as,
  variants,
  href,
}: Button) => {
  const classNames = css({
    variant: 'primary',
    variants: variants,
    state: 'active',
    states: variants?.states,
  });

  /**
   * If the link target is internal,
   * should use the Link component to handle the SPA routing
   */
  if (href || as === 'a') {
    return (
      <Link className={`${className} ${classNames}`} href={href}>
        {label}
        {children}
      </Link>
    );
  }

  return (
    <Tag as={as} className={`${className} ${classNames}`}>
      {label}
      {children}
    </Tag>
  );
};

export type Button = {
  children?: ReactNode;
  className?: string;
  label?: string;
  as?: 'button' | 'div' | 'span' | 'a';
  variants?: typeof button;
  variant?: typeof button.variants;
  href?: string;
  type?: string;
};

Button.defaultProps = {
  variants: button,
  as: 'button',
};
