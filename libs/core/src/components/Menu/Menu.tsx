import React, { FC } from 'react';
import { Button } from '@galaxy/core';

export type Menu = {
  items: any;
  alignment?: 'vertical' | 'horizontal';
};

export const Items = ({ items }: Menu) => {
  if (!items) return null;
  return items.map((item) => {
    return <Button variant="ghost">{item.title}</Button>;
  });
};

export const Menu: FC<Menu> = ({ items, alignment }: Menu) => {
  return (
    <nav className={`flex ${alignment === 'vertical' ? 'flex-col' : 'flex-row'}`}>
      <Items items={items} />
    </nav>
  );
};

Menu.defaultProps = {
  alignment: 'horizontal',
};
