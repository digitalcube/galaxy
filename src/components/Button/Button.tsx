import React, { FC, HTMLAttributes, ReactChild } from 'react';
import styled from 'styled-components';
import { components, colors } from '../../styles';

export interface Button extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  href?: string;
}

const StyledButton = styled.a`
  background-color: transparent;
  border-width: ${components.button.borderWidth};
  border-style: solid;
  border-color: ${colors.shifter.purple.primary};
  border-radius: ${components.borderRadius};
  padding: ${components.button.padding};
  color: ${colors.shifter.purple.primary};
  min-height: ${components.button.minHeight};
  min-width: ${components.button.minWidth};
  font-size: ${components.button.fontSize};
  display: inline-flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background-color: ${colors.shifter.purple.primary};
    color: ${colors.galaxy.white};
  }
`;

export const Button: FC<Button> = ({ children = null, href }) => {
  if (!children) return null;
  if (href) return <StyledButton href={href}>{children}</StyledButton>;
  return <button>{children}</button>;
};
