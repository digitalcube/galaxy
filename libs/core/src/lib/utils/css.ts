import classNames from 'classnames';

export const cssClasses = ({ variant, variants }: VariantTypes) => {
  return Object.entries(variants).map((variant) => {
    if (variant[0] === 'states') {
      const obj = { state: variant[0], className: variant[1] };
      return obj;
    }
  });

  // const DEFAULT = schema.components.domainState.variants.light.DEFAULT;
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
