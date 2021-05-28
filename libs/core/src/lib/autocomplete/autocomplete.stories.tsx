import React from 'react';
import { Autocomplete, AutocompleteProps } from './autocomplete';

export default {
  component: Autocomplete,
  title: 'Autocomplete',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: AutocompleteProps = {};

  return <Autocomplete />;
};
