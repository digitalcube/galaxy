import React, { FC } from 'react';
import { Card, Section } from '@galaxy/core';

export const CardFooter: FC<Card> = ({ footer, className }: Card) => {
  if (!footer) return null;
  return (
    <Section
      className={`${className} border-t border-shifter-gray-200 p-4`}
    >
      {footer ? footer : null}
    </Section>
  );
};
