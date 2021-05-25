import React, { ReactNode } from 'react';
import { css, Tag } from '@galaxy/core';
import Link from '../../lib/link/link';
import { buttonTheme } from './button.galaxy';
const { button } = buttonTheme;

/* eslint-disable-next-line */
export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  label?: string;
  as?: 'button' | 'div' | 'span' | 'a';
  variants?: any;
  variant?: any;
  href?: string;
  type?: string;
  disabled?: boolean | undefined;
  active?: boolean | undefined;
}

export function Button(props: ButtonProps) {
  const {
    variant,
    children,
    className,
    as,
    variants,
    href,
    disabled,
    active,
  } = props;
  let label = props.label;
  if (!props.label && !children) {
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
      <Link
        disabled={disabled}
        className={`${className} ${classNames}`}
        href={href}
      >
        {label}
        {children}
      </Link>
    );
  }
  return (
    <Tag
      active={active}
      disabled={disabled}
      as={as}
      className={`${className} ${classNames}`}
    >
      {label}
      {children}
    </Tag>
  );
}

export default Button;

Button.defaultProps = {
  variants: button,
  variant: 'primary',
  as: 'button',
  className: '',
};
