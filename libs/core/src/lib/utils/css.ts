import classNames from 'classnames';

export const css = ({ variant, variants }: Css) => {
  if (!variants) return null;

  console.log(variants);

  const DEFAULT = variants?.DEFAULT ? variants.DEFAULT : false;
  variants = variant ? variants[`${variant}`] : false;
  variant = variant ? variant : false;

  const classes = {
    [Array.isArray(DEFAULT) ? DEFAULT.join(' ') : DEFAULT]: DEFAULT,
    [Array.isArray(variants) ? variants.join(' ') : variants]: variants,
  };

  console.log(`variants: ` + variants);
  console.log(`variant: ` + variant);
  console.log(`DEFAULT: ` + DEFAULT);
  console.log(`classNames: ` + classNames(classes));

  return classNames(classes);
};

type Css = {
  variant?: string | boolean;
  variants: any;
};
