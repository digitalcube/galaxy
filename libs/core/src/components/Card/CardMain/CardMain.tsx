import React, { FC, ReactNode } from 'react';
import { Card, Section, css } from '@galaxy/core';
import { cardMainTheme } from './CardMain.galaxy';
const { cardMain } = cardMainTheme;

export const CardMain: FC<Card> = ({ main, className, variants }: Card) => {
  if (!main) return null;
  const cardMainCss = css({ variants: variants });
  return <Section className={`${cardMainCss} ${className}`}>{main}</Section>;
};

export type CardMain = {
  main?: ReactNode;
  className?: string;
  variants?: typeof cardMain;
};

CardMain.defaultProps = {
  variants: cardMain,
};
