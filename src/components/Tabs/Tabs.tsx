import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Tab, Menu } from '../index';

const defaultProps = {
  navItems: [
    {
      label: `Designers`,
    },
    {
      label: `Education`,
    },
    {
      label: `Enterprise`,
    },
    {
      label: `Marketing`,
    },
    {
      label: `Nonprofit`,
    },
    {
      label: `Technology`,
    },
  ],
};

export type Tabs = {
  children?: ReactNode;
  navItems?: Tab[];
  orientation?: `vertical` | `horizontal`;
  align?: `left` | `center` | `right`;
};

const StyledTabs = styled.nav<Tab>`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Tabs: FC<Tabs> = ({
  children,
  navItems = defaultProps.navItems,
  orientation,
  align,
}: Tabs) => {
  const items = navItems.map(item => {
    const { label, href } = item;
    return <Tab label={label} href={href} />;
  });

  return (
    <StyledTabs role="navigation">
      {children}
      <Menu align={align} orientation={orientation} nodes={items} />
    </StyledTabs>
  );
};
