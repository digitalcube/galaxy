import React from 'react';
import styled from 'styled-components';
import { colors, components } from '../../styles';

type Button = {
  content: {
    label: string;
    href: string;
    color: string;
  };
};

const StyledButton = styled.a`
  font-family: ${components.button.fontFamily};
  display: inline-flex;
  font-size: ${components.button.fontSize}
  font-weight: ${components.button.fontWeight};
  background-color: ${colors.shifter.purple.primary};
  border-width: ${components.borderWidth};
  border-style: solid;
  border-color: ${colors.shifter.purple.primary};
  color: ${colors.white};
  border-radius: ${components.borderRadius};
  padding: ${components.button.padding};
  text-decoration: none;
  align-items: center;
  text-align: center;
  line-height: ${components.button.lineHeight};
  white-space: null;
  vertical-align: middle;
  user-select: none;

  &:hover {
    color: ${colors.white};
    text-decoration: none;
  }
`;

export const Button: React.FC<Button> = ({
  content: { label, href, color },
}: Button) => (
  <StyledButton color={color} href={href}>
    {label}
  </StyledButton>
);
