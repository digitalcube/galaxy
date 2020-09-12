import { ReactNode } from 'react';
import styled from 'styled-components';
import { components } from '../../styles';
import { breakpoints } from '../../lib/utils';

type Spacer = {
  children?: ReactNode;
  size?: `xl` | `lg` | `md` | `sm` | `xs`;
  xs?: `xl` | `lg` | `md` | `sm` | `xs`;
  sm?: `xl` | `lg` | `md` | `sm` | `xs`;
  md?: `xl` | `lg` | `md` | `sm` | `xs`;
  lg?: `xl` | `lg` | `md` | `sm` | `xs`;
  xl?: `xl` | `lg` | `md` | `sm` | `xs`;
};

export const spacerSize = ({ size = `md` }: Spacer) => {
  return components.spacer.size[size];
};

export const Spacer = styled.div<Spacer>`
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
