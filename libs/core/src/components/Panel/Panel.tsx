import React, { FC, ReactNode } from 'react';
import { Section } from '@galaxy/core';

export const Panel: FC<Panel> = ({ children, className }) => {
  return (
    <Section className={`${className} py-6 px-8 border-shifter-gray-200`}>
      {children}
    </Section>
  );
};

export type Panel = {
  children?: ReactNode;
  className?: string;
};
