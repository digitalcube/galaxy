import React, { FC } from 'react';
import { Card, Section } from '@galaxy/core';

export const CardMain: FC<Card> = ({ main, className }: Card) => {
  if (!main) return null;
  return (
    <Section className={`px-3 pb-4 ${className}`}>{main}</Section>
  );
};
