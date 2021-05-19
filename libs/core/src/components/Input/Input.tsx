import React, { ReactNode, FC } from 'react';
import { css } from '@galaxy/core';
import { inputTheme } from './Input.galaxy';
const { input } = inputTheme;

export const Input: FC<Input> = ({
  variant,
  children,
  className,
  label,
  placeholder,
  variants,
}: Input) => {
  const classNames = css({
    variant: variant,
    variants: variants,
  });

  return (
    <input type="text" className={`foo ${classNames}`} placeholder={placeholder} />
  );
};

export type Input = {
  children?: ReactNode;
  className?: string;
  label?: string;
  variants?: any;
  variant?: any;
  href?: string;
  type?: string;
  placeholder?: string;
};

Input.defaultProps = {
  variants: input,
  label: 'Label',
  className: '',
  placeholder: 'Placeholder',
};
