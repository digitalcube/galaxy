import classNames from 'classnames';

export const css = ({ variant, variants }: VariantTypes) => {

  const DEFAULT = variants?.DEFAULT;
  const states = variants?.states ?? false;

  const classes = {
    [DEFAULT]: true,
    [variants?.variants[variant]]: true,
    [states[variant]]: states ?? true,
  };

  return classNames(classes);
};

export type VariantTypes = {
  variants?: any;
  variant?: any;
};

// // const DEFAULT = schema.components.domainState.variants.light.DEFAULT;
// const classes = {
//   // [`${DEFAULT}`]: true,
//   [`${variants?.pending}`]: variant === 'pending',
//   [`${variants?.verified}`]: variant === 'verified',
//   [`${variants?.attached}`]: variant === 'attached',
//   [`${variants?.failed}`]: variant === 'failed',
// };

// return classNames(classes);
