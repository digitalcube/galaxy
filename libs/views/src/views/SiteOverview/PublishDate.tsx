import React, { FC } from 'react';
import { Heading, publishedDate, Section } from '@galaxy/core';

export const PublishDate: FC<PublishDate> = ({ date, label }: PublishDate) => {
  return (
    <Section className="space-y-2">
      {label ? <Heading className="font-strong" text={label} /> : null}
      <Heading text={publishedDate({ date })} />
    </Section>
  );
};

export type PublishDate = {
  date: string;
  label?: string;
};

PublishDate.defaultProps = {
  label: `Last published`,
};
