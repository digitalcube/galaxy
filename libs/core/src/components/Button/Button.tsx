import React, { ReactNode, FC } from 'react';
import classNames from 'classnames';
import { schema } from './galaxy.config.js';

export type Button = {
  children?: ReactNode;
  className?: string;
  label?: string;
  as?: 'button' | 'a' | 'div' | 'span';
  variant?:
    | 'primary'
    | 'danger'
    | 'white'
    | 'success'
    | 'ghost'
    | 'link'
    | 'outline-primary';
};

const buttonClasses = ({ variant }: Button) => {
  const variants = schema.components.button.variants;
  const DEFAULT = schema.components.button.DEFAULT;
  const classes = {
    [`${variants.primary}`]: !variant || variant === 'primary',
    [`${variants.ghost}`]: variant === 'ghost',
    [`${variants.success}`]: variant === 'success',
    [`${variants.danger}`]: variant === 'danger',
    [`${variants.white}`]: variant === 'white',
    [`${variants.link}`]: variant === 'link',
    [`${variants.outline.primary}`]: variant === 'outline-primary',
    [`${DEFAULT}`]: true,
  };

  return classNames(classes);
};

export const Button: FC<Button> = ({
  variant,
  children,
  className,
  label,
  as = 'button',
}: Button) => {
  const Tag = `${as}`;
  return (
    <Tag
      className={`${className} ${buttonClasses({
        variant,
      })}`}
    >
      {label}
      {children}
    </Tag>
  );
};
