import { components } from '../../styles';

type breakpoints = {
  size?: string;
};

export const breakpoints = ({ size = `` }: breakpoints) => {
  return `(min-width: ${components.grid.breakpoints[size]})`;
};
