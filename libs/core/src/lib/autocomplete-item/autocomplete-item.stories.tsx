import React from 'react';
import { AutocompleteItem, AutocompleteItemProps } from './autocomplete-item';

export default {
  component: AutocompleteItem,
  title: 'AutocompleteItem',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: AutocompleteItemProps = {};

  return <AutocompleteItem />;
};
