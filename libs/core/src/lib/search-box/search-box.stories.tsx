import React from 'react';
import { SearchBox, SearchBoxProps } from './search-box';

export default {
  component: SearchBox,
  title: 'SearchBox',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SearchBoxProps = {};

  return <SearchBox />;
};
