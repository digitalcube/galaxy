import React, { FC } from 'react';
import { Button } from '@galaxy/core';

export type MenuItem = {
  title: string;
  href?: string;
}
export type Menu = {
  items?: MenuItem[];
  alignment?: 'vertical' | 'horizontal';
};

export const Items = ({ items }: Menu) => {
  if (!items) return null;
  return (
    <>
      {items.map((item, i) => {
        const { title, href } = item;
        return (
          <Button key={i} variant="ghost" href={href}>
            {title}
          </Button>
        );
      })}
  </>
  );
};

export const Menu: FC<Menu> = ({ items, alignment }: Menu) => {
  return (
    <nav
      className={`flex ${
        alignment === 'vertical'
          ? 'flex-col items-start'
          : 'flex-row items-center'
      }`}
    >
      <Items items={items} />
    </nav>
  );
};

Menu.defaultProps = {
  alignment: 'horizontal',
};
