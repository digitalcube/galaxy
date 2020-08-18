import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { components } from '../../styles';

type Container = {
  children?: string;
  size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};

export const containerMaxWidth = ({ size }: Container) => {
  return components.container.maxWidth[size];
};

export const Container = styled.div<Container>`
  margin: 0 auto;
  position: relative;
`;
