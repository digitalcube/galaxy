import classNames from 'classnames';
import { VariantTypes } from './variants';

export const css = ({ variant, variants }: VariantTypes) => {
  const DEFAULT = variants?.DEFAULT;
  variants = variants?.variants ?? false;
  const states = variants?.states ?? false;

  const classes = {
    [DEFAULT]: true,
    [variants[variant]]: variants ?? true,
    [states[variant]]: states ?? true,
  };

  return classNames(classes);
};

css.defaultProps = {
  debug: false,
  variant: 'active',
};
