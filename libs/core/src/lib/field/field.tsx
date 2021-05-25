import React, { ReactNode } from 'react';
import { css} from '@galaxy/core';
import { fieldTheme } from './field.galaxy';
const { field } = fieldTheme;

/* eslint-disable-next-line */
export interface FieldProps {
  placeholder?: string;
  className?: string;
  main?: ReactNode;
  variants?: any;
  variant?: string;
}

export function Field(props: FieldProps) {
  const fieldCss = css({
    variants: props.variants,
    variant: props.variant,
  });

  return <input type="text" className={`${fieldCss}`} {...props} />;
}

export default Field;

Field.defaultProps = {
  variants: field,
  variant: 'primary',
};
