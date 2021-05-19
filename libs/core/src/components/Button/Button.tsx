import React, { ReactNode, FC } from 'react';
import { css, Tag } from '@galaxy/core';
import Link from '../../lib/link/link';
import { buttonTheme } from './Button.galaxy';
const { button } = buttonTheme;

export const Button: FC<Button> = ({
  variant,
  children,
  className,
  label,
  as,
  variants,
  href,
  disabled,
}: Button) => {

  if (!label && !children) {
    label = variant;
  }

  const classNames = css({
    variant: variant,
    variants: variants,
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
    <Tag disabled={disabled} as={as} className={`${className} ${classNames}`}>
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
  variants?: any;
  variant?: any;
  href?: string;
  type?: string;
  disabled?: boolean | undefined;
};

Button.defaultProps = {
  variants: button,
  variant: 'primary',
  as: 'button',
  className: '',
};
