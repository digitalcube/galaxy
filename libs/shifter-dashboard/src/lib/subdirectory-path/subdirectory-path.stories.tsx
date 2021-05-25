import React from 'react';
import { SubdirectoryPath, SubdirectoryPathProps } from './subdirectory-path';

export default {
  component: SubdirectoryPath,
  title: 'SubdirectoryPath',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SubdirectoryPathProps = {};

  return <SubdirectoryPath />;
};
