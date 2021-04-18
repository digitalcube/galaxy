import React, { ReactNode, FC } from 'react';
import { css, Tag } from '@galaxy/core';
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

  // return (
  //   <Tag as={as} className={`${className} ${classNames}`}>
  //     {label}
  //     {children}
  //   </Tag>
  // );

  return (
    <input
      type="text"
      name="siteName"
      id="siteName"
      className="ring-2 ring-shifter-purple-primary focus:outline-none focus:border-shifter-purple-primary block w-full p-3 rounded-r"
      placeholder="Site Name"
    />
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
