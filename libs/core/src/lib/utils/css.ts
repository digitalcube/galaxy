import classNames from 'classnames';
import { VariantTypes } from './variants';

export const css = ({ variant, variants }: VariantTypes) => {
  const DEFAULT = variants?.DEFAULT;
  // variants = variants?.variants !== undefined ? variants.variants : false;
  const states = variants?.states !== undefined ? variants.states : false;

  const classes = {
    [DEFAULT]: true,
    // [variants[variant]]: variants,
    [states[variant]]: states,
  };

  console.log(variants);

  return classNames(classes);
};

css.defaultProps = {
  debug: false,
  variant: 'active',
};
