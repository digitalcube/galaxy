import React, { ReactNode, FC } from 'react';
import { Section, CardHeader, CardFooter, css } from '@galaxy/core';
import { card } from './galaxy.config';

export const Card: FC<Card> = ({
  children,
  variant,
  className,
  title,
  footer,
  description,
  variants,
}: Card) => {
  return (
    <Section
      className={`pt-6 ${css({
        variant: `${variant}`,
        variants: variants,
      })} ${className}`}
    >
      {title ? <CardHeader title={title} description={description} /> : null}
      {children ? (
        <Section className="space-y-6 px-3 pb-4">{children}</Section>
      ) : null}
      <CardFooter footer={footer} />
    </Section>
  );
};

export type Card = {
  children?: ReactNode;
  className?: string;
  footer?: ReactNode;
  title?: string;
  description?: string;
  variant?: typeof card.variants;
  variants?: typeof card;
};
