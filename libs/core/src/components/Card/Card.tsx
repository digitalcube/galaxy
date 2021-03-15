import React, { ReactNode, FC } from 'react';
import { Section, CardHeader, CardFooter, CardMain, css } from '@galaxy/core';
import { cardTheme } from './Card.galaxy';
const { card } = cardTheme;

export const Card: FC<Card> = ({
  children,
  className,
  description,
  footer,
  main,
  mainClassName,
  title,
  variant,
  variants,
}: Card) => {
  const cardCss = css({
    variant: `${variant}`,
    variants: variants,
  });

  return (
    <Section className={`${cardCss} ${className}`}>
      {title ? <CardHeader title={title} description={description} /> : null}
      {main ? <CardMain className={`${mainClassName}`} main={main} /> : null}
      {children}
      <CardFooter footer={footer} />
    </Section>
  );
};

export type Card = {
  children?: ReactNode;
  className?: string;
  footer?: ReactNode;
  main?: ReactNode;
  mainClassName?: string;
  title?: string;
  description?: string;
  variant?: string;
  variants?: typeof card;
};

Card.defaultProps = {
  variants: card,
};
