import React, { FC } from 'react';
import { Section, Navbar, Input, Avatar } from '@galaxy/core';

export const Header: FC<Header> = ({ items, avatar }) => {
  return (
    <Section as="header" className="py-6 flex flex-row items-center space-x-6">
      <a className="align-center" href="/">
        <img
          className="h-8 w-auto"
          src="https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/shifter-logomark-e1606786281592.png"
          alt=""
        />
      </a>
      <div className="flex-grow">
        <Input variant="ghost" />
      </div>
      <div className="hidden md:flex flex-row items-center space-x-6">
        <Navbar items={items} />
        <Avatar img={`${avatar?.img}`} name={`${avatar?.name}`} />
      </div>
    </Section>
  );
};

export type Header = {
  items?: any;
  avatar?: Avatar;
};
