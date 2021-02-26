import React, { FC } from 'react';
import { Section, Menu, Input, Avatar } from '@galaxy/core';

export const Header: FC<Header> = ({ items, avatar }) => {
  return (
    <Section as="header" className="py-6 flex flex-row items-center space-x-6 px-8">
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
        <Menu items={items} />
        <Avatar size={9} {...avatar} />
      </div>
    </Section>
  );
};

export type Header = {
  items?: any;
  avatar?: Avatar;
};
