import React from 'react';
import { Subdirectory, SubdirectoryProps } from './subdirectory';

export default {
  component: Subdirectory,
  title: 'Subdirectory',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SubdirectoryProps = {};

  return <Subdirectory />;
};
