import React, { ReactNode } from 'react';
import { css, Select, SelectProps, Input } from '@galaxy/core';
import { fieldTheme } from './field.galaxy';
const { field } = fieldTheme;

/* eslint-disable-next-line */
export interface FieldProps {
  placeholder?: string;
  className?: string;
  main?: ReactNode;
  variants?: any;
  variant?: string;
  name?: string;
  type?: string;
  options?: SelectProps['options'];
  handleSelect?: SelectProps['handleSelect'];
}

export function Field(props: FieldProps) {
  const { type } = props;

  const fieldCss = css({
    variants: props.variants,
    variant: props.variant,
  });

  if (type === 'select') {
    return <Select handleSelect={() => undefined} {...props} />;
  }

  return <Input {...props} />;
}

export default Field;

Field.defaultProps = {
  variants: field,
  variant: 'primary',
  placeholder: '',
};
