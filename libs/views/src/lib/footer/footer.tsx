import React, { ReactNode } from 'react';
import { Section, Heading } from '@galaxy/core';

/* eslint-disable-next-line */
export interface FooterProps {
  main?: ReactNode;
  mainClassName?: string;
  className?: string;
  copyright?: string;
}

export function Footer(props: FooterProps) {
  const { main, mainClassName, className, copyright } = props;
  return (
    <Section
      as="footer"
      className={`flex flex-row space-x-6 px-8 ${className}`}
    >
      {main ? (
        <div className={`grid grid-cols-6 gap-x-4 ${mainClassName}`}>
          {main}
        </div>
      ) : null}
      <Heading text={copyright} fontSize={3} className="text-galaxy-gray-400" />
    </Section>
  );
}

export default Footer;

Footer.defaultProps = {
  logo: '/dc-logomark.svg',
  mainClassName: '',
  className: '',
  copyright: '©2020 Shifter | A Product by DigitalCube',
};
