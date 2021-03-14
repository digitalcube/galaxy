import classNames from 'classnames';

export const css = ({ variant, variants }: Css) => {
  if (!variants) return null;

  const DEFAULT = variants?.DEFAULT;
  variants = variants[variant];

  const classes = {
    [DEFAULT ? DEFAULT : '']: true,
    [variants]: variants ? true : false,
  };

  return classNames(classes);
};

type Css = {
  variant?: string;
  variants: any;
};
