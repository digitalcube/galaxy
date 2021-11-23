import classNames from 'classnames';

/* eslint-disable-next-line */
export interface CssProps {
  variant?: string | boolean;
  variants: any;
}

export function Css(props: CssProps) {
  let { variant, variants } = props;
  if (!variants) return null;

  const DEFAULT = variants?.DEFAULT ? variants.DEFAULT : false;
  variants = variant ? variants[`${variant}`] : false;
  variant = variant ? variant : false;

  const classes = {
    [Array.isArray(DEFAULT) ? DEFAULT.join(' ') : DEFAULT]: DEFAULT,
    [Array.isArray(variants) ? variants.join(' ') : variants]: variants,
  };

  return classNames(classes);
}

export default Css;
