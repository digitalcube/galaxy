import React, { ReactNode, FC } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from '../../lib/link/link';
import { fakerAvatar } from '@galaxy/faker';

export type ButtonMenuItem = {
  label?: string;
  active?: boolean;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
};

export const ButtonMenuItem: FC<ButtonMenuItem> = ({ label, active, href, onClick }) => {
  if (!href) {
    return (
      <Menu.Item>
        <span
          onClick={onClick}
          className={`${
            active ? 'bg-white text-shifter-purple-700' : 'text-shifter-gray-700'
          } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer`}
        >
          {label}
        </span>
      </Menu.Item>
    );
  }
  return (
    <Menu.Item>
      <Link
        href={href}
        className={`${
          active ? 'bg-white text-shifter-purple-700' : 'text-shifter-gray-700'
        } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
      >
        {label}
      </Link>
    </Menu.Item>
  );
};

export type ButtonMenuItems = {
  items?: ButtonMenuItem[];
  className?: string;
  open: boolean;
};

export const ButtonMenuItems: FC<ButtonMenuItems> = ({
  items,
  className,
  open,
}) => {
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
      <Menu.Items className={`rounded w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg outline-none overflow-hidden border-2 border-shifter-gray-200 ${className}`}>
        {allButtonMenuItems}
      </Menu.Items>
    </Transition>
  );
};

export const ButtonMenu: FC<ButtonMenu> = ({
  children,
  className,
  menu,
}: ButtonMenu) => {
  return (
    <div className="relative text-left">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className={`${className}`}>{children}</Menu.Button>
            <ButtonMenuItems items={menu} open={open} />
          </>
        )}
      </Menu>
    </div>
  );
};

export type ButtonMenu = {
  children?: ReactNode;
  menu?: ButtonMenuItem[];
  className?: string;
};

ButtonMenu.defaultProps = {
  children: 'Options',
  menu: fakerAvatar.avatar.menu,
};
