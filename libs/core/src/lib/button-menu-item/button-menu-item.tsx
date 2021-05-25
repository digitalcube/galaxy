import React, { ReactNode, FC } from 'react';
import { Menu as HeadlessUiMenu, Transition } from '@headlessui/react';
import { Menu, MenuProps } from '@galaxy/core';
import Link from '../../lib/link/link';
import { fakerAvatar } from '@galaxy/faker';

/* eslint-disable-next-line */
export interface ButtonMenuItemProps {
  label?: string | ReactNode;
  active?: boolean;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

export function ButtonMenuItem(props: ButtonMenuItemProps) {
  const { label, active, href, onClick } = props;
  if (!href) {
    return (
      <HeadlessUiMenu.Item>
        <span
          onClick={onClick}
          className={`${
            active
              ? 'bg-white text-shifter-purple-700'
              : 'text-shifter-gray-700'
          } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer`}
        >
          {label}
        </span>
      </HeadlessUiMenu.Item>
    );
  }
  return (
    <HeadlessUiMenu.Item>
      <Link
        href={href}
        className={`${
          active ? 'bg-white text-shifter-purple-700' : 'text-shifter-gray-700'
        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
      >
        {label}
      </Link>
    </HeadlessUiMenu.Item>
  );
}

export default ButtonMenuItem;
