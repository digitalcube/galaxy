import React, { FC } from 'react';
import { Heading } from '@galaxy/core';

export const LastPublishDate: FC<LastPublishDate> = ({ date }: LastPublishDate) => {
  return <Heading>Last published {date}</Heading>;
};

export type LastPublishDate = {
  variant?: 'light' | 'dark' | string;
  date: string;
};
