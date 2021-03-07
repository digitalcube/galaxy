import React, { FC } from 'react';
import { Button } from '@galaxy/core';

export type Menu = {
  items: any;
  alignment?: 'vertical' | 'horizontal';
};

export const Items = ({ items }: Menu) => {
  if (!items) return null;
  return items.map((item, i) => {
    const { title } = item;
    return (
      <Button key={i} variant="ghost">
        {title}
      </Button>
    );
  });
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
