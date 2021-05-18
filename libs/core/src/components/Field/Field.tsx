import React, { ReactNode, FC } from 'react';
import { css, Input } from '@galaxy/core';
import { fieldTheme } from './Field.galaxy';
const { field } = fieldTheme;

export const Field: FC<FieldProps> = (props: FieldProps) => {
  const fieldCss = css({
    variants: props.variants,
    variant: props.variant,
  });

  return <Input {...props} />;
};

export type FieldProps = {
  placeholder?: string;
  className?: string;
  main?: ReactNode;
  variants?: any;
  variant?: string;
};

Field.defaultProps = {
  variants: field,
  variant: 'primary',
};
