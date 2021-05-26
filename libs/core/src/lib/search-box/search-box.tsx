import React from 'react';
import { Input } from '@galaxy/core';

/* eslint-disable-next-line */
export interface SearchBoxProps {
  variant?: string;
  datalist?: any;
}

export function SearchBox(props: SearchBoxProps) {
  const { datalist } = props;
  return (
    <>
      <label className="sr-only" htmlFor="search">Search</label>
      <Input
        list="search"
        placeholder="Search..."
        autocomplete="off"
      />
      {datalist}
    </>
  );
}

export default SearchBox;

SearchBox.defaultProps = {
  datalist: (
    <datalist id="search">
      <option>Foo</option>
      <option>Bar</option>
      <option>Baz</option>
    </datalist>
  ),
};
