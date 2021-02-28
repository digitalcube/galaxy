import React, { FC } from 'react';
import { Card, Section } from '@galaxy/core';

export const CardFooter: FC<Card> = ({ footer }: Card) => {
  if (!footer) return null;
  return (
    <Section className="border-t border-shifter-gray-200 px-3 py-4">
      {footer ? footer : null}
    </Section>
  );
};
