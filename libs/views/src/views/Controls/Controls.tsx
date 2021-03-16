import React, { FC } from 'react';
import { Section } from '@galaxy/core';

export const Controls: FC<Controls> = ({ children }) => {
  if (!children) return null;

  return (
    <Section className="space-y-10">
      <Section className="space-y-4">{children}</Section>
    </Section>
  );
};

export type Controls = {
  children?: any;
};
