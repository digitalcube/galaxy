import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../lib/utils';

export type Spacer = {
  children?: ReactNode;
  as?: `div` | `section` | `article`;
  size?: 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4;
  xs?: 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4;
  sm?: 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4;
  md?: 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4;
  lg?: 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4;
  xl?: 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4;
};

const spacerSize = ({ size }: Spacer) => {
  if (!size) return;
  return `${size}rem`;
};

export const Spacer: FC<Spacer> = ({
  size = 1,
  children,
  as = `div`,
}: Spacer) => {
  return (
    <StyledSpacer as={as} size={size}>
      {children}
    </StyledSpacer>
  );
};

// padding-top: ${props => {
//   const { size } = props;
//   return spacerSize({ size: size });
// }};

// padding-bottom: ${props => {
//   const { size, children } = props;
//   return children ? spacerSize({ size: size }) : 0;
// }};

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
