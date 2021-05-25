import React, { ReactNode, FC } from 'react';
import { Menu as HeadlessUiMenu, Transition } from '@headlessui/react';
import { Menu, MenuProps, ButtonMenuItemProps, ButtonMenuItem } from '@galaxy/core';
import Link from '../../lib/link/link';
import { fakerAvatar } from '@galaxy/faker';

/* eslint-disable-next-line */
export interface ButtonMenuItemsProps {
  items?: ButtonMenuItemProps[];
  className?: string;
  open: boolean;
}

export function ButtonMenuItems(props: ButtonMenuItemsProps) {
  const {
    items,
    className,
    open,
  } = props;
  if (!items) return null;
  const allButtonMenuItems = items.map((item, i) => {
    return <ButtonMenuItem key={i} {...item} />;
  });

  return (
    <Transition
      show={open}
      className="absolute right-0 z-10"
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <HeadlessUiMenu.Items
        className={`rounded w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg outline-none overflow-hidden border-2 border-shifter-gray-200 ${className}`}
      >
        {allButtonMenuItems}
      </HeadlessUiMenu.Items>
    </Transition>
  );
}

export default ButtonMenuItems;
