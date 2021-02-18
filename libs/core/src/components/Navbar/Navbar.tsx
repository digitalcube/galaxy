import React, { ReactNode, FC } from 'react';
import { Button, Input, Avatar } from '@galaxy/core';

export type Navbar = {
  items: any;
};

export const Items = ({ items }: Navbar) => {
  if (!items) return null;
  return items.map((item) => {
    return <Button variant="ghost">{item.title}</Button>;
  });
};

export const Navbar: FC<Navbar> = ({ items }: Navbar) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <button
        className="inline-block md:hidden text-shifter-purple-primary inline-flex items-center justify-center p-2 rounded-md hover:text-shifter-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-expanded="false"
        type="button"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          className="hidden h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <nav
        className={
          'flex-col lg:flex-row flex-grow' +
          (navbarOpen ? 'md:flex' : 'hidden')
        }
      >
        <Items items={items} />
      </nav>
    </>
  );
};
