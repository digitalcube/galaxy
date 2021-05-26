import React, { ReactNode } from 'react';
import { css } from '@galaxy/core';
import { inputTheme } from './input.galaxy';
const { input } = inputTheme;

/* eslint-disable-next-line */
export interface InputProps {
  placeholder?: string;
  className?: string;
  variants?: any;
  variant?: string;
  name?: string;
  type?: string;
  list?: string;
  datalist?: any;
  autocomplete?: string;
}

export function Input(props: InputProps) {
  const { type, variants, variant } = props;

  const inputCss = css({
    variants: variants,
    variant: variant,
  });
  return <input type={type} className={`${inputCss}`} {...props} />;
}

export default Input;

Input.defaultProps = {
  type: 'text',
  className: '',
};
