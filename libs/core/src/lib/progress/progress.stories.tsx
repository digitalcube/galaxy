import React from 'react';
import { Progress, ProgressProps } from './progress';
import { fakerProgress } from '@galaxy/faker';

export default {
  component: Progress,
  title: 'Galaxy/Components/Progress',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ProgressProps = {};

  return <Progress progress={fakerProgress()} />;
};
