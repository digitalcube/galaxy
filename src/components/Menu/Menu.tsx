import React from 'react';
import styled from 'styled-components';
import { NavItem } from '../index';
import { components } from '../../styles';

export type Menu = {
  navItems?: NavItem[];
  orientation?: `horizontal` | `vertical`;
};

const StyledMenu = styled.ul<Menu>`
  list-style-type: none;
  margin: 0;
  padding: 0;
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

export const defaultProps = {
  navItems: [
    {
      label: `Features`,
      href: `https://google.com/`,
    },
    {
      label: `Blog`,
      href: `/blog`,
    },
    {
      label: `Solutions`,
      href: `/solutions`,
    },
    {
      label: `Pricing`,
    },
    {
      label: `Showcase`,
    },
  ],
};

export const Menu: React.FC<Menu> = ({
  orientation,
  navItems = defaultProps.navItems,
}: Menu) => {
  const items = navItems.map(item => {
    const { label, href } = item;
    return <NavItem label={label} href={href} />;
  });

  return <StyledMenu orientation={orientation}>{items}</StyledMenu>;
};
