import React, { FC, ReactNode } from 'react';
import {
  Section,
  MenuItem,
  AvatarProps,
Post,
} from '@galaxy/core';

export type Header = {
  // "@type": 'Brand'
  items?: MenuItem[];
  avatar?: AvatarProps;
  main?: ReactNode;
  aside?: ReactNode;
  mainClassName?: string;
  className?: string;
  brandClassName?: string;
  logo?: string;
};

export const Header: FC<Header> = ({
  main,
  aside,
  logo,
  mainClassName,
  className,
  brandClassName,
}) => {
  return (
    <Section
      as="header"
      className={`flex flex-row items-center space-x-6 relative z-10 ${className}`}
    >
      <Post schema="Brand" image={`${logo}`} className={`${brandClassName}`} />
      <div className={`flex flex-grow ${mainClassName}`}>{main}</div>
      <div className="hidden md:flex flex-row items-center space-x-6">
        {aside}
      </div>
    </Section>
  );
};

Header.defaultProps = {
  logo: '/dc-logomark.svg',
  mainClassName: '',
  className: '',
};
