import React from 'react';
import styled from 'styled-components';
import { components } from '../../styles';
import { breakpoints } from '../../lib/utils';

type Grid = {
  gap?: string;
  xxs?: number | string;
  xs?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  xl?: number | string;
  xxl?: number | string;
};

export const Grid = styled.div<Grid>`
  display: grid;
  grid-template-columns: repeat(${components.grid.columns}, 1fr);
  gap: ${components.row.gap};

  @media ${breakpoints({ size: `xxs` })} {
    grid-template-columns: repeat(${props => props.xxs}, 1fr);
  }

  @media ${breakpoints({ size: `xs` })} {
    grid-template-columns: repeat(${props => props.xs}, 1fr);
  }

  @media ${breakpoints({ size: `sm` })} {
    grid-template-columns: repeat(${props => props.sm}, 1fr);
  }

  @media ${breakpoints({ size: `md` })} {
    grid-template-columns: repeat(${props => props.md}, 1fr);
  }

  @media ${breakpoints({ size: `lg` })} {
    grid-template-columns: repeat(${props => props.lg}, 1fr);
  }

  @media ${breakpoints({ size: `xl` })} {
    grid-template-columns: repeat(${props => props.xl}, 1fr);
  }

  @media ${breakpoints({ size: `xxl` })} {
    grid-template-columns: repeat(${props => props.xxl}, 1fr);
  }
`;
