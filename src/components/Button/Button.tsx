import React, { FC, HTMLAttributes, ReactChild } from 'react';
import styled from 'styled-components';
import { components, colors } from '../../styles';

export interface Button extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  href?: string;
  active?: string;
}

export const Button = styled.a<Button>`
  background-color: ${colors.shifter.purple.primary};
  border-width: ${components.button.borderWidth};
  border-style: solid;
  color: ${colors.galaxy.white};
  border-color: ${colors.shifter.purple.primary};
  border-radius: ${components.borderRadius};
  padding: ${components.button.padding};
  min-height: ${components.button.minHeight};
  min-width: ${components.button.minWidth};
  font-size: ${components.button.fontSize};
  display: inline-flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background-color: ${colors.shifter.purple.p500};
    color: ${colors.galaxy.white};
    transition: ${components.transition.fast};
  }
`;
