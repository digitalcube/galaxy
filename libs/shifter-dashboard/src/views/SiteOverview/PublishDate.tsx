import React, { FC } from 'react';
import { Heading, publishedDate, Section } from '@galaxy/core';

export const PublishDate: FC<PublishDate> = ({ date, label }: PublishDate) => {
  return (
    <Section>
      <Heading
        fontSize={3}
        text={label + ' ' + publishedDate({ date })}
      />
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
