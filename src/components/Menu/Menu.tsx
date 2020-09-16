import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { components } from '../../styles';

export type Menu = {
  nodes?: ReactNode;
  orientation?: `horizontal` | `vertical`;
  align?: `left` | `center` | `right`;
};

const margin = ({ align }: Menu) => {
  if (align === `center`) return `0 auto`;
  if (align === `left`) return `0 auto 0 0`;
  if (align === `right`) return `0 0 auto 0`;
  return `0`;
};

const StyledMenu = styled.ul<Menu>`
  list-style-type: none;
  padding: 0;
  margin: ${props => {
    const { align } = props;
    return margin({ align: align });
  }};
  display: ${props => (props.orientation === `vertical` ? `` : `flex`)};
  flex-direction: ${props => (props.orientation === `vertical` ? `` : `row`)};

  > li {
    padding: ${props =>
      props.orientation === `vertical` ? `` : components.nav.link.padding};

    &:first-of-type {
      padding-left: 0;
    }

    &:last-of-type {
      padding-right: 0;
    }
  }
`;

export const Menu: FC<Menu> = ({ orientation, nodes, align }: Menu) => {
  return (
    <StyledMenu align={align} orientation={orientation}>
      {nodes}
    </StyledMenu>
  );
};
