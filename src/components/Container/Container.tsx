import React from 'react';
import styled from 'styled-components';
import { components } from '../../styles';

type Container = {
  children?: string;
  size?: string;
};

function containerMaxWidth(size = ``) {
  return components.container.maxWidth[size];
}

const StyledContainer = styled.div`
  max-width: ${props => props.size};
  margin: 0 auto;
  position: relative;
`;

export const Container: React.FC<Container> = ({ children = null, size }) => {
  if (!children) return null;
  return (
    <StyledContainer size={containerMaxWidth(size)}>{children}</StyledContainer>
  );
};
