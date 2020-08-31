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
  margin-top: ${props => {
    const { size } = props;
    return spacerSize({ size: size });
  }};
  margin-bottom: ${props => {
    const { size } = props;
    return spacerSize({ size: size });
  }};
`;
