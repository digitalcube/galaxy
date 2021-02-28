import React, { ReactNode, FC } from 'react';
import classNames from 'classnames';
import { Section, CardHeader, CardFooter } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const Card: FC<Card> = ({
  children,
  variant,
  className,
  title,
  footer,
  description,
}: Card) => {
  return (
    <Section
      className={`pt-6 ${cardClassNames({ variant })} ${className}`}
    >
      {title ? <CardHeader title={title} description={description} /> : null}
      {children ? <Section className="space-y-6 px-3 pb-4">{children}</Section> : null}
      <CardFooter footer={footer} />
    </Section>
  );
};

const cardClassNames = ({ variant }: Card) => {
  const variants = schema.components.card.variants;
  const DEFAULT = schema.components.card.DEFAULT;

  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};

export type Card = {
  children?: ReactNode;
  className?: string;
  variant?: 'light' | 'dark';
  footer?: ReactNode;
  title?: string;
  description?: string;
};
