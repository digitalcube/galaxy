export const getVariants = ({ variants }: VariantTypes) => {
  if (variants.states) {
    return Object.entries(variants.states).map((variant) => {
      return { state: variant[0], className: variant[1] };
    });
  }
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
