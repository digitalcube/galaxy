import React, { FC, ReactNode } from 'react';
import {
  Section,
  Image,
  MenuItem,
  AvatarProps,
  Link,
} from '@galaxy/core';

export const Header: FC<Header> = ({ main, aside }) => {
  
  return (
    <Section
      as="header"
      className="py-6 flex flex-row items-center space-x-6 px-8 relative z-10"
    >
      <Link className="align-center" href="/">
        <Image
          className="h-8 w-auto"
          img="https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/shifter-logomark-e1606786281592.png"
        />
      </Link>
      <div className="flex-grow">{main}</div>
      <div className="hidden md:flex flex-row items-center space-x-6">
        {aside}
      </div>
    </Section>
  );
};

export type Header = {
  items?: MenuItem[];
  avatar?: AvatarProps;
  main?: ReactNode;
  aside?: ReactNode;
};