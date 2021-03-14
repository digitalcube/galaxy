import classNames from 'classnames';

export const css = ({ variant, variants }: Css) => {
  if (!variants) return null;

  const DEFAULT = variants?.DEFAULT ? variants.DEFAULT : false;
  variants = variant ? variants[`${variant}`] : false;
  variant = variant ? variant : false;

  const classes = {
    [DEFAULT]: DEFAULT,
    [variants]: variants,
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
