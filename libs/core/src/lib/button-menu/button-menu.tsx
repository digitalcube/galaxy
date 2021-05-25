import React, { ReactNode, FC } from 'react';
import { Menu as HeadlessUiMenu, Transition } from '@headlessui/react';
import { Menu, MenuProps, ButtonMenuItems } from '@galaxy/core';
import Link from '../../lib/link/link';
import { fakerAvatar } from '@galaxy/faker';

/* eslint-disable-next-line */
export interface ButtonMenuProps {
  children?: ReactNode;
  menu?: MenuProps['items'];
  className?: string;
  variant?: string;
}

export function ButtonMenu(props: ButtonMenuProps) {
  const {
    children,
    className,
    menu,
    variant,
  } = props;
  if (variant === 'list') {
    return <Menu className="space-x-6" items={menu} />;
  }

  return (
    <div className="relative inline-block">
      <HeadlessUiMenu>
        {({ open }) => (
          <>
            <HeadlessUiMenu.Button className={`${className}`}>
              {children}
            </HeadlessUiMenu.Button>
            <ButtonMenuItems items={menu} open={open} />
          </>
        )}
      </HeadlessUiMenu>
    </div>
  );
}

export default ButtonMenu;

ButtonMenu.defaultProps = {
  children: 'Options',
  menu: fakerAvatar.avatar.menu,
};
