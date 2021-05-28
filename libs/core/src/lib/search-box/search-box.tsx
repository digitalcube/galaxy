import React from 'react';
import { SearchBox as AlgoliaSearchBox } from 'react-instantsearch-dom';

/* eslint-disable-next-line */
export interface SearchBoxProps {
  variant?: string;
}
export function SearchBox(props: SearchBoxProps) {
  return <AlgoliaSearchBox />;
}

export default SearchBox;

SearchBox.defaultProps = {};
