import styled from 'styled-components';
import { components } from '../../styles';

type Container = {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | `fluid` | undefined;
};

export const containerMaxWidth = ({ size = 'xl' }: Container) => {
  return components.container.maxWidth[size];
};

export const Container = styled.div<Container>`
  max-width: ${containerMaxWidth};
  margin: 0 auto;
  position: relative;
`;
