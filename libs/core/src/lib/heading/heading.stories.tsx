import React from 'react';
import { Heading, HeadingProps } from './heading';

export default {
  component: Heading,
  title: 'Galaxy/Components/Heading',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: HeadingProps = {};

  return <Heading {...props} />;
};
