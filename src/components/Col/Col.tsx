import { ReactNode } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../lib/utils';

type Col = {
  children: ReactNode;
  width?: string | number;
  xxs?: number | string;
  xs?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  xl?: number | string;
  xxl?: number | string;
};

export const Col = styled.div<Col>`
  display: grid;
  align-items: stretch;
  min-width: 0;
  grid-column-end: ${({ width = 1 }) => `span ${width}`};

  @media ${breakpoints({ size: `xxs` })} {
    grid-column-end: ${props => (props.xxs ? `span ${props.xxs}` : ``)};
  }

  @media ${breakpoints({ size: `xs` })} {
    grid-column-end: ${props => (props.xs ? `span ${props.xs}` : ``)};
  }

  @media ${breakpoints({ size: `sm` })} {
    grid-column-end: ${props => (props.sm ? `span ${props.sm}` : ``)};
  }

  @media ${breakpoints({ size: `md` })} {
    grid-column-end: ${props => (props.md ? `span ${props.md}` : ``)};
  }

  @media ${breakpoints({ size: `lg` })} {
    grid-column-end: ${props => (props.lg ? `span ${props.lg}` : ``)};
  }

  @media ${breakpoints({ size: `xl` })} {
    grid-column-end: ${props => (props.xl ? `span ${props.xl}` : ``)};
  }

  @media ${breakpoints({ size: `xxl` })} {
    grid-column-end: ${props => (props.xxl ? `span ${props.xxl}` : ``)};
  }
`;
