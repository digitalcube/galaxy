import { ReactNode } from 'react';
import styled from 'styled-components';
import { components } from '../../styles';

type Spacer = {
  children?: ReactNode;
  size?: `xl` | `lg` | `md` | `sm` | `xs`;
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
`;
