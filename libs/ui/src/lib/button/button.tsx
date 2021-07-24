import { ReactNode } from 'react';
import { css } from '../../utils/';
import { buttonTheme } from './button.galaxy';
const { button } = buttonTheme;

/* eslint-disable-next-line */
export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  label?: string;
  as?: 'button' | 'div' | 'span' | 'a';
  variants?: any;
  variant?: any;
  href?: string;
  type?: string;
}

export function Button(props: ButtonProps) {
  const { label, variant, variants, className, children, href } = props;

  if (!label) return null;

  const classNames = css({
    variant: variant,
    variants: variants,
  });

  return (
    <a href={`${href}`} className={`${className} ${classNames}`}>
      {label}
      {children}
    </a>
  );
}

export default Button;

Button.defaultProps = {
  variants: button,
  href: '#',
  variant: 'primary',
  as: 'a',
  label: 'Button',
  className: '',
};
