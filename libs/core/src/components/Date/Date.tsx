import React from 'react';
import { publishedDate } from '../../lib/utils';

type Date = {
  date: string;
};

export const Date: React.FC<Date> = ({ date }: Date) => {
  if (!date) return null;
  return <time>{publishedDate({ date: date })}</time>;
};
