import classNames from 'classnames';

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

export type VariantTypes = {
  variants?: any;
  variant?: any;
  debug?: boolean;
};

css.defaultProps = {
  debug: false,
  variant: 'active',
};
