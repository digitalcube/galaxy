import { ReactNode, FC } from 'react';
// import { css, Tag } from '@galaxy/ui';
import { inputTheme } from './Input.galaxy';
const { input } = inputTheme;

/* eslint-disable-next-line */
export interface InputProps {
  children?: ReactNode;
  className?: string;
  label?: string;
  as?: 'input' | 'div' | 'span' | 'a';
  variants?: any;
  variant?: any;
  href?: string;
  type?: string;
  placeholder?: string;
}

export function Input(props: InputProps) {
  const {
    variant,
    children,
    className,
    label,
    as,
    placeholder,
    variants,
    href,
  } = props;

  // const classNames = css({
  //   variant: variant,
  //   variants: variants,
  // });

  return (
    <input
      type="text"
      name="siteName"
      id="siteName"
      className="ring-2 ring-shifter-purple-primary focus:outline-none focus:border-shifter-purple-primary block w-full p-3 rounded"
      placeholder={placeholder}
      autoComplete="off"
    />
  );
}

export default Input;

Input.defaultProps = {
  variants: input,
  variant: 'primary',
  as: 'input',
  label: '',
  placeholder: '',
};
