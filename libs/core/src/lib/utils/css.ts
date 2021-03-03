import classNames from 'classnames';

export const cssClasses = ({ variant, variants }: VariantTypes) => {
  // const DEFAULT = schema.components.domainState.variants.light.DEFAULT;
  // console.log(DEFAULT);
  const classes = {
    // [`${DEFAULT}`]: true,
    [`${variants?.pending}`]: variant === 'pending',
    [`${variants?.verified}`]: variant === 'verified',
    [`${variants?.attached}`]: variant === 'attached',
    [`${variants?.failed}`]: variant === 'failed',
  };

  return classNames(classes);
};

export type VariantTypes = {
  variants?: any;
  variant?: any;
};
