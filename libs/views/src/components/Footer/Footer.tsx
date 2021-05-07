import React, { FC, ReactNode } from 'react';
import { Section, Heading } from '@galaxy/core';
import { Brand } from 'schema-dts';

export type Footer = {
  main?: ReactNode;
  mainClassName?: string;
  className?: string;
} & Brand;

export const Footer: FC<Footer> = ({
  main,
  mainClassName,
  className,
}) => {
  return (
    <Section
      as="footer"
      className={`flex flex-row space-x-6 bg-black ${className}`}
    >
      <div className="container mx-auto">
        <div className={`grid grid-cols-6 gap-x-4 ${mainClassName}`}>{main}</div>
        <Heading text="©2020 DigitalCube" fontSize={3} className="text-galaxy-gray-400" />
      </div>
    </Section>
  );
};

Footer.defaultProps = {
  logo: '/dc-logomark.svg',
  mainClassName: '',
  className: '',
};
