import React, { ReactNode, FC } from 'react';
import { css, Tag } from '@galaxy/core';
import Link from '../../lib/link/link';
import { inputTheme } from './Input.galaxy';
const { input } = inputTheme;

export const Input: FC<Input> = ({
  variant,
  children,
  className,
  label,
  as,
  variants,
  href,
}: Input) => {
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
    <Tag as={as} className={`${className} ${classNames}`}>
      {label}
      {children}
    </Tag>
  );
};

export type Input = {
  children?: ReactNode;
  className?: string;
  label?: string;
  as?: 'input' | 'div' | 'span' | 'a';
  variants?: any;
  variant?: any;
  href?: string;
  type?: string;
};

Input.defaultProps = {
  variants: input,
  variant: 'primary',
  as: 'input',
  label: '',
};
