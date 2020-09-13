import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../lib/utils';

type Spacer = {
  children?: ReactNode;
  size?: `xl` | `lg` | `md` | `sm` | `xs`;
  sizes?: 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4;
  as?: `div` | `section` | `article`;
  xs?: `xl` | `lg` | `md` | `sm` | `xs`;
  sm?: `xl` | `lg` | `md` | `sm` | `xs`;
  md?: `xl` | `lg` | `md` | `sm` | `xs`;
  lg?: `xl` | `lg` | `md` | `sm` | `xs`;
  xl?: `xl` | `lg` | `md` | `sm` | `xs`;
};

export const defaultStyles = {
  base: 16,
  size: {
    xl: `5rem`,
    lg: `4rem`,
    md: `3rem`,
    sm: `2rem`,
    xs: `1rem`,
  },
};

const size = ({ sizes = 1 }: Spacer) => {
  const base = defaultStyles.base;
  return base * sizes;
};

console.log(size({ sizes: 0.5 }));

export const spacerSize = ({ size = `md` }: Spacer) => {
  return defaultStyles.size[size];
};

export const Spacer: FC<Spacer> = ({
  size = `xs`,
  children,
  as = `div`,
}: Spacer) => {
  return (
    <StyledSpacer as={as} size={size}>
      {children}
    </StyledSpacer>
  );
};

const StyledSpacer = styled.div<Spacer>`
  padding-top: ${props => {
    const { size } = props;
    return spacerSize({ size: size });
  }};
  padding-bottom: ${props => {
    const { size, children } = props;
    return children ? spacerSize({ size: size }) : 0;
  }};

  @media ${breakpoints({ size: `xs` })} {
    padding-top: ${props => {
      const { xs } = props;
      return xs ? spacerSize({ size: xs }) : ``;
    }};
  }

  @media ${breakpoints({ size: `sm` })} {
    padding-top: ${props => {
      const { sm } = props;
      return sm ? spacerSize({ size: sm }) : ``;
    }};
  }

  @media ${breakpoints({ size: `md` })} {
    padding-top: ${props => {
      const { md } = props;
      return md ? spacerSize({ size: md }) : ``;
    }};
  }

  @media ${breakpoints({ size: `lg` })} {
    padding-top: ${props => {
      const { lg } = props;
      return lg ? spacerSize({ size: lg }) : ``;
    }};
  }

  @media ${breakpoints({ size: `xl` })} {
    padding-top: ${props => {
      const { xl } = props;
      return xl ? spacerSize({ size: xl }) : ``;
    }};
  }
`;
