import React, { FC } from 'react';
import { Card, Section } from '@galaxy/core';

export const CardMain: FC<Card> = ({ main }: Card) => {
  if (!main) return null;
  return <Section className="space-y-6 px-3 pb-4">{main}</Section>;
};
