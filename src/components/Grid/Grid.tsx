import React from 'react';
import styled from 'styled-components';
import { components } from '../../styles';
import { breakpoints } from '../../lib/utils/breakpoints';

type Grid = {
  children?: string;
  gap?: string;
  xxs?: number | string;
  xs?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  xl?: number | string;
  xxl?: number | string;
};

const StyledGrid = styled.div`
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

console.log(breakpoints({ size: `sm` }));

export const Grid: React.FC<Grid> = ({
  children = null,
  gap = components.row.gap,
  xxs,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
}) => {
  if (!children) return null;
  return (
    <StyledGrid
      gap={gap}
      xxs={xxs}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      xxl={xxl}
    >
      {children}
    </StyledGrid>
  );
};
