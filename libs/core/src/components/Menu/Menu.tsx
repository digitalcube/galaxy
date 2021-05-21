import React, { FC, Fragment } from 'react';
import { Button } from '@galaxy/core';
import { Disclosure } from '@headlessui/react';

export type MenuItem = {
  label?: any;
  href?: string;
  items?: MenuItems;
  variant?: string;
};

export type MenuItems = MenuItem[];

export type MenuProps = {
  items?: MenuItems;
  alignment?: 'vertical' | 'horizontal';
  level?: number;
  className?: string;
};

export type MenuItemsProp = MenuProps;

export const Items: FC<MenuItemsProp> = ({ items, alignment, level = 0 }) => {
  if (!items) return null;
  return (
    <>
      {items.map((item, i) => {
        const { label, href, items, variant } = item;
        if (items) {
          return (
            <Fragment key={i}>
              <Disclosure>
                <Disclosure.Button>
                  <Button key={i} variant={variant} label={label} href={href} />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <Menu
                    className="ml-10"
                    items={items}
                    alignment={alignment}
                    level={level + 3}
                  />
                </Disclosure.Panel>
              </Disclosure>
            </Fragment>
          );
        }
        return (
          <Button
            key={i}
            variant={variant}
            href={href}
            label={label}
            className={`ml-${level}`}
          />
        );
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
      } ${props.className}`}
    >
      <Items {...props} />
    </nav>
  );
};

Menu.defaultProps = {
  alignment: 'horizontal',
};
