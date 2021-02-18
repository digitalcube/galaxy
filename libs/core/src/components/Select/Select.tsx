import React, { ReactNode, FC } from 'react';
import classNames from 'classnames';
import { schema } from './galaxy.config.js';

export type Select = {
  children?: ReactNode;
  variant?: 'primary' | 'danger' | 'white' | 'success' | 'ghost';
};

const selectClasses = ({ variant }: Select) => {
  const variants = schema.components.select.variants;
  const DEFAULT = schema.components.select.DEFAULT;
  const classes = {
    [`${variants.primary}`]: !variant || variant === 'primary',
    [`${variants.ghost}`]: variant === 'ghost',
    [`${variants.success}`]: variant === 'success',
    [`${variants.danger}`]: variant === 'danger',
    [`${variants.white}`]: variant === 'white',
    [`${DEFAULT}`]: true,
  };

  return classNames(classes);
};

export const Select: FC<Select> = ({
  variant,
  children,
}: Select) => {
  return <select className={selectClasses({ variant })}>{children}</select>;
};
