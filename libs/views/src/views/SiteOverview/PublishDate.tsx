import React, { FC } from 'react';
import { Heading, publishedDate } from '@galaxy/core';

export const PublishDate: FC<PublishDate> = ({ date, label }: PublishDate) => {
  return (
    <Heading>
      {label} {publishedDate({ date })}
    </Heading>
  );
};

export type PublishDate = {
  date: string;
  label: string;
};

PublishDate.defaultProps = {
  label: `Last published`
}
