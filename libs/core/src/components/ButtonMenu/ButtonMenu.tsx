import React, { ReactNode, FC } from 'react';
import { buttonMenu } from './galaxy.config';
import { Menu, Transition } from '@headlessui/react';
import Link from '../../lib/link/link';

export type ButtonMenuItem = {
  label?: string;
  active?: boolean;
  to?: string;
};
export const ButtonMenuItem: FC<ButtonMenuItem> = ({ label, active }) => {
  return (
    <Menu.Item>
      <Link
        href="#account-settings"
        className={`${
          active ? 'bg-white text-shifter-gray-800' : 'text-shifter-gray-400'
        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
      >
        {label}
      </Link>
    </Menu.Item>
  );
};

export const ButtonMenu: FC<ButtonMenu> = ({
  variant,
  children,
  className,
  items,
  variants,
}: ButtonMenu) => {
  return (
    <div className="relative text-left">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className={`${className}`}>{children}</Menu.Button>
            <Transition
              show={open}
              className="absolute right-0"
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                
                className="rounded w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg outline-none overflow-hidden border-2 border-shifter-gray-300"
              >
                <ButtonMenuItem label={`Account settings`} active={true} />
                <ButtonMenuItem label={`New feature (soon)`} active={false} />
                <ButtonMenuItem label={`Support`} active={true} />
                <ButtonMenuItem label={`Feedback`} active={true} />
                <ButtonMenuItem label={`Sign Out`} active={true} />
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export type ButtonMenu = {
  label?: string;
  children?: ReactNode;
  items?: any; // TODO: Update type to use @galaxy/core Menu[]
  className?: string;
  variants?: typeof buttonMenu;
  variant?: typeof buttonMenu.variants;
  active?: boolean;
};

ButtonMenu.defaultProps = {
  children: (
    <>
      <span>Options</span>
      <svg
        className="w-5 h-5 ml-2 -mr-1"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </>
  ),
};