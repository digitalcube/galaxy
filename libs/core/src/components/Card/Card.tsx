import React, { ReactNode, FC } from 'react';
import classNames from 'classnames';
import { Section, Heading } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export type Card = {
  children?: ReactNode;
  variant?: 'light' | 'dark';
};

const cardClassNames = ({ variant }: Card) => {
  const variants = schema.components.card.variants;
  const DEFAULT = schema.components.card.DEFAULT;

  const classes = {
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
    [`${DEFAULT}`]: true,
  };

  return classNames(classes);
};

const headingClassNames = ({ variant }: Card) => {
  const variants = schema.components.card.components.heading.variants;
  const classes = {
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};

export const Card: FC<Card> = ({ children, variant }: Card) => {
  return (
    <Section className={cardClassNames({ variant })}>
      <Heading className={headingClassNames({ variant })}>Header</Heading>
      {children ? <Section className="py-6">{children}</Section> : null }
    </Section>
  );
};

Card.defaultProps = {
  variant: 'light',
};
