import React, { FC } from 'react';
import { Card, Section, Heading } from '@galaxy/core';

export const CardHeader: FC<Card> = ({ title, description }: Card) => {
  if (!title) return null;
  return (
    <Section className="space-y-4">
      <CardTitle title={title} />
      <CardDescription description={description} />
    </Section>
  );
};

export const CardDescription: FC<Card> = ({ description }: Card) => {
  if (!description) return null;
  return <Heading fontSize="3">{description}</Heading>;
};

export const CardTitle: FC<Card> = ({ title }: Card) => {
  if (!title) return null;
  return (
    <Heading fontSize="6" fontWeight="strong">
      {title}
    </Heading>
  );
};
