import React, { ReactNode } from 'react';
import { Section, MenuItem, AvatarProps, Post } from '@galaxy/core';
import { Search } from '@galaxy/views';

/* eslint-disable-next-line */
export interface HeaderProps {
  items?: MenuItem[];
  avatar?: AvatarProps;
  main?: ReactNode;
  aside?: ReactNode;
  mainClassName?: string;
  className?: string;
  brandClassName?: string;
  logo?: string;
  name?: string;
  schema?: string;
}

export function Header(props: HeaderProps) {
  const {
    aside,
    logo,
    mainClassName,
    className,
    brandClassName,
    name,
    schema,
  } = props;
  let { main } = props;
  if (schema === 'Shifter/Dashboard') main = <Search variant="ghost" />;
  return (
    <Section
      as="header"
      className={`flex flex-row items-center space-x-6 relative z-10 ${className}`}
    >
      <Post
        schema="Brand"
        name={`${name}`}
        image={`${logo}`}
        className={`${brandClassName}`}
      />
      <div className={`flex flex-grow ${mainClassName}`}>{main}</div>
      <div className="hidden md:flex flex-row items-center space-x-6">
        {aside}
      </div>
    </Section>
  );
}

export default Header;

Header.defaultProps = {
  logo: '/dc-logomark.svg',
  mainClassName: '',
  className: '',
  name: '',
};
