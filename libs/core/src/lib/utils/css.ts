import classNames from 'classnames';

export const css = ({ variant, variants }: Css) => {
  if (!variants) return null;

  const DEFAULT = variants?.DEFAULT ? variants.DEFAULT : false;
  variants = variant ? variants[`${variant}`] : false;
  variant = variant ? variant : false;

  const classes = {
    [Array.isArray(DEFAULT) ? DEFAULT.join(' ') : DEFAULT]: DEFAULT,
    [Array.isArray(variants) ? variants.join(' ') : variants]: variants,
  };

  return classNames(classes);
};

type Css = {
  variant?: string | boolean;
  variants: any;
};
