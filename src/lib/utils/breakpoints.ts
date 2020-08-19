import { components } from '../../styles';

type breakpoints = {
  size: `xxs` | `xs` | `sm` | `md` | `lg` | `xl` | `xxl`;
};

export const breakpoints = ({ size }: breakpoints) => {
  return `(min-width: ${components.grid.breakpoints[size]})`;
};
