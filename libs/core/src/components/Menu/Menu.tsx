import React, { FC, Fragment } from 'react';
import { Button } from '@galaxy/core';

export type MenuItem = {
  title: string;
  href?: string;
  items?: MenuItems;
};
export type MenuItems = MenuItem[]
export type MenuProps = {
  items?: MenuItems;
  alignment?: 'vertical' | 'horizontal';
  level?: number;
};
export type MenuItemsProp = MenuProps

export const Items: FC<MenuItemsProp> = ({ items,alignment, level = 0 }) => {
  if (!items) return null;
  return (
    <>
      {items.map((item, i) => {
        const { title, href, items } = item;
        if (items) {
          return (
            <Fragment key={i}>
              <Button key={i} variant="ghost" label={title} href={href} />
              <Menu items={items} alignment={alignment} level={level + 3} />
            </Fragment>
          )
        }
        return <Button key={i} variant="ghost" href={href} label={title} className={`ml-${level}`}/>;
      })}
    </>
  );
};

export const Menu: FC<MenuProps> = (props) => {
  return (
    <nav
      className={`flex ${
        props.alignment === 'vertical'
          ? 'flex-col items-start'
          : 'flex-row items-center'
      }`}
    >
      <Items {...props} />
    </nav>
  );
};

Menu.defaultProps = {
  alignment: 'horizontal',
};
