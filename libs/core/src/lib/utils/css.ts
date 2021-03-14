import classNames from 'classnames';

export const css = ({ variant, variants, state }: Theme) => {
  const { types, states } = variants;
  console.log(variant, variants, types, state, states);
  const DEFAULT = variants?.DEFAULT;
  // variants = variants?.variants !== undefined ? variants.variants : false;
  // const states = variants?.states !== undefined ? variants.states : false;

  const classes = {
    [DEFAULT]: true,
    [types[variant]]: types,
    [states[variant]]: states,
  };

  return classNames(classes);
};

type Theme = {
  variant: string;
  variants: any;
  state: string;
  states: any;
};
