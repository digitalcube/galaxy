export const getVariants = ({ variants }: VariantTypes) => {
  return Object.entries(variants).map((variant) => {
    return { variant: variant[0], className: variant[1] };
  });
};

export const getVariant = ({ variant }: VariantTypes) => {
  return Object.entries(variant).map((variant) => {
    return variant;
  });
};

export type VariantTypes = {
  variants?: any;
  variant?: any;
};
